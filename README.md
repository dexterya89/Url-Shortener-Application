🔗 URL Shortener Application
The URL Shortener is a full-stack web application that transforms long, cumbersome URLs into clean, concise short links — just like Bitly or TinyURL. Built using Node.js, Express, React (with Vite), and MongoDB, it offers a fast and responsive user experience backed by a scalable backend.
Live Demo:
👉 Deployed App Link : https://url-shortnener-application.netlify.app/

🛠 Tech Stack:
Frontend: React + Vite (blazing-fast builds & hot reloading)

Backend: Node.js + Express (RESTful API)

Database: MongoDB (Mongoose ORM)

Deployment: Compatible with platforms like Render, Railway, or Vercel + MongoDB Atlas

🌐 Features:
Convert long URLs into unique, short versions

All shortened URLs are stored in MongoDB with timestamp and click tracking potential

Seamless redirection from short links to original URLs

Clean UI with real-time feedback on successful shortening

Environment-based configuration using .env for secure API and DB access

📦 Functionality Flow:
User submits a long URL via a React form.

Frontend sends a POST request to the Express server.

Server generates a unique short code and saves it along with the original URL in MongoDB.

User receives a short URL, which they can share or revisit.

Hitting the short URL routes the request back to the backend, which fetches the original URL and redirects the user.
