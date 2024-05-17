// // function foo() {
// //   let x = (y = 0);
// //   x++;
// //   y++;
// //   return x;
// // }
// // console.log(foo(), typeof x, typeof y);


// // function foo() {
// //   return (;

// //   )
// //   {
// //     message: "Hello World";
// //   };
// // }

// // foo()

// const obj = {
//   prop1: function () {
//     return 0;
//   },
//   prop2() {
//     return 1;
//   },
//   ["prop" + 3]() {
//     return 2;
//   },
// };

// console.log(obj.prop1());
// console.log(obj.prop2());
// console.log(obj.prop3());


// console.log(10 == [10]);
// console.log(10 == [[[[[[[10]]]]]]]);

// console.log([[[[[[[10]]]]]]].valueOf().toString()) 

// Boolean([0])
// Boolean(Number([0].valueOf().toString()))
// console.log(Boolean(0));
// if ([0]) {
//   console.log("I'm True");
// } else {
//   console.log("I'm False");
// }

// function delay() {
//   return new Promise((resolve) => setTimeout(resolve, 2000));
// }

// async function delayedLog(item) {
//   await delay();
//   console.log(item);
// }

// async function process(array) {
//   for (const item of array) { 
//     await delayedLog(item);
//   }
//   console.log("Process completed!");
// }

// // Call the process function with the array
// process([1, 2, 3, 5]); 


// console.log(
//   JSON.stringify({ myArray: ["one", undefined, function () {}, Symbol("")] })
// );
// console.log(
//   JSON.stringify({ [Symbol.for("one")]: "one" }, [Symbol.for("one")])
// );

// class A {
//   constructor() {
//     console.log(new.target.name);
//   }
// }

// class B extends A {
//   constructor() {
//     super();
//   }
// }

// new A();
// new B();


// function add(item) {
//   let items = []
//   items.push(item);
//   return items;
// }

// console.log(add("Orange"));
// console.log(add("Apple"));



// function Person(name) {
//   this.name = name
// }

// Person.prototype.walk = function () {
//   return this.name;
// };

// Person.run = function () {
//   return this.name 
// };

// let user = new Person("a");
// let walk = user.name;
// console.log(walk);

// let run = Person.run;
// console.log(run());



// let zero = new Number(0);

// if (zero) {
//   console.log("If");
// } else {
//   console.log("Else");
// }

// let msg = "Good morning!!"

// msg.name = "John"

// console.log(msg.name);

// Boolean("aaasd")

// console.log("First line")[("a", "b", "c")].forEach((element) => console.log(element));
// console.log("Third line");

// var x = 5 
// {
//   console.log(x); // ReferenceError
//   x = 4
//   // const x = 2;
// }
// console.log(x)


// var currentCity = "New York"

// var changeCurrentCity = function(){
//   console.log(currentCity)   //prints New York
// };

// changeCurrentCity()


// function name(){
//   var name = "Dmitriy"
// }

// console.log(name)

// var expressionOne = function functionOne() {
//   console.log("functionOne");
// };
// functionOne();


let message = "Hello World!";
message[0] = "J";
console.log(message);

let name = "John";
name = name + " Smith";
console.log(name);