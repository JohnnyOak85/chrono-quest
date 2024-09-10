# Roadmap for Chrono Quest (Server-Side)

## 1. Initial Setup

- [✓] Initialize Nest.js project
  ```bash
  nest new chrono-quest
  ```
- [✓] Install dependencies
  - Install necessary packages for gRPC and microservices
    ```bash
    npm install @nestjs/microservices`, `@grpc/grpc-js
    ```
  - Install Prisma and Prisma Client
    ```bash
    npm install prisma --save-dev
    npm install @prisma/client
    ```
- [✓] Set up Prisma for database management
  - Initialize Prisma
    ```bash
    npx prisma init
    ```
  - Define models for tasks, achievements, users (if needed)
  - Create migrations and set up database (PostgreSQL recommended for cloud compatibility)

## 2. Task Microservice

- [✓] Create Task microservice
  - `nest generate app task-service`
  - Define the `Task` entity with fields: `title`, `description`, `dueDate`, `timeframe`, `expirationDate`, `type`
- [ ] Implement task types:
  - Single date tasks (specific due date)
  - Timeframe-based tasks (start date, end date)
  - Expiration-based tasks
  - Week/month-based tasks
- [ ] Create gRPC interfaces for CRUD operations

## 3. Gamification & Achievements Microservice

- [✓] Create Achievement microservice
  - `nest generate app achievement-service`
  - Define the `Achievement` entity with fields like `title`, `description`, `criteria`, `rewardPoints`
- [ ] Define criteria for achievements:
  - Task completion streaks
  - Number of tasks completed
  - Completing a task before its due date
  - Completing tasks in specific categories (e.g., weekly, monthly tasks)
- [ ] Implement logic for awarding achievements based on task progress
- [ ] Use gRPC to communicate between the Task and Achievement services

## 4. Notification Microservice

- [ ] Create Notification microservice
  - `nest generate app notification-service`
  - Define logic for task reminders and notifications
- [ ] Implement task reminder scheduling using cron jobs or queues (e.g., `Bull` or `Agenda`)
- [ ] Enable gRPC communication with Task and Achievement services

## 5. DevOps & Docker

- [ ] Set up Docker for each microservice
  - Create `Dockerfile` and `docker-compose.yml` for local development
  - Make sure Prisma migrations work inside Docker containers
- [ ] Explore Kubernetes for container orchestration
  - Set up basic Kubernetes configuration (`deployment.yaml`, `service.yaml`)
  - Look into Kubernetes clusters for managing Chrono Quest across different environments
- [ ] Set up CI/CD for automated testing, building, and deployment using GitHub Actions or similar tools

## 6. Database Agnosticism

- [✓] Use Prisma for database management
  - Define the task and achievement schema in `schema.prisma`
  - Ensure database migrations can easily adapt to other databases (PostgreSQL, MySQL, etc.)

## 7. Future Enhancements

- [ ] Add user authentication (optional)
  - Use `JWT` for API authentication
  - Allow users to manage tasks and achievements
- [ ] Add additional gamification features:
  - Task experience points (XP)
  - Leaderboards for comparing task completion among users
  - Custom achievements (users can create their own)
- [ ] Add notifications via email, SMS, or push notifications
- [ ] Integrate with external calendar services (e.g., Google Calendar) for task scheduling
      grpc
