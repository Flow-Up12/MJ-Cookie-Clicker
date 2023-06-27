//save to local storage
var score = parseInt(localStorage.getItem('amount_of_cookies')) || 0;
var multiplier = 1;
var cookie = document.getElementById("clickable-circle");
var scoreDisplay = document.getElementById("score");
scoreDisplay.innerHTML = "Cookies: " + formatScore(score);

var cookiesPerSec = parseInt(localStorage.getItem('cookies_per_second')) || 0;
var perSecondDisplay = document.getElementById("cookies-per-sec");
perSecondDisplay.innerHTML = "Cookies per second: " + cookiesPerSec;


var moonButton = document.getElementById("moonWorldButton");
//click upgrades
var upgrade1 = document.getElementById("upgrade1");
var upgrade2 = document.getElementById("upgrade2");
var upgrade3 = document.getElementById("upgrade3");
var upgrade4 = document.getElementById("upgrade4");
var upgrade5 = document.getElementById("upgrade5");
//helpers

var clicker = document.getElementById("clicker");
var numClickers = parseInt(localStorage.getItem('amount_of_clickers')) || 0;
var clickerCost = parseInt(localStorage.getItem('clicker_cost')) || 15;
var clickerValue = 1;
const clickerCostSpan = document.getElementById("clicker-cost");
const clickerAmount = document.getElementById("clicker-amount");
clickerAmount.textContent = numClickers;
clickerCostSpan.textContent = formatScore(clickerCost);

var grandma = document.getElementById("grandma");
var numgrandmas = parseInt(localStorage.getItem('amount_of_grandmas')) || 0;;
var grandmaCost = parseInt(localStorage.getItem('grandma-cost')) || 100;
var grandmaValue = 2;
const grandmaCostSpan = document.getElementById("grandma-cost");
const grandmaAmount = document.getElementById("grandma-amount");
grandmaAmount.textContent = numgrandmas;
grandmaCostSpan.textContent = formatScore(grandmaCost);

var farm = document.getElementById("farms");
var numfarms = parseInt(localStorage.getItem('amount_of_farms')) || 0;
var farmCost = parseInt(localStorage.getItem('farm-cost')) || 1100;
var farmValue = 8;
const farmCostSpan = document.getElementById("farm-cost");
const farmAmount = document.getElementById("farm-amount");
farmAmount.textContent = numfarms;
farmCostSpan.textContent = formatScore(farmCost);

var mine = document.getElementById("mine");
var numMines = parseInt(localStorage.getItem('amount_of_mines')) || 0;
var mineCost = parseInt(localStorage.getItem('mine-cost')) || 12000;
var mineValue = 47;
const mineCostSpan = document.getElementById("mine-cost");
const mineAmount = document.getElementById("mine-amount");
mineAmount.textContent = numMines;
mineCostSpan.textContent = formatScore(mineCost);;

var factory = document.getElementById("factory");
var numFactories = parseInt(localStorage.getItem('amount_of_factories')) || 0;
var factoryCost = parseInt(localStorage.getItem('factory-costs')) || 130000;
var factoryValue = 260;
const factoryCostSpan = document.getElementById("factory-cost");
const factoryAmount = document.getElementById("factory-amount");
factoryAmount.textContent = numFactories;
factoryCostSpan.textContent = formatScore(factoryCost);

var bank = document.getElementById("bank");
var numBanks = parseInt(localStorage.getItem('amount_of_banks')) || 0;
var bankCost = parseInt(localStorage.getItem('bank_cost')) || 1400000;
var bankValue = 1400;
const bankCostSpan = document.getElementById("bank-cost");
const bankAmount = document.getElementById("bank-amount");
bankAmount.textContent = numBanks;
bankCostSpan.textContent = formatScore(bankCost);

var temple = document.getElementById("temple");
var numTemples = parseInt(localStorage.getItem('amount_of_temples')) || 0;
var templeCost = parseInt(localStorage.getItem('temple_cost')) || 20000000;
var templeValue = 7800;
const templeCostSpan = document.getElementById("temple-cost");
const templeAmount = document.getElementById("temple-amount");
templeAmount.textContent = numTemples;
templeCostSpan.textContent = formatScore(templeCost);

var wizard = document.getElementById("wizard");
var numWizards = parseInt(localStorage.getItem('wizard_amount')) || 0;
var wizardCost = parseInt(localStorage.getItem('wizard_cost')) || 330000000;
const wizardCostSpan = document.getElementById("wizard-cost");
const wizardAmount = document.getElementById("wizard-amount");
wizardAmount.textContent = numWizards;
wizardCostSpan.textContent = formatScore(wizardCost);
var wizardValue = 44000;

