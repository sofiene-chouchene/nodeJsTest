// const name = require("./test");

// const { sofiene } = require("./test");

// const { sofiene } = require("./test");

// console.log(name);
// const sayhi = require("./2-fnct");
// sayhi("sofiene");
// console.log(name.jhon);
// sayhi(name.jhon);
// const a = "heloow";
// const b = "sofiene";
// console.log(`${a} ' ${b}`);
// console.log(10e6);
// let Name = "sofiene";
// // console.log(Name.length);
// var x = 9;
// if (x == 10) {
//   console.log("true");
// } else console.log("Flase");
// var x = false;
// console.log(`the price is ${x ?? 200}`);
// let myFrind = ["sofiene", "adem", "ali"];
// myFrind[myFrind.length - 1] = "aloulo";
// myFrind.unshift("monir");
// myFrind.push("bada");
// console.log(myFrind);

// if (myFrind.includes("aloulo")) {
//   console.log(` is here`);
// } else {
//   console.log("not here");
// }
// let arr = [3, 5, 195, 484, 4855, 0];
// console.log(arr.splice(0, 0,4,5));
// console.log(arr);

// let myFrind = ["sofiene", "adem", "ali"];
// let myFrinds = ["chouchene", "bedoui", "bodlila"];
// let myFrindes = myFrind.concat(myFrinds);
// console.log(myFrindes);
// console.log(myFrindes.join("/"));
// for(let i:myFrind){

// }
// let arrays = [1, 2, "sofiene", "ahmed", "hkhaled"];
// var arrayString = [];
// for (let i = 0; i < arrays.length; i++) {
//   if (typeof arrays[i] === "string") {
//     arrayString.push(arrays[i]);
//   }
// }
// // for (let i = 0; i < arrays.length; i++) {
// //   if (typeof arrays[i] === "string") {
// //     arrayString.push(arrays[i]);
// //   }
// // }
// console.log(arrayString);
// function hello(username, age) {
//   console.log(`helow ${username} your age ${age ?? "EROR"}`);
// }
// hello("sofiene", 30);
// hello("ali", 25);
// let relod =  (number) =>{
//   return number - 1;
// };

// console.log(relod(5));
// function helllow(firstName, lastName) {
//   let message = `helo`;
//   function cocnatMsg() {
//     message = `${message} ${firstName} ${lastName}`;
//   }
//   cocnatMsg();
//   return message;
// }

// console.log(helllow("sofieene", "chouchene"));
// let s = (num) => num;
// console.log(s("sofiene"));
// const c = 1;
// const b = 2;
// let a = _ => {
//   console.log(`the namebre ${a}`);
//   console.log(`the number ${b}`);
// };
// a();
// var x = 10;
// if (true) {
//   let x = 50;
// }
// console.log(x);
// let numArray = [1, 2, 5, 6, 8, 4, 5, 3];
// let newArray = [];
// for (let i = 0; i < numArray.length; i++) {
//   newArray.push(numArray[i] + numArray[i]);
// }
// console.log(newArray);
// let newa = numArray.map(function (element, index, arr) {
//   return element + element;
// }, 10);
// console.log(newa);
// let add = numArray.map((a) => {
//   return a + a;
// });
// console.log(add);
// function addiction(ele) {
//   return ele + ele;
// }
// let asd = numArray.map(addiction);
// console.log(asd);
// ///////////////////////////////////////////////////////////////////
// swaping = "soFIenE";

// let swap = swaping
//   .split("")
//   .map((ele) => {
//     return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
//   })
//   .join("");
// console.log(swap);
// //////////////////////////////////////////////////////////////
// let arre = [-10, 15, 656, -65, -62];
// let inv = arre.map((e) => {
//   return -e;
// });
// console.log(inv);
// ///////////////////////////////////////////////////////

// //////filtre/////////////
// let arrr = [11,2,8,6,5,10,6];
// let arrNumber = arrr.filter((e) => {
//   return e%2===0 ;
// });
// console.log(arrNumber);
// /////////////////////////////////////////////////
// let word = " i love food code to playing much ";

