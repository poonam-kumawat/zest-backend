# zest-backend

Welcome to the backend repository of Zest, the Ecommerce Grocery Website! This guide will assist you in setting up and running the backend server locally.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

* Node.js
* npm (Node Package Manager)
* MongoDB (MongoDB Community Edition)

## Installation

<b>Clone the Repository:</b>

```sh
  git clone https://github.com/poonam-kumawat/zest-backend.git
  ```

<b>Install Dependencies:</b>

```sh
  npm install
  ```
<b>Configure Environment Variables:</b>

Create a .env file in the root of the project and provide the necessary environment variables. For example:

```sh
  PORT=3001
  MONGO_URI=mongodb://localhost:27017/zest
  JWT_SECRET=your-secret-key
  ```
Replace your-secret-key with a secure secret for JWT token generation.

<b>Run the Application:</b>

```sh
  npm start
  ```
This command will start the backend server, and it will be accessible at http://localhost:3001.

## Usage

* Ensure your MongoDB server is running.
* Access the backend server at http://localhost:3001.
* The backend server provides APIs for user authentication, product information, and order management.
  
## Frontend Repository

For a complete end-to-end experience, make sure to set up the <a href="https://github.com/poonam-kumawat/zest-frontend.git">Zest Frontend</a>. Follow the instructions in the frontend repository to run the frontend application.
