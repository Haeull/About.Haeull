from flask import Flask, jsonify
import random

app = Flask(__name__)

@app.route('/numbers')
def get_numbers():
    numbers = [random.randint(1, 100) for _ in range(10)]
    return jsonify(numbers)

if __name__ == '__main__':
    app.run(debug=True)
