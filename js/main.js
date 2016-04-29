/**Mission One Function**/
function generateTable(){
	
	var empty = "";
	var input = document.getElementById("userInput").value;
	var afterTrim = input.trim();
	/**\s* matches zero or more white space scharacters also tabs and new line**/
	/**[\s,] matches one white space scharacter or one comma**/
	/**all about regex**/
	var splitAll = afterTrim.split(/\s*[\s,]\s*/);
	for(var i = 0; i<splitAll.length; i++){
		empty += "<tr><td>" + (i+1) + "</td><td>" + splitAll[i] + "</td></tr>";
	}
	$(empty).appendTo("#output tbody");
}

/**Mission Two Function**/
var number = 1;
var amount = 2;
function slideShow(z){
	var image = document.getElementById("one");
	number = number + z;
	if(number > amount){
		number = 0;
	}
	if(number < 0){
		number = 2;
	}
	image.src = "images/" + number + ".jpg";
}
/**Automatic Load Function**/
window.setInterval(function slideShowAuto(){
	var image = document.getElementById("one");
	number = number + 1;
	if(number > amount){
		number = 0;
	}
	if(number < 0){
		number = 2;
	}
	image.src = "images/" + number + ".jpg";
},5000);

/**Preloader Function**/
var myC;
function preloadFunction(){
	myC = setTimeout(showPage,3000);
}
function showPage(){
	document.getElementById("loadCircle").style.display ="none";
	document.getElementById("mainLog").style.display ="block";
}

/**Scrolling Function**/
$(document).ready(function(){
	$('a[href^="#"]').on('click',function(e){
		e.preventDefault();
		
		var target = this.hash;
		var $target = $(target);
		
		$('html,body').stop().animate({
			'scrollTop': $target.offset().top},
				 900,'swing',function()
			{
				window.location.hash = target;
			});
	});
});


























