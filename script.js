//Referenser
const letterContainer = document.getElementById("letter-container");
const optionsContainer = document.getElementById("options-container");
const userInputSection = document.getElementById("user-input-section");
const newGameContainer = document.getElementById("new-game-container");
const newGameButton = document.getElementById("new-game-button");
const canvas = document.getElementById("canvas");
const resultText = document.getElementById("result-text");

// Kategori innheåll
let options = {
  fruits: ["Apple", "Apricot", "Avocado", "Banana", "Blackberry", "Blueberry", "Cherry", "Coconut", "Cucumber", "Durian", "Dragonfruit", "Fig", "Gooseberry", "Grape", "Guava", "Jackfruit", "Plum", "Kiwifruit", "Kumquat", "Lemon", "Lime", "Mango", "Watermelon", "Mulberry", "Orange", "Papaya", "Passionfruit", "Peach", "Pear", "Persimmon", "Pineapple", "Pineberry", "Quince", "Raspberry", "Soursop", "Star fruit", "Strawberry", "Tamarind", "Yuzu"]
  ,
  animals: ["Ant", "Bat", "Bear", "Bee", "Beetle", "Blue whale", "Buffalo", "Butterfly", "Camel", "Cat", "Caterpillar", "Catfish", "Centipede", "Chameleon", "Chicken", "Cockroach", "Cow", "Crab", "Crane", "Cricket", "Crocodile", "Crow", "Deer", "Dog", "Dolphin", "Donkey", "Duck", "Eagle", "Elephant", "Fish", "Fox", "Giant panda", "Giraffe", "Goat", "Goldfish", "Gorilla", "Grasshopper", "Hamster", "Hippopotamus", "Honeybee", "Horse", "Hummingbird", "Hyena", "Jaguar", "Kangaroo", "Kingfisher", "Ladybug", "Lion", "Lizard", "Monkey", "Mosquito", "Mouse", "Octopus", "Ostrich", "Owl", "Panda", "Parrot", "Peacock", "Penguin", "Pig", "Pigeon", "Piranha", "Prawns", "Rabbit", "Rhinoceros", "Rooster", "Scorpion", "Sea horse", "Seal", "Sealion", "Shark", "Sheep", "Snake", "Sparrow", "Spider", "Squirrel", "Swan", "Tick", "Tiger", "Turkey", "Turtle", "Vulture", "Walrus", "Wolf", "Wolverine", "Woodpecker", "Yak", "Zebra"]
   ,
  countries: ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"]
  ,
  swedishCities: ["Alingsås", "Arboga", "Arvika", "Askersund", "Avesta", "Boden", "Bollnäs", "Borgholm", "Borlänge", "Borås", "Djursholm", "Eksjö", "Enköping", "Eskilstuna", "Eslöv", "Fagersta", "Falkenberg", "Falköping", "Falsterbo", "Falun", "Filipstad", "Flen", "Gothenburg", "Gävle", "Hagfors", "Halmstad", "Haparanda", "Hedemora", "Helsingborg", "Hjo", "Hudiksvall", "Huskvarna", "Härnösand", "Hässleholm", "Höganäs", "Jönköping", "Kalmar", "Karlshamn", "Karlskoga", "Karlskrona", "Karlstad", "Katrineholm", "Kiruna", "Kramfors", "Kristianstad", "Kristinehamn", "Kumla", "Kungsbacka", "Kungälv", "Köping", "Laholm", "Landskrona", "Lidingö", "Lidköping", "Lindesberg", "Linköping", "Ljungby", "Ludvika", "Luleå", "Lund", "Lycksele", "Lysekil", "Malmö", "Mariefred", "Mariestad", "Marstrand", "Mjölby", "Motala", "Nacka", "Nora", "Norrköping", "Norrtälje", "Nybro", "Nyköping", "Nynäshamn", "Nässjö", "Oskarshamn", "Oxelösund", "Piteå", "Ronneby", "Sala", "Sandviken", "Sigtuna", "Simrishamn", "Skanör", "SkanörmedFalsterbo", "Skara", "Skellefteå", "Skänninge", "Skövde", "Sollefteå", "Solna", "Stockholm", "Strängnäs", "Strömstad", "Sundbyberg", "Sundsvall", "Säffle", "Säter", "Sävsjö", "Söderhamn", "Söderköping", "Södertälje", "Sölvesborg", "Tidaholm", "Torshälla", "Tranås", "Trelleborg", "Trollhättan", "Trosa", "Uddevalla", "Ulricehamn", "Umeå", "Uppsala", "Vadstena", "Varberg", "Vaxholm", "Vetlanda", "Vimmerby", "Visby", "Vänersborg", "Värnamo", "Västervik", "Västerås", "Växjö", "Ystad", "Åmål", "Ängelholm", "Örebro", "Öregrund", "Örnsköldsvik", "Östersund", "Östhammar"],
};

//Change color

function changeColorRed() {
  document.getElementById("color").style.backgroundColor = "red";
}

function changeColorBlack() {
  document.getElementById("color").style.backgroundColor = "black";
}

function changeColorGreen() {
  document.getElementById("color").style.backgroundColor = "green";
}

