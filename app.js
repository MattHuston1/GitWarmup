var students = [Will, Matt, Natalie, Eldon]
let emptyDivs = document.querySelectorAll("div");

emptyDivs.forEach(div => {
    div.textContent = "Hi!";
});

console.log(emptyDivs);

