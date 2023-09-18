from flask import Flask, request, jsonify
import pickle
import string
from nltk.corpus import stopwords
import nltk
from nltk.stem.porter import PorterStemmer
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

ps = PorterStemmer()

tfidf = pickle.load(open('vectorizer.pkl', 'rb'))
model = pickle.load(open('model.pkl', 'rb'))

def transform_text(text):
    text = text.lower()
    text = nltk.word_tokenize(text)

    y = []
    for i in text:
        if i.isalnum():
            y.append(i)

    text = y[:]
    y.clear()

    for i in text:
        if i not in stopwords.words('english') and i not in string.punctuation:
            y.append(i)

    text = y[:]
    y.clear()

    for i in text:
        y.append(ps.stem(i))

    return " ".join(y)

@app.route('/predict', methods=['POST'])
def predict():
    if request.method == 'POST':
        data = request.get_json()

        if 'sms' in data:
            input_sms = data['sms']
            transformed_sms = transform_text(input_sms)
            vector_input = tfidf.transform([transformed_sms])
            result = model.predict(vector_input)[0]
            response = {'prediction': 'Spam' if result == 1 else 'Not Spam'}
            return jsonify(response)
        else:
            return jsonify({'error': 'Please provide an SMS in the request.'}), 400
    else:
        return jsonify({'error': 'Invalid request method.'}), 405

if __name__ == '__main__':
    app.run(debug=True, port=8080)