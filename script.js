let myLibrary = [];

function Book(author, title, pages, read) {
  this.Author =  author;
  this.Title = title;
  this.Pages = pages;
  this.Status = read;
};

// Book.prototype.readStatus = function () {
//   let buttonToggle = document.createElement('button');
//   buttonToggle.addEventListener('click', () => {
//     if (this.read == true) {
//       this.read == false;
//     }
//   });
// };

function toggleReadStatus () {
  if (this.Status == 'Read') {
    this.Status = 'Not Read';
  } else if (this.Status == 'Not Read') {
      this.Status = 'Read';
  };
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
      if (key == 'Status') {
        book.textContent = `${key}: ${object[key]}`;
        bookContainer.appendChild(book);
        book.classList.add('status');
      } else {
          book.textContent = `${key}: ${object[key]}`;
          bookContainer.appendChild(book);
      };
    };

    const readStatus = document.getElementsByClassName('status');

    bookContainer.appendChild(buttonToggle);
    buttonToggle.classList.add('toggle');
    buttonToggle.textContent = 'Change Read Status';
    buttonToggle.addEventListener('click', toggleReadStatus);
    buttonToggle.addEventListener('click', () => {
   
      if (readStatus.innerHTML == 'Status: Read') {
        readStatus.innerHTML = 'Status: Not Read'
      } else readStatus.innerHTML = 'Status: Read';
      readStatus.innerHTML = '';
    });
  });
};

buttonDisplay.addEventListener('click', displayLibrary);
buttonCreate.addEventListener('click', addBookToLibrary);
buttonCreate.addEventListener('click', () => {
  form.reset();
});

const form = document.getElementById('myForm');