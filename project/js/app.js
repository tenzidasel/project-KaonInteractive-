
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

var pageId = 1;
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

const rightButtonGov = document.querySelector(".right-button");
const leftButtonHealth = document.querySelector(".left-button");


left.addEventListener("click", () => {
container.classList.add("hover-left");
pageId--;
console.log(pageId)
  document.getElementById("governmentSection").style.display='none';
  //document.querySelector("body > div.container > div.split.left > div").style.visibility = 'hidden'
  
});

rightButtonGov.addEventListener("click",() =>{
	document.querySelector("#governmentSection").style.display = 'block';

	document.querySelector("#healthCareSection").style.display = 'block';
	document.querySelector("#homePage > div.split.right").style.width = '49%';


	$(".page[data-page='gov1']").removeClass("active");
	$(".page[data-page='entry']").addClass("active");

	container.classList.remove("hover-right");
});



leftButtonHealth.addEventListener("click",() =>{

	document.querySelector("#governmentSection").style.display = 'block';
	document.querySelector("#healthCareSection").style.display = 'block';
	document.querySelector("#homePage > div.split.left").style.width = '49%';
	
	$(".page[data-page='health']").removeClass("active");
	$(".page[data-page='entry']").addClass("active");

	container.classList.remove("hover-left");

});

/** 
left.addEventListener("click", () => {
  container.classList.add("container");
});*/




right.addEventListener("click", () => {
  container.classList.add("hover-right");
  pageId++;
  console.log(pageId);
  document.getElementById("governmentSection").style.display='none';
  document.getElementById("healthCareSection").style.display='none';
}); 
/*
right.addEventListener("click", () => {
  container.classList.remove("hover-right");
});*/
