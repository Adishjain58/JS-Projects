let isTextVisible = true;
let noOfli = 1;
$("#inputToggle").on("click", function() {
	$("#textInput").fadeToggle();
	if (isTextVisible) {
		$("#inputToggle").removeClass("fa-minus");
		$("#inputToggle").addClass("fa-plus");

		$("#textInput").addClass("display-none");
		$("#textInput").removeClass("display-block");
		setTimeout(() => {
			$("#textInput").css("display", "none");
		}, 500);
		isTextVisible = false;
	} else {
		$("#inputToggle").removeClass("fa-plus");
		$("#inputToggle").addClass("fa-minus");
		$("#textInput").css("display", "flex");
		$("#textInput").removeClass("display-none");
		$("#textInput").addClass("display-block");

		isTextVisible = true;
	}
});

$("#addTodo").on("keypress", function(e) {
	$data = $("#addTodo");

	$html = '<div class="item"><i class="fa fa-trash icon"></i><li>' + $data.val() + "</li></div >";
	if (e.which == 13) {
		if ($data.val() === "") {
			alert("Please enter the todo");
		} else {
			$("#todos").append($html);
			$data.val("");
			$("li:odd").css("background-color", "rgba(250, 246, 246, 0.705)");
			$("li:even").css("background-color", "white");
			$("li").on("click", function() {
				$(this).toggleClass("selected");
			});
			$(".icon").on("click", function() {
				$(this)
					.parent()
					.addClass("delete-item")
					.fadeOut(600, function() {
						$(this).remove();
					});
				$("li:odd").css("background-color", "rgba(250, 246, 246, 0.705)");
				$("li:even").css("background-color", "white");
			});
			$(".item").on("mouseover", function() {
				$child = $(this)
					.children("i")
					.addClass("icon ")
					.addClass("icon-display")
					.addClass("fa-trash")
					.removeClass("delete-icon")
					.addClass("show-icon");
			});
			$(".item").on("mouseout", function() {
				$child = $(this).children("i");
				$child
					.addClass("delete-icon")
					.removeClass("icon")
					.removeClass("fa-trash");
			});
		}
	}
});