// let smallWord = word
//   .split(" ")
//   .filter((e) => {
//     return e.length <= 4;
//   })
//   .join(" ");
// console.log(smallWord);
// //////////////////////////////////////////////////////////
// let mix = "A13BS2ZX";
// let filtring = mix
//   .split("")
//   .filter((e) => {
//     return parseInt(e);
//   }).map((e)=>{
//     return e;
//   })
//   .join("");
// console.log(filtring);
// //////////////////////////////////////////////////////
// let arrs = [10, 80, 20, 50, 50];
// let somme = arrs.reduce((e, c) => {
//   return e + c;
// },5);
// console.log(somme);
// let arrays = ["sofeine", "aliBodelia", "ahmed", "moussa", "qlkqd"];
// let check = arrays.reduce((acc, curent) => {
//   return acc.length > curent.length ? acc : curent;
// });
// console.log(check);
// //////////////////////////////////////////////////////
// let final = ["S", "O", "@", "f", "@"];
// let test = final
//   .filter((e) => {
//     return e != "@";
//   })
//   .reduce((e, c) => {
//     return `${e}${c}`;
//   });
// console.log(test);
// /////////////////////////////////////////////////////////
// let obj = {
//   number: 30,
//   add: function () {
//     return this.number * 2;
//   },
// };
// console.log(obj.add());

// let objectnew = Object.create(obj);
// objectnew.number = 50;
// console.log(objectnew.add());
// let newobecjt = Object.assign({}, obj);
// console.log(newobecjt);
// newobecjt.number =600;
// console.log(newobecjt.add());
//////////////////////////////////////  Destructuring Arrays Part 1
// let arr = ["sofiene ", "adem", "ali"];
// let [a, b, c] = arr;
// console.log(a);
// console.log(b);
// console.log(c);
//////////////////////////////////////////////////////
// let arr = ["sofiene", "ahmed", ["alii", "hmed", ["bada", "adem"]]];
// let [a, b, c, d, e, f] = arr;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);

// let obj = {
//   theName : "sofiene",
//   theAge : 26,
//   thecolor : "ahmed",
//   skils :{
//     html :70,
//     css :80,
//   }
// };

// let {html,css} = obj.skils;
// console.log(`my progres is ${html}%`);
//////////////////////////////////////////////

// let obj = {
//   theName: "sofiene",
//   theAge: 26,
//   thecolor: "ahmed",
//   skils: {
//     html: 70,
//     css: 80,
//   },
// };

// function Id({theName ,theAge,thecolor}=user) {
//   console.log(`the name is ${theName}`);
// }
// Id(obj);
///////////////////////////////////////////////////
// let myData = [1, 1, 1, 2, 3, "a"];
// let uniqueData = new Set([1, 1, 1, 2, 3]);
// uniqueData.add("a");
// console.log(myData);
// console.log(uniqueData);
// console.log(uniqueData.has("a"));
///////////////////////////////////////////::
// let myweakset = new WeakSet([{ name: "sofiene", age: 25, color: "bleu" }]);
// console.log(myweakset);
///////////////////////////////////////////////////////
// let obej = {};
// let map = new Map();
// console.log(obej);
// console.log(map);
// let myobj = {
//   10: "number",
//   10: "string",
// };
// console.log(myobj[10]);
// let myNewMap = new Map();
// myNewMap.set(10, "number");
// myNewMap.set("10", "string");
// console.log(myNewMap.get(10));
// console.log(myNewMap.get("10"));
// console.log(myNewMap.get(10));
// console.log(myobj);
/////////////////////////////////weakMap/////////////
// let MapUser = { thename: "sofiene" };
// let myMap = new Map();

// myMap.set(MapUser, "values");
// console.log(myMap);
// let MapUser = { thename: "sofiene" };
// let sofien = new WeakMap();
// sofien.set(MapUser, "sofiene");
// console.log(sofien);
/////////////////////////////////////////////// regular Expresion
// let myString = "sofiene chouchene a9wa dovlepeur f tounes ";
// let serach = /Sofiene/i;
// console.log(myString.match(serach));
///////////////////////////////////////ranges
// let id = "com org net io tn code ";
// let serach = /(org | net)/i;
// console.log(id.match(serach));
//////////////////////////////////////
// let practis = "Os1 Os10s Os2 Os8 Os8Os";
// let regExpPreractis = /os[5-9]os/ig;
// console.log(practis.match(regExpPreractis));
///////////////////////////////////////////////
// let myString = "AaBbcdefG123!234%^&*";
// let atoSmal = /[a-z]/g;
// let NatoSmal = /[^a-z]/g;
// let test = /[abc]/g;
// console.log(myString.match(atoSmal));
// console.log(myString.match(NatoSmal));
// console.log(myString.match(test));
////////////////////////////////////////

// let varibale = "https://www.google.com  http://facebook.Com sofiene.com";
// let test = /(https?:\/\/)?(www.)?\w+.com/gi;
// console.log(varibale.match(test));
// let serial = "S100S S3000S S50000S S950000S";
// let test = /s\d{3}s/ig;
// console.log(serial.match(test));
// let testOne = /s\d{4,5}s/ig;
// console.log(serial.match(testOne));
// let testTwo = /s\d{4,}s/ig;
// console.log(serial.match(testTwo));
///////////////////////////// static
// class user {
//   static count = 0;
//   constructor(id, name, salaerie) {
//     this.i = id;
//     this.n = name;
//     this.salaerie = salaerie;
//     user.count ++;
//   }
//   static counter(){
//     return `le nombre est ${this.count}`;
//   }
// }

