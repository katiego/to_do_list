$(function() {

var $newTask = $('#new_task');
var $currentTaskList = $('#currentTaskList')
// constructor
var NewTask = function (task, due) {
  this.task = task;
  this.due = due;
}

// array 
NewTask.all = [];


// submit form to create a new task
$newTask.on('submit', function(event) {
event.preventDefault();
var taskName = $('#task_name').val();
var taskDue = $('#task_due').val();
// var taskData = {task: taskName, due: taskDue};
var task = new NewTask(taskName, taskDue)
console.log(task)
task.save()
task.render()
}); 

// push the new task created above to the array 

NewTask.prototype.save = function() {
  NewTask.all.push(this)
  console.log(NewTask.all)
};

// display the array in the DOM
var tasksTemplate = _.template($('#currentTaskList-template').html());

NewTask.prototype.render = function() {

_.each(NewTask.all, function (task, index) {
    var $task = $(tasksTemplate(task));
    $task.attr('data-index', index)
    $currentTaskList.append($task);
    console.log('render works')
});

};
});

  // append existing todos (from seed data) to `$toDoList`
  // `_.each` is an "iterator" function provided by Underscore.js

  // // reset the form
  //   $newTask[0].reset();
  //   $('#task-name').focus();


  // add class to todo on click to mark it as done
  //   $currentTaskList.on('click', '.task-text', function() {
  //   $(this).toggleClass('done');
  // });


  // remove todo from model and view
  // $currentTaskList.on("click", ".delete", function () {
  //   var $task = $(this).closest(".currenttasks");
  //   var index = $task.attr('data-index');
  //   console.log($task)

    // remove todo from the `toDos` array (model)
    // tasks.splice(index, 1);
    // console.log(tasks);

    // remove todo from the DOM (view)
    // $task.remove();

    // reset indexes in DOM to match `toDos` array
    // $.each loops through DOM elements
    // $('.currenttasks').each(function(index) {
    //   $(this).attr('data-index', index);
    // });








