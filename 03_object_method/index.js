var myDog = {
    name: "cat",
    age: 1,
    alive: true,
    actionSua: function() { // anonymous function: function no name
        console.log("meo meo. My name is ", this.name);
    }
}

myDog.actionSua();