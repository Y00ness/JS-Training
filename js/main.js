console.log("Hello world");
var res = document.getElementById("jsResult");

// Var
var nam = "Younes";
var hello = "Hi " + nam;
console.log(hello);

// array (list)
var list = ["Younes", "Yuosef", "erfan"];
console.log(list);

// object
var x = 10;
x++;
console.log(x);
var y = 10;
y += 3;
console.log(y);

// Functions
var x = "10";
var y = "15";
console.log("x + y = " + x + y);
function int(x) {
  return parseFloat(x);
}
x = int(x);
y = int(y);
console.log("int(x) + int(y) = " + (x + y));
res.innerHTML = "int(x) + int(y) = " + (x + y);

// Object(dictionary)
var info = {
  cpu: "12900",
  ram: "RAM is 32G",
  gpu: "GPU is RTX3090",
  ssd: "SSD is 1TB",
  hdd: "HDD is 1TB",
  price: function () {
    return "Price is " + int(this.cpu) * 2 + " $";
  },
};
console.log(info);
res.innerHTML = info.price() + "<br>" + info.gpu;

// Event
function Today() {
  document.getElementById("ToDay").innerHTML = Date();
}

// Conditions
//if
var x = 8;
if (x % 2 == 0) {
  res.innerHTML = "Even number";
} else if (x % 2 != 0) {
  res.innerHTML = "Odd number";
} else {
  res.innerHTML = "It's zero";
}

// Swich case
var x = 1;
switch (x) {
  case 0:
    console.log("ZERO");
    break;
  case 1:
    console.log("ONE");
    break;
  case 2:
    console.log("TWO");
}

// Loop
var x = ["One", "Two", "Three", "Four", "Five"];
res.innerHTML = "";
// for
for (var i = 0; i < x.length; i++) {
  res.innerHTML += x[i] + "<br>";
}
res.innerHTML += "<br><br>AND<br><br>";
for (i in x) {
  res.innerHTML += x[i] + "<br>";
}
//while
res.innerHTML = "";
var i = 0;
while (i / 2 < x.length) {
  res.innerHTML += x[i / 2] + "<br>";
  i++;
}
// Do while
var i = 0;
res.innerHTML = "";
do {
  res.innerHTML += x[i];
  i++;
} while (i > 5);

res.innerHTML = "";
var x = 09136128061;
res.innerHTML += x + "<br>";
if (String(x).slice(0, 1) == 9) {
  res.innerHTML += String(x).slice(0, 1) + "<br>True";
} else {
  res.innerHTML += "<br>" + false;
}

// training

function showname() {
  console.log("younes hoseini");
}

console.log(Date());