// let userOne = new user(1, "sofiene", 45000);
// let usertwo = new user(2, "ali", 45000);
// let userthere = new user(3, "adem", 45000);
// let userfour = new user(4, "bada", 45000);
// console.log(user.counter());
//////////////////////////////////////inherattance
// class user {
//   constructor(id, name, salaerie) {
//     this.i = id;
//     this.n = name;
//     this.salaerie = salaerie;
//   }
// }

// class admin extends user {
//   constructor(id, name, permison) {
//     super(id, name);
//     this.p = permison;
//   }
//   affichage() {
//     return `${this.i} ${this.n} ${this.p}`;
//   }
// }
// let adminA = new admin(003, "sofiene", "yes");
// console.log(adminA.affichage());
/////////date
// let dateNaw = new Date();
// console.log(dateNaw);
// console.log(Date.now());
// console.log(dateNaw.getMonth() + 1);
// console.log(dateNaw.getDay());
// function* genrateNumber() {
//   yield 1;
//   yield 2;
//   yield 3;
//   yield 4;
//   yield 5;
// }
// let genrateur = genrateNumber();
// console.log(genrateur.next());
// console.log(genrateur.next());
// console.log(genrateur.next());
// console.log(genrateur.next());
// console.log(genrateur.next());
// for (let i of genrateNumber()) {
//   console.log(i);
// }
// function* genrateNumber() {
//   yield 1;
//   yield 2;
//   yield 3;
//   yield 4;
//   yield 5;
// }
// function* genrateString() {
//   yield "a";
//   yield "b";
//   yield "c";
//   yield "d";
//   yield "e";
// }
// function* genratAll() {
//   yield* genrateNumber();
//   yield* genrateString();
//   yield [5, 3, 6, 7];
// }
// for (let i of genratAll()) {
//   console.log(i);
// }
///
// function* genrateNumber() {
// let indx =0;
// while(true){
//   yield indx++;
// }
// }

// let generat=genrateNumber();
// console.log(generat.next());
// console.log(generat.next());
//////////////////////////////////json
// const myJsonFromServer = '{"Name":"sofiene","age":25,"jobTitle":"it"}';
// const myJson = JSON.parse(myJsonFromServer);
// console.log(myJson);
// myJson["Name"] = "ali";
// myJson["age"] = 22;
// console.log(myJson);
// const myJsonForServer = JSON.stringify(myJson);
// console.log(myJsonForServer);
///// ajax request
// let xml = new XMLHttpRequest();
// xml.open("get", "./elzero.json");
// xml.send();
// xml.onreadystatechange = function () {
//   // console.log(xml.readyState);
//   // console.log(xml.status);
//   if (this.readyState === 4 && this.status === 200) {
//     // console.log(this.responseText);
//     let jsdata = JSON.parse(this.responseText);
//     console.log(jsdata);
//   }
// };
// console.log(xml);
//////////////////////////////////promis
// const promisFUnction = new Promise((resolve, reject) => {
//   let conect = true;
//   if (conect) {
//     resolve("conect");
//   } else reject(error("eror"));
// });
// console.log(promisFUnction);

// promisFUnction.then(
//   (resolveValue) => console.log(`goood ${resolveValue}`),
//   (rejectValue) => console.log(`bad ${rejectValue}`)
// );
// let promisFun = new Promise((resolve, reject) => {
//   const employer = ["sofinee", "adem", "ali", "bada"];
//   if (employer.length === 4) {
//     resolve(employer); // bech traja3 l resolve value
//   } else {
//     reject(Error("eror of lenght"));
//   }
// });

// promisFun
//   .then((resolveValue) => {
//     resolveValue.length = 2;
//     return resolveValue;
//   })
//   .then((resolveValue) => {
//     resolveValue.length = 1;
//     console.log(resolveValue);
//   })
//   .catch((reject) => {
//     /// l erreur
//     console.log(Error("nombre of employer is not 4 "));
//   })
//   .finally(console.log("operation is donne "));

const getData = (apiLink)=>{
  return new Promise((resolve,rejected)=>{

    let myrequest = new XMLHttpRequest();
    myrequest.onload = ()=>{
      if (myrequest.readyState ===4&&myrequest.status===200){
        resolve(JSON.parse(myrequest.responseText)); // t9olo a3ml resolve l data 
      }
      else{
        console.log(Error("erroo "));
      }
    };
    myrequest.open("get",apiLink);
    myrequest.send();
  })
}
getData("./elzero.json");