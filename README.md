# HotelReservationSystem

# Express & Angular App with Docker

This repository contains a full-stack application with an **Express.js** backend and an **Angular** frontend. Both services are containerized using **Docker**, and the app can be easily started using `docker-compose up`.

## Technologies Used

- **Backend**: Express.js
- **Frontend**: Angular
- **Containerization**: Docker
- **Orchestration**: Docker Compose

## Prerequisites

Before you start, you need to have the following installed:

1. **Docker**: Follow the instructions on the [official Docker website](https://docs.docker.com/get-docker/) to install Docker on your machine.
2. **Docker Compose**: Follow the instructions on the [official Docker Compose website](https://docs.docker.com/compose/install/) to install Docker Compose.

## Project Structure
|- 

- **/**: Contains the Express backend application.
- **frontend/avant_frontend**: Contains the Angular frontend application.
- **docker-compose.yml**: The Docker Compose file that configures both containers and their network.

## Getting Started

To get the application up and running, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/Nawfel-bel/HotelReservationSystem.git
cd HotelReservationSystem
```

### 2. Build and Run with Docker Compose

```bash
docker-compose up --build
```