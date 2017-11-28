Useful Resources:

Online Sandbox for HTML, CSS & JS (supports pug)
https://codepen.io/pen/

Pug Generator
http://html2jade.org/

Route Layouts:

| Collection | Page / Screen                          | HTTP VERB  | URL Endpoint |
| ---------- |----------------------------------------| -----------|----------------------------------------|
| Books      |List of All Books                       |GET         |/api/books
|            |Get Book Details                        |GET         |/api/book-details/:bookid
|            |List of Books in User Reading List      |GET         |/api/books/reading-list/:userid
|            |Add book to user reading list           |POST        |/api/books/reading-list/:userid/:bookid
|            |Remove book from reading list           |POST        |/api/books/reading-list/:userid/:bookid
| Others     |About App                               |GET         |/api/about
| Admin      |Admin Home Page                         |GET         |/api/admin/:adminid
|            |Login to Admin                          |POST        |/api/admin/:adminid
|            |Add book to the database                |PUT         |/api/admin/add-book-to-library/
|            |Remove book from database               |DELETE      |/api/admin/remove-book-from-library/:bookid