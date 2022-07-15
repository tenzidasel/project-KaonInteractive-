$(document).ready(function(){ /* executed as soon as the document is ready for DOM Manipulation. We assign
							our function to the ready event, to tell jQuery that as soon as the document is ready, 
							we want to call our function. */
	
	$("[data-js-page]").on("touchend", function(){
		var goal_page = $(this).data("js-page");
		$(".page").removeClass("active");
		$(".page[data-page='"+goal_page+"']").addClass("active");
	})
})

var div = document.querySelector(".options");
var btn = document.querySelector(".exploreButton");
btn.addEventListener("click", function(){
  div.classList.add("elementToFadeInAndOut");
  // Wait until the animation is over and then remove the class, so that
  // the next click can re-add it.
  setTimeout(1000);

});