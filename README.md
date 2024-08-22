# Poll Meter

## Prerequisites

Make sure you have Node.js and npm (Node Package Manager) installed on your system.

## JSON Server

1. Install JSON Server globally (if not already installed):
   ```bash
   npm install -g json-server
   ```
2. Start JSON Server
   ```bash
   json-server --watch json-server/db.json --port 3001
   ```

3. Endpoint

After starting the JSON Server, you can access the data through the following endpoint: [http://localhost:3001/polls](http://localhost:3001/polls)

## Starting the Application

1. Install Dependencies:
   ```bash
   npm install
   ```
2. Start the Development Server:
   ```bash
   npm run dev
   ```
3. Access the Application
Open your browser and navigate to [http://localhost:5173/polly/](http://localhost:5173/polly/) to view the application.