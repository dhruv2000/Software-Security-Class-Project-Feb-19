# Software-Security-Class-Project-Feb-19

## Set up the Database

1. Download MongoDb for localhost

Go to link and download mongodb: https://www.mongodb.com/try/download/community

2. Add this to the path environment variable if not already added. You may have to close the terminal and restart vs code if you are using vscode. Alternatively, if the next few commands don't work, restart your computer after installing mongodb

3. Create a folder in the directory called 'db' to store the mongodb database files locally

4. Run: 'mongod -port 5555 -dbpath ./db' to set Up the database locally via command line

This will set up the database to localhost:5555

## Running on local host

Open up a new terminal while the other one is running the db and run: 'node ./backend.js' to start the application. It should run on localhost:3000

## Other Submission Information

We have the gif of the run through of the app and the WriteUp.txt in this directory. That should be all the information needed for the submission and to be able to run our code locally.

## Authors
Dhruv Patel
Shaun Fidler
Dylan Booth
Chance Onyiorah
