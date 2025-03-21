# Recipe Empire Landing Page

## 🌍 About Recipe Empire
Recipe Empire is a climate-focused food platform designed to make sustainable eating easier and more accessible. This landing page is the first step in engaging users, collecting sign-ups, and building awareness around climate-friendly food choices.

## 🛠 Tech Stack
- **Frontend:** React (Vite)
- **Backend:** Node.js + Express
- **Database:** PostgreSQL
- **Styling:** Tailwind CSS (if used)

---

## 🚀 Getting Started
### 1️⃣ Clone the Repository
```bash
git clone https://github.com/jliu233/RecipeEmpire.git
cd RecipeEmpire
```

### 2️⃣ Set Up the Backend
```bash
cd server
npm install
```
Create a `.env` file in the root directory and add:
```env
DATABASE_URL=postgresql://your_username@localhost:5432/recipe_empire
PORT=4000
```
Start the backend:
```bash
node server.js
```
The server should now be running at `http://localhost:4000`

### 3️⃣ Set Up the Frontend
```bash
cd client
npm install
```
Start the frontend:
```bash
npm run dev
```
The app should now be running at `http://localhost:5173/`

---

## 📂 Folder Structure
```
/RecipeEmpire
  ├── client/             # Frontend (React + Vite)
  │   ├── node_modules
  │   ├── public/         # Static assets
  │   ├── src/            # Source files
  │   │   ├── assets/     # Images and static files
  │   │   ├── App.css
  |   |   ├── App.jsx     # Main React component
  │   │   ├── EmailSignup.jsx
  │   │   ├── index.css 
  │   │   ├── index.jsx   # Entry file
  │   │   ├── main.jsx
  │   │   ├── WireframeA.jsx
  │   │   ├── WireframeB.jsx
  │   ├── index.html
  │   ├── package-lockmo.json    
  │   ├── package.json    # Dependencies
  │   ├── vite.config.js  # Vite configuration
  ├── server/             # Backend (Node.js + Express)
  │   ├── server.js       # Express API
  │   ├── package-lockmo.json    
  │   ├── package.json    # Dependencies
  │   ├── node_modules
  ├── .env                # Environment variables
  ├── README.md           # Project documentation
```

---

## 📡 API Endpoints
| Method | Endpoint      | Description |
|--------|--------------|-------------|
| POST   | `/api/signup` | Stores email sign-ups in PostgreSQL |

Example request:
```json
{
  "email": "user@example.com",
  "variant": "A"
}
```

---

## 🐞 Troubleshooting
**1️⃣ Check if the backend is running**
```bash
curl http://localhost:4000
```
If the server responds, it's running.

**2️⃣ Check PostgreSQL database**
```bash
psql -U your_username -d recipe_empire -c "SELECT * FROM signups;"
```

**3️⃣ Restart the frontend**
```bash
cd client
npm run dev
```

---

## 🎯 Future Improvements
- ✅ Deploy frontend on Vercel
- ✅ Deploy backend on Render / Railway
- ✅ Implement AI-powered recipe suggestions


---

## 👩‍💻 Author
**Jiaqi Liu**

[GitHub](https://github.com/jliu233)

---

## 📜 License
MIT License © 2025 Recipe Empire

