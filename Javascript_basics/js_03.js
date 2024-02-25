//array
var name = 'John'
//list of item is called array
var students =['John','Mary','Peter','Sam'];
names = ['sunitha', 'ram','diwakar'];
 ages = [10, 20,30, 40, 50]

 cities = ['Milton','Kitchener', 'oakvile'];

 interest = ['Football','cricket','Basketball','Vollyball']
 console.log(students)
 console.log(ages)
 console.log(cities)
 console.log(interest)

 console.log(cities[0])
 console.log(ages[1])
console.log(ages[2])
console.log(ages[4])
//index starts from 0 in an arry
console.log(students.length)
var cities = ['Milton','Kitchener', 'oakvile']
console.log(cities.indexOf['oakvile1'])
console.log(cities.indexOf('oa'));

var Fruits = ["Apple", "Orange", "Apple", "Mango"];
console.log(Fruits.indexOf("Apple"));
console.log(Fruits.indexOf("Apple"))+1;

//indexoflength will return -1 if the item is not found in the arry
//length of the arry-- cities.length
//if you want a perticular items in the arry,you can use the index of the item--cities[2]

//object
//animal is an object
//dog is an object
//dog will have some propertys like name,age,color,weight,height,etc
//cat is an object
//cat will have name,age,breed,weight,height,etc
//car is an objects
//car will have model,year,colour,etc
//person is an object
//person will have name,age,address,phone number,etc
//object is nothing but a collection of key value pairs

var person = {
  name:'john',//string
  age: 30,// number
  address:'123 Main st',
  cities:'New york',
  state:'NY',
  Zip: '10001',
  phone: '2453664',
  interest: ['music','movies','sports'],//array
  ismarried: true,//boolean
}
address = {
    address:'123 Main st',
    cities:'New york',
    state:'NY',
    Zip: '10001'
}


var country = {
    Name: 'Canada',
    population:'30000000',
    capital:'Ottawa',
    states:['alberta','british columbia','manitoba'],
    president:{
        name: 'justin Trudeau',
        age: 50,
        address: '5674 ottawa near aAve',
        city: 'Ottawa circle',
        province: 'ON',
        zip:'40003',
        phone:'678343569',
    }

}

console.log(person);
console.log(address);
console.log(person.name);
console.log('age of person is: '+person.age);
console.log('president\'s name is: '+country.president.name);
console.log('president\'s city is: '+country.president.city);

//two ways of accessing a property of an object
//dot notation - object.property
//bracket notation object['property']

console.log('president name is:'+country['president'].name)

var cat = (//is an objecy
    Name: 'Dora', //property
    age: 1,
    color: 'White',
    Woner = [
        nameOfThewoner: 'Smith',
        Bread: 'Egyptian Mau',
        locationOfTheorigin: 'Egypt',
        Type: 'Natural',
        PhoneNumber: '2454784',
    ]

)

console.log(cat);
console.log(Name);
console.log(nameofthewoner);
console.log('age of cat is;' +cat.age);
console.log('woner\s of the cat is;'+country.cat.Name);
console.log('woner of the cat is;'+country['cat'].Name);

//function - a block of code that can be executed when called
function nameOfTheFunction(){
    console.log('Hellow World')
}
//call the function
nameOfTheFunction()
function printName(){
    console.log('john')
}
function printAge(){
    console.log(30)//block of code

}

function addNumber(){
    var x = 10;
    var y = 20;
    return (x + y)
}
addNumbers()
var a = addNumbers();
console.log(a)

function addMultiply(){
    var x = 10;
    var y = 20;
    return (x*y)
}
var b = multiplyNumbers();
console.log(b + 10 );

var x = [ 1,2,3,4,5,6,7,8,9,10]
console.log(x.length)

function(printMyName){
console.log('sunitha')

}
function addNumbers(x,y){  //x and y are parameters to the function addNumbers
    return x+y
console.log(addNumbers(100,200))
}
console.log(11 + -4)
 



function concatWords(word1,word2,word3){
    return word1 +''+word2 +''+word3
}

console.log(concatWords('hellow', 'world','how are you?'))
 functionmultiplyNumber(x,y)
return(x*y)

console.logmultiplyNumber(10,20)

//indexOf will return -1 if the item are not found inthe arry
//indexOf will return the index of the item if it is found in the arry
//length Of the arry--teams.length
//if you want a perticular item in the arry,you can use index of the item--team[2]


//exersises
//write  a function that accepts two numbers and return the largest number
 function findLargestNumber(a,b){
   //check if a is greater than b. if yes, return a,otherwise return b
   if(a > b) {
    return a
   } else {
    return b
   }
 }
   
 function cubeRoot(x){
    return x * x * x
 }
console.log(findLargeNumber(10,20)) //20



 