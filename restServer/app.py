from flask import Flask

app = Flask(__name__)
@app.route("/")
def mainPage():
    return "Connected"

if "__name__" == "__main__":
    app.run(debug=True)