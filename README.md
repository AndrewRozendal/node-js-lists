Introduction
==============
## First clone:
Because this project contains another project (https://github.com/AndrewRozendal/capstoneEPortfolio) as a git submodule, when cloning this project for the first time
use:  

`git clone --recursive https://github.com/AndrewRozendal/node-js-lists.git`

If already have the repo cloned use:  

`git submodule update --init --recursive`

## .env File:
You must create a .env file in /app/ with the following content:
Note: gitignore will ignore all .env files in the project since they contain credentials.

`NODE_ENV:production` or `NODE_ENV:development`


## Routes:

Lists: lists.andrewrozendal.ca

| Controller | Page / Screen                          | URL Endpoint                        | Implemented    | Remarks |
| ---------- |----------------------------------------|-------------------------------------| ---------------|---------|
| Books      |List of All Books                       |/                                    | Yes            |
|            |Get Book Details                        |/book/:bookid                        | Yes            |
|            |List of Books in User Reading List      |/books/reading-list/                 | Partially      | Assume same user for now
| Others     |About App                               |/about                               | Yes            |
|            |Thank You Page                          |/about/thank-you                     | No             |
| Admin      |Admin Home Page                         |/admin/                              | Partially      | No Login
|            |Add book to the database                |/admin/add-book-to-library/          | Yes            |
|            |Remove book from database               |/admin/remove-book-from-library/     | Yes            |

E-Portfolio: andrewrozendal.ca

| Controller | Page / Screen                          | URL Endpoint                        | Implemented    | Remarks |
| ---------- |----------------------------------------|-------------------------------------| ---------------|---------|
| ePortfolio | Home Page | / | Yes | |
| ePortfolio | About Me | /about | Yes | |
| ePortfolio | Resume | /resume | Yes | |
| ePortfolio | Examples | /examples | Yes | |
| ePortfolio | Blog | /blog | No | |
| ePortfolio | Contact Me | /contact | Yes | |

API Layouts:

| Controller | Page / Screen                          | HTTP VERB  | API URL Endpoint                               | Implemented   | Remarks |
| ---------- |----------------------------------------| -----------|------------------------------------------------| --------------|---------|
| Books      |List of All Books                       |GET         |/api/books                                      | Yes           |
|            |Get Book Details                        |GET         |/api/books/book-details/:bookid                 | Yes           |
|            |List of Books in User Reading List      |GET         |/api/books/reading-lists/                       | Partially     | Assume same user for now
|            |Add book to user reading list           |POST        |/api/books/reading-lists/:userid/books/         | Partially     | Assume same user for now
|            |Remove book from reading list           |POST        |/api/books/reading-lists/:userid/books/:bookid  | Partially     | Assume same user for now
| Others     |About App                               |GET         |/api/about                                      | No            |
| Admin      |Admin Home Page                         |GET         |/api/admin/:adminid                             | No            |
|            |Login to Admin                          |POST        |/api/admin/:adminid                             | No            |
|            |Add book to the database                |POST        |/api/admin/add-book-to-library/                 | Yes           |
|            |List all books that can be removed      |GET         |/api/books                                      | Yes           |
|            |Remove book from database               |DELETE      |/api/admin/remove-book-from-library/:bookid     | Yes           |

## Miscellaneous:

### Useful Resources:

Online Sandbox for HTML, CSS & JS (supports pug)
https://codepen.io/pen/

Pug Generator
http://html2jade.org/

### To add npm module:  
`winpty docker exec -it node bash
npm install packageName --save`

### For local development:  
With subdomains, needed to add following to hosts file:  
`127.0.0.1	localhost.local`  
`127.0.0.1	lists.localhost.local`  
`127.0.0.1	api.localhost.local`  