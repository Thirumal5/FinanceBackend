# Finance Data Processing and Access Control Backend

A well-structured backend system for managing financial data with role-based access control (RBAC), aggregation logic, and filtering capabilities.

---

## 🚀 Key Features

* **User & Role Management**

  * Create, update, delete, and view users
  * Role-based access: Admin, Analyst, Viewer

* **Financial Records Management**

  * Full CRUD operations for income and expense records
  * Each record includes: amount, type, category, date, note, and user reference

* **Dashboard Summary API**

  * Total income
  * Total expenses
  * Net balance
  * Category-wise breakdown
  * Top 5 recent transactions

* **Role-Based Access Control (RBAC)**

  * **Admin** → Full access (Users + Records)
  * **Analyst** → View records + dashboard insights
  * **Viewer** → Dashboard only

* **Filtering Support**

  * Filter records using query params:

    * `?type=income`
    * `?type=expense`
    * `?category=food`

* **Validation & Error Handling**

  * Standard response format: `{ success, message, data }`
  * Proper HTTP status codes
  * MongoDB ID validation to prevent crashes

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* dotenv

---

## 📂 Project Structure

```
backend/
│
├── controllers/
├── models/
├── routes/
├── middleware/
├── DB/
├── index.js
```

---

## 🚦 Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-link>
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file:

```env
MONGO_URI=your_mongodb_connection_string
PORT=3000
```

### 4. Run the server

```bash
node index.js
```

---

## 📝 API Usage

### 🔐 Mock Authentication

Use header:

```
x-user-role: admin | analyst | viewer
```

---

## 🖥️ Visual API Testing (Admin Dashboard)
A complete **Interactive Admin Dashboard** is included in the project for easy testing:
1.  Ensure the server is running (`node index.js`).
2.  Locate `test-api.html` in the `backend/` directory or visit root `/`.
3.  **Role Selector**: Switch between Admin, Analyst, and Viewer roles.
4.  **Admin Panel**: Exclusive access to Create, Update, and Delete users (automatically hidden for other roles).
5.  **Status Badges**: Real-time HTTP status feedback for 200 OK and 403 Forbidden scenarios.

---

### 📊 Dashboard

```
GET /api/dashboard
```

Accessible by: Admin, Analyst, Viewer

---

### 💰 Records

```
GET    /api/records
GET    /api/records?type=expense
GET    /api/records/:id
POST   /api/records
PUT    /api/records/:id
DELETE /api/records/:id
```

* Admin → Full access
* Analyst → Read only
* Viewer → No access

---

### 👤 Users (Admin Only)

```
GET    /api/users
POST   /api/users
PUT    /api/users/:id
DELETE /api/users/:id
```

---

## ⚠️ Assumptions

* Authentication is simplified using request headers (`x-user-role`)
* JWT and password encryption are not implemented as they were optional
* Focus is on backend logic, structure, and role-based access

---

## 🔮 Future Improvements

* JWT-based authentication
* Password hashing (bcrypt)
* Pagination & search
* Rate limiting
* Unit testing

---

## ✅ Conclusion

This project demonstrates:

* Clean backend architecture
* Role-based access control
* Aggregation-based dashboard logic
* Real-world API design practices
