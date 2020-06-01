document.addEventListener("DOMContentLoaded", function () {

    let searchBox = document.querySelector(".a");
    let resBox = document.querySelector(".b");
    let input = document.createElement('input');
    let button = document.createElement('button');
    let buttonText = document.createElement('p');
    let dropDown = document.createElement('select');

    let url = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?number=25&query=";
    let urlv = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?number=25&diet=vegetarian&query=";
    let urlp = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?number=25&diet=pescetarian&query=";

    input.type = 'text';
    buttonText.textContent = 'Click Here To Search';
    dropDown.classList.add('s');
    dropDown.innerHTML = '<select><option>Filters</option><option value="v">Vegetarian</option><option value="p">Pescetarian</option></select>';

    searchBox.append(input);
    searchBox.append(button);
    searchBox.append(dropDown);
    button.append(buttonText);

    const fetchApi = () => {

        resBox.innerHTML = '';

        let drop = document.querySelector('.s');

        if (drop.value === 'v') {
            fetch((urlv + input.value), {
                    "method": "GET",
                    "headers": {
                        "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
                        "x-rapidapi-key": "5f40ca8719msh2c3f730f3bf4e8ap12d387jsne443e243370e"
                    }
                })
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {

                    for (i = 0; i < data.results.length; i++) {
                        let name = data.results[i].title;
                        let image = 'https://spoonacular.com/recipeImages/' + data.results[i].image;
                        let serving = data.results[i].servings;
                        let time = data.results[i].readyInMinutes;
                        let link = data.results[i].sourceUrl;
                        let recipe = document.createElement('div');
                        recipe.innerHTML = '<div><p>' + name + '</p><p>Serving Size: ' + serving + '</p><p>Total: ' + time + ' min</p>' + '<span><a href=' + link + '>Recipe</a></span>' + '</div><div><a href=' + image + '><img src="' + image + '" /></a></div>';
                        resBox.append(recipe);
                    }
                }).catch(function (err) {
                    console.log('err' + err);
                });

        } else if (drop.value === 'p') {
            fetch((urlp + input.value), {
                    "method": "GET",
                    "headers": {
                        "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
                        "x-rapidapi-key": "5f40ca8719msh2c3f730f3bf4e8ap12d387jsne443e243370e"
                    }
                })
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {

                    for (i = 0; i < data.results.length; i++) {
                        let name = data.results[i].title;
                        let image = 'https://spoonacular.com/recipeImages/' + data.results[i].image;
                        let serving = data.results[i].servings;
                        let time = data.results[i].readyInMinutes;
                        let link = data.results[i].sourceUrl;
                        let recipe = document.createElement('div');
                        recipe.innerHTML = '<div><p>' + name + '</p><p>Serving Size: ' + serving + '</p><p>Total: ' + time + ' min</p>' + '<span><a href=' + link + '>Recipe</a></span>' + '</div><div><a href=' + image + '><img src="' + image + '" /></a></div>';
                        resBox.append(recipe);
                    }
                }).catch(function (err) {
                    console.log('err' + err);
                });
        } else {
            fetch((url + input.value), {
                    "method": "GET",
                    "headers": {
                        "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
                        "x-rapidapi-key": "5f40ca8719msh2c3f730f3bf4e8ap12d387jsne443e243370e"
                    }
                })
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {

                    // console.log(data)

                    for (i = 0; i < data.results.length; i++) {
                        let name = data.results[i].title;
                        let image = 'https://spoonacular.com/recipeImages/' + data.results[i].image;
                        let serving = data.results[i].servings;
                        let time = data.results[i].readyInMinutes;
                        let link = data.results[i].sourceUrl;
                        let recipe = document.createElement('div');
                        recipe.innerHTML = '<div><p>' + name + '</p><p>Serving Size: ' + serving + '</p><p>Total: ' + time + ' min</p>' + '<span><a href=' + link + '>Recipe</a></span>' + '</div><div><a href=' + image + '><img src="' + image + '" /></a></div>';
                        resBox.append(recipe);
                    }
                }).catch(function (err) {
                    console.log('err' + err);
                });
        }

    }

    input.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            fetchApi();
        }
    });
    button.addEventListener('click', function () {
        fetchApi();
    })

    dropDown.addEventListener('change', function (e) {
        let drop = document.querySelector('.s');

        if (e.target.value === 'v') {
            drop.value = e.target.value;
            fetchApi();
        } else if (e.target.value === 'p') {
            drop.value = e.target.value;
            fetchApi();
        } else {
            drop.value = 'Filters';
            fetchApi();
        }
    })

});