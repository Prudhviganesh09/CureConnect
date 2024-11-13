<p align="center">
  <img src="https://github.com/user-attachments/assets/ece2611f-6ccb-4d6d-8bd8-4d62c82703b3" alt="CureConnect Logo" width="200"/>
</p>

# CureConnect

CureConnect is a healthcare appointment booking platform that connects patients with doctors. It allows users to view doctor profiles, check their availability, and book appointments in real-time.

## Features

- **Doctor Profiles**: Patients can browse detailed doctor profiles including their name, degree, specialty, experience, and more.
- **Appointment Booking**: View available time slots and book appointments with ease.
- **Real-time Availability**: Check doctor availability for the upcoming week, showing times in an easy-to-understand format.
- **Appointment Fees**: Clear information on the doctor's fees before booking an appointment.

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Styling**: Tailwind CSS
- **Authentication**: Context API
- **Routing**: React Router

## Installation

To run the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Prudhviganesh09/CureConnect
Navigate to the project directory:

cd CureConnect
Install dependencies:

npm install
Create a .env file in the root directory and add the necessary environment variables:

# Database
MONGO_URI="your_mongodb_connection_string"

# Server
PORT=your_port_number

# Authentication
JWT_SECRET="your_jwt_secret_key"

# Cloudinary
CLOUDINARY_NAME="your_cloudinary_name"
CLOUDINARY_API_KEY="your_cloudinary_api_key"
CLOUDINARY_SECRET_KEY="your_cloudinary_secret_key"

# Admin Credentials
ADMIN_EMAIL="your_admin_email"
ADMIN_PASSWORD="your_admin_password"

# Razorpay
RAZORPAY_KEY_ID="your_razorpay_key_id"
RAZORPAY_KEY_SECRET="your_razorpay_key_secret"


Start the development server:

npm start
Open your browser and visit http://localhost:5173 to access the application.

Usage
Select a doctor from the list of available doctors.
View the doctor's profile to get information on their specialization, experience, and appointment fee.
Browse the available time slots for the next 7 days.
Select a time slot and confirm your booking.
Home Page
Home Page

Top Doctors Page
Top Doctors

Appointment Booking Page
Appointment Booking

Future Enhancements
Payment Gateway Integration: Allow users to pay for appointments directly through the platform.
Reviews and Ratings: Enable patients to leave reviews and ratings for doctors after their appointments.
Search and Filtering: Add advanced search functionality to filter doctors by specialty, location, and ratings.
<p align="center"> <img src="https://github.com/user-attachments/assets/dfa3526f-f2c7-4999-879d-449aab91c674" alt="CureConnect Logo Red" width="200"/> </p> ```
