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

After starting JSON Server with the above command, you can access your JSON data through the following endpoint: [http://localhost:3001/polls](http://localhost:3001/polls)

## Start the app

1. **Install Dependencies**:
   Execute the following command to install all required dependencies:
   ```bash
   npm install
   ```
2. **Start the Development Server:**
    Run the following command to start the application in development mode:
   ```bash
   npm run dev
   ```
3. **Access the Application:**
Open your browser and navigate to [http://localhost:5173/polly/](http://localhost:5173/polly/) to view the application.