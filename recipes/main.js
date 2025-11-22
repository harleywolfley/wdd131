// Math.floor(Math.random()*5)
import recipes from "./recipes.mjs"

function random(num) {
    return Math.floor(Math.random() * num)
}

function getRandomList(list) {
    const listLen = list.length;
    const randomNumber = random(listLen);
    return list[randomNumber];
}

console.log(getRandomList(recipes))

function renderTagList(tags) {
    const html = tags.map((tag) => `<li>${tag}</li>`)
    return html.join("")
}

function ratingTemplate(rating) {
	let html = `<span
	class="rating"
	role="img"
	aria-label="Rating: ${rating} out of 5 stars">`
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            html += `<span aria-hidden="true" class="icon-star">⭐</span>`
        } else {
               html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`
           }
       }
       
       html += `</span>`
       return html
}


function recipeTemplate(recipe) {
    return `
    <section class="card">
            <img src="${recipe.image}">
            <div>
            <div class="tags">
                <ul>
                    ${renderTagList(recipe.tags)}
                </ul>
            </div>
            <h3 class="name">${recipe.name}</h3>
            ${ratingTemplate(recipe.rating)}
            <p class="description hide">${recipe.description}</p>
            </div>
        </section>`;
}

function renderRecipes(recipeList) {
	const card = document.getElementsByClassName("card")[0]
    const html = recipeList.map(recipe => recipeTemplate(recipe)).join("")
    card.innerHTML = html
}

function filterFunction(recipe, query) {
    return recipe.name.toLowerCase().includes(query) ||
           recipe.description.toLowerCase().includes(query) ||
           recipe.tags.some(tag => tag.toLowerCase().includes(query))
}

function sortFunction(a, b) {
    return a.name.localeCompare(b.name)
}

function init() {
  const recipe = getRandomList(recipes)
  renderRecipes([recipe]);
const searchForm = document.querySelector('form')
searchForm.addEventListener('submit', searchHandler)
}
init();

// function filter(query) {
// 	const filtered = recipes.filter(recipe => filterFunction(recipe, query))
// 	const sorted = filtered.sort(sortFunction)
// 		return sorted
// }

function searchHandler(e) {
	e.preventDefault()
	const searchBar = document.querySelector('input[type="search"]')
    const query = searchBar.value.toLowerCase()
    const filteredRecipes = filter(query)
    renderRecipes(filteredRecipes)
}