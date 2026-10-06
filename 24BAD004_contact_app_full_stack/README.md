# Contact Management System

## Overview

The Contact Management System is a web application developed using Node.js, Express.js, MongoDB and Mongoose. It allows users to create, view, update and delete personal and professional contacts through a REST API and a simple web interface.

## Setup Instructions

1. Install the required dependencies:

    npm install

2. Create a .env file in the root directory with the following content:

    PORT=3000
    MONGO_URI=mongodb://127.0.0.1:27017/contact_management

3. Start the server:

    npm run dev

Once the message "Server is running on port 3000" is displayed, the application can be accessed in the browser.

## Contact Schema

- contactId: String, unique
- name: String, required
- phone: String, required, must contain exactly 10 digits
- email: String, unique, must be in a valid email format

## API Endpoints

- POST /contacts: Adds a new contact
- GET /contacts: Retrieves all contacts
- GET /contacts/:id: Retrieves a contact by its contactId
- PUT /contacts/:id: Updates the details of a contact
- DELETE /contacts/:id: Deletes a contact

The parameter :id refers to the contactId of the contact, for example /contacts/C001.

## Example Request and Response

Request: POST /contacts

    {
      "contactId": "C001",
      "name": "Adhithya",
      "phone": "9876543210",
      "email": "adhithya@gmail.com"
    }

Response:

    {
      "success": true,
      "data": {
        "contactId": "C001",
        "name": "Adhithya",
        "phone": "9876543210",
        "email": "adhithya@gmail.com"
      }
    }

## Error Handling

If the input fails validation, the API returns a 400 status code with a descriptive message:

    {
      "success": false,
      "message": "Validation failed",
      "errors": ["phone must be exactly 10 digits"]
    }

A duplicate contactId or email returns a 409 status code. A request for a contact that does not exist returns a 404 status code.

## Testing

All API endpoints were tested using Thunder Client. Validation errors for an invalid phone number, an invalid email and duplicate entries were also verified.

K. Adhithya (24BAD004)