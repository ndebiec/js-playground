function Book(title, pages, author, read) {
  this.title = title
  this.pages = pages
  this.author = author
  this.read = read
}

Book.prototype.info = function() {
  let isRead = this.read ? ', already read.' : ', not read yet.'
    console.log(this.title + " by " + this.author + ", " + this.pages + " pages" + isRead)
  }

const ann = new Book('Ann from Green Gables', '274', 'Lucy Maud Montgomery', true);

ann.info();
