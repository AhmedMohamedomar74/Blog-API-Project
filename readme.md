# Blog API Project

## Overview
A Node.js-based RESTful API for managing blog content including posts, comments, and user management.

## Table of Contents
- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [API Documentation](#api-documentation)
- [Database Schema](#database-schema)

## Technologies
- Node.js
- Express.js 
- MySQL
- Sequelize ORM
- JSON Web Tokens (JWT)

## Project Structure
```
├── src/
│   ├── DB/
│   │   └── connection.db.js
│   ├── modules/
│   │   ├── comment/
│   │   ├── post/ 
│   │   └── user/
│   ├── utils/
│   │   └── Response.js
│   ├── app.controller.js
│   └── index.js
├── .gitignore
└── package.json
```

## Getting Started

### Prerequisites
- Node.js v14 or higher
- MySQL v8.0 or higher
- npm or yarn

### Installation
1. Clone the repository:
```bash
git clone https://github.com/AhmedMohamedomar74/Blog-API-Project.git
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
```env
DB_NAME=blog_db
DB_USER=root
DB_PASSWORD=your_password
DB_HOST=localhost
PORT=3000
```

4. Start the server:
```bash
npm run start:dev
```

## API Documentation

### User Endpoints

#### Create User
```http
POST /api/users
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

#### Get User
```http
GET /api/users/:id
Authorization: Bearer <token>
```

### Post Endpoints

#### Create Post
```http
POST /api/posts
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "My First Post",
  "content": "Post content here..."
}
```

#### Get Posts
```http
GET /api/posts
```

### Comment Endpoints

#### Add Comment
```http
POST /api/comments
Authorization: Bearer <token>
Content-Type: application/json

{
  "postId": 1,
  "content": "Great post!"
}
```

## Database Schema

### Users Table
```sql
CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255),
  email VARCHAR(255) UNIQUE,
  password VARCHAR(255),
  createdAt TIMESTAMP,
  updatedAt TIMESTAMP
);
```

### Posts Table
```sql
CREATE TABLE posts (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255),
  content TEXT,
  userId INT,
  createdAt TIMESTAMP,
  updatedAt TIMESTAMP,
  FOREIGN KEY (userId) REFERENCES users(id)
);
```

### Comments Table
```sql
CREATE TABLE comments (
  id INT PRIMARY KEY AUTO_INCREMENT,
  content TEXT,
  userId INT,
  postId INT,
  createdAt TIMESTAMP,
  updatedAt TIMESTAMP,
  FOREIGN KEY (userId) REFERENCES users(id),
  FOREIGN KEY (postId) REFERENCES posts(id)
);
```

## Error Handling
The API uses standard HTTP response codes:
- 200: Success
- 400: Bad Request
- 401: Unauthorized
- 404: Not Found
- 500: Server Error

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License
This project is licensed under the MIT License - see the LICENSE file for
