var now = moment().format("[It is] dddd, MMM Do YYYY [at] h:mm:ss a, [my dudes.]")
$('#currentDay').text(now)
setInterval(function() {
    var now = moment().format("[It is] dddd, MMM Do YYYY [at] h:mm:ss a, [my dudes.]")
    $('#currentDay').text(now)
}, 1000)

$(".description").each(function () {
    var name = parseInt($(this).attr("name"));
    var timeCheck = parseInt(moment().format('H'))
    if (name < timeCheck) {
        $(this).addClass("past");
    }
    if (name > timeCheck) {
        $(this).addClass("present")
    }
    if (name === timeCheck) {
        $(this).addClass("future")
    }
})

var storedTasks = JSON.parse(localStorage.getItem('stored-tasks')) || []

function save() {
    var textInput = $(this).siblings("input")
    var newTask = textInput.val()
    var hour = textInput.attr('name')
    var newObj = {hour,newTask}
    storedTasks.push(newObj)
    localStorage.setItem('stored-tasks',JSON.stringify(storedTasks))
    console.log(storedTasks)
}

$(".saveBtn").each(function() {
    $(this).click(save)
})

function init() {
    console.log(storedTasks)
    $(".description").each(function() {
        var hour = $(this).attr('name')
        if (storedTasks.length != null) {//fix thiiiiis
            for (let i = 0; i < storedTasks.length; i++) {
                if (hour == storedTasks[i].hour) {
                    console.log($(this).val())
                    $(this).val(storedTasks[i].newTask)
                }
                console.log(hour)
            }
        }
    })
}

init()