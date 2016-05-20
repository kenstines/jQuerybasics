// problem: user when clicking on an image goes to a dead end.
// Solution: create an overlay with a large image - lightbox.

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");


	// an image to overlay
	$overlay.append($image);
	//a caption
	$overlay.append($caption);
	// add overlay
$("body").append($overlay);
// 1. capture the link event on a link to an image.
	$("#imageGallery a").click(function(event)	{
		event.preventDefault();
		var imageLocation = $(this).attr("href");
		// update overlay with the image linked to the link
		
		
			// show the overlay
		$overlay.show();
	
	
	
	
	$immage.attr("src", imageLocation);
	// Get child's alt attribute and set caption
	
	var captionText = $(this).children("img").attr("alt");
	$caption.text(captionText);
	});

//3. When overlay is clicked 
$overlay.click(function(){
	$overlay.hide();
});	
	
