class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [2, 3, 6];
  }

  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  get ratings() {
    return this._ratings;
  }

  toggleCheckOutStatus() {
    return this._isCheckedOut != this._isCheckedOut;
  }

  addRating(rating) {
    this._ratings.push(rating);
  }

  getAverageRating() {
    let average =
      this._ratings.reduce((a, b) => a + b, 0) / this._ratings.length;
    console.log(average);
    this._ratings = average;
  }
}

class Book extends Media {
  constructor(title, author, pages) {
    super(title);
    this._pages = pages;
    this._author = author;
  }

  get pages() {
    return this._pages;
  }

  get author() {
    return this._author;
  }
}

class Movie extends Media {
  constructor(title, director, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  get director() {
    return this._director;
  }

  get runTime() {
    return this._runTime;
  }
}

class CD extends Media {
  constructor(artist) {
    super(title);
    this.songs = [];
  }
}

const tenPrecentHappier = new Book('10% Happier', 'Dan Harris', 261);

tenPrecentHappier.toggleCheckOutStatus();
console.log(tenPrecentHappier.isCheckedOut);
tenPrecentHappier.addRating(4);
tenPrecentHappier.addRating(5);
tenPrecentHappier.addRating(3);
tenPrecentHappier.addRating(5);
tenPrecentHappier.getAverageRating();