var shipment = document.getElementById("shipment");
var numShipment = parseInt(localStorage.getItem('shipment_amount')) || 0;
var shipmentCost = parseInt(localStorage.getItem('shipment_cost')) || 5100000000;
const shipmentCostSpan = document.getElementById("shipment-cost");
const shipmentAmountSpan = document.getElementById("shipment-amount");
shipmentAmountSpan.textContent = numShipment;
shipmentCostSpan.textContent = formatScore(shipmentCost);
var shipValue = 260000;

var lab = document.getElementById("lab");
var numLab = parseInt(localStorage.getItem('lab_amount')) || 0;
var labCost = parseInt(localStorage.getItem('lab_cost')) || 75000000000;
const labCostSpan = document.getElementById("lab-cost");
const labAmountSpan = document.getElementById("lab-amount");
labAmountSpan.textContent = numLab;
labCostSpan.textContent = formatScore(labCost);
var labValue = 16000000;

var portal = document.getElementById("portal");
var numPortal = parseInt(localStorage.getItem('portal_amount')) || 0;
var portalCost = parseInt(localStorage.getItem('portal_cost')) || 1000000000000;
const portalCostSpan = document.getElementById("portal-cost");
const portalAmountSpan = document.getElementById("portal-amount");
portalAmountSpan.textContent = numPortal;
portalCostSpan.textContent = formatScore(portalCost);
var portalValue = 10000000;

var time = document.getElementById("time");
var numTime = parseInt(localStorage.getItem('time_amount')) || 0;
var timeCost = parseInt(localStorage.getItem('time_cost')) || 14000000000000;
const timeCostSpan = document.getElementById("time-cost");
const timeAmountSpan = document.getElementById("time-amount");
timeAmountSpan.textContent = numTime;
timeCostSpan.textContent = formatScore(timeCost);
var timeValue = 65000000;

var anti = document.getElementById("anti");
var numAnti = parseInt(localStorage.getItem('anti_amount')) || 0;
var antiCost = parseInt(localStorage.getItem('anti-cost')) || 170000000000000;
const antiCostSpan = document.getElementById("anti-cost");
const antiAmountSpan = document.getElementById("anti-amount");
antiAmountSpan.textContent = numAnti;
antiCostSpan.textContent = formatScore(antiCost);
var antiValue = 430000000;

var prism = document.getElementById("prism");
var numPrism = parseInt(localStorage.getItem('prism_amount')) || 0;
var prismCost = parseInt(localStorage.getItem('prism_cost')) || 2100000000000000;
const prismCostSpan = document.getElementById("prism-cost");
const prismAmountSpan = document.getElementById("prism-amount");
prismAmountSpan.textContent = numPrism;
prismCostSpan.textContent = formatScore(prismCost);
var prismValue = 2900000000;

var chance = document.getElementById("chance");
var numChance = parseInt(localStorage.getItem('chance_amount')) || 0;
var chanceCost = parseInt(localStorage.getItem('chance_cost')) || 26000000000000000;
const chanceCostSpan = document.getElementById("chance-cost");
const chanceAmountSpan = document.getElementById("chance-amount");
chanceAmountSpan.textContent = numChance;
chanceCostSpan.textContent = formatScore(chanceCost);
var chanceValue = 21000000000;

var fractal = document.getElementById("fractal");
var numFractal = parseInt(localStorage.getItem('fractal_amount')) || 0;
var fractalCost = parseInt(localStorage.getItem('fractal_cost')) || 310000000000000000;
const fractalCostSpan = document.getElementById("fractal-cost");
const fractalAmountSpan = document.getElementById("fractal-amount");
fractalAmountSpan.textContent = numFractal;
fractalCostSpan.textContent = formatScore(fractalCost);
var fractalValue = 150000000000;

var java = document.getElementById("java");
var numJava = parseInt(localStorage.getItem('java_amount')) || 0;
var javaCost = parseInt(localStorage.getItem('java_cost')) || 71000000000000000000;
const javaCostSpan = document.getElementById("java-cost");
const javaAmountSpan = document.getElementById("java-amount");
javaAmountSpan.textContent = numJava;
javaCostSpan.textContent = formatScore(javaCost);
var javaValue = 1100000000000;

var idle = document.getElementById("idle");
var numIdle = parseInt(localStorage.getItem('idle_amount')) || 0;
var idleCost = parseInt(localStorage.getItem('idle_cost')) || BigInt("12000000000000000000000").toString();
const idleCostSpan = document.getElementById("idle-cost");
const idleAmountSpan = document.getElementById("idle-amount");
idleAmountSpan.textContent = numIdle;
idleCostSpan.textContent = formatScore(idleCost);
var idleValue = 8300000000000;

