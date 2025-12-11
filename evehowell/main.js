const books = [
    {
        title: "Enchanting",
        img: "img/enchanting.png",
        para: "Eve Howell’s Enchanting follows Mira Ellwood, an archivist who inherits a peculiar lantern said to reveal “what the forest remembers.” When Mira returns to the remote woodland where her grandmother once lived, the lantern awakens spectral paths, half-formed memories, and fragments of forgotten magic woven into the trees themselves. As Mira searches for the truth behind her family’s buried history, she must navigate a world where memory behaves like a living creature—inviting, guiding, and sometimes deceiving. Enchanting blends quiet emotional tension with mythic atmosphere, exploring how the past illuminates the present in unexpected ways.",
    },
    {
        title: "Lightsides",
        img: "img/lightsides.png",
        para: "In Lightsides, Howell turns her attention to the shifting boundary between light and shadow in a contemporary city touched by lunar magic. The story centers on Theo Brannick, a restorer of antique clocks who begins noticing strange inconsistencies in time whenever the full moon rises. Drawn into a secret community of “Lunaris”—individuals whose inner lives are reflected in the phases of the moon—Theo must confront the parts of himself he’s long tried to silence. With her signature restraint, Howell uses subtle magical shifts to examine vulnerability, healing, and the cycles that govern human connection.",
    },
    {
        title: "Darksides",
        img: "img/darksides.png",
        para: "A tonal counterpoint to Lightsides, Darksides delves into the mythic architecture Howell is known for. The novel follows Selene Varrin, a historian who uncovers a ruined castle hidden beneath Chicago’s abandoned industrial district—a structure that should not exist. Inside its fractured halls dwells an ancient dragon bound to the city’s forgotten foundations. As Selene unravels the castle’s shifting layout and the dragon’s enigmatic purpose, she becomes entangled in a battle between legacy and transformation. The book explores how monstrous forces—internal and external—can both imprison and liberate those who confront them.",
    },
]

function displayedBook(books) {
    return `<h2>${books.title}</h2>
                <img src="${books.img}" alt="${books.title} by Eve Howell">
                <p>${books.para}</p>`
}

const inputhere = document.querySelector("#here");
inputhere.innerHTML = displayedBook(books[0])

const enchanting = books[0]
const lightsides = books[1]
const darksides = books [2]

document.addEventListener('DOMContentLoaded', () => {
const enchanthtml = document.querySelector('.enchanthtml');
const lighthtml = document.querySelector('.lighthtml')
const darkhtml = document.querySelector('.darkhtml')

enchanthtml.addEventListener('click', () => {
    console.log("clicked.")
    inputhere.innerHTML = displayedBook(books[0])
});

lighthtml.addEventListener('click', () => {
    console.log("clicked light.")
    inputhere.innerHTML = displayedBook(books[1])
});

darkhtml.addEventListener('click', () => {
    console.log("clicked dark.")
    inputhere.innerHTML = displayedBook(books[2])
});
});
