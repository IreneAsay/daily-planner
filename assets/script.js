$(document).ready(function () {
    console.log("Loading!");
    var dayScheduler = JSON.parse(localStorage.getItem("scheduler"));
    if(dayScheduler == null) dayScheduler = [];
    var currentHour = moment().format("H");
    console.log(dayScheduler);
    console.log(currentHour)
    
    $("#"+currentHour).addClass("present");
    $("#"+currentHour).prevAll().addClass("past");
    $("#"+currentHour).nextAll().addClass("future");
    for(var i = 0; i < $(".time-block").length; i++){
        $(".time-block:eq(" + i + ") .description").val(dayScheduler[i]);
        
    }  

    $(".saveBtn").on("click", function() {
        var scheduler = $(this).siblings(".description").val();
        // console.log(scheduler);
        var time = $(this).parent().attr("id");
        // console.log(time);
        var index = time - 9;
        dayScheduler[index] = scheduler;
        localStorage.setItem("scheduler", JSON.stringify(dayScheduler));
        // localStorage.setItem(time,value)
    })

});

