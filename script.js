$(document).ready(function() {
    
    // 1. Add Task Function
    $("#addTask").click(function() {
        let task = $("#taskInput").val(); // Get the text from the input box
        
        if (task) {
            // Append a new bullet point (<li>) with the task and a Remove button
            $("#taskList").append(`<li>${task} <button class="remove">Remove</button></li>`);
            
            // Clear the input box after adding
            $("#taskInput").val(''); 
        }
    });

    // 2. Remove Task Function
    $(document).on("click", ".remove", function() {
        // Find the parent <li> of the clicked button and remove it completely
        $(this).parent().remove();
    });

});