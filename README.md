**##Project Title:DELTA_SIGMA 
**
Overview The "Title Description" application is a simple CRUD (Create, Read, Update, Delete) web application built using the MERN stack (MongoDB, Express.js, React, Node.js). 
This application allows users to manage a list of items with titles and descriptions. 

##Project Description:
1.Add Item:

Users can add new items to the list by providing a title and description through a user-friendly form. List Display:

The application displays a list of items on the page, showcasing each item's title and description.

2.Update and Delete:

Users can update and delete items from the list. The update functionality allows users to modify the title and description of existing items. 

##Responsive User Interface:

The user interface is designed to be simple, clean, and responsive, providing a seamless experience across different devices. 

Technologies Used The application leverages the following technologies:

1.Frontend:

React: A JavaScript library for building user interfaces. Axios: A promise-based HTTP client for making API requests. Bootstrap: A CSS framework for styling the user interface.

2.Backend:

Node.js: A JavaScript runtime for building server-side applications. Express.js: A web application framework for Node.js. MongoDB: A NoSQL database for storing item data. Frontend Setup How to Run Locally To run the application locally, follow these steps:

##Frontend Setup Clone the repository:

bash Copy code 
git clone git clone https://github.com/VarshaVasudevan/titledescription.git

1.Navigate to the frontend directory:
cd your-app-name/client 
 
Install dependencies:
bash Copy code npm install

Run the development server:
bash Copy code npm start 

2.Backend Setup Navigate to the backend directory:
bash Copy code cd your-app-name/server 

Install dependencies:
bash Copy code npm install 

Run the server:
bash Copy code npm start

##API Documentation :The application utilizes the following API endpoints:

2.Fetch All Items:

1.Endpoint: /fetchData Method: GET Response Format: json Copy code { "success": true, "data": [ { "_id": "item-id", "title": "Item Title", "description": "Item Description" }, // Additional items... ] }

2.Add Item:

Endpoint: /insertdata Method: POST Request Payload: json Copy code { "title": "New Item Title", "description": "New Item Description" } Response Format: json Copy code { "_id": "new-item-id", "title": "New Item Title", "description": "New Item Description" } 

3.Delete Item:
Endpoint: /deleteItem/:id Method: DELETE Response Format: json Copy code { "success": true, "message": "Item deleted successfully" }

## Backend Installation and Setup

1. **Clone the backend repository:**

    ```bash
    git clone https://github.com/your-username/your-backend-repo.git
    cd your-backend-repo
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up environment variables:**

    Create a `.env` file in the root directory and add the necessary environment variables. For example:

    ```env
    PORT=5000
    MONGODB_URI=mongodb://localhost:27017/your-database
    ```

    Replace the values with your configuration.

4. **Run the server:**

    ```bash
    npm start
    ```

    The server will be running at http://localhost:5000 by default. You can change the `PORT` in the `.env` file.

## Frontend Installation and Setup

1. **Clone the frontend repository:**

    ```bash
    git clone https://github.com/your-username/your-frontend-repo.git
    cd your-frontend-repo
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up environment variables:**

    If your frontend interacts with the backend, create a `.env` file in the root directory and add the necessary backend API URL. For example:

    ```env
   # Local MongoDB URI
    LOCAL_DB_URI="mongodb://127.0.0.1:27017/delts_sigma"

    # MongoDB Atlas URI
    ATLAS_DB_URI="mongodb+srv://varsha:vA2XFP12glyfctkL@cluster0.qyhvv6f.mongodb.net/delts_sigma"

    NODE_ENV=production

    ```

    Replace the URL with the actual URL of your backend.

4. **Run the frontend:**

    ```bash
    npm start
    ```

    The frontend development server will be running at https://titledescription.netlify.app/ by default.

##Usage 
1.Adding an Item:

Navigate to the "Add Title" section. Enter the title and description in the provided form. Click the "Add" button to add the item to the list.

3.Updating an Item:

Each item in the list has an update icon (pencil). Click the update icon to go to the update page. Modify the title and description as needed. Implement your update logic.

4.Deleting an Item:

Each item in the list has a delete icon (trash). Click the delete icon to remove the item from the list.


## License

This project is licensed under the [MIT License](LICENSE).

