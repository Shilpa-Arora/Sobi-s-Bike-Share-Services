// JavaScript Document


(function() {
	"use strict";
	console.log("SEAF fired");
	var request;
	var name = document.querySelector(".name");
	var address = document.querySelector(".address");
	var available_bikes=document.querySelector(".available_bikes");
	var available_racks = document.querySelector(".available_racks");
	var bikes = document.getElementById("bikes");
	var docks = document.getElementById("docks");
	var data = document.querySelector("#data");

	var meandiv = document.querySelector("#mean");
	var mediandiv = document.querySelector("#median");
var standarddevdiv = document.querySelector("#standarddev");


	function showCharactersList(){
		request = create();
			
		if(request===null){
			alert("You are using outdated browser");
			return;
		}
		var url="http://dev.wiseworkbench.com/hubs.json";
		request.onreadystatechange=stateChangedList;
		request.open("GET", url, true);
		request.send(null);

	}
function stateChangedList(){
	if(request.readyState===4 || request.readyState==="complete"){
createList(request);

}
}


function createList(request){

var charnames = JSON.parse(request.responseText);

console.log(charnames);
console.log(charnames.items[0].name);
data.innerHTML = '<tr class="row"><td class="name col-xs-4"><br></td><td class="address col-xs-4"><br></td><td class="available_bikes col-xs-2"><br></td><td class="available_racks col-xs-2"><br></td></tr>';

for (var i=0; i<charnames.total_entries; i++)
{console.log("showing everything");
data.innerHTML += '<tr class="row"><td class="name col-xs-4">'+charnames.items[i].name+'</td><td class="address col-xs-4">'
+charnames.items[i].address+'</td><td  class="available_bikes col-xs-2">'
+charnames.items[i].available_bikes+'</td><td class="available_racks col-xs-2">'
+charnames.items[i].free_racks+'</td></tr>';
	}

var available_docks=0;//free_racks
var available_docks_mean=0;
var available_docks_array=[];
var available_docks_median=0;
var available_docks_standard_deviation=0;

for (var i=0; i<charnames.total_entries; i++){

	available_docks=available_docks+charnames.items[i].free_racks;//addition of free docks
	available_docks_array[i]=charnames.items[i].free_racks;//array of free docks

		//content.innerHTML += '<li><a href="#" data-charid="'+charnames.results[i].films[0]+'">'+charnames.results[i].name+'</a></li><hr>';

	}

//Median	
available_docks_median=math.median(available_docks_array);

console.log(available_docks_median);


//Mean
available_docks_mean=available_docks/charnames.total_entries;

console.log(available_docks_mean);

//Standard deviation
available_docks_standard_deviation=math.round(math.std(available_docks_array),3);
console.log(available_docks_standard_deviation);

meandiv.innerHTML = '<b>MEAN:</b>'+' '+available_docks_mean;
mediandiv.innerHTML = '<b>MEDIAN:</b>'+' '+available_docks_median;
standarddevdiv.innerHTML = '<b>STANDARD DEVIATION:</b>'+' '+available_docks_standard_deviation;

function ClickedEventDocks(request){
console.log("reached here");
console.log(charnames);
console.log(charnames.items[0].name);

 	console.log("bike clicked");

//empty the array data in the variables to be filled with sorted data 	
data.innerHTML = '<tr class="row"><td class="name col-xs-4"><br></td><td class="address col-xs-4"><br></td><td class="available_bikes col-xs-2"><br></td><td class="available_racks col-xs-2"><br></td></tr>';
 for (var i=1; i<charnames.total_entries; i++)
	{ if (charnames.items[i].free_racks > 0)
	{ 
data.innerHTML += '<tr class="row"><td class="name col-xs-4">'+charnames.items[i].name+'</td><td class="address col-xs-4">'
+charnames.items[i].address+'</td><td  class="available_bikes col-xs-2">'
+charnames.items[i].available_bikes+'</td><td class="available_racks col-xs-2">'
+charnames.items[i].free_racks+'</td></tr>';
	}
	}
 
}


function ClickedEventBikes(request){
console.log("reached here");
console.log(charnames);
console.log(charnames.items[0].name);

 	console.log("bike clicked");
data.innerHTML = '<tr class="row"><td class="name col-xs-4"><br></td><td class="address col-xs-4"><br></td><td class="available_bikes col-xs-2"><br></td><td class="available_racks col-xs-2"><br></td></tr>';
 	for (var i=1; i<charnames.total_entries; i++)
{ if (charnames.items[i].available_bikes > 0)
{ 
data.innerHTML += '<tr class="row"><td class="name col-xs-4">'+charnames.items[i].name+'</td><td class="address col-xs-4">'
+charnames.items[i].address+'</td><td  class="available_bikes col-xs-2">'
+charnames.items[i].available_bikes+'</td><td class="available_racks col-xs-2">'
+charnames.items[i].free_racks+'</td></tr>';
}
	}
 
}


	bikes.addEventListener("click", ClickedEventBikes, false);
	docks.addEventListener("click", ClickedEventDocks, false);


}

showCharactersList();

})();