let experience = 0;
const counter = document.getElementById("counter");
const clickButton = document.getElementById("clickButton");
const buttonBy = document.getElementById("buttonUpgrade");
let level = 0;
let ten = document.getElementById("ten");
let cost = 10;
const level_txt = document.getElementById("level_count")
let lvl = 0
const UpgradeHour = document.querySelector(".buttonUpgradeHour")
let UpgradeHourMoney = 20;
let UpgradeHourMoneyXX = 10000;
let boolValue = false;


clickButton.addEventListener("click", function() {
  if(lvl >= 1){
    experience += 2;
    counter.textContent = experience;
    level_txt.innerHTML = 1

    if(lvl >= 2)
      experience += 9;
    counter.textContent = experience;
    level_txt.innerHTML = 2

    if(lvl >= 3)
      experience += 20;
    counter.textContent = experience;
    level_txt.innerHTML = 3

    if(lvl >= 4)
      experience += 50;
    counter.textContent = experience;

    if(lvl >= 5)
      experience += 500;
    counter.textContent = experience;
  
    if(lvl >= 6)
      experience += 2000;
    counter.textContent = experience;

    if(lvl >= 7)
      experience += 5000;
    counter.textContent = experience;
    if(lvl >= 8)
      experience += 15000;
    counter.textContent = experience;
    if(lvl >= 9)
      experience += 25000;
    counter.textContent = experience;
    if(lvl >= 10)
      experience += 45000;
    counter.textContent = experience;
    if(lvl >= 11)
      experience += 65000;
    counter.textContent = experience;
    if(lvl >= 12)
      experience += 85000;
    counter.textContent = experience;
    if(lvl >= 13)
      experience += 95000;
    counter.textContent = experience;
    if(lvl >= 14)
      experience += 115000;
    counter.textContent = experience;

  } else {
    experience++;
    counter.textContent = experience;
  }
});

//// Начало скрипта от GPT

//// Конец скрипта от GPT
buttonBy.addEventListener("click", function(){
  if (experience >= cost) {
    level.innerText++;
    experience -= cost;
    lvl++;
    experience = 1;
    cost = Math.ceil(cost * 2);
    alert(`Вы прокачали уровень до ${lvl}. Ваш опыт: ${experience}. Следующий уровень будет стоить ${cost} опыта.`);
  } else {
    alert("Недостаточно опыта для покупки уровня.");
  }
}
)

if(level == 2){
  experience += 1;
}

function gainExperience(amount) {
  experience += amount;
  alert(`Вы получили ${amount} опыта. Ваш текущий опыт: ${experience}.`);
}


// Пример использования функций
gainExperience(1); // Получаем 15 опыта
// buyLevel(); // Покупаем уровень

function Check() {
  UpgradeHour.addEventListener("click", function(){
      if(experience >= 20){
          boolValue = true;
          experience -= 20;
          experience += experience;
          console.log(experience+''+boolValue);
          counter.innerText = experience
      }
  });
}
setInterval(function (){
  if(boolValue == true){
    experience+= 50;
    experience = experience;  
    counter.innerText = experience;
  }
}, 1000);
Check()