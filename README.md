#  Full Stack TODO Application

A fully Dockerized **Task Management Application** built with:

- **Frontend:** React (Keycloak secured)
- **Backend:** Spring Boot (REST API)
- **Authentication:** Keycloak (OAuth2 / OpenID Connect)
- **Database:** PostgreSQL
- **Containerization:** Docker Compose

---

##  Project Overview

This project allows authenticated users to:
- Log?Register in via **Keycloak**
- Create, view, and complete tasks
- Manage their own tasks securely

---

##  Project Structure

root/
│
├── todo-ui/ # React UI
├── todo/ # Spring Boot backend
├── keycloak/ # Realm export JSON (todo-realm)
├── docker-compose.yml # Compose configuration
└── README.md 

##  Prerequisites

Before running the app, make sure you have:

- [Docker] installed and running  
- [Git] installed

No manual Java or Node setup is needed — Docker handles everything.

---

##  Setup & Run

###  Clone the Repository

```bash
git clone "https://github.com/Nilushiya/To_Do-Assignment"
cd folder_name

docker-compose up --build

Go to: "http://localhost:3000"

---




