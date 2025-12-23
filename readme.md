___
SETUP INSTRUCTIONS
1. Have docker installed and up running.
2. Run "docker compose up" in the terminal. This starts the server session.
3. Open Postman application. 
4. Set it to "raw" and "JSON" as body type (it should be there by default)
5. Set the URL as http://localhost:5000/api/ whether it is for POST or GET command.
___
POSTMAN COLLECTION 
- POST http://localhost:5000/api/auth/register : is the command used for user to register into the database.
Example curl command:
{
    "name": "Wishva",
    "email": "wishva@test.com",
    "password": "123456"
}
Expect the message: "msg": "User registered successfully". If repeated with the same curl command: "msg": "User already exists"

- POST http://localhost:5000/api/auth/login : is the command used for existing user to login into the database. 
Example curl command: 
{
    "email": "wishva@test.com",
    "password": "123456"
}
Expect the message if the user was already registered: "msg": "Login successful", "token": "(a generated token)". If it is the wrong credentials: "msg": "Invalid credentials". Repeating the curl command would generate a new token everytime.

### A rather important step: Copy the generated token. Go to the Auth Tab and paste the generated token to be able to use the next features listed below. The Auth type is: Bearer Token. 

- POST http://localhost:5000/api/cart/add : Adds the items to the cart that's in the database. 
Example curl command: 
{
  "productId": "P001",
  "quantity": 2
}
With the expected message:
{
  "msg": "Added to cart",
  "cart": [
    {
      "productId": "P001",
      "quantity": 2
    }
  ]
}
Repeating the curl command will increase the quantity. Adding a new product will be included alongside with the previous item. Removing the token will result the message: "msg": "No Token". And having it in the wrong token will result in: "msg" : "Incorrect Token"

- GET http://localhost:5000/api/cart : Shows the cart for users when requested. Using this command will show the available objects that are present in the cart session.
Example output: 
[
    {
        "productId": "P001",
        "quantity": 6
    },
    {
        "productId": "P002",
        "quantity": 4
    }
]
Removing the token will result the message: "msg": "No Token". And having it in the wrong token will result in: "msg" : "Incorrect Token"

- POST http://localhost:5000/api/checkout : Empties the cart and saves the order to MongoDB. Then outputs the reciept. 
Example Output:
{
    "msg": "Checkout complete",
    "total": 1000
}
For now the sum (cost) is calculated based on item * 100. Removing the token will result the message: "msg": "No Token". And having it in the wrong token will result in: "msg" : "Incorrect Token".

- POST http://localhost:5000/api/auth/logout: Logs out the user of the session. The session stops.
Example Output: 
{
    "msg": "Logged out"
}
After logging out, cart and checkout will give out blank responses due to not being an active session. User will have to register or login again to do that.
___
API STRUCTURE
ecommerce-api/
│
├── controllers/        # Business logic
├── routes/             # API route definitions
├── middlewares/        # Authentication middleware
├── config/             # Database configuration
├── server.js           # Main application entry point
├── Dockerfile          # Docker image configuration
├── docker-compose.yml  # Multi-container setup
├── .env                # Environment variables
└── README.md           # Project documentation

FEATURES
- User registration and login
- Session-based authentication
- Shopping cart management
- Add and view cart items
- Checkout preparation (future extension)
- Dockerized backend and database


TECHNOLOGIES USED
- Node.js
- Express.js
- MongoDB
- Mongoose
- Docker & Docker Compose
- Postman (API testing)

FUTURE IMPROVEMENTS
- Payment gateway integration
- Order history management
- Admin dashboard
- Role-based access control

AUTHOR
Wishva Mufzal B. Shah  
Software Engineering Student





