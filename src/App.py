from flask import Flask, request, jsonify
import xgboost as xgb
import numpy as np
from flask_cors import CORS
import joblib

app = Flask(__name__)

# Load your trained XGBoost model
model = joblib.load('xgboost_model.pkl')

# model = xgb.Booster()
# model.load_model('xgboost_model.pkl')  # Replace 'xgboost_model.model' with your actual model file

cors = CORS(app, resources={
    r"/predict": {"origins": "http://localhost:5173"},
})


@app.route('/predict', methods=['POST', 'GET'])
def predict():
    try:
        # Receive input data from the frontend
        data = request.get_json()
        print(data)

        # Extract input features
        height = float(data['height'])  # Assuming height is in cm
        weight = float(data['weight'])  # Assuming weight is in kg
        Glucose = float(data['glucose'])
        BloodPressure = float(data['blood'])
        SkinThickness = float(data['skin'])
        Insulin = float(data['insulin'])
        Pregnancies = float(data['preg'])
        Age = int(data['age'])
        DiabetesPedigreeFunction = float(data['preg'])

        # Calculate BMI from height and weight
        # BMI = weight(kg) / (height(m)^2)
        BMI = weight / ((height / 100) ** 2)
        # BMI = 26.6

        feature_values = [Pregnancies, Glucose, BloodPressure,
                          SkinThickness, Insulin, BMI, DiabetesPedigreeFunction, Age]

        print(feature_values)

        prediction = model.predict([feature_values])
        print(prediction)

        prediction = int(prediction[0])

        class_probabilities = model.predict_proba([feature_values])[0]
        print(class_probabilities)

        predicted_class = 1 if class_probabilities[1] > class_probabilities[0] else 0
        probability_of_predicted_class = class_probabilities[predicted_class]

        # Create a response object
        response = {
            'prediction': predicted_class,
            # Convert probability to string
            'probability': str(probability_of_predicted_class)
        }

        print(response)

        return jsonify(response)

    except Exception as e:
        return jsonify({'error': str(e)})


if __name__ == '__main__':
    app.run(debug=True)
