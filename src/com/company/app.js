//var a = "hh";
//var a = 'Hello World';

//function b() {
//    console.log('b!');
//}
//b();
//console.log(a);
//
//if (a === undefined) {
//    console.log('a is undefined!');
//} else {
//    console.log('a is defined!');
//}

/*
function b() {
    console.log(myVar);
    var myVar;
}

function a() {
    var myVar = 2;
    b();
}

var myVar = 1;
a();
*/
/*
function waitThreeSeconds() {
    var ms = 3000 + new Date().getTime();
    while (new Date() < ms) {}
    console.log('finished waiting');
}

function clickHandler() {
    console.log('clicked event!');
}

// listen for clicking event
document.addEventListener('click', clickHandler);

waitThreeSeconds();
console.log('finished execution!');

*/

//console.log(3 < 2 < 1);

//var a = 'hi';
//
//if (a) {
//    console.log('Something is there.');
//}
//
//function greet(name) {
//    name = name || '<Your name here>';
//    console.log('Hello ' + name);
//}
//
//greet('Tony');
//greet(0);
//greet();


//console.log(libraryName);

/*

var person = new Object();

person['firstname'] = "Tony";
person["lastname"] = "Alice";

var firstNameProperty = "firstname";

console.log(person);
console.log(person[firstNameProperty]);

console.log(person.firstname);
console.log(person.lastname);

person.addr = new Object();
person.addr.street = "11 st ";
person.addr.city = "new york";
person.addr.state = "NY";


console.log(person['addr']["state"]);

*/

var person = {
    firstname: 'Tony',
    lastname: 'Alice',
    address: {
        street: '111 main st.',
        city: "New York",
        state: 'NY'
    }
};
console.log(person);