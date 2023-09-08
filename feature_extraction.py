import re
from urllib.parse import urlparse
import pandas as pd
from googlesearch import search

df=pd.read_csv("malicious_phish.csv")

def having_ip_address(url):
    match = re.search(
        '(([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\.([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\.([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\.'
        '([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\/)|'  # IPv4
        '((0x[0-9a-fA-F]{1,2})\\.(0x[0-9a-fA-F]{1,2})\\.(0x[0-9a-fA-F]{1,2})\\.(0x[0-9a-fA-F]{1,2})\\/)'  # IPv4 in 16-bit format
        '(?:[a-fA-F0-9]{1,4}:){7}[a-fA-F0-9]{1,4}', url)  # Ipv6
    if match:
        # print match.group()
        return 1
    else:
        # print 'No matching pattern found'
        return 0


df['use_of_ip'] = df['url'].apply(lambda i: having_ip_address(i))
pass


def abnormal_url(url):
    # Your implementation here
    hostname = urlparse(url).hostname
    hostname = str(hostname)
    match = re.search(hostname, url)
    if match:
        # print match.group()
        return 1
    else:
        # print 'No matching pattern found'
        return 0


df['abnormal_url'] = df['url'].apply(lambda i: abnormal_url(i))
pass


def google_index(url):
    # Your implementation here
    site = search(url, 5)
    return 1 if site else 0


df['google_index'] = df['url'].apply(lambda i: google_index(i))
pass


def count_dot(url):
    # Your implementation here
    count_dot = url.count('.')
    return count_dot


df['count.'] = df['url'].apply(lambda i: count_dot(i))
pass


def count_www(url):
    # Your implementation here
    url.count('www')
    return url.count('www')


df['count-www'] = df['url'].apply(lambda i: count_www(i))
pass


def count_atrate(url):
    # Your implementation here
    return url.count('@')


df['count@'] = df['url'].apply(lambda i: count_atrate(i))
pass


def no_of_dir(url):
    # Your implementation here
    urldir = urlparse(url).path
    return urldir.count('/')


df['count_dir'] = df['url'].apply(lambda i: no_of_dir(i))
pass


def no_of_embed(url):
    # Your implementation here
    urldir = urlparse(url).path
    return urldir.count('//')


df['count_embed_domian'] = df['url'].apply(lambda i: no_of_embed(i))
pass


def shortening_service(url):
    # Your implementation here
    match = re.search('bit\.ly|goo\.gl|shorte\.st|go2l\.ink|x\.co|ow\.ly|t\.co|tinyurl|tr\.im|is\.gd|cli\.gs|'
                      'yfrog\.com|migre\.me|ff\.im|tiny\.cc|url4\.eu|twit\.ac|su\.pr|twurl\.nl|snipurl\.com|'
                      'short\.to|BudURL\.com|ping\.fm|post\.ly|Just\.as|bkite\.com|snipr\.com|fic\.kr|loopt\.us|'
                      'doiop\.com|short\.ie|kl\.am|wp\.me|rubyurl\.com|om\.ly|to\.ly|bit\.do|t\.co|lnkd\.in|'
                      'db\.tt|qr\.ae|adf\.ly|goo\.gl|bitly\.com|cur\.lv|tinyurl\.com|ow\.ly|bit\.ly|ity\.im|'
                      'q\.gs|is\.gd|po\.st|bc\.vc|twitthis\.com|u\.to|j\.mp|buzurl\.com|cutt\.us|u\.bb|yourls\.org|'
                      'x\.co|prettylinkpro\.com|scrnch\.me|filoops\.info|vzturl\.com|qr\.net|1url\.com|tweez\.me|v\.gd|'
                      'tr\.im|link\.zip\.net',
                      url)
    if match:
        return 1
    else:
        return 0


df['short_url'] = df['url'].apply(lambda i: shortening_service(i))
pass


def count_https(url):
    # Your implementation here
    return url.count('https')


df['count-https'] = df['url'].apply(lambda i: count_https(i))
pass


def count_http(url):
    # Your implementation here
    return url.count('http')


df['count-http'] = df['url'].apply(lambda i: count_http(i))
pass


def count_per(url):
    # Your implementation here
    return url.count('%')


df['count%'] = df['url'].apply(lambda i: count_per(i))
pass


def count_ques(url):
    # Your implementation here
    return url.count('?')


df['count?'] = df['url'].apply(lambda i: count_ques(i))
pass


def count_hyphen(url):
    # Your implementation here
    return url.count('-')


df['count-'] = df['url'].apply(lambda i: count_hyphen(i))
pass


def count_equal(url):
    # Your implementation here
    return url.count('=')


df['count='] = df['url'].apply(lambda i: count_equal(i))
pass


def url_length(url):
    # Your implementation here

    return len(str(url))


# Length of URL
df['url_length'] = df['url'].apply(lambda i: url_length(i))
pass


def hostname_length(url):
    # Your implementation here
    return len(urlparse(url).netloc)


df['hostname_length'] = df['url'].apply(lambda i: hostname_length(i))
pass


def suspicious_words(url):
    # Your implementation here
    match = re.search('PayPal|login|signin|bank|account|update|free|lucky|service|bonus|ebayisapi|webscr',
                      url)
    if match:
        return 1
    else:
        return 0


df['sus_url'] = df['url'].apply(lambda i: suspicious_words(i))
pass


def digit_count(url):
    # Your implementation here
    digits = 0
    for i in url:
        if i.isnumeric():
            digits = digits + 1
    return digits


df['count-digits'] = df['url'].apply(lambda i: digit_count(i))
pass


def letter_count(url):
    # Your implementation here
    letters = 0
    for i in url:
        if i.isalpha():
            letters = letters + 1
    return letters


df['count-letters'] = df['url'].apply(lambda i: letter_count(i))
pass
