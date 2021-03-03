const body = document.querySelector("body");
const form1 = document.getElementById("form1");
const inputs = document.querySelectorAll("input");
const textArea = document.getElementById("text-area");
const section = document.querySelector("section");

class Star {
  constructor(
    firstName,
    lastName,
    album,
    singles,
    awards,
    netWorth,
    famousQuote,
    imgUrl
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.album = album;
    this.singles = singles;
    this.awards = awards;
    this.netWorth = netWorth;
    this.famousQuote = famousQuote;
    this.imgUrl = imgUrl;
  }
  addCard() {
    const cardContainer = document.createElement("div");
    const img = document.createElement("img");
    img.setAttribute("src", this.imgUrl);
    const cardBody = document.createElement("div");
    cardContainer.classList.add("card");
    cardContainer.appendChild(img);
    cardContainer.appendChild(cardBody);
    cardBody.classList.add("card-body");
    const h5 = document.createElement("h5");
    cardBody.appendChild(h5);
    h5.classList.add("card-title");
    h5.innerText = `${this.firstName} ${this.lastName}`;
    const p = document.createElement("p");
    cardBody.appendChild(p);
    p.classList.add("card-text");
    p.innerText = `Famous Quote:  ${this.famousQuote}`;

    //Ul list
    const ul = document.createElement("ul");
    ul.classList.add("list-group");
    ul.classList.add("list-group-flush");
    const li = document.createElement("li");
    ul.appendChild(li);
    li.classList.add("list-group-item");
    li.innerText = `Net-Worth: ${this.netWorth} $ `;

    const li1 = document.createElement("li");
    ul.appendChild(li1);
    li1.classList.add("list-group-item");
    li1.innerText = `How many Albums?: ${this.album} `;

    const li2 = document.createElement("li");
    ul.appendChild(li2);
    li2.classList.add("list-group-item");
    li2.innerText = `Singles: ${this.singles} `;

    const li3 = document.createElement("li");
    ul.appendChild(li3);
    li3.classList.add("list-group-item");
    li3.innerText = `Awards: ${this.awards} `;

    cardContainer.appendChild(ul);

    section.appendChild(cardContainer);
  }
}

form1.addEventListener("submit", (e) => {
  e.preventDefault();
  let cardo = new Star(
    inputs[0].value,
    inputs[1].value,
    inputs[2].value,
    inputs[3].value,
    inputs[4].value,
    inputs[5].value,
    textArea.value,
    inputs[6].value
  );

  cardo.addCard();
});
