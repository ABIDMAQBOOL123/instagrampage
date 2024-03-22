Express Web Application
This is an Express web application built with Node.js. It serves static files from a "public" directory and implements various routes for different functionalities.

Usage
Clone or download the repository to your local machine.
Install dependencies using npm install.
Run the server with node app.js.
Access the application in your web browser at http://localhost:8080.
Features
Serves static files from the "public" directory.
Implements routes for different functionalities:
/: Renders the home page.
/hello: Sends a simple "hello" message.
/ig/:username: Renders an Instagram-like page based on a provided username.
/rolldice: Renders a page showing a randomly rolled dice.
Dependencies
Express: Web framework for Node.js.
EJS: Embedded JavaScript templates for rendering dynamic content.
Path: A utility for working with file and directory paths.
File Structure
app.js: Main file containing the Express application setup and route definitions.
public/: Directory containing static files such as CSS, JavaScript, and images.
views/: Directory containing EJS templates for rendering dynamic content.
data.json: JSON file containing data for the Instagram-like page.
Routes
/: Renders the home page.
/hello: Sends a simple "hello" message.
/ig/:username: Renders an Instagram-like page based on the provided username.
/rolldice: Renders a page showing a randomly rolled dice.


Author
[abid maqbool]

