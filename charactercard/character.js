document.addEventListener("DOMContentLoaded", () => {
const card = [{
    class: "Swamp Beast Diplomat",
    level: 5,
    health: 100,

},
];

// function levelup(level) {
//     const levels = this.level.find((levels) => level == level);
// if (levels) {
//     levels.levelup++;
//     levelup(this.level);
// }
// }

function charactercard(card) {
    return `<p><strong>Class: ${card.class}</strong></p>
    <p><strong>Level: ${card.level}</strong></p>
    <p><strong>Health: ${card.health}</strong></p>`
};

const levelcontain = document.querySelector(".stats");
levelcontain.innerHTML = charactercard(card[0])

document.querySelector(".htmllevel").addEventListener("click", ()=> {
    card[0].level += 1;
    levelcontain.innerHTML = charactercard(card[0]);
})

document.querySelector(".htmlhealth").addEventListener("click", ()=> {
    card[0].health = Math.max(0, card[0].health - 20);
    levelcontain.innerHTML = charactercard(card[0]);
    if (card[0].health === 0) {
        alert("Character Died")
    }
})
});