var cortex = document.getElementById("cortex");
var numCortex = parseInt(localStorage.getItem('cortex_amount')) || 0;
var cortexCost = parseInt(localStorage.getItem('cortex_cost')) || BigInt("19000000000000000000000000").toString();
const cortexCostSpan = document.getElementById("cortex-cost");
const cortexAmountSpan = document.getElementById("cortex-amount");
cortexAmountSpan.textContent = numCortex;
cortexCostSpan.textContent = formatScore(cortexCost);
var cortexValue = 64000000000000;

var you = document.getElementById("you");
var numYou = parseInt(localStorage.getItem('you_amount')) || 0;
var youCost = parseInt(localStorage.getItem('you_cost')) || BigInt("540000000000000000000000000").toString();
const youCostSpan = document.getElementById("you-cost");
const youAmountSpan = document.getElementById("you-amount");
youAmountSpan.textContent = numYou;
youCostSpan.textContent = formatScore(youCost);
var youValue = 510000000000000;
//button arrayList 


const elements = [clicker, grandma, farm, mine, factory, bank, temple, wizard, shipment, lab, portal, time, anti, prism, chance, fractal, java, idle, cortex, you];
  
const amount = [clickerAmount, grandmaAmount, farmAmount, mineAmount, factoryAmount, bankAmount, templeAmount, wizardAmount,shipmentAmountSpan,labAmountSpan];

const costSpan = [clickerCostSpan, grandmaCostSpan, farmCostSpan, mineCostSpan, factoryCostSpan, bankCostSpan, templeCostSpan, wizardCostSpan,shipmentCostSpan,labCostSpan,portalCostSpan,timeCostSpan,antiCostSpan,prismCostSpan,chanceCostSpan,fractalCostSpan,javaCostSpan,idleCostSpan,cortexCostSpan,youCostSpan];

function changeCostColor() {
    var costs = [clickerCost, grandmaCost, farmCost, mineCost, factoryCost, bankCost, templeCost, wizardCost,shipmentCost,labCost,portalCost,timeCost,antiCost,prismCost,chanceCost,fractalCost,javaCost,idleCost,cortexCost,youCost];
    for (let i = 0; i < costs.length; i++) {
        if (costs[i] <= score) {
           
            costSpan[i].style.color = 'green';
            elements[i].style.opacity = 1;
        
        } else {
            costSpan[i].style.color = 'red';
            elements[i].style.opacity = .5;
        
        }
    }
}

