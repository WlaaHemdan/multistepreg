const allSlides = document.querySelectorAll(".slide");
const allSteps = document.querySelectorAll(".step");

//Next Button
const next0 = allSlides[0].querySelector(".next");
const next1 = allSlides[1].querySelector(".next");
const next2 = allSlides[2].querySelector(".next");

// Step One
const fName = document.querySelector(".fname");
const lName = document.querySelector(".lname");

next0.addEventListener("click", () => {
    if (fName.value == '' || lName.value == '') {
        alert("Please Write Your Name");
    }else {
        allSlides[0].style.marginLeft = "-25%";
        allSteps[0].classList.add("passed");
    }
});

// Step Two
const email = document.querySelector(".email");
const phone = document.querySelector(".phone");

next1.addEventListener("click", () => {
    if (email.value == '' || phone.value == '') {
        alert("Please Enter Your Data");
    }else {
        allSlides[0].style.marginLeft = "-50%";
        allSteps[1].classList.add("passed");
    }
});
// Step Three
const date = document.querySelector(".date");
next2.addEventListener("click", () => {
    if (date.value == '') {
        alert("Please Enter Your Birthday Date");
    }else {
    allSlides[0].style.marginLeft = "-75%";
    allSteps[2].classList.add("passed");
    }
});
// Step Four & Submit Button
const user = document.querySelector(".user");
const pass = document.querySelector(".pass");
const submit = document.querySelector(".submit");

submit.addEventListener("click", () => {
    if (user.value == '' || pass.value == '') {
        alert("Please Enter Your Username & Password");
    }else {
        allSteps[3].classList.add("passed");

        setTimeout(() => {
        alert("Thanks! \n You Are Successfully Signed Up");
        location.reload();
        }, 800);
    }
});

//Pervious Button
const prev1 = allSlides[1].querySelector(".pervious");
const prev2 = allSlides[2].querySelector(".pervious");
const prev3 = allSlides[3].querySelector(".pervious");

prev1.addEventListener("click", () => {
    allSlides[0].style.marginLeft = "0px";
    allSteps[0].classList.remove("passed");
});
prev2.addEventListener("click", () => {
    allSlides[0].style.marginLeft = "-25%";
    allSteps[1].classList.remove("passed");
});
prev3.addEventListener("click", () => {
    allSlides[0].style.marginLeft = "-50%";
    allSteps[2].classList.remove("passed");
});