# Customer Support Dashboard

A simple customer support dashboard UI that displays contact details, availability, and service hours.

## Table of Contents

- [Project Overview](#project-overview)
- [Folder Structure](#folder-structure)
- [Installation & Running the Application](#installation-&-running-the-application)
- [Technologies Used](#technologies-used)

## Project Overview

This project provides a UI for a customer support dashboard, similar to the design shown in the provided image. The UI includes sections for a header, contact details, and service hours. The project is built using React for the frontend and Spring Boot for the backend.

## Folder Structure

```plaintext
service-hour/
│
├───backend/
│   ├───src/
│   │   ├───main/
│   │   │   ├───java/com/example/backend/
│   │   │   │   ├───Controllers/
│   │   │   │   │   └───ServiceHourController.java
│   │   │   │   ├───Models/
│   │   │   │   │   ├───ServiceHour.java
│   │   │   │   │   ├───HourType.java
│   │   │   │   │   └───DayType.java
│   │   │   │   └───Services/
│   │   │   │       ├───ServiceHourService.java
│   │   │   │       └───ServiceHourServiceImpl.java
│   │   │   ├───Main/
│   │   │   │   ├───BackendApplication.java
│   ├───resources/
│   │   └───application.properties
│   ├───pom.xml
│
├───frontend/
│   ├───public/
│   ├───src/
│   │   ├───components/
│   │   │   ├───ParentComponent.tsx
│   │   │   ├───HeaderSection.tsx
│   │   │   ├───ContactSection.tsx
│   │   │   └───HoursSection.tsx
│   │   ├───App.tsx
│   │   └───index.tsx
│   ├───package.json
│   └───package-lock.json
│
├───README.md
```

## Installation & Running the Application

**Clone the repository:**

   ```bash
   git clone https://github.com/gulshanb098/service-hour.git
   ```
### Backend Setup
1. **Set up the backend:**
    * Ensure you have Java 17 or later installed.
    * Install Maven if not already installed.

2. **Build and run the backend:**
    ```bash
    cd backend/backend/
    mvn clean install
    mvn spring-boot:run
    ```
    This will run the backend server in http://localhost:8080

### Frontend Setup
1. **Set up the backend:**
    * Ensure you have Node installed.

2. **Build and run the frontend:**
    ```bash
    cd frontend/
    npm install
    npm start
    ```
    This will run the frontend app in http://localhost:3000

## Technologies Used

### Backend
* Java
* SpringBoot
* Maven

### Frontend
* React
* JavaScript (ES6+)
* CSS

![Support UI](https://github.com/gulshanb098/service-hour/blob/ff69455f99865eb2506c8cbf14840eac0cea02ea/frontend/public/project-screenshot.png?raw=true)