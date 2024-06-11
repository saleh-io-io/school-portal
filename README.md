# School Portal Installation Guide

This guide provides instructions for setting up the School Portal project, which consists of a frontend and a backend component.

## Prerequisites

Before you begin, ensure you have the following installed on your system:
- Node.js (LTS version recommended)
- npm (comes with Node.js)
- MongoDB (for the backend database)

## Backend Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/school-portal.git
   cd school-portal/backend
   ```

## Install Dependencies

Inside the backend directory, install the necessary npm packages.

```bash
npm install
```

## Configure Environment Variables

Create a `.env` file in the backend directory and add the necessary environment variables.

```plaintext
DB_URI=mongodb://localhost:27017/schoolPortal
JWT_SECRET=your_jwt_secret
PORT=5000
```

## Start the Server

Run the following command to start the backend server.

```bash
npm start
```

The backend server should now be running on `http://localhost:5000`.

## Frontend Setup

1. **Navigate to the Frontend Directory**

   From the root of the cloned repository, navigate to the frontend directory.

   ```bash
   cd ../frontend
   ```

2. **Install Dependencies**

   Install the necessary npm packages for the frontend.

   ```bash
   npm install
   ```

3. **Configure Environment Variables**

   If your frontend requires environment variables (e.g., for the API URL), create a `.env` file in the frontend directory and add the necessary variables.

   ```plaintext
   REACT_APP_API_URL=http://localhost:5000
   ```

4. **Start the Frontend Application**

   Run the following command to start the frontend application.

   ```bash
   npm start
   ```

   The frontend should now be accessible at `http://localhost:3000`.

## Accessing the Application

After completing the setup for both the backend and frontend, you can access the School Portal application by navigating to `http://localhost:3000` in your web browser.

For further configuration and usage instructions, refer to the respective README files in the frontend and backend directories.