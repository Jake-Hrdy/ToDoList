// allow user to checkoff items
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

// allow user to delete items
$("ul").on("click", "span", function(e) {
	$(this).parent().fadeOut(300, function() {
		$(this).remove();
	});
	e.stopPropagation();
});

// allow user to add new items
$("input[type='text']").keypress(function(e) {
	if(e.which === 13) {
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + todoText + "</li>");
	}
});

// allow user to toggle input box
$(".fa-edit").click(function() {
	$("input[type='text']").fadeToggle();
});