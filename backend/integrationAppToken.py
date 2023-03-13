import datetime
import json

from flask import Flask
from flask_cors import CORS
import jwt

app = Flask(__name__)
CORS(app)

@app.route("/integration-token")
def get_integration_app_token():
    # Your workspace key and secret.
    # You can find them on the Settings page.
    WORKSPACE_KEY = "{WORKSPACE_KEY}"
    WORKSPACE_SECRET = "{WORKSPACE_SECRET}"

    encoded_jwt = jwt.encode(
        {
         "id": "{USER_ID}",  # Identifier of user or organization.
         "name": "{USER_NAME}",  # Human-readable name (it will simplify troubleshooting)
         "fields": { # (optional) Any user fields you want to attach to your user.
             "my_user_data" : "data" 
         },
         "iss": WORKSPACE_KEY,
         "exp": datetime.datetime.now() + datetime.timedelta(seconds=1440)
         }, WORKSPACE_SECRET, algorithm="HS256")
    return json.dumps(encoded_jwt)
