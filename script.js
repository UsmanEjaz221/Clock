let body = document.querySelector("body");
let hrs = document.querySelector("#hours");
let mins = document.querySelector("#minutes");
let sec = document.querySelector("#seconds");
let day = document.querySelector("#day");
let clocks = document.querySelectorAll(".time");
let dateBox = document.querySelector(".date");
let date = document.querySelector("#date");
let month = document.querySelector("#month");
let year = document.querySelector("#year");

let Days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

let Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

body.style.fontFamily = "'Ubuntu'";
body.style.fontWeight = "100";

day.style.fontFamily = "'Bebas Neue'";

dateBox.style.fontFamily = "'Bebas Neue'";
dateBox.style.fontSize = "2.2rem";

let MouseEnterFnx = () => {
    body.style.backgroundColor = "#aaaaaa";
    clocks.forEach((clock) => {
        clock.style.backgroundColor = "#22222280";
        clock.style.color = "#aaaaaa";
        clock.style.height = "7rem";
        clock.style.width = "7rem";
        clock.style.fontSize = "5rem"
    });

    day.style.color = "#222222";
    day.classList.remove("hidden");
    dateBox.classList.remove("hidden");
}

let MouseExitFnx = () => {
    body.style.backgroundColor = "#222222";
    clocks.forEach((clock) => {
        clock.style.backgroundColor = "#aaaaaaee";
        clock.style.color = "#222222";
        clock.style.height = "14.5rem";
        clock.style.width = "14.5rem";
        clock.style.fontSize = "11.5rem"
    });
    day.style.color = "#aaaaaa";
    day.classList.add("hidden");
    dateBox.classList.add("hidden");
}

clocks.forEach((clock) => {
    clock.addEventListener("mouseenter", MouseEnterFnx)
});

clocks.forEach((clock) => {
    clock.addEventListener("mouseleave", MouseExitFnx);
});




setInterval(() => {
    let time = new Date();
    
    for (let i in Days) {
        if (parseInt(i) + 1 == time.getDay()) {
            day.innerText = Days[i];
        }
    }

    date.innerText = time.getDate() ;
    for (let i in Months) {
        if (parseInt(i) == time.getMonth()) {
            month.innerText = Months[i];
        }
    }
    year.innerText = time.getFullYear();

    hrs.innerText = (time.getHours()<10? "0" : "") + time.getHours();
    mins.innerText = (time.getMinutes()<10? "0" : "") + time.getMinutes();
    sec.innerText = (time.getSeconds()< 10? "0" : "") + time.getSeconds();
}, 1000);