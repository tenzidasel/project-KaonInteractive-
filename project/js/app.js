
/* For differnt screens */
$(document).ready(function(){ /* executed as soon as the document is ready for DOM Manipulation. We assign
							our function to the ready event, to tell jQuery that as soon as the document is ready, 
							we want to call our function. */
	
	$("[data-js-page]").on("touchend", function(){
		var goal_page = $(this).data("js-page");

		$(".page").removeClass("active");
		$(".page[data-page='"+ goal_page +"']").addClass("active");
	})
})


/* health Page options effects */
var div = document.querySelector(".options");
var btn = document.querySelector(".exploreButton");
btn.addEventListener("click", function(){
  div.classList.add("elementToFadeInAndOut");
  setTimeout(1000);

});

/* Home Page background transition effects */
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container");

/* Left and right buttons inside gov and health page */
const rightButtonGov = document.querySelector(".right-button");
const leftButtonHealth = document.querySelector(".left-button");
const exploreButton= document.querySelector(".exploreButton");


/* Gov page */
left.addEventListener("click", () => {
container.classList.add("hover-left");
  document.getElementById("governmentSection").style.display='none';
  document.querySelector("#homePage > div.middle").style.visibility='hidden'
  exploreButton.classList.add("elementToFadeInAndOut");
});

rightButtonGov.addEventListener("click",() =>{
	document.querySelector("#governmentSection").style.display = 'block';
	document.querySelector("#homePage > div.middle").style.visibility='visible'
	$(".page[data-page='gov1']").removeClass("active");
	$(".page[data-page='entry']").addClass("active");
	container.classList.remove("hover-left");
});


/* health page */
leftButtonHealth.addEventListener("click",() =>{
	document.querySelector("#governmentSection").style.display = 'block';
	document.querySelector("#homePage > div.middle").style.visibility='visible'
	document.querySelector("#healthCareSection").style.display = 'block';
	
	//$(".page[data-page='health']").removeClass("active");
	//$(".page[data-page='entry']").addClass("active");
	container.classList.remove("hover-right");
});


right.addEventListener("click", () => {
  	container.classList.add("hover-right"); 
	document.getElementById("healthCareSection").style.display='none';
 	 document.querySelector("#homePage > div.middle").style.visibility='hidden'
}); 

