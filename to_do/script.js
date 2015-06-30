$(function() {

var $newTaskForm = $("#new_task");
var $doneList = $("#currentTaskList")
console.log('$newTaskForm');

$newTaskForm.on("submit", function(event) {
	event.preventDefault();
	var newLI = $('#task_name').val();
	console.log(newLI)
	$("#currentTaskList").append("<li class='task'>" +newLI + "</li>");
	$doneList = $(".task")
	$doneList.click(function(event) {
		$(this).addClass("done")
		// $(this).fadeOut(300, function() {
		// 	$(this).remove()
		// 	});
	});

// store our new shopping list item
currentTaskList.push(newLI)
console.log(currentTaskList)

});



   
});

    // clear the form
    // $itemNameBlank.val("");

    // append our new item to the page's shopping list
    // $shoppingUL.append('<li class="item">' + listItem + '</li>');

var currentTaskList = []



