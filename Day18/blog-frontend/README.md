Setup: 
1. Do npm install express mongoose cors #this will be for the server.js
2. Do npm install axios
3. Download MongoDB if you don't already have it, MongoDBCompass will be the easiest to work with alongside mongosh
4. Setup the tables for mongoDB to interact with. If you want the same collection, you'll need to name it posts and then make sure that you are posting to MongoDBCompass or Postman with a title and body for each data point.
5. In server.js change the port if you want and change the connection to ensure you are connecting with your database
6. In blog-backend, do npm install nodemon and then do npm nodemon server.js to run the server
7. In blog-frontend, do npm start to start the the website

Working App:
https://video.atu.edu/media/Demo/1_20v986hx

New Features:
Delete button: Each post that is printed will now include a delete button that will delete the post from the website and the database. It is set up in the server.js to delete by id that way the user can't accidentally delete the wrong post.

Edit button: Each post now includes an edit button that allows a user to change a post. It also uses the id to edit. With the edit button, made a variable called isEditing that will be set to true if the edit button is clicked. This changes the website to say 'Edit Post' instead of 'Create a Blog Post'. It adds new buttons to the form also. It changes 'Submit Post' to 'Update Post' and adds a 'Cancel Post button'

Update Post Button: sends an update to the post that was selected.

Cancel Post Button: changes 'isEditing' to false to shift the website back into 'Create a Blog Post' mode for the form.

Windows Confirmation: in App.js, made a new handleDelete function that includes a windows pop-up for delete confirmation. 

Timestamps: added timestamps by including them in the schema for the posts. It is an option that you can set to true, it will set createdAt and updatedAt values, but we only access the createdAt values in the rest of the code.

Loading "Spinner": created a variable, 'loading' that is set to false by default. It is updated when the useEffect attempts to pull the posts from the database. While loading, it just prints on the screen "Loading..." and doesn't print any of the normal data. It's not really a spinner, just a message that lets you know that the website is loading.

Some light CSS just to make the website look a little more colorful and give the buttons some flavor.

