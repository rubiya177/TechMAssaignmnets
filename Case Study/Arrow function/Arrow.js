//longhand
function sayHello(name) {
    console.log("hello",name);

}
sayHello('rubiya')


setTimeout(function()  {
    console.log("loading!!!")

}, 2000);







//Arrow function
sayHello = (name) => console.log("hello",name);
sayHello("Rubiya");


setTimeout(() => console.log('loading!!!'),name);