function displayHelpers() {
    const numHelpers = [numClickers, numgrandmas, numfarms, numMines, numFactories, numBanks, numTemples, numWizards, numShipment, numLab, numPortal, numTime, numAnti, numPrism, numChance, numFractal, numJava, numIdle, numCortex, numYou];
    for (let i = 0; i < numHelpers.length -1; i++) {
        if (numHelpers[i] == 0) {
            elements[i+1].style.visibility = "hidden";
        } else {
            elements[i+1].style.visibility = "visible";
        }
    }
}
function resetStats() {

        // Reset score and cookies per second
        score = 0;
        cookiesPerSec = 0;
        localStorage.setItem('amount_of_cookies', score);
        localStorage.setItem('cookies_per_second', cookiesPerSec);
        scoreDisplay.innerHTML = "Cookies: " + formatScore(score);
        perSecondDisplay.innerHTML = "Cookies per second: " + cookiesPerSec;
      
        // Reset clicker
        numClickers = 0;
        clickerCost = 15;
        localStorage.setItem('amount_of_clickers', numClickers);
        localStorage.setItem('clicker_cost', clickerCost);
        clickerAmount.textContent = numClickers;
        clickerCostSpan.textContent = formatScore(clickerCost);
      
        // Reset grandma
        numgrandmas = 0;
        grandmaCost = 100;
        localStorage.setItem('amount_of_grandmas', numgrandmas);
        localStorage.setItem('grandma-cost', grandmaCost);
        grandmaAmount.textContent = numgrandmas;
        grandmaCostSpan.textContent = formatScore(grandmaCost);
      
        // Reset farm
        numfarms = 0;
        farmCost = 1100;
        localStorage.setItem('amount_of_farms', numfarms);
        localStorage.setItem('farm-cost', farmCost);
        farmAmount.textContent = numfarms;
        farmCostSpan.textContent = formatScore(farmCost);
      
        // Reset mine
        numMines = 0;
        mineCost = 12000;
        localStorage.setItem('amount_of_mines', numMines);
        localStorage.setItem('mine-cost', mineCost);
        mineAmount.textContent = numMines;
        mineCostSpan.textContent = formatScore(mineCost);
      
        // Reset factory
        numFactories = 0;
        factoryCost = 130000;
        localStorage.setItem('amount_of_factories', numFactories);
        localStorage.setItem('factory-costs', factoryCost);
        factoryAmount.textContent = numFactories;
        factoryCostSpan.textContent = formatScore(factoryCost);
      
        // Reset bank
        numBanks = 0;
        bankCost = 1400000;
        localStorage.setItem('amount_of_banks', numBanks);
        localStorage.setItem('bank_cost', bankCost);
        bankAmount.textContent = numBanks;
        bankCostSpan.textContent = formatScore(bankCost);
      
        // Reset temple
        numTemples = 0;
        templeCost = 20000000;
        localStorage.setItem('amount_of_temples', numTemples);
        localStorage.setItem('temple_cost', templeCost);
        templeAmount.textContent = numTemples;
        templeCostSpan.textContent = formatScore(templeCost);
        
        // Reset additional elements
    numWizards = 0;
    wizardCost = 330000000;
    localStorage.setItem('wizard_amount', numWizards);
    localStorage.setItem('wizard_cost', wizardCost);
    wizardAmount.textContent = numWizards;
    wizardCostSpan.textContent = formatScore(wizardCost);

    numShipment = 0;
    shipmentCost = 5100000000;
    localStorage.setItem('shipment_amount', numShipment);
    localStorage.setItem('shipment_cost', shipmentCost);
    shipmentAmountSpan.textContent = numShipment;
    shipmentCostSpan.textContent = formatScore(shipmentCost);

    numLab = 0;
    labCost = 75000000000;
    localStorage.setItem('lab_amount', numLab);
    localStorage.setItem('lab_cost', labCost);
    labAmountSpan.textContent = numLab;
    labCostSpan.textContent = formatScore(labCost);

    numPortal = 0;
    portalCost = 1000000000000;
    localStorage.setItem('portal_amount', numPortal);
    localStorage.setItem('portal_cost', portalCost);
    portalAmountSpan.textContent = numPortal;
    portalCostSpan.textContent = formatScore(portalCost);

    numTime = 0;
    timeCost = 14000000000000;
    localStorage.setItem('time_amount', numTime);
    localStorage.setItem('time_cost', timeCost);
    timeAmountSpan.textContent = numTime;
    timeCostSpan.textContent = formatScore(timeCost);

    numAnti = 0;
    antiCost = 170000000000000;
    localStorage.setItem('anti_amount', numAnti);
    localStorage.setItem('anti_cost', antiCost);
    antiAmountSpan.textContent = numAnti;
    antiCostSpan.textContent = formatScore(antiCost);

    numPrism = 0;
    prismCost = 2100000000000000;
    localStorage.setItem('prism_amount', numPrism);
    localStorage.setItem('prism_cost', prismCost);
    prismAmountSpan.textContent = numPrism;
    prismCostSpan.textContent = formatScore(prismCost);

    numChance = 0;
    chanceCost = 26000000000000000;
    localStorage.setItem('chance_amount', numChance);
    localStorage.setItem('chance_cost', chanceCost);
    chanceAmountSpan.textContent = numChance;
    chanceCostSpan.textContent = formatScore(chanceCost);

    numFractal = 0;
    fractalCost = 310000000000000000;
    localStorage.setItem('fractal_amount', numFractal);
    localStorage.setItem('fractal_cost', fractalCost);
    fractalAmountSpan.textContent = numFractal;
    fractalCostSpan.textContent = formatScore(fractalCost);

    numJava = 0;
    javaCost = 71000000000000000000;
    localStorage.setItem('java_amount', numJava);
    localStorage.setItem('java_cost', javaCost);
    javaAmountSpan.textContent = numJava;
    javaCostSpan.textContent = formatScore(javaCost);

    numIdle = 0;
    idleCost = 12000000000000000000000;
    localStorage.setItem('idle_amount', numIdle);
    localStorage.setItem('idle_cost', idleCost);
    idleAmountSpan.textContent = numIdle;
    idleCostSpan.textContent = formatScore(idleCost);

    numCortex = 0;
    cortexCost = 19000000000000000000000000;
    localStorage.setItem('cortex_amount', numCortex);
    localStorage.setItem('cortex_cost', cortexCost);
    cortexAmountSpan.textContent = numCortex;
    cortexCostSpan.textContent = formatScore(cortexCost);

    numYou = 0;
    youCost = 540000000000000000000000000;
    localStorage.setItem('you_amount', numYou);
    localStorage.setItem('you_cost', youCost);
    youAmountSpan.textContent = numYou;
    youCostSpan.textContent = formatScore(youCost);

        // Show upgrade buttons
        upgrade1.style.display = "block";
        upgrade2.style.display = "block";
        upgrade3.style.display = "block";
        upgrade4.style.display = "block";
        upgrade5.style.display = "block";
      
        // Reset multiplier
        multiplier = 1;
      
        // Update cost colors
      }
      
      

