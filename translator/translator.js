// document.querySelector(".goButton").addEventListener('click', function(){
//     var input = document.querySelector("input").value;
//     console.log(querySearch(input));
//  });

document.querySelector("textarea").addEventListener('keyup', function(e){
    var input = document.querySelector("textarea").value;
    //if the key ENTER is pressed...
	//if(e.which === 13) {
		querySearch(input);
	//}
})

function querySearch (input) {

    var apiUrl = "https://eda-te-reo.herokuapp.com/api/translate?word="+ input;

    var xhr = new XMLHttpRequest();
    xhr.open("GET", apiUrl);
    xhr.send();
    xhr.addEventListener('load', function(){

	    document.querySelector("#translated").innerHTML = xhr.responseText;

    });
}
