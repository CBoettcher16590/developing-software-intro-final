export default function greeting() {
    const firstPart = "Hello";
    const secondPart = " Terminal!";

    const message: string = firstPart + secondPart;

    return console.log(message);
}

greeting();
