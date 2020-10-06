export default function greeting(){
    const firstPart:string = "Hello";
    const secondPart:string = " Terminal!";

    const message:string = firstPart + secondPart;

    return console.log(message);
}

greeting();