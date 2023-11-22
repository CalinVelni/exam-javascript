const book = {
    title: "Il Grande Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
};

book.rating = 6;

book.increaseRating = function (n) {

    const newRating = this.rating + n;  /* avremmo potuto aggiungere 'Number(n)' per accettare anche un valore numerico scritto sotto forma di stringa */

    this.rating = newRating <= 10 ? newRating : 10;  /* per un ulteriore controllo avremmo potuto verificare newRating con 'isNaN()' e nel caso non modificare il rating */
};

delete book.year;

const entries = Object.entries(book);

entries.forEach( entry => {

    const key = entry[0];

    const value = entry[1];

    console.log(`${key}: ${value}`);
});

