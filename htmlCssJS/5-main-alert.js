function one(){
alert("Hey check your brain!");
}

function post(){
    let inp = document.querySelector("#input1"); //taking the input from the user.
    
    let newObject = document.createElement('div'); // creating dynamic object for reflecting the value.
    newObject.innerHTML = inp.value; //storing the input from user to the dynamic object.

    let parent = document.querySelector("#div1"); //fetching the main box.
    parent.insertBefore(newObject,parent.children[4]); //assigning the current input from user at the top.

    inp.value = ""; //setting the input value in the input to blank , after the input is displayed.
}