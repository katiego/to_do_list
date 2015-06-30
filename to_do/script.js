$(function() {

var $newTaskForm = $("#new_task");
var $doneList = $("#currentTaskList")
console.log('$newTaskForm');
var taskList = [{task: "walk dog", desctiption: "today"}, {task: "clean room", desctiption: "today"}]

$newTaskForm.on("submit", function(event) {
	event.preventDefault();
	var newTask = $('#task_name').val();
	var newDescription = $('#task_description').val();
	console.log(newTask)
	$("#currentTaskList").append("<li class='task'> task: " + newTask + "   description: " + newDescription + "</li>");
	$doneList = $(".task")
	$doneList.click(function(event) {
		$(this).addClass("done")
		// $(this).fadeOut(300, function() {
		// 	$(this).remove()
		// 	});
	});

// store our new shopping list item
// currentTaskList.push(newTask, newDescription)
// console.log(currentTaskList)

});



   
});

    // clear the form
    // $itemNameBlank.val("");

    // append our new item to the page's shopping list
    // $shoppingUL.append('<li class="item">' + listItem + '</li>');

var currentTaskList = []



