from flask import Flask, request, jsonify
import numpy as np
import xgboost as xgb
import pandas as pd
from feature_extraction import *

app = Flask(__name__)

model = xgb.XGBClassifier()
model.load_model('xgboost_model.model')


def classify_url(url):
    features = [
        having_ip_address(url),
        abnormal_url(url),
        google_index(url),
        count_dot(url),
        count_www(url),
        count_atrate(url),
        no_of_dir(url),
        no_of_embed(url),
        shortening_service(url),
        count_https(url),
        count_http(url),
        count_per(url),
        count_ques(url),
        count_hyphen(url),
        count_equal(url),
        url_length(url),
        hostname_length(url),
        suspicious_words(url),
        digit_count(url),
        letter_count(url)
    ]

    features = np.array(features).reshape((1, -1))
    prediction = model.predict(features)

    label_mapping = {
        0: "SAFE",
        1: "DEFACEMENT",
        2: "PHISHING",
        3: "MALWARE"
    }

    label = label_mapping.get(int(prediction[0]), "UNKNOWN")
    return label

@app.route('/classify-url', methods=['POST'])
def classify_url_endpoint():
    data = request.get_json()
    url = data['url']
    label = classify_url(url)

    result = {
        "url": url,
        "prediction": label
    }
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)