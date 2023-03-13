# Python + Angular Integrations Page example

Complete code example of displaying list of external apps that your users can connect to. The connection can then be used to run integrations.

## Installation

### Backend
- `python3 -m venv env`
- MacOS: `source env/bin/activate`
- Windows: `.\env\Scripts\activate`
- `pip install -r requirements.txt`
- Replace {WORKSPACE_KEY}, {WORKSPACE_SECRET} with ones from https://console.integration.app/settings/access in `./backend/integrationAppToken.py`
- (optionally} Fill wanted user data in the same file

### Frontend
- `npm install`

## Run
- Run `npm run start` - this will launch backend and frontend of the example
