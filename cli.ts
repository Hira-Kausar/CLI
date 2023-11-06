//Develop a simple command line Todo app using TypeScipt, Node.js and Inquirer.
import inquirer from "inquirer";

const answers: {
    numberone:number,
    numbertwo:number,
    operator:string,
}=await inquirer.prompt([
    {
        type:"number",
        name:"numberone",
        message:"Enter 1st number:"
    },
    {
        type:"number",
        name:"numbertwo",
        message:"Enter 2nd number:"
    },
    { 
        type:"list",
        name:"operator",
        choices:["+","-","*","/"],
        message:"select operator:"
    },
])
let result =answers;
if (answers.operator == "+"){
    console.log(answers.numberone + answers.numbertwo)
}
else if( answers.operator == "-"){
    console.log(answers.numberone - answers.numbertwo)
}
else if (answers.operator == "*"){
    console.log(answers.numberone * answers.numbertwo)
}
else if (answers.operator == "/"){
    console.log(answers.numberone / answers.numbertwo)
}
else{
    console.log("invalid input")
}

console.log(answers)
