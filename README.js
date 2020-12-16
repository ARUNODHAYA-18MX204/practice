//***************BASIC PROGRAMS***************



//**************************************variables ******************/
let a=9;
console.log(a);
var b="hello"
console.log(b);
const c=3.14;

function loop(){
for(var i=0;i<5;i++)
{ 
    console.log(i);

}
console.log(i);

}

loop();
/* NOTES:
var is used as global variable,let is used inside block....const cannot be changed.
variables cannnot be reserved words
  should be meaningful
cannot start with number...123total->X
case sensitive
cannot contain space or hyphen

*/


//**************************************variables ******************/




//*********************************DATA TYPES **********************/


//************PRIMITIVE TYPES------> strings,Numbers,boolean,null,undefined
let name='Aruna'//string
let age=23;//number-->double 
let bool_val=true;//boolean
let x;//undefined-->if nothing is declared it is declared as undefined
let y=null;

console.log(typeof name);//to print its type
console.log(typeof x);


//**************REFERENCE TYPES---> objects,Arrays,Functions 
/*object will have properties,key value pair,keys are the properties */
let person={
    name:'Aruna',
    age:23,
    
};
//Accessing
console.log(person.name);
console.log(person["name"]);//bracket notation is used to access properties dynamically


//Arrays is also an object where keys are from 0,1,2...
let months=['JAN','FEB','MAR'];
console.log(months);//all

console.log(months[2]);//MAR
console.log(months[6]);//undefined
//Array methods

let iterator=months.keys();
for(k of iterator)
{
    console.log(k);
}

console.log(months.length);
let days=[31,28,31];
console.log(months.concat(days));
console.log(months.constructor);//function Array
/*copyWithin(target,start,end)//default start is 0,default end is length of the array
will not add extra customElements.*/
console.log(months.copyWithin(2));
console.log(months);
//entries()Create an Array Iterator object, and create a loop that iterates each key/value pair
let it=months.entries();//iterator
for(i of it)
{
    console.log(i);
}


//every()--->to check if every elements in the array satisfy the function
var agee=[30,89,90,78];
function check(agee)
{
    if(agee>18){
        return true;
    }
    else{
        return false;
    }
}
console.log(agee.every(check));

//some()-->to check if any one of the elements in the array satisfy the function

console.log("Some satisfies-->"+agee.some(check));

//fill()-->filling all the elements with a static value.
console.log(days);
days.fill(31);
console.log(days);

//filter() -->returns only the particular elemets which satisfies the function
var marks=[99,88,27,20];

function passed_students(marks){
    return marks>50;

}
var passed_stu=marks.filter(passed_students);
console.log(passed_stu);

//find()-->get the first element who have passed

console.log(marks.find(passed_students));


//findIndex()--> get the index of the person who have passed
console.log(marks.findIndex(passed_students));

//forEach()--->first element will be the element second parameter will be index
var odd=[2,4,6,8,10];
odd.forEach(function(element,index)
{
    odd[index]=element-1;

});
console.log(odd);


//from()-->creates an array from a string
var message="good morning";
var array_message=Array.from(message);
console.log(array_message);


//includes-->checks whether the array contains the element--returns a boolean value--case sensitive
console.log(array_message.includes('g'));//true
console.log(array_message.includes('G'));//False

//indexOf()-->returns the index of particular element
console.log("First index of o-->"+array_message.indexOf('o'));//first occurence of  'o'

//lastIndexOf()-->returns the last occurence of element
console.log("last index of o-->"+array_message.lastIndexOf('o'));
/*join()-->convert the elements of array into string
The elements will be separated by a specified separator. The default separator is comma (,).
this method will not change the original array.*/

console.log(array_message.join(''))//good morning

//keys
let key=months.keys();
for(k of key)
{
    console.log(k);
}


/*map()The map() method creates a new array with the results of calling a function for every array element.
The map() method calls the provided function once for each element in an array, in order.
map() does not execute the function for array elements without values.
same as for each method but for each changes the original array
this method does not change the original array.It returns new array*/
function even(odd)//parameter->1.item,2.index
{
    return odd +1
}
var even=odd.map(even);

console.log(even);
//pop-->removes the last element
even.pop();
console.log(even);
//shift()-->removes first element
even.shift();
console.log(even);


//push()-->add new element to the end of the array
even.push(10);


//unshift()--> adds new element to the begining of the array
even.unshift(2)
console.log(even);

/*reduce()he reduce() method reduces the array to a single value.
The reduce() method executes a provided function for each value of the array (from left-to-right).
The return value of the function is stored in an accumulator (result/total).
reduce() does not execute the function for array elements without values.
This method does not change the original array.
parameters(previous value,current value)
*/
function add(total,num)
{
    return total+num;

}
console.log(even.reduce(add));//30


//reduceRight-->starts from right to left

function subtract(total,num)
{
    return total-num;

}
console.log(even.reduce(subtract));



//reverse-->The reverse() method reverses the order of the elements in an array.This method will change the original array.
console.log(even.reverse());

//slice()-->returns new array,array.slice(start,end-1),negative indecxing also possible
var even2=even.slice(2,4);//or even.slice(-3,-1)
console.log(even2);

//sort()-->sort the elements
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();//ascending
fruits.reverse();//decending
console.log(fruits);
//splice()-->Add items to the array:The splice() method adds/removes items to/from an array, and returns the removed item(s).

//This method changes the original array


fruits.splice(2, 0, "Lemon", "Kiwi");//adding
console.log(fruits);
fruits.splice(2,2);//(starting_position,number of elementsdeleting using splice
console.log(fruits);
//toString()-->default ',' separatorconverts array to string link join
console.log(fruits.toString());