function formatScore(score) {
    if (score >= 1000000000000000000000000) {
        //makes the score a string
        score = (score / 1000000000000000000000000).toFixed(1) + " Septillion";
    }
    else if (score >= 1000000000000000000000) {
        //makes the score a string
        score = (score / 1000000000000000000000).toFixed(1) + " Sextillion";
    } 
    else if (score >= 1000000000000000000) {
        //makes the score a string
        score = (score / 1000000000000000000).toFixed(1) + " Quintillion";
    }
    else if (score >= 1000000000000000) {
        //makes the score a string
        score = (score / 1000000000000000).toFixed(1) + " Quadrillion";
    } 
    else if (score >= 1000000000000) {
        //makes the score a string
        score = (score / 1000000000000).toFixed(1) + " Trillion";
    }
    else if (score >= 1000000000) {
        score = (score / 1000000000).toFixed(1) + " Billion";
    }
    else if (score >= 1000000) {
        score = (score / 1000000).toFixed(1) + " Million";
    }   
    else {
        return score;
    }

    return score;
}



var cookies = document.getElementById('cookie');

cookie.addEventListener("click", function() {
    cookies.classList.add('active');
    score += 1 * multiplier;
    localStorage.setItem('amount_of_cookies', score);
    scoreDisplay.innerHTML = "Cookies: " + formatScore(score);
    setTimeout(function() {
        cookies.classList.remove('active');
      }, 200);
  
});



upgrade1.addEventListener("click", function() {
    if (score >= 50) {
        score -= 50;
        multiplier = 2;
        scoreDisplay.innerHTML = "Cookies: " + formatScore(score);
        //make method to hide button
        upgrade1.style.display = "none";
        sound2();
    }

});
upgrade2.addEventListener("click", function() {
    if (score >= 50) {
        score -= 50;
        multiplier = 4;
        scoreDisplay.innerHTML = "Cookies: " + formatScore(score);
        //make method to hide button
        upgrade2.style.display = "none";
        sound2();
    }

});
upgrade3.addEventListener("click", function() {
    if (score >= 50) {
        score -= 50;
        multiplier = 8;
        scoreDisplay.innerHTML = "Cookies: " + formatScore(score);
        //make method to hide button
        upgrade3.style.display = "none";
        sound2();
    }

})
upgrade4.addEventListener("click", function() {
    if (score >= 50) {
        score -= 50;
        multiplier = 16;
        scoreDisplay.innerHTML = "Cookies: " + formatScore(score);
        //make method to hide button
        upgrade4.style.display = "none";
        sound2();
    }

});
upgrade5.addEventListener("click", function() {
    if (score >= 50) {
        score -= 50;
        multiplier = 50;
        scoreDisplay.innerHTML = "Cookies: " + formatScore(score);
        //make method to hide button
        upgrade5.style.display = "none";
        sound2();
    }

});



//cookie click
function sound() {
    var sound = new Audio('click1.mp3') //wav is also supported
    sound.play() //plays the sound
}

function backgroundMusic() {
    var sound = new Audio('sweet-love-121561.mp3'); //wav is also supported
    sound.volume = .1;
    sound.play(); //plays the sound
}
//when the page opens/ reload music plays
window.addEventListener('load', backgroundMusic);

//achievement 

function sound2() {
    var sound2 = new Audio('achievement.mp3') //wav is also supported
    sound2.play() //plays the sound
}

