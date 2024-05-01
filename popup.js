let cont = document.querySelector(".container");
let but = document.querySelector(".btn");
let pop = document.querySelector(".popup");
let cls = document.querySelector(".close");

but.addEventListener("click", () => {
    cont.classList.add("active");
    pop.classList.remove("active");
});

cls.addEventListener("click", () => {
    cont.classList.remove("active");
    pop.classList.add("active");
})