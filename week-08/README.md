# Final Project "Community Events Platform"

## **Core Features:**

1. **User Authentication:**

    - Allow users to sign up, log in, and manage their profiles.
    - Use Python (Flask or FastAPI) for the backend and SQL for storing user credentials (hashed passwords).

2. **Event Management:**

    - Users can create, edit, and delete events (e.g., title, date, time, location, description).
    - Store event data in a SQL database.

3. **Event Browsing:**

    - Frontend in JavaScript (React or plain JS) for displaying events in an interactive list or calendar view.
    - Include filtering options (e.g., by date, location).

4. **Joining Events:**

    - Users can join events, and their participation is stored in a SQL table linking users to events.
    - Display joined events in the user's profile.

5. **API Integration:**
    - Build a Python-based REST API to handle CRUD operations for events and user participation.
    - Use JavaScript to fetch data and update the UI dynamically.

---

## **Technology Stack:**

- **Frontend:** JavaScript (React, Vue, or Vanilla JS).
- **Backend:** Python (Flask or FastAPI).
- **Database:** SQL (SQLite or PostgreSQL).

---

## **Proposed Timeline:**

### **Day 1: Project Setup and Authentication**

- Set up the database schema for users and events.
- Implement user authentication (register, login, logout).

### **Day 2: Backend API**

- Build endpoints for CRUD operations:
  - Events (`/events`)
  - User management (`/users`)
  - Joining events (`/join`).

### **Day 3: Frontend Basic UI**

- Create a frontend with forms for login, signup, and creating events.
- Display a list of events using data fetched from the API.

### **Day 4: Advanced Features**

- Add filtering and sorting for events on the frontend.
- Implement the "Join Event" functionality and user-specific event views.

### **Day 5: Final Touches and Presentation**

- Test the app and fix bugs.
- Style the application for a polished look.
- Prepare a short presentation or demo.
