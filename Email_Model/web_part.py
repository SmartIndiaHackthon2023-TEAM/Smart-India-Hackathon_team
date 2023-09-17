from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle

app = Flask(__name__)
CORS(app)

with open('spam_classification_model.pkl', 'rb') as model_file:
    loaded_model = pickle.load(model_file)

with open('tfidf_vectorizer.pkl', 'rb') as vectorizer_file:
    tfidf_vectorizer = pickle.load(vectorizer_file)

@app.route('/predict', methods=['POST'])
def predict():
    if request.method == 'POST':
        try:
            input_data = request.json
            input_mail = [input_data['message']]
            input_data_features = tfidf_vectorizer.transform(input_mail)
            prediction = loaded_model.predict(input_data_features)
            if prediction[0] == 1:
                result = 'Ham mail'
            else:
                result = 'Spam mail'
            return jsonify({'prediction': result})
        except Exception as e:
            return jsonify({'error': 'Invalid JSON data'}),

if __name__ == '__main__':
    app.run(debug=True)
