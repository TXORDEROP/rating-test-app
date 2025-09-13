⭐ RATING-SHOW-APP
A full-stack web application where users can rate stores, view feedback, and interact based on role-specific access. Built using React, Express, PostgreSQL, and Tailwind CSS.

📦 Features

- 🔐 Authentication & Role-Based Access
  Supports System Admin, Normal User, and Store Owner roles with protected routes.
- 🏪 Store Rating System
  Users can browse stores, submit ratings, and leave comments.
- 📊 Dashboards
- Admin: View total users, stores, and ratings. Filter users/stores by name, email, address, or role.
- Store Owner: View ratings submitted for their store and average rating.
- ✅ Form Validation
  Ensures clean input for signup, login, and rating forms.
- 🎨 Modern UI
  Styled with Tailwind CSS for a sleek, responsive interface.
  🛠️ Tech Stack
  | | | | |
  | | | | |
  | | | | |
  📁 Project Structure
  RATING-SHOW-APP/
  ├── backend/
  │ ├── controllers/
  │ ├── middleware/
  │ ├── models/
  │ ├── routes/
  │ ├── db.js
  │ └── server.js
  ├── frontend/
  │ ├── public/
  │ ├── src/
  │ │ ├── components/
  │ │ ├── pages/
  │ │ ├── services/
  │ │ ├── index.js
  │ │ └── index.css
  │ ├── tailwind_config/
  │ └── package.json
  ⚙️ Setup Instructions

1. Clone the repo
   git clone https://github.com/your-username/RATING-SHOW-APP.git
   cd RATING-SHOW-APP

2. Backend Setup
   cd backend
   npm install

# Create .env file with DB credentials and JWT secret

npm run dev 3. Frontend Setup
cd frontend
npm install
npm run dev

🧪 Sample Credentials
| | | |
| | | |
| | | |
| | | |
📌 Notes

- Ensure PostgreSQL is running and seeded with sample data.
- Tailwind CSS is used for styling — tweak tailwind.config.js for custom themes.
- All API routes are protected via JWT and role-based middleware.

👨‍💻 Author
Aditya Sandip Chipade — Full-stack developer(MERN Stack Developer) focused on clean architecture, beautiful UI, and scalable systems. Passionate about building apps that look as good as they work.
