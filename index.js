//array declaration

var color=['red','green','yellow','white'];
console.log(color[0]);
console.log(color[1]);
console.log(color[2]);
console.log(color[3]);

//length of array
console.log(color.length);

//adding an element at end of the array

color.push('black');
console.log(color);

//deleting an element at end of the array
 color.pop();
 console.log(color);

 //adding an element at starting of the array

 color.unshift('grey');
 console.log(color);

 //deleting an element at starting of the array
 color.shift('grey');
 console.log(color);

 //splice and slice
//adding an element at middle of the array

color.splice(2,0,'blue');
console.log(color)

//for deleting
color.splice(2,1);
console.log(color);
color.splice(2,1);
console.log(color);

//adding arrays-concat

var a=['red','green'];
var b=['yellow','white'];
var c=a.concat(b);
console.log(c)
var c=b.concat(a);
console.log(c)


//reverse
var color=['red','green','yellow','white'];
color.reverse();
console.log(color);


//
var animals=['dog','cat','lion','tiger','crocodile','bear','wolf','monkey','zebra','elephant'];
for (var i=0;i<=animals.length-1;i++){
    console.log(animals[i]);
}
