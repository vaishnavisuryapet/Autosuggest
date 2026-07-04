const users = [
  {
    name: "Jane Doe",
    gender: "Female",
    image: "jane.png"
  },
  {
    name: "John Doe",
    gender: "Male",
    image: "john.png"
  }
];

let curUserId = 0;

function toggle() {

  if (curUserId === 0)
    curUserId = 1;
  else
    curUserId = 0;

  // image
  document.getElementById("img").src =
    users[curUserId].image;

  // name
  document.getElementById("card-name").innerText =
    users[curUserId].name;

  // gender
  document.getElementById("card-gender").innerText =
    users[curUserId].gender;
}

console.log("Hello from JS");

function getRandomUser() {

  fetch("https://randomuser.me/api/")
    .then(function (data) {
      return data.json();
    })
    .then(function (parsedData) {

  let gender=parsedData.results[0].gender;
  let firstName=parsedData.results[0].name.first;
  let lastName=parsedData.results[0].name.last;
  let name =firstName + " " + lastName;
  let image=parsedData.results[0].picture.large;
  document.getElementById("img").src=image;
  document.getElementById("card-name").innerText=name;
  document.getElementById("card-gender").innerText=gender;

      //console.log(name);
      
    })
    

}