// Example of how to make get request
// fetch('https://reqbin.com/echo/get/json')
//   .then(response => response.text())
//   .then(text => console.log(text))

// Example of hot to make post request
// const response = await fetch("https://reqbin.com/echo/post/json", {
// method: 'POST',
// headers: {
//   'Accept': 'application/json',
//   'Content-Type': 'application/json'
// },
// body: `{
//    "Id": 78912,
//    "Customer": "Jason Sweet",
//    "Quantity": 1,
//    "Price": 18.00
//   }`,
// });

response.json().then(data => {
  console.log(data);
});

const newRoomButton = document.getElementById('newRoomButton');
newRoomButton.addEventListener('click', function(e) {
    console.log('newRoomButton was clicked');
});

const roomButton = document.getElementById('roomButton');
roomButton.addEventListener('click', function(e) {
    console.log('roomButton was clicked');
});

const hitButton = document.getElementById('hitButton');
hitButton.addEventListener('click', function(e) {
    console.log('hitButton was clicked');
});

const doubleButton = document.getElementById('doubleButton');
doubleButton.addEventListener('click', function(e) {
    console.log('doubleButton was clicked');
});

const splitButton = document.getElementById('splitButton');
splitButton.addEventListener('click', function(e) {
    console.log('splitButton was clicked');
});

const insuranceButton = document.getElementById('insuranceButton');
insuranceButton.addEventListener('click', function(e) {
    console.log('insuranceButton was clicked');
});

const surrenderButton = document.getElementById('surrenderButton');
surrenderButton.addEventListener('click', function(e) {
    console.log('surrenderButton was clicked');
});

const pushButton = document.getElementById('pushButton');
pushButton.addEventListener('click', function(e) {
    console.log('pushButton was clicked');
});
