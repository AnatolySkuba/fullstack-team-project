Hello. This is the final team project of special Courses Full Stack developer
from GoIT School.

Layout:
https://www.figma.com/file/gMpt9ld3x4YjsdeaqtY4rt/BOOKS-READING-(Copy)?node-id=701%3A2

Technical task: FRONTEND

1. Markup and redirection when clicking the buttons of the first page (phone,
   tablet and desktop) Login/Register
2. Login/registration functionality using the "Google" Login/Register button
3. Markup of the login page, recording of data in the local state and processing
   of errors from the back (phone, tablet and desktop) Login/Register
4. Marking up the registration page, recording data in the local state and
   processing errors from the back (phone, tablet and desktop) Login/Register
5. Validation of registration/login fields before requesting the Library backup
6. Layout and functionality of the header (phone, tablet and desktop) Library
7. Implement the logic of exiting the profile when clicking the "Exit" button
   and show the Library warning modal
8. Modal window when visiting the Library page for the first time (phone, tablet
   and desktop) Library
9. Markup and functionality of inputs when adding a new book, perform validation
   (phone, tablet and desktop) Library
10. Marking of the "Add" button, the data is sent to the back and recorded on
    the page. Library
11. Marking and logic of sections "Read", "Reading", "Want to read" (phone,
    tablet and desktop) Library
12. Draw and implement the logic of the appearance of the modal in the "Summary"
    button of the Library
13. Markup and logic of the "Summary" modal, when you click "Save", the data is
    sent to the back and written to the page, the "Back" button (and ESC, and
    clicking outside the modal) closes the Library modal
14. Marking and logic of the "My goal to read" section (phone, tablet and
    desktop) Training
15. Styles and logic of the "My training" section, when you click "Add" the
    selected book is transferred to the list (phone, tablet and desktop)
    Training
16. Displaying a list of books (phone, tablet and desktop) Training
17. Styles and logic of the button "Start training" (phone, tablet and desktop)
    Training
18. Displaying the training schedule (phone, tablet and desktop) Training
19. Display and functionality of timers "Until the end of the year", "To the
    goal" Statistics
20. A list of books with a display of read data sent to the back and recorded in
    the page (phone, tablet and desktop) Statistics
21. Display and logic of the "Results" section: Date, Pages, when you click the
    "Add result" button, the data is sent to the backup and recorded on the
    page. Statistics
22. The "Statistics" section displays the results of pages read by date, upload
    information from the Statistics back
23. Displaying the "You're young" modal if the number of pages is less than the
    planned Statistics

BACKEND (standard version)

1. Deploy the server for development (connect modules, configure CORS, write a
   function to catch errors, etc.)
2. Discuss the structure, initialize and connect the database to the project
3. Create endpoint documentation using the swagger-ui-express package
4. Create a registration endpoint
5. Create an authentication endpoint
6. Write an authorization layer
7. Create a logout endpoint
8. Implement authorization through Google
9. Create an endpoint for adding a book to the library
10. Create an endpoint for adding a book review
11. Create a planning start endpoint
12. Create an endpoint for adding read pages to planning
13. Create an endpoint for receiving planning information
14. Create an endpoint for receiving user information

BACKEND (advanced version)

1. Deploy the server for development (connect modules, configure CORS, write a
   function to catch errors, etc.)
2. Discuss the structure, initialize and connect the database to the project
3. Create endpoint documentation using the swagger-ui-express package
4. Create a registration endpoint
5. Create an authentication endpoint
6. Write an authorization layer
7. Create a logout endpoint
8. Implement authorization through Google
9. Create an endpoint for adding a book to the library
10. Create an endpoint for adding a book review
11. Create a planning start endpoint
12. Create an endpoint for adding read pages to planning
13. Create an endpoint for receiving planning information
14. Create an endpoint for receiving user information
15. Create an endpoint with a refresh token, obtain a new pair of tokens,
    reverse the authorization logic using a refresh token
16. Implement the so-called "black listing" tokens, using an additional
    collection of sessions in the DB, linking the session and the token (via its
    body) together, deleting the session after logout and invalidating the token
    (additional validation)
