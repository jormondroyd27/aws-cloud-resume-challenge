// Counter

const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://pq7wjeldw5vh472uzsnmka2ini0miyiv.lambda-url.eu-west-2.on.aws/");
    let data = await response.json();
    counter.innerHTML = ` Views: ${data}`;
}

updateCounter();