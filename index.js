//User input - Dropdown box selects the book
//Something happens - The page loads characters from the book
//Something else happens - the drop down changes colors on mouse over.

//Events 
//Mouseover/Mouseout color change on drop down box
//Selection pulls in data from JSON to display that filters characters ("click")
//*Create a search button - if there's time

//Node Getters
//const characterDisplay = document.getElementById("display");
const books = document.getElementById("books");

// Event Listeners
document.getElementById('books').addEventListener('mouseover', function() {
    document.getElementById('books').style.backgroundColor = "white";
});

document.getElementById('books').addEventListener('mouseout', function() {
    document.getElementById('books').style.backgroundColor = "rgb(179, 177, 177)";
});


//Functions
// function show(books) {
//     const display = document.getElementById("display");
//     display.innerHTML = books.option[books.selectedIndex].json[0];
// }

// const obj = JSON.parse();
// document.getElementById("display").innerHTML =
// obj.name + obj.title + obj.description;


const url = 'http://localhost:3000/Characters'

//Fetch
fetch(url + "?book=TheWinterKing")
.then(function(response) {
  return response.json();
})
.then(function(data){
    appendData(data);
    console.log(data);
});
// .then(function(json){
//  console.log(json[0]);
// //  return show;
// })
function appendData(data) {
const mainContainer = document.getElementById("myData");
for (let i = 0; i < data.length; i++) {
    const div = document.createElement("div");
    div.innerHTML = 'Name: ' + ' ' + data[i].name + ' ' + data[i].title + ' ' + data[i].description;
    mainContainer.appendChild(div);
}
}