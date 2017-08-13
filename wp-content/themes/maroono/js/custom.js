// JavaScript Document


(function() {
	"use strict";
	console.log("SEAF fired");
	var request;
	var id = document.querySelector(".id");
	var name = document.querySelector(".name");
	var address = document.querySelector(".address");
	var available_bikes=document.querySelector(".available_bikes");
	var available_racks = document.querySelector(".available_racks");
	var bikes = document.getElementById("bikes");
	var docks = document.getElementById("docks");



/*	var request1;
	var content1 = document.querySelector("#mean");
	var content2 = document.querySelector("#median");
var content = document.querySelector("#standarddev");*/


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
id.innerHTML = '<br>';
name.innerHTML = '<br>';
address.innerHTML = '<br>';
available_bikes.innerHTML = '<br>';
available_racks.innerHTML = '<br>';

for (var i=0; i<charnames.total_entries; i++)
{console.log("showing everything");
id.innerHTML += charnames.items[i].id+'<br>';
name.innerHTML += charnames.items[i].name+'<br>';
address.innerHTML += charnames.items[i].address+'<br>';
available_bikes.innerHTML += charnames.items[i].available_bikes+'<br>';
available_racks.innerHTML += charnames.items[i].free_racks+'<br>';
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
available_docks_standard_deviation=math.std(available_docks_array);
console.log(available_docks_standard_deviation);



function ClickedEventDocks(request){
console.log("reached here");
console.log(charnames);
console.log(charnames.items[0].name);

 	console.log("bike clicked");

//empty the array data in the variables to be filled with sorted data 	
id.innerHTML = '<br>';
name.innerHTML = '<br>';
address.innerHTML = '<br>';
available_bikes.innerHTML = '<br>';
available_racks.innerHTML = '<br>';
 for (var i=1; i<charnames.total_entries; i++)
	{ if (charnames.items[i].free_racks > 0)
	{ 
		id.innerHTML += charnames.items[i].id+'<br>';
		name.innerHTML += charnames.items[i].name+'<br>';
		address.innerHTML += charnames.items[i].address+'<br>';
		available_bikes.innerHTML += charnames.items[i].available_bikes+'<br>';
		available_racks.innerHTML += charnames.items[i].free_racks+'<br>';
	}
	}
 
}


function ClickedEventBikes(request){
console.log("reached here");
console.log(charnames);
console.log(charnames.items[0].name);

 	console.log("bike clicked");
 	id.innerHTML = '<br>';
name.innerHTML = '<br>';
address.innerHTML = '<br>';
available_bikes.innerHTML = '<br>';
available_racks.innerHTML = '<br>';
 	for (var i=1; i<charnames.total_entries; i++)
{ if (charnames.items[i].available_bikes > 0)
{ 
id.innerHTML += charnames.items[i].id+'<br>';
name.innerHTML += charnames.items[i].name+'<br>';
address.innerHTML += charnames.items[i].address+'<br>';
available_bikes.innerHTML += charnames.items[i].available_bikes+'<br>';
available_racks.innerHTML += charnames.items[i].free_racks+'<br>';
}
	}
 
}


	bikes.addEventListener("click", ClickedEventBikes, false);
	docks.addEventListener("click", ClickedEventDocks, false);





}
/*names display up*/
/*function charDetail(e) {
	console.log("details called");
	
	e.preventDefault();
	var url = e.currentTarget.dataset.charid;
	console.log(url);
	request1 = create();
	if(request===null){
		alert("browser outdated");
return;
	}
	
	request1.onreadystatechange=stateChangedInfo;
	request1.open("GET",url,true);
	request1.send(null);
}
function stateChangedInfo(){
	if(request1.readyState===4 || request1.readyState==="complete"){
showInfo(request1);
	}
}
function showInfo (request1) {

	var detail = JSON.parse(request1.responseText);
console.log(detail.episode_id);


	content1.innerHTML ='<h2 class="hidden">Characters movie information: image</h2><img src="images/'+detail.episode_id+'.jpg" class="imgfilm" alt="no img">';
	content2.innerHTML = 
'<h2 class="hidden">Characters movie information: Movie detail</h2><h2>'+detail.title+"</h2><br><h4>Opening Crawl: "+detail.opening_crawl+"</h4><br><h4>Director:"+detail.director+"</h4><br><h4>Producer:"+detail.producer+"</h4><br><h4>Release Date: "+detail.release_date+"</h4>";}*/



showCharactersList();

})();