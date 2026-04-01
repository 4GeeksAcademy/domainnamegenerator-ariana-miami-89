import "./style.css";

document.body.innerHTML = `
  <div class="container">
    <h1>Domain Name Generator</h1>
    <button id="generateBtn">Generate Domain</button>
    <h2 id="result"></h2>
  </div>
`;

let pronoun = ['my', 'your', 'their'];
let adj = ['sleepy', 'mysterious', 'legendary'];
let noun = ['coder', 'robot', 'wizard', 'penguin', 'detective'];

const button = document.getElementById("generateBtn");
const result = document.getElementById("result");

button.addEventListener("click", function () {
  let randomPronoun = pronoun[Math.floor(Math.random() * pronoun.length)];
  let randomAdj = adj[Math.floor(Math.random() * adj.length)];
  let randomNoun = noun[Math.floor(Math.random() * noun.length)];

  let domain = randomPronoun + randomAdj + randomNoun + ".com";

  result.textContent = domain;
});