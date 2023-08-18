const userInput = prompt(
    "Enter the froyo flavors that you wish to order:"
);

const flavors = userInput.split(',');
const order = {

};

for(let i = 0; i < flavors.length; i++){
    const flavor = flavors[i];
    if(order[flavor] === undefined){
        order[flavor] = 0;
    }
    order[flavor]++;
}

console.log(order);