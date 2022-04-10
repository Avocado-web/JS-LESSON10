"use strict";

const booksList = document.querySelectorAll(".book");
const booksTitle = document.querySelectorAll(".book > h2 > a");
const body = document.querySelector("body");
const ads = document.querySelectorAll("div");
const bookList = document.querySelectorAll("ul");
const bookListItems = document.querySelectorAll("li");
const NewElemBookList = document.createElement("li");

booksList[1].after(booksList[0]);

booksList[4].after(booksList[3]);

booksList[5].after(booksList[2]);

body.style.backgroundImage = "url(./image/you-dont-know-js.jpg)";

booksTitle[4].textContent = "Книга 3. this и Прототипы Объектов";

ads[6].remove(".adv");

NewElemBookList.textContent = "Глава 8: За пределами ES6";
bookList[2].append(NewElemBookList);

// book 2
bookListItems[1].after(bookListItems[3]);
bookListItems[3].after(bookListItems[6]);
bookListItems[6].after(bookListItems[8]);
bookListItems[9].after(bookListItems[2]);

// book 5
bookListItems[47].after(bookListItems[55]);
bookListItems[55].after(bookListItems[49]);
bookListItems[50].after(bookListItems[48]);
bookListItems[53].after(bookListItems[51]);

bookListItems[25].after(NewElemBookList);

console.log(NewElemBookList);
console.log(bookListItems);