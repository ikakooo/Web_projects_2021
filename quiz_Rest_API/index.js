






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
                    '<p id="'+element.id+'" chemiatributi="" href="tryit.asp?filename=tryjson_ajax_array" target="_blank">' + element.name + '</p>'
                );

                

            });

            $(".multiplication-table p").on( "click", function () {

                
                sendCategorizedRequest(this.id, function(data){
                    console.log(data);
                })
                
            })

        })
    }
};
xhttp.open("GET", "https://gorest.co.in/public-api/categories", true);




xhttp.send();





function sendCategorizedRequest(id,fn){

    var categorisedxhttp = new XMLHttpRequest();
    categorisedxhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            var response = categorisedxhttp.responseText;
            fn(response);
            console.log("ok" + response);
        }
    };
  
    categorisedxhttp.open("GET", "https://gorest.co.in/public-api/products?categories[]=" + id , true);
    categorisedxhttp.send();
}
