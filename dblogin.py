from fastapi import FastAPI, HTTPException, Form
from fastapi.middleware.cors import CORSMiddleware
import httpx
from dotenv import load_dotenv
import os

AIRTABLE_API_KEY = 'patAy9r6R8bCogufV.2988cd7c661cd671e24f59e190fd3f27751ea0e2531c57151e7dab6a48ae8d69'
AIRTABLE_BASE_ID = 'appYb7lU24MNZ1Fj3'
AIRTABLE_TABLE_NAME = 'User'

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

API_KEY = os.getenv("AIRTABLE_API_KEY")
BASE_ID = os.getenv("AIRTABLE_BASE_ID")
TABLE_NAME = os.getenv("AIRTABLE_TABLE_NAME")
ENDPOINT = f"https://api.airtable.com/v0/{BASE_ID}/{TABLE_NAME}"

headers = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json"
}

@app.post("/login/")
async def login(username: str = Form(...), password: str = Form(...)):
    async with httpx.AsyncClient() as client:
        response = await client.get(ENDPOINT, headers=headers)
        if response.status_code != 200:
            raise HTTPException(status_code=500, detail="Airtable API request failed")
        
        users = response.json().get("records", [])
        for user in users:
            if user["fields"].get("Username") == username and user["fields"].get("Password") == password:
                return {"message": "Login successful"}
        raise HTTPException(status_code=401, detail="Invalid username or password")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
