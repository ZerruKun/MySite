let projects = document.querySelectorAll('.project-item');
let larrow = document.querySelector('.larrow');
let rarrow = document.querySelector('.rarrow');
let item = projects[0];

rarrow.onclick = function() {
  switch (item) {
    case projects[0]:

      break;
      
    case projects[1]:

      break;

    case projects[2]:

      break;

    case projects[3]:

      break;

    default:

  }
  console.log(item);
}


/*
let detailedEducation = document.querySelector(".detailed1");
let hiddenEducation = document.querySelector(".education-hidden");
let hideEducation = document.querySelector(".hidden1");
let detailedExperience = document.querySelector(".detailed2");
let hiddenExperience = document.querySelector(".experience-hidden");
let hideExperience = document.querySelector(".hidden2");
let detailedJob = document.querySelector(".detailed3");
let hiddenJob = document.querySelector(".job-hidden");
let hideJob = document.querySelector(".hidden3");

detailedEducation.onclick = function() {
  hiddenEducation.classList.remove("visually-hidden");
  console.log("clicked");
};

hideEducation.onclick = function() {
  hiddenEducation.classList.add("visually-hidden");
  console.log("clicked");
};

detailedExperience.onclick = function() {
  hiddenExperience.classList.remove("visually-hidden");
  console.log("clicked");
};

hideExperience.onclick = function() {
  hiddenExperience.classList.add("visually-hidden");
  console.log("clicked");
};

detailedJob.onclick = function() {
  hiddenJob.classList.remove("visually-hidden");
  console.log("clicked");
};

hideJob.onclick = function() {
  hiddenJob.classList.add("visually-hidden");
  console.log("clicked");
};


let prof1 = document.querySelector('.prof1');
let prof2 = document.querySelector('.prof2');

prof1.onclick = function() {
  let elements = document.querySelectorAll('.job-search-item');
  for (let i = 0; i < elements.length; i++) {
    let element = elements[i];
    console.log(element);
    element.classList.toggle('visually-hidden');
  };
};

prof2.onclick = function() {
  let items = document.querySelectorAll('.job-search-item');
  for (let i = 0; i < items.length; i++) {
    let item = items[i];
    console.log(item);
    item.classList.toggle('visually-hidden');
  };
};

let adminDoneItems = document.querySelectorAll(".admin-done-item");
let adminButtons = document.querySelectorAll(".admin-button");
let frontendDoneItems = document.querySelectorAll(".front-end-done-item");
let frontendButtons = document.querySelectorAll(".front-end-button");

adminButtons[0].onclick = function() {
  adminDoneItems[0].classList.remove("visually-hidden");
  adminDoneItems[1].classList.add("visually-hidden");
  adminDoneItems[2].classList.add("visually-hidden");
  adminButtons[0].classList.add("admin-button-pushed");
  adminButtons[1].classList.remove("admin-button-pushed");
  adminButtons[2].classList.remove("admin-button-pushed");
};

adminButtons[1].onclick = function() {
  adminDoneItems[0].classList.add("visually-hidden");
  adminDoneItems[1].classList.remove("visually-hidden");
  adminDoneItems[2].classList.add("visually-hidden");
  adminButtons[0].classList.remove("admin-button-pushed");
  adminButtons[1].classList.add("admin-button-pushed");
  adminButtons[2].classList.remove("admin-button-pushed");
};

adminButtons[2].onclick = function() {
  adminDoneItems[0].classList.add("visually-hidden");
  adminDoneItems[1].classList.add("visually-hidden");
  adminDoneItems[2].classList.remove("visually-hidden");
  adminButtons[0].classList.remove("admin-button-pushed");
  adminButtons[1].classList.remove("admin-button-pushed");
  adminButtons[2].classList.add("admin-button-pushed");
};

frontendButtons[0].onclick = function() {
  frontendDoneItems[0].classList.remove("visually-hidden");
  frontendDoneItems[1].classList.add("visually-hidden");
  frontendDoneItems[2].classList.add("visually-hidden");
  frontendButtons[0].classList.add("front-end-button-pushed");
  frontendButtons[1].classList.remove("front-end-button-pushed");
  frontendButtons[2].classList.remove("front-end-button-pushed");
};

frontendButtons[1].onclick = function() {
  frontendDoneItems[0].classList.add("visually-hidden");
  frontendDoneItems[1].classList.remove("visually-hidden");
  frontendDoneItems[2].classList.add("visually-hidden");
  frontendButtons[0].classList.remove("front-end-button-pushed");
  frontendButtons[1].classList.add("front-end-button-pushed");
  frontendButtons[2].classList.remove("front-end-button-pushed");
};

frontendButtons[2].onclick = function() {
  frontendDoneItems[0].classList.add("visually-hidden");
  frontendDoneItems[1].classList.add("visually-hidden");
  frontendDoneItems[2].classList.remove("visually-hidden");
  frontendButtons[0].classList.remove("front-end-button-pushed");
  frontendButtons[1].classList.remove("front-end-button-pushed");
  frontendButtons[2].classList.add("front-end-button-pushed");
};

let socialItemCopy1 = document.querySelector(".social-item-img1");
let socialItemCopy2 = document.querySelector(".social-item-img2");

socialItemCopy1.onmouseenter= function() {
  socialItemCopy1.setAttribute("src", "ico/copy.svg");
  console.log(socialItemCopy1);
};

socialItemCopy1.onmouseleave = function() {
  socialItemCopy1.setAttribute("src", "ico/mail.svg");
  console.log(socialItemCopy1);
}

socialItemCopy2.onmouseenter= function() {
  socialItemCopy2.setAttribute("src", "ico/copy.svg");
  console.log(socialItemCopy2);
};

socialItemCopy2.onmouseleave = function() {
  socialItemCopy2.setAttribute("src", "ico/phone.svg");
  console.log(socialItemCopy2);
}
*/
