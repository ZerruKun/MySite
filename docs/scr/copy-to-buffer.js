/*Копирование в буфер на социальных кнопках*/

function copyEmail() {
  tempConteiner = document.createElement('input');
  tempConteiner.value = "Zerru_Kun@yahoo.com";
  document.body.appendChild(tempConteiner);
  tempConteiner.select();
  document.execCommand('copy');
  document.body.removeChild(tempConteiner);
};
