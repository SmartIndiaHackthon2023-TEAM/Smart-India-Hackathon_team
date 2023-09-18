from flask import Flask, request, jsonify
import numpy as np
from urllib.parse import urlparse
import re
from tld import get_tld
import pickle
from flask_cors import CORS

from model import count_dot, no_of_embed, shortening_service, count_https, count_http, fd_length, tld_length, \
    no_of_dir

app = Flask(__name__)
CORS(app)

with open('xgb_c_pkl', 'rb') as f:
    mod = pickle.load(f)

def count_www(url):
    return url.count('www')

def count_atrate(url):
    return url.count('@')


@app.route('/predict', methods=['POST'])
def classify_url_endpoint():
    data = request.get_json()
    url = data['url']
    label = get_prediction_from_url(url)

    result = {
        "url": url,
        "prediction": label
    }
    return jsonify(result)

def get_prediction_from_url(test_url):
    features_test = main(test_url)
    features_test = np.array(features_test).reshape((1, -1))

    pred = mod.predict(features_test)
    if int(pred[0]) == 0:
        res = "SAFE"
    elif int(pred[0]) == 1.0:
        res = "DEFACEMENT"
    elif int(pred[0]) == 2.0:
        res = "PHISHING"
    elif int(pred[0]) == 3.0:
        res = "MALWARE"
    return res

def main(url):
    status = []

    status.append(having_ip_address(url))
    status.append(abnormal_url(url))
    status.append(count_dot(url))
    status.append(count_www(url))
    status.append(count_atrate(url))
    status.append(no_of_dir(url))
    status.append(no_of_embed(url))

    status.append(shortening_service(url))
    status.append(count_https(url))
    status.append(count_http(url))

    status.append(fd_length(url))
    tld = get_tld(url, fail_silently=True)

    status.append(tld_length(tld))

    return status

def having_ip_address(url):
    match = re.search(
        '(([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\.([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\.([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\.'
        '([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\/)|'  
        '((0x[0-9a-fA-F]{1,2})\\.(0x[0-9a-fA-F]{1,2})\\.(0x[0-9a-fA-F]{1,2})\\.(0x[0-9a-fA-F]{1,2})\\/)'
        '(?:[a-fA-F0-9]{1,4}:){7}[a-fA-F0-9]{1,4}', url)  # Ipv6
    if match:
        return 1
    else:
        return 0

def abnormal_url(url):
    hostname = urlparse(url).hostname
    hostname = str(hostname)
    match = re.search(hostname, url)
    if match:
        return 1
    else:
        return 0

if __name__ == '__main__':
    app.run(debug=True,port=8888)