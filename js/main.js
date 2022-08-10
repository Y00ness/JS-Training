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
//
let num = 222;

let library = {
  111: {
    name: "younes",
    fmaily: " hoseini",
  },
  222: {
    name: "mahya",
    family: "mohammadi",
  },
};

function iden(num) {
  console.log(library[num].name);
}
switch (num) {
  case 111:
    iden(111);
    break;
  case 222:
    iden(222);
    break;
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

// break & continue
// break: jump out the loop and finish the loop
// continue: jump out the loop but continue the loop
res = document.getElementById("jsResult");
for (i = 0; i < 10; i++) {
  res.innerHTML += i;
  if (i == 2) {
    continue;
  }
  document.getElementById("jsResult").innerHTML += i;
  if (i == 5) {
    break;
  }
}
//debuger
// for debuge the code

//try, catch, finally
function showname(name) {
  console.log(name);
}

try {
  showname("younes");
  if (true) {
    try {
      showname("try-1st");
    } catch {
      throw new Error("Error 403-bad request");
    } finally {
      showname("try-2st");
    }
  }
} catch (err) {
  showname("catch-1st");
  console.error(err);
  showname("catch-2st");
} finally {
  showname("The end");
}

res.innerHTML = "";
var x = 09136128061;
res.innerHTML += x + "<br>";
if (String(x).slice(0, 1) == 9) {
  res.innerHTML += String(x).slice(0, 1) + "<br>True";
} else {
  res.innerHTML += "<br>" + false;
}

// training
function log(ob) {
  console.log(ob);
}

const number = { "1st": "1" };
log(number);
if (true) {
  let number = { three: 3 };
  number.two = 2;
  log(number);
}

log(number);