function changeColorBlue() {
  document.getElementById("color").style.backgroundColor = "blue";
}




//count
let winCount = 0;
let count = 0;

let chosenWord = "";

//Option Knappar
const displayOptions = () => {
  optionsContainer.innerHTML += `<h3>Please Select An Option</h3>`;
  let buttonCon = document.createElement("div");
  for (let value in options) {
    buttonCon.innerHTML += `<button class="options" onclick="generateWord('${value}')">${value}</button>`;
  }
  optionsContainer.appendChild(buttonCon);
};

// Blocka alla knappar
const blocker = () => {
  let optionsButtons = document.querySelectorAll(".options");
  let letterButtons = document.querySelectorAll(".letters");
  //stäng av alla alternativ
  optionsButtons.forEach((button) => {
    button.disabled = true;
  });

  //ta bort bokstäver
  letterButtons.forEach((button) => {
    button.disabled.true;
  });
  newGameContainer.classList.remove("hide");
};

// ord Generator
const generateWord = (optionValue) => {
  let optionsButtons = document.querySelectorAll(".options");
  //If optionValur matches the button innerText then highlight the button
  optionsButtons.forEach((button) => {
    if (button.innerText.toLowerCase() === optionValue) {
      button.classList.add("active");
    }
    button.disabled = true;
  });

  
  letterContainer.classList.remove("hide");
  userInputSection.innerText = "";

  let optionArray = options[optionValue];
  //väljer ett random ord
  chosenWord = optionArray[Math.floor(Math.random() * optionArray.length)];
  chosenWord = chosenWord.toUpperCase();

  //replace every letter with span containing dash
  let displayItem = chosenWord.replace(/./g, '<span class="dashes">_</span>');

  
  userInputSection.innerHTML = displayItem;
};


const initializer = () => {
  winCount = 0;
  count = 0;

  //Initially erase all content and hide letteres and new game button
  userInputSection.innerHTML = "";
  optionsContainer.innerHTML = "";
  letterContainer.classList.add("hide");
  newGameContainer.classList.add("hide");
  letterContainer.innerHTML = "";

  //For creating letter buttons
  for (let i = 65; i < 91; i++) {
    let button = document.createElement("button");
    button.classList.add("letters");
    
    button.innerText = String.fromCharCode(i);
    
    button.addEventListener("click", () => {
      let charArray = chosenWord.split("");
      let dashes = document.getElementsByClassName("dashes");
      
      if (charArray.includes(button.innerText)) {
        charArray.forEach((char, index) => {
          
          if (char === button.innerText) {
            
            dashes[index].innerText = char;
           
            winCount += 1;
            
            if (winCount == charArray.length) {
              resultText.innerHTML = `<h2 class='win-msg'>You Win!!</h2><p>The word was <span>${chosenWord}</span></p>`;
              
              blocker();
            }
          }
        });
      } else {
        //lose count
        count += 1;
        
        drawMan(count);
        
        if (count == 6) {
          resultText.innerHTML = `<h2 class='lose-msg'>You Lose!!</h2><p>The word was <span>${chosenWord}</span></p>`;
          blocker();
        }
      }
      //disable clicked button
      button.disabled = true;
    });
    letterContainer.append(button);
  }

  displayOptions();
  
  let { initialDrawing } = canvasCreator();
  
  initialDrawing();
};


const canvasCreator = () => {
  let context = canvas.getContext("2d");
  context.beginPath();
  context.strokeStyle = "#000";
  context.lineWidth = 2;

  //For drawing lines
  const drawLine = (fromX, fromY, toX, toY) => {
    context.moveTo(fromX, fromY);
    context.lineTo(toX, toY);
    context.stroke();
  };

  const head = () => {
    context.beginPath();
    context.arc(70, 30, 10, 0, Math.PI * 2, true);
    context.stroke();
  };

  const body = () => {
    drawLine(70, 40, 70, 80);
  };

  const leftArm = () => {
    drawLine(70, 50, 50, 70);
  };

  const rightArm = () => {
    drawLine(70, 50, 90, 70);
  };

  const leftLeg = () => {
    drawLine(70, 80, 50, 110);
  };

  const rightLeg = () => {
    drawLine(70, 80, 90, 110);
  };

  
  const initialDrawing = () => {
    
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    //bottom line
    drawLine(10, 130, 130, 130);
    //left line
    drawLine(10, 10, 10, 131);
    //top line
    drawLine(10, 10, 70, 10);
    //small top line
    drawLine(70, 10, 70, 20);
  };

  return { initialDrawing, head, body, leftArm, rightArm, leftLeg, rightLeg };
};

//draw the man
const drawMan = (count) => {
  let { head, body, leftArm, rightArm, leftLeg, rightLeg } = canvasCreator();
  switch (count) {
    case 1:
      head();
      break;
    case 2:
      body();
      break;
    case 3:
      leftArm();
      break;
    case 4:
      rightArm();
      break;
    case 5:
      leftLeg();
      break;
    case 6:
      rightLeg();
      break;
    default:
      break;
  }
};

//New Game
newGameButton.addEventListener("click", initializer);
window.onload = initializer;