const books = [
    {
        date: "July 5, 2022",
        age: "10-14",
        genre: "Fantasy",
        stars: "⭐⭐⭐⭐",
        title: "Septimus Heap Book One: Magyk",
        img: "https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg",
        alt: "Book cover for Septimus Heap 1",
        description: "If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.",
    },
    {
        date: "December 12, 2021",
        age: "12-16",
        genre: "Fantasy",
        stars: "⭐⭐⭐⭐",
        title: "Magnus Chase Book One: Sword of Summer",
        img: "https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300",
        alt: "Book cover for Magnus Chase 1",
        description: "The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.",
    },
    {
        date: "Feb 12, 2022",
        age: "12-16",
        genre: "Fantasy",
        stars: "⭐⭐⭐⭐⭐",
        title: "Belgariad Book One: Pawn of Prophecy",
        img: "https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
        alt: "Book cover for Pawn of Prophecy",  
        description: "A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
    }
];

books.forEach(book => {

})

function bookTemplate(book) {
    return `<div class="left">
        <p class="date">${book.date}</p>
        <p>${book.age}</p>
        <p>${book.genre}</p>
        <p>${book.stars}</p>
        </div>
        <div>
        <h2>${book.title}</h2>
        <img src="${book.img}" alt="${book.alt}">
        <p>${book.description}</p>
        </div>`
}

const htmlStrings = books.map(bookTemplate)
document.querySelector("#maincontent").innerHTML = htmlStrings.join("")

console.log(htmlStrings)