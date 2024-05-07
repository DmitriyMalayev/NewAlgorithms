// let vehicle = {
//     wheels: "4",
//     fuelType: "gasoline",
//     color: "Green"
// }

// let carProps = {
//     type: {
//         value: "Volkswagen", 
//     },
//     model: {
//         value: "Golf"
//     }
// }

// var car = Object.create(vehicle, carProps)
// console.log(car)

function Person(){}
Person.prototype.name = "Dmitriy"
var object = new Person()

const orgObject = {company: "Toys"}
const carObject = {name: "Toyota"}
const carObject2 = {names: "Lexus"}

const staff = Object.assign({}, orgObject, carObject, carObject2)
staff