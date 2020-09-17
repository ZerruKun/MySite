let projects = document.querySelectorAll('.project-item');
let larrow = document.querySelector('.larrow');
let rarrow = document.querySelector('.rarrow');
let item = projects[0];


rarrow.onclick = function() {
  switch (item) {
    case projects[0]:
      projects[0].classList.add('visual-hidden');
      projects[1].classList.remove('visual-hidden');
      item = projects[1];
      console.log(item);
      break;

    case projects[1]:
      projects[1].classList.add('visual-hidden');
      projects[2].classList.remove('visual-hidden');
      item = projects[2];
      console.log(item);
      break;

    case projects[2]:
      projects[2].classList.add('visual-hidden');
      projects[3].classList.remove('visual-hidden');
      item = projects[3];
      console.log(item);
      break;

    case projects[3]:
      projects[3].classList.add('visual-hidden');
      projects[0].classList.remove('visual-hidden');
      item = projects[0];
      console.log(item);
      break;
  }
}

larrow.onclick = function() {
  switch (item) {
    case projects[0]:
      projects[0].classList.add('visual-hidden');
      projects[3].classList.remove('visual-hidden');
      item = projects[3];
      console.log(item);
      break;

    case projects[1]:
      projects[1].classList.add('visual-hidden');
      projects[0].classList.remove('visual-hidden');
      item = projects[0];
      console.log(item);
      break;

    case projects[2]:
      projects[2].classList.add('visual-hidden');
      projects[1].classList.remove('visual-hidden');
      item = projects[1];
      console.log(item);
      break;

    case projects[3]:
      projects[3].classList.add('visual-hidden');
      projects[2].classList.remove('visual-hidden');
      item = projects[2];
      console.log(item);
      break;
  }
}