//open upgrades menue
function toggleUpgrades() {
    var x = document.getElementById("upgrades-container");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function toggleHelpers() {
    var x = document.getElementById("helper-container");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
//helpers

clicker.addEventListener("click", function() {
    if (BigInt(score) >= clickerCost) {
        sound2();
        var clickerBaseCost = BigInt("15");
        score -= clickerCost;
        scoreDisplay.innerHTML = "Cookies: " + formatScore(score.toString());
        numClickers++;
        localStorage.setItem('amount_of_clickers', numClickers);
        clickerCost = BigInt(Math.ceil(Number(clickerBaseCost) * Math.pow(1.15, numClickers))).toString();
        localStorage.setItem('clicker_cost', clickerCost.toString());
        clickerCostSpan.textContent = formatScore(clickerCost.toString());
        clickerAmount.textContent = numClickers;
        displayHelpers()
    }
});
  


grandma.addEventListener("click", function() {
    if (BigInt(score) >= BigInt(grandmaCost)) {
        sound2();
        var grandmaBaseCost = BigInt("100");
        score -= grandmaCost;
        scoreDisplay.innerHTML = "Cookies: " + formatScore(score.toString());
        numgrandmas++;
        localStorage.setItem('amount_of_grandmas', numgrandmas);
        grandmaCost = BigInt(Math.ceil(Number(grandmaBaseCost) * Math.pow(1.15, numgrandmas))).toString();
        localStorage.setItem('grandma-cost', grandmaCost.toString());
        grandmaCostSpan.textContent = formatScore(grandmaCost.toString());
        grandmaAmount.textContent = numgrandmas;
        displayHelpers()
    }
});

farm.addEventListener("click", function() {
    if (BigInt(score) >= BigInt(farmCost)) {
        sound2();
        var farmBaseCost = BigInt("1100");
        score -= farmCost;
        scoreDisplay.innerHTML = "Cookies: " + formatScore(score.toString());
        numfarms++;
        localStorage.setItem('amount_of_farms', numfarms);
        farmCost = BigInt(Math.ceil(Number(farmBaseCost) * Math.pow(1.15, numfarms))).toString();
        localStorage.setItem('farm-cost', farmCost);
        farmCostSpan.textContent = formatScore(farmCost.toString());
        farmAmount.textContent = numfarms;
        displayHelpers()
    }
});

mine.addEventListener("click", function() {
    if (BigInt(score) >= BigInt(mineCost)) {
        sound2();
        var mineBaseCost = BigInt("12000");
        score -= mineCost;
        scoreDisplay.innerHTML = "Cookies: " + formatScore(score.toString());
        numMines++;
        localStorage.setItem('amount_of_mines', numMines);
        mineCost = BigInt(Math.ceil(Number(mineBaseCost) * Math.pow(1.15, numMines))).toString();
        localStorage.setItem('mine-cost', mineCost);
        mineCostSpan.textContent = formatScore(mineCost.toString());
        mineAmount.textContent = numMines;
    }
});

factory.addEventListener("click", function() {
    if (BigInt(score) >= BigInt(factoryCost)) {
        sound2();
        var factoryBaseCost = BigInt("130000");
        score -= factoryCost;
        scoreDisplay.innerHTML = "Cookies: " + formatScore(score.toString());
        numFactories++;
        localStorage.setItem('amount_of_factories', numFactories);
        factoryCost = BigInt(Math.ceil(Number(factoryBaseCost) * Math.pow(1.15, numFactories))).toString();
        localStorage.setItem('factory-costs', factoryCost);
        factoryCostSpan.textContent = formatScore(factoryCost.toString());
        factoryAmount.textContent = numFactories;
    }
});


bank.addEventListener("click", function() {
    if (BigInt(score) >= BigInt(bankCost)) {
        sound2();
        var bankBaseCost = BigInt("1400000");
        score -= bankCost;
        scoreDisplay.innerHTML = "Cookies: " + formatScore(score.toString());
        numBanks++;
        localStorage.setItem('amount_of_banks', numBanks);
        bankCost = BigInt(Math.ceil(Number(bankBaseCost) * Math.pow(1.15, numBanks))).toString();
        localStorage.setItem('bank_cost', bankCost);
        bankAmount.textContent = numBanks;
        bankCostSpan.textContent = formatScore(bankCost);
    }
});

temple.addEventListener("click", function() {
    if (BigInt(score) >= BigInt(templeCost)) {
        sound2();
        var templeBaseCost = BigInt("20000000");
        score -= templeCost;
        scoreDisplay.innerHTML = "Cookies: " + formatScore(score.toString());
        numTemples++;
        localStorage.setItem('amount_of_temples', numTemples);
        templeCost = BigInt(Math.ceil(Number(templeBaseCost) * Math.pow(1.15, numTemples))).toString();
        localStorage.setItem('temple_cost', templeCost);
        templeAmount.textContent = numTemples;
        templeCostSpan.textContent = formatScore(templeCost);
    }
});

wizard.addEventListener("click", function() {
    if (BigInt(score) >= BigInt(wizardCost)) {
        sound2();
        var wizardBaseCost = BigInt("330000000");
        score -= wizardCost;
        scoreDisplay.innerHTML = "Cookies: " + formatScore(score.toString());
        numWizards++;
        localStorage.setItem('wizard_amount', numWizards);
        wizardCost = BigInt(Math.ceil(Number(wizardBaseCost) * Math.pow(1.15, numWizards))).toString();
        localStorage.setItem('wizard_cost', wizardCost);
        wizardAmount.textContent = numWizards;
        wizardCostSpan.textContent = formatScore(wizardCost);
    }
});

shipment.addEventListener("click", function() {
    if (BigInt(score) >= BigInt(shipmentCost)) {
        sound2();
        var shipmentBaseCost = BigInt("5100000000");
        score -= shipmentCost;
        scoreDisplay.innerHTML = "Cookies: " + formatScore(score.toString());
        numShipment++;
        localStorage.setItem('shipment_amount', numShipment);
        shipmentCost = BigInt(Math.ceil(Number(shipmentBaseCost) * Math.pow(1.15, numShipment))).toString();
        localStorage.setItem('shipment_cost', shipmentCost);
        shipmentAmountSpan.textContent = numShipment;
        shipmentCostSpan.textContent = formatScore(shipmentCost);
    }
});

lab.addEventListener("click", function() {
    if (BigInt(score) >= BigInt(labCost)) {
        sound2();
        var labBaseCost = BigInt("75000000000");
        score -= labCost;
        scoreDisplay.innerHTML = "Cookies: " + formatScore(score.toString());
        numLab++;
        localStorage.setItem('lab_amount', numLab);
        labCost = BigInt(Math.ceil(Number(labBaseCost) * Math.pow(1.15, numLab))).toString();
        localStorage.setItem('lab_cost', labCost);
        labAmountSpan.textContent = numLab;
        labCostSpan.textContent = formatScore(labCost);
    }
});

  
//   // Portal
  
portal.addEventListener("click", function() {
    if (score >= portalCost) {
      sound2();
      var portalBaseCost = 1000000000000;
      score -= portalCost;
      scoreDisplay.innerHTML = "Cookies: " + formatScore(score);
      numPortal++;
      localStorage.setItem('portal_amount', numPortal);
      portalCost = parseInt(portalBaseCost * Math.pow(1.15, numPortal) + 1);
      localStorage.setItem('portal_cost', portalCost);
      portalAmountSpan.textContent = numPortal;
      portalCostSpan.textContent = formatScore(portalCost);
    }
  });
  
time.addEventListener("click", function() {
    if (BigInt(score) >= BigInt(timeCost)) {
        sound2();
        var timeBaseCost = BigInt("14000000000000");
        score -= timeCost;
        scoreDisplay.innerHTML = "Cookies: " + formatScore(score.toString());
        numTime++;
        localStorage.setItem('time_amount', numTime);
        timeCost = BigInt(Math.ceil(Number(timeBaseCost) * Math.pow(1.15, numTime))).toString();
        localStorage.setItem('time_cost', timeCost);
        timeAmountSpan.textContent = numTime;
        timeCostSpan.textContent = formatScore(timeCost);
    }
});

anti.addEventListener("click", function() {
    if (BigInt(score) >= BigInt(antiCost)) {
        sound2();
        var antiBaseCost = BigInt("170000000000000");
        score -= antiCost;
        scoreDisplay.innerHTML = "Cookies: " + formatScore(score.toString());
        numAnti++;
        localStorage.setItem('anti_amount', numAnti);
        antiCost = BigInt(Math.ceil(Number(antiBaseCost) * Math.pow(1.15, numAnti))).toString();
        localStorage.setItem('anti_cost', antiCost);
        antiAmountSpan.textContent = numAnti;
        antiCostSpan.textContent = formatScore(antiCost);
    }
});

prism.addEventListener("click", function() {
    if (BigInt(score) >= BigInt(prismCost)) {
        sound2();
        var prismBaseCost = BigInt("2100000000000000");
        score -= prismCost;
        scoreDisplay.innerHTML = "Cookies: " + formatScore(score.toString());
        numPrism++;
        localStorage.setItem('prism_amount', numPrism);
        prismCost = BigInt(Math.ceil(Number(prismBaseCost) * Math.pow(1.15, numPrism))).toString();
        localStorage.setItem('prism_cost', prismCost);
        prismAmountSpan.textContent = numPrism;
        prismCostSpan.textContent = formatScore(prismCost);
    }
});

chance.addEventListener("click", function() {
    if (BigInt(score) >= BigInt(chanceCost)) {
        sound2();
        var chanceBaseCost = BigInt("26000000000000000");
        score -= chanceCost;
        scoreDisplay.innerHTML = "Cookies: " + formatScore(score.toString());
        numChance++;
        localStorage.setItem('chance_amount', numChance);
        chanceCost = BigInt(Math.ceil(Number(chanceBaseCost) * Math.pow(1.15, numChance))).toString();
        localStorage.setItem('chance_cost', chanceCost);
        chanceAmountSpan.textContent = numChance;
        chanceCostSpan.textContent = formatScore(chanceCost);
    }
});

fractal.addEventListener("click", function() {
    if (BigInt(score) >= BigInt(fractalCost)) {
        sound2();
        var fractalBaseCost = BigInt("310000000000000000");
        score -= fractalCost;
        scoreDisplay.innerHTML = "Cookies: " + formatScore(score.toString());
        numFractal++;
        localStorage.setItem('fractal_amount', numFractal);
        fractalCost = BigInt(Math.ceil(Number(fractalBaseCost) * Math.pow(1.15, numFractal))).toString();
        localStorage.setItem('fractal_cost', fractalCost);
        fractalAmountSpan.textContent = numFractal;
        fractalCostSpan.textContent = formatScore(fractalCost);
    }
});

java.addEventListener("click", function() {
    if (BigInt(score) >= BigInt(javaCost)) {
        sound2();
        var javaBaseCost = BigInt("71000000000000000000");
        score -= javaCost;
        scoreDisplay.innerHTML = "Cookies: " + formatScore(score.toString());
        numJava++;
        localStorage.setItem('java_amount', numJava);
        javaCost = BigInt(Math.ceil(Number(javaBaseCost) * Math.pow(1.15, numJava))).toString();
        localStorage.setItem('java_cost', javaCost);
        javaAmountSpan.textContent = numJava;
        javaCostSpan.textContent = formatScore(javaCost);
    }
});

idle.addEventListener("click", function() {
    if (BigInt(score) >= BigInt(idleCost)) {
        sound2();
        var idleBaseCost = BigInt("12000000000000000000000");
        score -= idleCost;
        scoreDisplay.innerHTML = "Cookies: " + formatScore(score.toString());
        numIdle++;
        localStorage.setItem('idle_amount', numIdle);
        idleCost = BigInt(Math.ceil(Number(idleBaseCost) * Math.pow(1.15, numIdle))).toString();
        localStorage.setItem('idle_cost', idleCost);
        idleAmountSpan.textContent = numIdle;
        idleCostSpan.textContent = formatScore(idleCost);
    }
});

cortex.addEventListener("click", function() {
    if (BigInt(score) >= BigInt(cortexCost)) {
        sound2();
        var cortexBaseCost = BigInt("19000000000000000000000000");
        score -= cortexCost;
        scoreDisplay.innerHTML = "Cookies: " + formatScore(score.toString());
        numCortex++;
        localStorage.setItem('cortex_amount', numCortex);
        cortexCost = BigInt(Math.ceil(Number(cortexBaseCost) * Math.pow(1.15, numCortex))).toString();
        localStorage.setItem('cortex_cost', cortexCost);
        cortexAmountSpan.textContent = numCortex;
        cortexCostSpan.textContent = formatScore(cortexCost);
    }
});


  you.addEventListener("click", function() {
    if (BigInt(score) >= BigInt(youCost)) {
      sound2();
      var youBaseCost = BigInt("540000000000000000000000000");
      score -= youCost;
      scoreDisplay.innerHTML = "Cookies: " + formatScore(score.toString());
      numYou++;
      localStorage.setItem('you_amount', numYou);
      youCost = BigInt(Math.ceil(Number(youBaseCost) * Math.pow(1.15, numYou))).toString();
      localStorage.setItem('you_cost', youCost.toString());
      youCostSpan.textContent = formatScore(youCost);
      youAmountSpan.textContent = numYou;
    }
  });
  
const tooltips = document.querySelectorAll('.tooltip');

tooltips.forEach((tooltip) => {
    tooltip.addEventListener('mouseenter', () => {
        tooltip.classList.add('hover');
    });

    tooltip.addEventListener('mouseleave', () => {
        tooltip.classList.remove('hover');
    });
});


var t = setInterval(runFunction, 1000);
//add to the score based on amounts and how much each is worth every second
function runFunction() {
    score += cookiesPerSec;

    scoreDisplay.innerHTML = "Cookies: " + formatScore(score);


    localStorage.setItem('amount_of_cookies', score);


}




//cookies per second
function updateCookiesPerSec() {
    cookiesPerSec = numClickers * clickerValue + numgrandmas * grandmaValue +
        numfarms * farmValue + numMines * mineValue + numFactories * factoryValue +
        numBanks * bankValue + numTemples * templeValue + numWizards * wizardValue + numShipment * shipValue + numLab * labValue +
        numPortal * portalValue + numTime * timeValue + numAnti * antiValue + numPrism * prismValue +
        numChance * chanceValue + numFractal * fractalValue + numJava * javaValue + numIdle * idleValue +
        numCortex * cortexValue + numYou * youValue;
    perSecondDisplay.innerHTML = "Cookies per second: " + formatScore(cookiesPerSec);
    localStorage.setItem('cookies_per_second', formatScore(cookiesPerSec));
}

setInterval(updateCookiesPerSec, 100);
setInterval(changeCostColor, 100);
setInterval(displayHelpers,100);

//open moon
moonButton.addEventListener("click", function() {
    window.location.href = "moonworld.html";
  });



