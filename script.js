var nameInput = $("#name-input")
var sortButton = $("#sort-button")
var enrolledStudentList = $(".enrolled-students")

var houses = [
  "Ravenclaw",
  "Hufflepuff",
  "Gryfindor",
  "Slytherin"
]

function chooseRandomHouse() {
  var index = Math.floor(Math.random() * houses.length)

  return houses[index]
}

sortButton.click(function() {
  var name = nameInput.val()
  console.log (name)

  addListItem("enrolledStudents", {
    name: name,
    house: chooseRandomHouse()
  })
})

onNewListItem("enrolledStudents", function(student) {
  console.log("student", student)
//  "david" + " is the best" + ", yea."
  var newStudentElement = $("<div>" + Name: +student.name+ House: +student.house +"</div>")
  
  
  enrolledStudentList.append(newStudentElement)
})