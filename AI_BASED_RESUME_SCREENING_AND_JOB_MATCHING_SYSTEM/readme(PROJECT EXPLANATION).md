project- AI based Resume Screening & Job Matching System .

1. There is a public folder included a file name main.html is used as show the company website it have it own main.css and main.js . main.html includes 2 button Admin Login and Client Login.

Let us discuss one by one

A. Client login: On click at client login google authuntication activated that file and API in main.js . It made using GoogleFirebase where it login using Google account . Inside it a job form appear named index.html having style.css and script.js all used to made form and its js to send data of form in backend.

index.html form have all the file feature like text area , text , number, tel , email , dropdown , if other a textbox appear , required field.
style.css work on its animation, styling , scrolling and its effects.
while, script.js work to move data to its locaation where server handle error and data stores in its data base.

Now, we have other folder name models includes file users.js where the json format and structure of mongoDB is stored where the data is stored.We use the MongoDB to store our data.

B. Server: Server used to host webpage. It also used to store data from frontend to backend in Mongodb . It handles errors. It has built an AI function that scores resume according to its data . Also it used to show data on admin side. We used express and node to save data in backend and used package.json

C. Admin login: On click at admin button. It switch to login.html where it search verification username and password. If it correct then it switch at list.html having its list.css and list.js that fetch data from server and show all the field resume according to its scores that help to enlist the resume saving lot of time.

All the linking based on the server port and local host.

Basically, There are thousands of resume sends on server its very hard to check manually, so my project take all the rsponse and arrange them according to their job profile. It saves lot of time.