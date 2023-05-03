const searchFood = () => {
    const searchfield = document.getElementById('search-field')
    const searchText = searchfield.value
    // console.log(searchText)


    searchfield.value =""

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s= ${searchText} `

    fetch(url).then(res => res.json())
    .then(data => displaySearchResults(data.meals))
}

const displaySearchResults = meals =>{
    console.log(meals);
const searchResult = document.getElementById('search-result')


meals.forEach(meal => {
    console.log(meal);
    const div = document.createElement('div')
    div.classList.add('col')
    div.innerHTML=`
    <div class="card">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">

        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
          <button >${meal.strSource}</button>
        </div>
      </div>`
      searchResult.appendChild(div)
})


}