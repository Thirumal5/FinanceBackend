# Finance Data Processing and Access Control Backend

A logically structured finance management backend with role-based access control (RBAC), data aggregation, and filtering.

## 🚀 Key Features

- **User & Role Management**: Admin can manage users and their roles (Admin, Analyst, Viewer).
- **Financial Records CRUD**: Full management of income and expense entries.
- **Dashboard Summary**: Aggregate data with total income, expense, balance, and category breakdowns.
- **Strict RBAC**:
  - **Admin**: Full access to all data and user management.
  - **Analyst**: Can view records and dashboard insights.
  - **Viewer**: Can only view the dashboard summary.
- **Filtering**: Search records by `type` (income/expense) or `category`.
- **Validation**: Clean error handling and input validation.

## 🛠️ Tech Stack

- **Node.js & Express**
- **MongoDB & Mongoose**
- **dotenv** (Environment variables)

## 📂 Project Structure

- `/Controllers`: Business logic for Users, Records, and Dashboard.
- `/models`: Mongoose schemas.
- `/routes`: API endpoints.
- `/middleware`: RBAC logic.
- `/DB`: Database connection setup.

## 🚦 Getting Started

1. **Clone the repository.**
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Configure Environment**:
   Create a `.env` file with:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=3000
   ```
4. **Run the server**:
   ```bash
   node index.js
   ```

## 📝 API Endpoints

### Authentication (Mock)
Include the header `x-user-role` in your requests:
- `x-user-role: admin`
- `x-user-role: analyst`
- `x-user-role: viewer`

### Dashboard
- `GET /api/dashboard`: Summary data (All roles)

### Records
- `GET /api/records`: List records (Admin, Analyst)
- `GET /api/records?type=expense`: Filtered list
- `POST /api/records`: Create record (Admin)
- `PUT /api/records/:id`: Update record (Admin)
- `DELETE /api/records/:id`: Delete record (Admin)

### Users (Admin Only)
- `GET /api/Users`: List all users
- `POST /api/Users`: Create user
- `PUT /api/Users/:id`: Update user
- `DELETE /api/Users/:id`: Delete user
