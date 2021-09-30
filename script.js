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

var storedTasks = {}
function save() {
    console.log('')
    var textInput = $(this).siblings("input")
    var newTask = textInput.val()
    var hour = textInput.attr('name')
    storedTasks[hour] = newTask
    localStorage.setItem('stored-tasks',JSON.stringify(storedTasks))
    console.log(storedTasks)
}

$(".saveBtn").each(function() {
    $(this).click(save)
})

function init() {
    var retrievedTasks = JSON.parse(localStorage.getItem('stored-tasks'))
    console.log(retrievedTasks)
    $(".description").each(function() {
        var hour = $(this).attr('name')
        if (hour == retrievedTasks.hour) {
            console.log($(this).val())
        }
        console.log(hour)
    })
}

init()