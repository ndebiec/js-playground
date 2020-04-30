function Book(title, pages, author, read) {
  this.title = title
  this.pages = pages
  this.author = author
  this.read = read
  this.info = function() {
  let isRead = read ? ', already read.' : ', not read yet.'
    console.log(title + " by " + author + ", " + pages + " pages" + isRead)
  }
}

const ann = new Book('Ann from Green Gables', '274', 'Lucy Maud Montgomery', true);

ann.info();
