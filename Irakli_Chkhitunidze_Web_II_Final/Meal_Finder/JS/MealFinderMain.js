const input = document.getElementById('inputID');






const updateValue = (e) => {
    
    var categorisedxhttp = new XMLHttpRequest();
    categorisedxhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            var response = categorisedxhttp.responseText;
            
           
            console.log("ok" + response);
            addShowSearchingMeals(response)
        }
    };
    isSearchingURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + e.target.value
    categorisedxhttp.open("GET", isSearchingURL, true);
    categorisedxhttp.send();
}
input.oninput = updateValue;




function addShowSearchingMeals(responce){
    var obj = JSON.parse(responce);
    $("#multiplicationinputID").html("");

    $(document).ready(function () {
        obj.meals.forEach(element => {
            $(".multiplication-table").append(

                `<div class="col-sm-3">
                <a href="/meal/53054-Seri-muka-kuih-Recipe">
                <img src="${element.strMealThumb}" width="15%">
                ${element.strMeal}
                </a>
                <br><br>
                </div>`
            );
        });
        
            
    })

}

function Random()  {
    document.getElementById("multiplicationinputID").innerHTML = "";
    $("#multiplicationinputID").html("");

    var categorisedxhttp = new XMLHttpRequest();
    categorisedxhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            var response = categorisedxhttp.responseText;
            
           
            console.log("ok" + response);
            addShowSearchingMeals(response)
        }
    };
    isSearchingURL = "https://www.themealdb.com/api/json/v1/1/random.php"
    categorisedxhttp.open("GET", isSearchingURL, true);
    categorisedxhttp.send();
    
}

