# NextJS_Tailwind

A blogging app that allows users to write a blog post consisting of a photo, title, and content. All posts are public. Only signed up users can write or edit their posts. 


## Screenshots
![Home-fs](https://user-images.githubusercontent.com/29540686/125395675-716ec480-e3e6-11eb-8291-9267d9cc78bf.JPG)

![signin-fs](https://user-images.githubusercontent.com/29540686/125395794-9a8f5500-e3e6-11eb-9b5d-4f5f28496e72.JPG)

![edit-fs](https://user-images.githubusercontent.com/29540686/125395807-9fec9f80-e3e6-11eb-98cd-df551fd7dd76.JPG)

![Home-mb](https://user-images.githubusercontent.com/29540686/125395828-a7ac4400-e3e6-11eb-829d-3c38a8c64729.JPG)

![signin-mb](https://user-images.githubusercontent.com/29540686/125395854-b135ac00-e3e6-11eb-9b0f-9681e28a3898.JPG)

![edit-mb](https://user-images.githubusercontent.com/29540686/125395890-bbf04100-e3e6-11eb-8bb0-1aeb586bb8bb.JPG)


## Installation
This app has not been deployed yet. To use it locally: 
- Download the repo
- create a local postgres database and run the db file 'create-db.sql' to create the tables.
- add a .env file to the app directory with the following variables for the db you created:
  - DB_USER
  - DB_PW
  - DB_NAME
  - JWT_SECRET
  - REFRESH_SECRET
- create an s3 bucket on AWS and add the following variables to your .env file
  - AWS_REGION
  - AWS_BUCKETNAME
  - AWS_ACCESSIDKEY
  - AWS_SECRETACCESSKEY
- cd into the api directory and 'npm install'. 
- run 'npm run dev' to start the local server at localhost:4000
- cd into the app directory and 'npm install'.
- run 'npm run dev' to start the frontend server at localhost:3000.
- open localhost:3000 in your browser.

## Technologies used
- Next.js
- React
- TypeScript
- TailwindCSS
- PostgreSQL
- Node.js
- Express
