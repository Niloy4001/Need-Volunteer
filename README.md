# Need Volunteer (Volunteer Management Website) - Client Side

## Overview

**Need Volunteer** is a user-friendly platform designed for volunteer management, allowing users to create, update, and delete volunteer need posts. Additionally, users can volunteer for others' posts. This project is built using the **MERN stack** and incorporates authentication and authorization mechanisms for secure data handling.

Through this project, I have learned and practiced:
- Securing APIs using **JWT (jsonwebtoken)**
- Implementing **Firebase Authentication**
- Navigating with **React Router**
- Creating APIs with **Express.js**
- Performing **CRUD operations** with **MongoDB**

🔗 **Live Site:** [Need Volunteer](#) _(Add your live site URL here)_

## Table of Contents

- [Key Features](#key-features)
- [Installation](#installation)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

## Key Features

- 🔑 **JWT Authentication & Authorization**
  - During login or sign-up, a **JWT token** is securely stored in the user's browser.
  - The token is removed upon logout.
  - Users **cannot access private routes or APIs** without a valid token.
  - Unauthorized attempts result in **automatic logout**.

- 🔐 **Data Security**
  - Users **cannot access other users' data** using their own JWT token.
  - Each user has an individual token stored in browser cookies.
  - Any unauthorized data access attempt results in **automatic logout**.

- 🔥 **Firebase Authentication**
  - Secure login and sign-up implementation.
  - Users can sign in with email/password or other Firebase-supported providers.

- 🔍 **Search & Filtering**
  - Users can search for specific volunteer posts.
  - A **visibility toggle** allows users to switch between **grid layout** and **table layout**.

## Installation

To set up the project locally, follow these steps:

1. **Clone the Repository**  
   ```sh
   git clone https://github.com/your-username/need-volunteer.git
   cd need-volunteer


2. **Install Dependencies**  
   ```sh
   npm install
   ```

3. **Set Up Environment Variables**  
   Create a `.env` file in the root directory and add the required environment variables (e.g., Firebase and JWT secret).

4. **Run the Application**  
   ```sh
   npm start
   ```

## Usage

- **Users** can create, update, and delete volunteer need posts.
- **Users** can volunteer for others' posts.
- **Admin users** (if applicable) can manage platform settings.

## Dependencies

The following NPM packages are used in this project:

- `axios` - Handling API requests.
- `date-fns` - Working with date and time.
- `lottie-react` - Adding animations.
- `react-datepicker` - User-friendly date picker.
- `react-helmet-async` - Managing document head (SEO).
- `react-icons` - Providing icons.
- `sweetalert2` - Displaying alert popups.
- `swiper` - Implementing carousel/slideshow.

## Configuration

Ensure you configure the following environment variables in a `.env` file:

```env
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
REACT_APP_JWT_SECRET=your_jwt_secret
```

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`feature-branch`).
3. Commit your changes.
4. Push to the branch and create a Pull Request.




