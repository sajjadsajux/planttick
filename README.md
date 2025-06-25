
# 🌱 PlantTick — Your Digital Plant Care Companion

**PlantTick** is a full-stack, responsive web application designed for plant lovers to manage, monitor, and track the care of their indoor and outdoor plants. It acts as a digital assistant that lets users log watering schedules, track plant health, and maintain a personalized dashboard of their green collection.

---

### 🖼️ Screenshot

> *(Add a screenshot of the PlantTick dashboard or plant details page here)*  
`![PlantTick Screenshot](link-to-screenshot.png)`

---

### 🔗 Live Site

* [planttick.web.app](https://planttick.web.app)

---

### 🛠️ Technologies Used

- **HTML**  
- **CSS**  
- **Tailwind CSS**  
- **DaisyUI**  
- **React**  
- **React Router**  
- **Node.js**  
- **Express.js**  
- **MongoDB**  
- **Firebase**

### 🛠️ Dependencies Used

#### Frontend:

* **React** (v19)  
* **React Router** (v7)  
* **Tailwind CSS**  
* **DaisyUI**  
* **react-toastify**  
* **sweetalert2**  
* **react-tooltip**  
* **lottie-react**  
* **swiper**  
* **react-icons**  
* **react-spinners**  

#### Backend & Authentication:

* **Node.js**  
* **Express.js**  
* **MongoDB**  
* **Firebase Authentication**  

---

### ✨ Key Features

* 🔐 User Authentication with Email/Password and Google Sign-In  
* 🌿 CRUD for plants: add, view, update, delete  
* 📅 Watering schedules and health tracking  
* 🌗 Dark/Light theme toggle  
* 📱 Fully responsive design for all devices  
* 🔍 Sort and filter plants by watering date and recency  
* 🎉 Alerts and modals with Toastify and SweetAlert2  

---

### 📁 Project Structure (Major Pages)

* **Home**: Overview and plant dashboard  
* **All Plants**: List and filter all plants  
* **Add Plant**: Form to add new plants  
* **Plant Details**: View and update plant information  
* **My Plants**: Manage user’s own plants  
* **Authentication**: Signup, Login, Google Sign-In  
* **Error Page**: Handle invalid routes gracefully  

---

### 🔐 Security & Deployment Guidelines

* Environment variables used for Firebase config and database credentials  
* JWT tokens for authentication security  
* Backend error handling with CORS, 404, and 500 responses  
* Authorized domains set in Firebase  
* Graceful loading states for async operations  

---

### 🌟 Optional Features

* Loading spinners for better UX during data fetching  
* Dark/Light theme toggling  
* Smooth UI animations and transitions  
* User notifications and alerts for feedback  

---

### 🛆 Run Locally

1. **Clone the Repository**

```bash
git clone https://github.com/your-username/planttick.git
cd planttick
```

2. **Install Dependencies**

```bash
npm install
```

3. **Setup Environment Variables**  
Create a `.env` file in the root and add:

```env
VITE_apiKey=your_firebase_api_key
VITE_authDomain=your_project.firebaseapp.com
VITE_projectId=your_project_id
VITE_storageBucket=your_project.appspot.com
VITE_messagingSenderId=your_sender_id
VITE_appId=your_app_id
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

4. **Start Development Server**

```bash
npm run dev
```

---

### 💬 Feedback & Contributions

We welcome your feedback to improve PlantTick! If you find bugs, have suggestions, or want to contribute, feel free to open an issue or submit a pull request. Community contributions are highly appreciated.

---

### 🙏 Thank You for Exploring PlantTick! 🌿
