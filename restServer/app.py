from flask import Flask, request, jsonify

app = Flask(__name__)
@app.route("/", methods= ['GET'])
def mainPage():
    if request.method == 'GET':
        return "Connected"

if "__name__" == "__main__":
    app.run(debug=True)