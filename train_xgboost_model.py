import xgboost as xgb
import pandas as pd

data = pd.read_csv('malicious_phish.csv')
X = data.drop(columns=['label'])
y = data['label']

model = xgb.XGBClassifier(n_estimators=100)
model.fit(X, y)

model.save_model('xgboost_model.model')

print("Model training and saving complete.")