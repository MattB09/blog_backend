# Blog backend with NodeJS & Express

This repo is the backend portion of a blogging app that allows users to write a blog post consisting of a photo, title, and content. All posts are public. Only signed up users can write or edit their posts. 

The backend is hosted here: https://www.mjbblogbackend.com
The app is here: https://next-js-tailwind-three.vercel.app/

## Authentication overview.

Login is handled by JWT authentication. Once a user logs in, they receive an access token in the body of the response, and a refresh token as an HTTP Only cookie. A refresh timer is triggered on login and will silenty refresh the access token as long as a valid refresh token is present (in the form of the HTTP Only cookie) when making the refresh_token call. The access token provides access to api endpoints protected by an authentication middleware.

## API Documentation

To be done completed later

// auth routes  
routes.post('/login', login)  
routes.post('/signup', signup)  
routes.post('/logout', logout)  
routes.post('/refresh_token', authenticateRefresh, refreshToken)

// get stories, by id, and by user id  
routes.get('/stories', getStories)  
routes.get('/stories/:id', getStory)  
routes.get('/users/:id', getUserStories)  

// add, edit, or delete a story  
routes.post('/stories', authenticate, addStory)  
routes.put('/stories/:id', authenticate, editStory)  
routes.delete('/stories/:id', authenticate, deleteStory)  

// s3 upload url  
routes.get('/s3upload/:filename', getUploadUrl)

## Installation
To be used in combination with the frontend https://github.com/MattB09/Blog_frontend. To install for local development:

- Clone the repo
- Create a postgres database and run the db file 'create-db.sql' to create the tables in the database.
- add a .env file to the root directory with the following variables for the db you created:
  - DB_USER
  - DB_PW
  - DB_NAME
  - JWT_SECRET
  - REFRESH_SECRET
- create an s3 bucket on AWS and add the following variables to your .env file (for storing photos and saving the photo_urls in your database.)
  - AWS_REGION
  - AWS_BUCKETNAME
  - AWS_ACCESSIDKEY
  - AWS_SECRETACCESSKEY
- Cd into the root directory and 'npm install'. 
- Run 'npm run dev' to start the local server at localhost:4000

## Technologies used
- Node.js
- TypeScript
- PostgreSQL
- Express
- JsonWebToken
- AWS S3
- AWS Elastic Beanstalk
