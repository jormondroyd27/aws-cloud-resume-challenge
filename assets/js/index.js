// Counter

const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://mv6hzev3nppdwdxuiu4zv4rrzq0nfdwa.lambda-url.eu-west-2.on.aws/");
    let data = await response.json();
    counter.innerHTML = "Hello World";
}

updateCounter();