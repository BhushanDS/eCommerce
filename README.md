# Welcome to eCommerce Website : OneShop!

This is a full-stack eCommerce web application built with Angular for the frontend and Spring Boot for the backend. The application supports features like product browsing, shopping cart management, order processing, and user authentication.


# Table of Contents

-   [Features](#features)
-   [Tech Stack](#tech-stack)
-   [Setup](#setup)
-   [Frontend (Angular)](#frontend-angular)
-   [Backend (Spring Boot)](#backend-spring-boot)
-   [Database](#database)
-   [Running the Application](#running-the-application)


## Features

-   User Registration and Authentication
-   Product Catalog with Categories
-   Shopping Cart Management
-   Order Processing and Payment Integration
-   Admin Panel for Product Management
-   Responsive Design

## Tech Stack

-   **Frontend:** Angular, TypeScript, Bootstrap
-   **Backend:** Spring Boot, Java, RESTful APIs
-   **Database:** MySQL
-   **Other:** Maven, Hibernate, JWT (for security)

## Setup

-   **Node.js** (v14.x or later)
-   **Angular CLI** (v12.x or later)
-   **Java** (JDK 11 or later)
-   **Maven**
-   **MySQL/PostgreSQL** (or any other relational database)

## Installation

-   Clone the repository:
    ```bash
     git clone https://github.com/BhushanDS/eCommerce.git
     cd ecommerce
    ```
-   Install Angular dependencies:
       ```bash
      cd frontend
      npm install
    ```
    
-   Install Java dependencies:
     

## Frontend (Angular)

### Development Server

Navigate to the `frontend/angular-ecommerce` directory and start the Angular development server:
```bash
     cd frontend
     ng serve
   ```
http://localhost:4200/

## Backend (Spring Boot)
### ### Application Properties
Configure the database and other settings in `src/main/resources/application.properties`:
```bash
spring.application.name=spring-boot-ecommerce  
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver  
spring.datasource.url=jdbc:mysql://localhost:3306/full-stack-ecommerce?useSSL=false&useUnicode=yes&characterEncoding=UTF-8&allowPublicKeyRetrieval=true&serverTimezone=UTC  
spring.datasource.username=ecommerceapp  
spring.datasource.password=ecommerceapp  
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect  
spring.data.rest.base-path=/api
   ```
### Running the Backend

Navigate to the `backend` directory and start the Spring Boot application:
```bash
     cd backend
     mvn spring-boot:run
   ```

The backend API will be available at `http://localhost:8080/api`

## bACKEND



## UML diagrams
