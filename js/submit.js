var persons = [];
document.getElementById("myAnchor").addEventListener("click", function(event){
	event.preventDefault();
});
function myFunction(){
  var firstname = document.getElementById("fname").value;
  var lastname = document.getElementById("lname").value;
  var Department = document.getElementById("Branch").value;
  var Gender = document.getElementById("male").value;
  var Gender = document.getElementById("female").value;
  var Email = document.getElementById("email").value;
  var Num = document.getElementById("number").value;
  var Comment = document.getElementById("comment").value;
  
  var persondetails = { };
  
  
  persondetails.firstname = firstname;  
  persondetails.lastname = lastname;
  persondetails.Department = Department;
  persondetails.Gender = Gender;
  persondetails.Gender = Gender;
  persondetails.Email = Email;
  persondetails.Num = Num;
  persondetails.Comment = Comment;
  
  persons.push(persondetails);
  console.log(persons);
  
}














