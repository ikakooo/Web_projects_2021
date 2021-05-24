


//// For categories panel ////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        var response = xhttp.responseText;
        // console.log("ok" + response);

        var obj = JSON.parse(this.response);
        // console.log(obj.data);
        //document.getElementById("content").innerHTML = obj.data[0].name;



        $(document).ready(function () {
            obj.data.forEach(element => {


                $(".multiplication-table").append(
                    '<p id="' + element.id + '" chemiatributi="" href="tryit.asp?filename=tryjson_ajax_array" target="_blank">' + element.name + '</p>'
                );



            });

            $(".multiplication-table p").on("click", function () {


                sendCategorizedRequest(this.id, function (data) {
                    // console.log("ikakooo" + data);
                    var obj = JSON.parse(data);

                    $("#rowID").empty();

                    addItemsInList(obj.data)

                })

            })

        })
    }
};
xhttp.open("GET", "https://gorest.co.in/public-api/categories", true);




xhttp.send();





//// For categoriezed items search ////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

function sendCategorizedRequest(id, fn) {

    var categorisedxhttp = new XMLHttpRequest();
    categorisedxhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            var response = categorisedxhttp.responseText;
            fn(response);
            //console.log("ok" + response);
        }
    };

    categorisedxhttp.open("GET", "https://gorest.co.in/public-api/products?categories[]=" + id, true);
    categorisedxhttp.send();
}

var elements = document.getElementsByClassName("column");
var i;

listView()

function listView() {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.width = "100%";
    }
}


//// For Search panel ////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
const input = document.getElementById('inputID');
const log = document.getElementById('value-log');
const updateValue = (e) => {
    //log.textContent = e.target.value;



    var searchedxhttp = new XMLHttpRequest();
    searchedxhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            var response = searchedxhttp.responseText;
            
            ///console.log("ok" + response);


            var obj = JSON.parse(response);

            $("#rowID").empty();

            addItemsInList(obj.data)


        }
    };

    searchedxhttp.open("GET", "https://gorest.co.in/public-api/products?name=" + e.target.value, true);
    searchedxhttp.send();
}
input.oninput = updateValue;



//////     Aditional functions ////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
function addItemsInList(itemsArray){
    itemsArray.forEach(element => {
        $(".row").append(
            `<div class="column" id="column" style="background-color:#ccc;">

            <p>${element.name}</p>
          </div>`
        );
    });
}