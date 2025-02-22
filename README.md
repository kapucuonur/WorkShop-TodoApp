# Workshop - FS Todo App

---

## **Features**

- Users can add, edit, and delete tasks.
- Data is persisted in a MongoDB database.
- The frontend and backend are connected to work together.

---

## **Getting Started**

Follow these steps to run the project locally:

### **1. Required Tools**

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/)

### **2. Running the Project**

#### **Backend**

1. Navigate to the `backend` directory:

   ```bash
   cd backend
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file for database connection and set the necessary environment variables:

   ```bash
   MONGODB=<MongoDB_URL>
   SECRET_KEY=<SECRET_KEY>
   ```

4. Start the server:
   ```bash
   node index.js
   ```

#### **Frontend**

1. Navigate to the `frontend` directory:

   ```bash
   cd frontend
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

3. Start the React application:
   ```bash
   npm start
   ```

---

## **Deploy**

The project is deployed on the **Render** platform. The backend and frontend are connected and running together.

### **Frontend and Backend Deployment**

1. On **Render**, a **Web Service** is created for the backend and a **Static Site** for the frontend.
2. **Environment Variables** are configured via the Render panel.
3. The app is accessible through the **Render URL** or a **Custom Domain**.

---

## **Technologies**

- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Other:** CORS, dotenv

---

## **Contributing**

If you'd like to contribute to this project, you can follow these steps:

1. Fork the repo.
2. Create a new branch.
3. Commit your changes.
4. Send a pull request.

---

## **License**

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

---

### **Note:**

The app is a simple Todo application developed for educational purposes. In real-world projects, additional security measures and features can be added.
