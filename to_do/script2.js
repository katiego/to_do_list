$(function() {

  // form to create a new task 
  // var $newTask = $('#new_task');
    // using constructor
  function NewTask(task, due)
    this.task = task;
    this.due = due;
    this.all = []
  }

  // array element to hold our list of tasks --? 
  var $currentTaskList = $('#currentTaskList');
  
  //push the new variable (new task) to the array 
push 
splice 
  // tasks template
  var tasksTemplate = _.template($('#currentTaskList-template').html());

  // start with seed data
  var tasks = [
    {task: "Pay rent", due: "06/30"},
    {task: "Fax taxes", due: "06/30"},
    {task: "Grocery shop", due: "06/30"}
  ];

  // append our existing tasks (from seed data) to `$currentTaskList`
  _.each(tasks, function (task, index) {
    var $task = $(tasksTemplate(task));
    $task.attr('data-index', index);
    $currentTaskList.append($task);
    console.log('seed array works')
});


  // submit form to create a new task
    $newTask.on('submit', function(event) {
    event.preventDefault();

    // create new task object from form data
    var taskName = $('#task_name').val();
    var taskDue = $('#task_due').val();
    var taskData = {task: taskName, due: taskDue};

    // store our new task in the `tasks` array
    tasks.push(taskData);
    console.log(tasks);
    var index = tasks.indexOf(taskData);

    // append new task to `$currentTaskList`
    var $task = $(tasksTemplate(taskData));
    $task.attr('data-index', index);
    $currentTaskList.append($task);


  });

  // reset the form
    $newTask[0].reset();
    $('#task-name').focus();


  // add class to todo on click to mark it as done
    $currentTaskList.on('click', '.task-text', function() {
    $(this).toggleClass('done');
  });


  // remove todo from model and view
  $currentTaskList.on("click", ".delete", function () {
    var $task = $(this).closest(".currenttasks");
    var index = $task.attr('data-index');
    console.log($task)

    // remove todo from the `toDos` array (model)
    tasks.splice(index, 1);
    console.log(tasks);

    // remove todo from the DOM (view)
    $task.remove();

    // reset indexes in DOM to match `toDos` array
    // $.each loops through DOM elements
    $('.currenttasks').each(function(index) {
      $(this).attr('data-index', index);
    });
  });
});






