🧠📷 AI Text-to-Image Generator (MERN + ClipDrop API)

A Full Stack AI SaaS Application built using the MERN Stack (MongoDB, Express, React, Node.js) that allows users to generate AI-powered images from text prompts.
Includes a credit-based system, secure authentication, and online payment integration for purchasing additional credits.



🚀 Features

✅ AI Image Generation
Generate stunning images using the ClipDrop API by providing creative text prompts.

✅ User Authentication
Secure login and registration system built using MongoDB, Express, React, and Node.js (MERN) stack.

✅ Credit-Based System
Each image generation consumes credits — users can buy more credits seamlessly.

✅ Online Payment Gateway
Integrated payment system to purchase additional credits online.

✅ Responsive UI
A clean, modern, and fully responsive interface optimized for all devices.

✅ User Dashboard
View image generation history, remaining credits, and payment records.




🛠️ Tech Stack
Layer          	Technology
Frontend	  -   React.js, Tailwind CSS
Backend	    -   Node.js, Express.js
Database    -	  MongoDB (Mongoose)
AI API	    -   ClipDrop API
Authentication -JWT (JSON Web Token)
Payments	     - Integrated Online Payment Gateway ( Razorpay)


⚙️ Installation & Setup

Follow these steps to run the project locally:

1️⃣ Clone the Repository
git clone https://github.com/yourusername/ai-text-to-image-generator.git
cd ai-text-to-image-generator


2️⃣ Install Dependencies

Install both backend and frontend dependencies:

cd  backend
npm install

cd ../frontend
npm install


3️⃣ Add Environment Variables

Create a .env file in both the server and client directories and add:

For backend:
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLIPDROP_API_KEY=your_clipdrop_api_key
PAYMENT_GATEWAY_KEY=your_payment_gateway_key

For frontend:
REACT_APP_API_URL=http://localhost:5000


4️⃣ Run the Application

Start both frontend and backend:
open your vs code terminal:

# Start backend
cd backend
npm start /nodemon


# Start frontend
cd ../frontend
npm run dev


Now open your browser and visit:

http://localhost:3000



💰 Credit System Overview

New users receive free initial credits upon registration.

Each generated image deducts 1 credit.

When credits run out, users can buy more credits securely via the payment gateway.



❤️ Acknowledgements

Special thanks to:
GreatStack YouTube channel
ClipDrop API
MongoDB Atlas
React
Node.js
Express.js




💻 Developer

👤 s.viyashan
💼 Developer | AI Enthusiast | MERN Stack Developer
📧 viyashviyashan2417@gmail.com
🐙 GitHub-https://github.com/viyash-24
