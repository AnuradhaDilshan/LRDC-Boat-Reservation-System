# LRDC Boat Reservation System

![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=flat&logo=bootstrap&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFA000?style=flat&logo=firebase&logoColor=white)

A web-based reservation system built for LRDC Services (Pvt) Ltd to digitize and streamline boat ride bookings. Designed for efficient scheduling and a conflict-free booking calendar, the system simplifies ride slot management with a user-friendly interface.

## Features

- **Boat Ride Reservation**: Create and manage ride bookings with real-time availability.
- **Dynamic Scheduling**: Conflict-free calendar for ride scheduling.
- **Responsive Design**: Fully responsive UI for compatibility across devices.
- **Firebase Integration**: Real-time database for storing booking data.

## File Structure

The project structure is as follows:

```bash
LRDC-Boat-Reservation-System/
├── public/
│   ├── assets/
│   │   └── img/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Footer.jsx
│   │   │   ├── Header.jsx
│   │   │   └── SocialIcons.jsx
│   │   ├── data/
│   │   │   └── Data.jsx
│   │   └── home/
│   │       ├── About.js
│   │       ├── Booking.js
│   │       ├── Carousel.js
│   │       ├── Rides.js
│   │       └── Service.js
│   ├── css/
│   │   ├── animate.css
│   │   ├── bootstrap.min.css
│   │   ├── booking.css
│   │   └── style.css
│   ├── pages/
│   │   ├── BookingPage.js
│   │   ├── RidesPage.js
│   │   ├── ServicesPage.js
│   │   └── ContactPage.js
│   ├── App.css
│   ├── App.js
│   ├── firebase.js
│   └── index.js
├── .env
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```

## How to Run the Project

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Firebase account for database setup

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/AnuradhaDilshan/LRDC-Boat-Reservation-System.git
   cd LRDC-Boat-Reservation-System
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up Firebase:

   - Create a Firebase project and enable Firestore.

   - Create a `.env` file in the file directory with the following variables:
     ```env
     FIREBASE_API_KEY = your_api_key
     FIREBASE_AUTH_DOMAIN = your_project.firebaseapp.com
     FIREBASE_PROJECT_ID = your_project_id
     FIREBASE_STORAGE_BUCKET = your_project.appspot.com
     FIREBASE_MESSAGING_SENDER_ID = your_sender_id
     FIREBASE_APP_ID = your_app_id
     FIREBASE_MEASUREMENT_ID = your measurement_id
     ```

4. Running the Project

   ```bash
   npm start
   ```

## Live Website

The LRDC Boat Reservation System is live at: [https://www.lrdcboatservice.com/](https://www.lrdcboatservice.com/)

![Last Commit](https://img.shields.io/github/last-commit/AnuradhaDilshan/LRDC-Boat-Reservation-System)
![Repo Size](https://img.shields.io/github/repo-size/AnuradhaDilshan/LRDC-Boat-Reservation-System)
![Top Language](https://img.shields.io/github/languages/top/AnuradhaDilshan/LRDC-Boat-Reservation-System)
