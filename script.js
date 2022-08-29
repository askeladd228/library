let myLibrary = [];

function Book(author, title, pages, read) {
  this.Author =  author;
  this.Title = title;
  this.Pages = pages;
  this.Status = read;
};

Book.prototype.readStatus = function () {
  if (this.Status == 'Read') {
    this.Status = 'Not Read'
  } else this.Status = 'Read'
};

function addBookToLibrary() {
  const userBook = new Book(
    document.getElementById('author').value,
    document.getElementById('title').value,
    document.getElementById('pages').value,
    document.querySelector('input[name="drone"]:checked').value
  );
  myLibrary.push(userBook);
};

const libraryContainer = document.querySelector('.libraryContainer');
const buttonDisplay = document.querySelector('.display');
const buttonCreate = document.querySelector('.create');

function displayLibrary() {
  libraryContainer.replaceChildren();

  myLibrary.forEach(object => {
    function callReadStatus() {
      object.readStatus();
    }
    let bookContainer = document.createElement('div');
    let buttonRemove = document.createElement('button');
    let buttonToggle = document.createElement('button');

    libraryContainer.appendChild(bookContainer);
    bookContainer.classList.add('bookContainer');

    bookContainer.appendChild(buttonRemove);
    buttonRemove.textContent = 'Remove';
    buttonRemove.classList.add('create');
    buttonRemove.addEventListener('click', () => {
      libraryContainer.removeChild(bookContainer);
      myLibrary.splice(myLibrary.indexOf(object), 1);
    });

    for (const key in object) {
      let book = document.createElement('div');
      if (key == 'readStatus') continue;
      if (key == 'Status') {
        book.textContent = `${key}: ${object[key]}`;
        bookContainer.appendChild(book);
        book.classList.add('status');

        bookContainer.appendChild(buttonToggle);
        buttonToggle.classList.add('toggle');
        buttonToggle.textContent = 'Change Read Status';
        buttonToggle.addEventListener('click', () => {
       
          if (book.textContent == 'Status: Not Read') {
            book.textContent = 'Status: Read';

          } else book.textContent = 'Status: Not Read';
        });

        buttonToggle.addEventListener('click', callReadStatus);
      } else {
          book.textContent = `${key}: ${object[key]}`;
          bookContainer.appendChild(book);
      };
    };


  });
};

buttonDisplay.addEventListener('click', displayLibrary);
buttonCreate.addEventListener('click', addBookToLibrary);
buttonCreate.addEventListener('click', () => {
  form.reset();
});

const form = document.getElementById('myForm');