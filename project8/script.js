const search = document.getElementById('search');
const submit = document.getElementById('submit');
const random = document.getElementById('random');
const resultHeading = document.getElementById('result-heading');
const meals = document.getElementById('meals');
const selecteMeal = document.getElementById('selected-meal');

// functions:
// 1.Function to search meal using Api
function searchMeal(e) {
    // prevent form submition and redirect
    e.preventDefault();
    // get the value from search input fields
    const searchText = search.value;
    console.log(searchText);
    // check if search field is empty
    if(searchText.trim()){
        //fetch data from Api
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
           .then(res => res.json())
           .then(data =>{
                // show search result Heading
               resultHeading.innerHTML = `<h2>Search result for ${searchText}</h2>`
               // Check if search is found calling Api
               if(data.meals === null){
                resultHeading.innerHTML = `<h2>Search result not Found for ${searchText}</h2>`

               } else{
                meals.innerHTML = data.meals.map(meal => `
                    <div class="meal">
                        <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
                        <div class="meal-info" data-mealId="${meal.idMeal}">
                            <h4>${meal.strMeal}</h4>
                        </div>
                    </div>
                `)
                .join('')
               }
           })
    } else{
        alert('Please Enter search keywords');
    }
}

// function to get data from meal id:
function getMeal(mealId){
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
         .then(res => res.json())
         .then(data=>{
             const meal = data.meals[0];
             //Render in Ui
             displayMealDetails(meal);
         });
}

// Function to render meal details in UI
function displayMealDetails(meal){
    //clear search results:
    meals.innerHTML='';
    resultHeading.innerHTML='';

    //Array to hold ingridiants and measurements
    const ingidients = [];
    // loop over ingredients Attribute
    for ( let i=1; i <=20; i++ ){
        // check if ingridiants Exists
        if(meal[`strIngredient${i}`]){
            ingidients.push(`${meal[`strIngredient${i}`]}: ${meal[`strMeasure${i}`]}`);
        }
        else{
            break;
        }
    };

    //Render data into UI
    selecteMeal.innerHTML = `
        <div class="selected-meal-details">
        <h1>${meal.strMeal}</h1>
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
        <div class="selected-meal-info">
        ${meal.strCategory? `<p>${meal.strCategory} </p>`:''}
        ${meal.strArea ? `<p>${meal.strArea}</p>` : '' }
        </div>

        <div class="selected-meal-instructions">
            <p>${meal.strInstructions}</p>
            <h3>Ingridiants</h3>
            <ul>
            ${ingidients.map(ingredient=>
               ` <li>${ingredient}</li> `).join('')}
            </ul>
        </div>

        </div>
    `
}






// Event Listners:
// 1.Event Listner for submit 
submit.addEventListener('submit',searchMeal);
// 2. liten for click on meals
meals.addEventListener('click',e=>{
    const mealinfo = e.path.find(item=>{
        if(item.classList){
            return item.classList.contains('meal-info');
        }
        else{
            return false;
        }
        
    });
    // check of mealinfo exist:
    if(mealinfo){
        var mealId = mealinfo.getAttribute('data-mealId');
    }
    //fetch details of meal
    getMeal(mealId);
});
