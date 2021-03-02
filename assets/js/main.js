class Ball {
  constructor(ballType) {
    this.ballType = undefined
      ? (this.ballType = "regulare")
      : (this.ballType = ballType);
  }
}
const ball1 = new Ball("super");
console.log(ball1);
const ball2 = new Ball();
console.log(ball2);

const inputs = document.querySelectorAll("input");
const form = document.getElementById("form");
const ul = document.querySelector("ul");

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  info() {
    console.log(this.name, this.age);
  }
  write() {
    const li = document.createElement("li");
    if (inputs[2].checked) {
      li.innerText = `${this.name},${this.age} years old`;
      ul.appendChild(li);
    } else {
      li.style.color = "red";
      li.innerText = `${this.name},${this.age} years old`;
      ul.appendChild(li);
    }
  }
}

const person1 = new Person("john", 33);
person1.info();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const person = new Person(inputs[0].value, inputs[1].value);
  person.write();
});
