let list =["Kolkata" , "Chennai" , "Banglore"];

list.push("Pune");// adds at end

list.unshift("Hyderabad");//adds at the beginning

list.splice(2,0,"Mumbai");//adds at the specific index , starting index.

console.log(list);

list.pop(); // removes the last element

list.shift();//removes from the first

list.splice(2,1); // removes from the specified index , and the second parameter mentions no.of elements to be removed from specified index.


console.log(list);