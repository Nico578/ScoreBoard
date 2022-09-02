
 const maillot = document.getElementById("maillot")
 const maillotVisitor = document.getElementById("maillotVisitor")

//-----------------------------------------------//
//----------séléction de l'équipe HOME ----------//
//-----------------------------------------------//

//---------------------selectLeagueHome ----------------//

const selectLeagueHome = document.querySelector(".selectLeagueHome")
const selectLeagueVisitor = document.querySelector(".selectLeagueVisitor")
    

selectLeagueHome.addEventListener("input", (e) => {
    club = e.target.value
    
    if (club === "ligueA") {
        document.querySelector(".selectClubHome").style.visibility = "visible"
        selectHome.style.visibility = "hidden"
        selectHomeA.style.visibility = "visible"
    } if (club === "ligueB") {
        document.querySelector(".selectClubHome").style.visibility = "visible"
        selectHome.style.visibility = "visible"
        selectHomeA.remove()

    }
})

selectLeagueVisitor.addEventListener("input", (e) => {
    club = e.target.value
    
    if (club === "ligueA") {
        document.querySelector(".selectClubVisitor").style.visibility = "visible"
        selectVisitor.style.visibility = "hidden"
        selectVisitorA.style.visibility = "visible"
    } if (club === "ligueB") {
        document.querySelector(".selectClubVisitor").style.visibility = "visible"
        selectVisitor.style.visibility = "visible"
        selectVisitorA.remove()
    }
})

//-------------------- selectClubHome -----------------//

const colorHome = document.querySelector(".colorHome");
const selectHome = document.getElementById("selectHome");
const selectHomeA = document.getElementById("selectHomeA");
const btnValidHome = document.getElementById("validHome")

selectHome.addEventListener("input", (e) => {
    teamHome = e.target.value;
    logo = "/logoTeamLigueB/" + teamHome;

    if (selectHome.click) {

        document.querySelector(".logoHome").innerHTML = `
        <img src=${logo} alt=${teamHome}></img> `;

        document.querySelector(".scoreboardLogoHome").innerHTML = `
        <img src=${logo} alt=${teamHome}></img> `;

        document.querySelector(".logoH").innerHTML = `
        ${teamHome}`;

        document.querySelector(".scoreboardTeamHome").innerHTML = `
        ${teamHome}`;

        colorHome.style.visibility = "visible"
    }
})

selectHomeA.addEventListener("input", (e) => {
    teamHome = e.target.value;
    logo = "/logoTeamLigueA/" + teamHome;

    if (selectHomeA.click) {

        document.querySelector(".logoHome").innerHTML = `
        <img src=${logo} alt=${teamHome}></img> `;

        document.querySelector(".scoreboardLogoHome").innerHTML = `
        <img src=${logo} alt=${teamHome}></img> `;

        document.querySelector(".logoH").innerHTML = `
        ${teamHome}`;

        document.querySelector(".scoreboardTeamHome").innerHTML = `
        ${teamHome}`;

        colorHome.style.visibility = "visible"
    }
})

colorHome.addEventListener("click", (e) => {
    e.preventDefault
    btnValue = e.target.id

    if (btnValue === "btnBlack") {
        document.querySelector(".jerseyColorHome > span").style.visibility = "visible"
        maillot.style.background = "black"
        btnValidHome.style.visibility = "visible"
        document.querySelector(".scoreboardJerseyHome").style.backgroundColor = "black"
    } if (btnValue === "btnWhite") {
        document.querySelector(".jerseyColorHome > span").style.visibility = "visible"
        maillot.style.background = "White"
        btnValidHome.style.visibility = "visible"
        document.querySelector(".scoreboardJerseyHome").style.backgroundColor = "white"
    } if (btnValue === "btnBlue") {
        document.querySelector(".jerseyColorHome > span").style.visibility = "visible"
        maillot.style.background = "blue"
        btnValidHome.style.visibility = "visible"
        document.querySelector(".scoreboardJerseyHome").style.backgroundColor = "blue"
    } if (btnValue === "btnRed") {
        document.querySelector(".jerseyColorHome > span").style.visibility = "visible"
        maillot.style.background = "Red"
        btnValidHome.style.visibility = "visible"
        document.querySelector(".scoreboardJerseyHome").style.backgroundColor = "red"
    } if (btnValue === "btnPink") {
        document.querySelector(".jerseyColorHome > span").style.visibility = "visible"
        maillot.style.background = "pink"
        btnValidHome.style.visibility = "visible"
        document.querySelector(".scoreboardJerseyHome").style.backgroundColor = "pink"
    } if (btnValue === "btnYellow") {
        document.querySelector(".jerseyColorHome > span").style.visibility = "visible"
        maillot.style.background = "Yellow"
        btnValidHome.style.visibility = "visible"
        document.querySelector(".scoreboardJerseyHome").style.backgroundColor = "yellow"
    } if (btnValue === "btnGreen") {
        document.querySelector(".jerseyColorHome > span").style.visibility = "visible"
        maillot.style.background = "Green"
        btnValidHome.style.visibility = "visible"
        document.querySelector(".scoreboardJerseyHome").style.backgroundColor = "green"

    }
})

btnValidHome.addEventListener("click", (e) => {

    document.querySelector(".flex-container-home").remove()
    document.querySelector(".flex-container-visitor").style.visibility = "visible"
    document.querySelector(".flex-container-visitor").style.marginTop = 50 + "px"
})


//----------------------------------------------//
//--------séléction de l'équipe VISITOR --------//
//----------------------------------------------//


const colorVisitor = document.querySelector(".colorVisitor");
const selectVisitor = document.getElementById("selectVisitor");
const selectVisitorA = document.getElementById("selectVisitorA");
const btnValidVisitor = document.getElementById("validVisitor")
const scoreboardColor = document.querySelector(".scoreboardColor")

selectVisitor.addEventListener("input", (e) => {
    teamVisitor = e.target.value;
    logo = "/logoTeamLigueB/" + teamVisitor;

    if (selectVisitor.click) {

        document.querySelector(".logoVisitor").innerHTML = `
        <img src=${logo} alt=${teamVisitor}></img> `;

        document.querySelector(".scoreboardLogoVisitor").innerHTML = `
        <img src=${logo} alt=${teamVisitor}></img> `;

        document.querySelector(".logoV").innerHTML = `
        ${teamVisitor} `;

        document.querySelector(".scoreboardTeamVisitor").innerHTML = `
        ${teamVisitor}`;

        colorVisitor.style.visibility = "visible"
    }
})

selectVisitorA.addEventListener("input", (e) => {
    teamVisitor = e.target.value;
    logo = "/logoTeamLigueA/" + teamVisitor;

    if (selectVisitorA.click) {

        document.querySelector(".logoVisitor").innerHTML = `
        <img src=${logo} alt=${teamVisitor}></img> `;

        document.querySelector(".scoreboardLogoVisitor").innerHTML = `
        <img src=${logo} alt=${teamVisitor}></img> `;

        document.querySelector(".logoV").innerHTML = `
        ${teamVisitor}`;

        document.querySelector(".scoreboardTeamVisitor").innerHTML = `
        ${teamVisitor}`;

        colorVisitor.style.visibility = "visible"
    }
})

colorVisitor.addEventListener("click", (e) => {
    e.preventDefault
    btnValue = e.target.id

    if (btnValue === "btnBlack") {
        document.querySelector(".jerseyColorVisitor > span").style.visibility = "visible"
        maillotVisitor.style.visibility = "visible"
        scoreboardColor.style.visibility = "visible"
        document.querySelector(".scoreboardJerseyVisitor").style.backgroundColor = "black"
    } if (btnValue === "btnWhite") {
        document.querySelector(".jerseyColorVisitor > span").style.visibility = "visible"
        maillotVisitor.style.background = "White"
        scoreboardColor.style.visibility = "visible"
        document.querySelector(".scoreboardJerseyVisitor").style.backgroundColor = "white"
    } if (btnValue === "btnBlue") {
        document.querySelector(".jerseyColorVisitor > span").style.visibility = "visible"
        maillotVisitor.style.background = "blue"
        scoreboardColor.style.visibility = "visible"
        document.querySelector(".scoreboardJerseyVisitor").style.backgroundColor = "blue"
    } if (btnValue === "btnRed") {
        document.querySelector(".jerseyColorVisitor > span").style.visibility = "visible"
        maillotVisitor.style.background = "Red"
        scoreboardColor.style.visibility = "visible"
        document.querySelector(".scoreboardJerseyVisitor").style.backgroundColor = "red"
    } if (btnValue === "btnPink") {
        document.querySelector(".jerseyColorVisitor > span").style.visibility = "visible"
        maillotVisitor.style.background = "pink"
        scoreboardColor.style.visibility = "visible"
        document.querySelector(".scoreboardJerseyVisitor").style.backgroundColor = "pink"
    } if (btnValue === "btnYellow") {
        document.querySelector(".jerseyColorVisitor > span").style.visibility = "visible"
        maillotVisitor.style.background = "Yellow"
        scoreboardColor.style.visibility = "visible"
        document.querySelector(".scoreboardJerseyVisitor").style.backgroundColor = "yellow"
    } if (btnValue === "btnGreen") {
        document.querySelector(".jerseyColorVisitor > span").style.visibility = "visible"
        maillotVisitor.style.background = "Green"
        scoreboardColor.style.visibility = "visible"
        document.querySelector(".scoreboardJerseyVisitor").style.backgroundColor = "green"
    }
})

const colorScoreboard = document.getElementById("colorScoreboard")

colorScoreboard.addEventListener("input", (e) => {
    color = e.target.value
    
    if (color === "scoreboardBlack") {
        btnValidVisitor.style.visibility = "visible";
        document.querySelector(".scoreboardTeam").style.backgroundColor = "black"
        document.querySelector(".scoreboardSet").style.backgroundColor = "white"
        document.querySelector(".scoreboardSet").style.color = "black"
        document.querySelector(".scoreboardScore").style.backgroundColor = "black"
        document.querySelector(".scoreboardScore").style.color = "white"
    } if (color === "scoreboardRed") {
        btnValidVisitor.style.visibility = "visible";
        document.querySelector(".scoreboardTeam").style.backgroundColor = "red"
        document.querySelector(".scoreboardSet").style.backgroundColor = "white"
        document.querySelector(".scoreboardSet").style.color = "black"
        document.querySelector(".scoreboardScore").style.backgroundColor = "red"
        document.querySelector(".scoreboardScore").style.color = "white"
    } if (color === "scoreboardOrange") {
        btnValidVisitor.style.visibility = "visible";
        document.querySelector(".scoreboardTeam").style.backgroundColor = "orange"
        document.querySelector(".scoreboardSet").style.backgroundColor = "white"
        document.querySelector(".scoreboardSet").style.color = "black"
        document.querySelector(".scoreboardScore").style.backgroundColor = "orange"
        document.querySelector(".scoreboardScore").style.color = "white"
    } if (color === "scoreboardGreen") {
        btnValidVisitor.style.visibility = "visible";
        document.querySelector(".scoreboardTeam").style.backgroundColor = "Green"
        document.querySelector(".scoreboardSet").style.backgroundColor = "white"
        document.querySelector(".scoreboardSet").style.color = "black"
        document.querySelector(".scoreboardScore").style.backgroundColor = "Green"
        document.querySelector(".scoreboardScore").style.color = "white"
    } if (color === "scoreboardBlue") {
        btnValidVisitor.style.visibility = "visible";
        document.querySelector(".scoreboardTeam").style.backgroundColor = "blue"
        document.querySelector(".scoreboardSet").style.backgroundColor = "white"
        document.querySelector(".scoreboardSet").style.color = "black"
        document.querySelector(".scoreboardScore").style.backgroundColor = "blue"
        document.querySelector(".scoreboardScore").style.color = "white"
    } if (color === "scoreboardPink") {
        btnValidVisitor.style.visibility = "visible";
        document.querySelector(".scoreboardTeam").style.backgroundColor = "Pink"
        document.querySelector(".scoreboardSet").style.backgroundColor = "white"
        document.querySelector(".scoreboardSet").style.color = "black"
        document.querySelector(".scoreboardScore").style.backgroundColor = "Pink"
        document.querySelector(".scoreboardScore").style.color = "white"
    }
    


})

btnValidVisitor.addEventListener("click", (e) => {

    document.querySelector(".flex-container-visitor").remove()
    document.querySelector(".flex-container-chargement").style.marginTop = 50 + "px"
    document.querySelector(".flex-container-chargement").style.display = "flex"
    document.querySelector(".scoreLiveHome").innerHTML = ` 0 `;
    document.querySelector(".scoreLiveVisitor").innerHTML = ` 0 `;
    submitFirstSet.disabled = true

    document.querySelector(".scoreboardScoreHome").innerHTML = `
    0 `;
    document.querySelector(".scoreboardScoreVisitor").innerHTML = `
    0 `;
    document.querySelector(".scoreboardSetHome").innerHTML = `
    0 `;
    document.querySelector(".scoreboardSetVisitor").innerHTML = `
    0 `;

    setTimeout(function() {
        document.querySelector(".flex-container-chargement").remove()
        document.querySelector(".flex-container-scoreboard").style.visibility = "visible";
        document.querySelector(".flex-container-scoreboard").style.margin = "auto";

    }, 7000);
    
    setTimeout(function() {
        document.querySelector(".flex-container-score").style.visibility = "visible";
        submitFirstSet.style.visibility = "visible"
    }, 7000);

})

//----------------------------------------------//
//--------   Chargement du scoreBoard   --------//
//----------------------------------------------//


const target = document.getElementById("target");
let array = ["Chargement en cours..."];
let wordIndex = 0;
let letterIndex = 0;

const createLetter = () => {
  const letter = document.createElement("span");
  target.appendChild(letter);

  letter.textContent = array[wordIndex][letterIndex];

  setTimeout(() => {
    letter.remove();
  }, 2800);
};

const loop = () => {
  setTimeout(() => {
    if (wordIndex >= array.length) {
      wordIndex = 0;
      letterIndex = 0;
      loop();
    } else if (letterIndex < array[wordIndex].length) {
      createLetter();
      letterIndex++;
      loop();
    } else {
      wordIndex++;
      letterIndex = 0;
      setTimeout(() => {
        loop();
      }, 2800);
    }
  }, 60);
};
loop();

//----------------------------------------------//
//------------   Tableau des scores  -----------//
//----------------------------------------------//



//------------- AJOUTER SCORES ----------------//

let scoreHome = 0 
let scoreVisitor = 0

const homePlus = document.getElementById("homePlus");
const homeMinus = document.getElementById("homeMinus");
const visitorPlus = document.getElementById("visitorPlus");
const visitorMinus = document.getElementById("visitorMinus");

homePlus.addEventListener("click", (e) => {

    scoreHome = scoreHome+1

    document.querySelector(".scoreLiveHome").innerHTML = `
    ${scoreHome} `;

    document.querySelector(".scoreboardScoreHome").innerHTML = `
    ${scoreHome} `

    document.querySelector(".errorScore").style.visibility = "hidden"
    
})
homeMinus.addEventListener("click", (e) => {

    scoreHome = scoreHome-1

    document.querySelector(".scoreLiveHome").innerHTML = `
    ${scoreHome} `

    document.querySelector(".scoreboardScoreHome").innerHTML = `
    ${scoreHome} `

    document.querySelector(".errorScore").style.visibility = "hidden"

    if (scoreHome < 0) {
        document.querySelector(".scoreLiveHome").innerHTML = `
        0 `

        document.querySelector(".scoreboardScoreHome").innerHTML = `
        0 `
        scoreHome = 0
    }
    
})

visitorPlus.addEventListener("click", (e) => {

    scoreVisitor = scoreVisitor+1

    document.querySelector(".scoreLiveVisitor").innerHTML = `
    ${scoreVisitor} `

    document.querySelector(".scoreboardScoreVisitor").innerHTML = `
    ${scoreVisitor} `

    document.querySelector(".errorScore").style.visibility = "hidden"
    
})

visitorMinus.addEventListener("click", (e) => {

    scoreVisitor = scoreVisitor-1

    document.querySelector(".scoreLiveVisitor").innerHTML = `
    ${scoreVisitor} `

    document.querySelector(".scoreboardScoreVisitor").innerHTML = `
    ${scoreVisitor} `

    document.querySelector(".errorScore").style.visibility = "hidden"

    if (scoreVisitor < 0) {
        document.querySelector(".scoreLiveVisitor").innerHTML = `
        0 `

        document.querySelector(".scoreboardScoreVisitor").innerHTML = `
        0 
        `
        scoreVisitor = 0
    }
    
})

//--------------------------- Valider un score  --------------------------//

const checkBox = document.getElementById("checkBox")
const checkBox5 = document.getElementById("checkBox5")

checkBox.addEventListener("click", (e) => {

    if ((scoreHome === 25 && scoreVisitor < 24) 
    || (scoreHome < 24 && scoreVisitor === 25 )
    || (scoreHome > 25 && scoreVisitor === scoreHome-2)
    || ((scoreVisitor > 25 && scoreHome === scoreVisitor-2))) {
        submitFirstSet.disabled = false
        submitSecondSet.disabled = false
        submitThirdSet.disabled = false
        submitFourSet.disabled = false
        submitFiveSet.disabled = false
        submitFirstSet.style.visibility = "visible"
        document.querySelector(".errorScore").style.visibility = "hidden"
    } else {
        document.querySelector(".errorScore").style.visibility = "visible"
        document.querySelector(".errorScore").innerHTML = `
        <p> Le score n'est pas correct </p> `;
        checkBox.checked = false
    }
})

checkBox5.addEventListener("click", (e) => {

    if ((scoreHome === 15 && scoreVisitor < 14) 
    || (scoreHome < 14 && scoreVisitor === 15 )
    || (scoreHome > 15 && scoreVisitor === scoreHome-2)
    || ((scoreVisitor > 15 && scoreHome === scoreVisitor-2))) {
        submitFiveSet.disabled = false
        document.querySelector(".errorScore").style.visibility = "hidden"
    } else {
        document.querySelector(".errorScore").style.visibility = "visible"
        document.querySelector(".errorScore").innerHTML = `
        <p> Le score n'est pas correct </p> `;
        checkBox5.checked = false
    }
})

//---------------------------- Envoyer un score --------------------------//

const submitFirstSet = document.getElementById("submitFirstSet")
const submitSecondSet = document.getElementById("submitSecondSet")
const submitThirdSet = document.getElementById("submitThirdSet")
const submitFourSet = document.getElementById("submitFourSet")
const submitFiveSet = document.getElementById("submitFiveSet")

let scoreSetHome = 0
let scoreSetVisitor = 0

submitFirstSet.addEventListener("click", (e) => {
    document.querySelector(".scoreFirstSetHome").innerHTML = `
    ${scoreHome} `;
    document.querySelector(".scoreFirstSetVisitor").innerHTML = `
    ${scoreVisitor} `;
    document.querySelector(".scoreLiveHome").innerHTML = `
    0 `;
    document.querySelector(".scoreLiveVisitor").innerHTML = `
    0 `;
    document.querySelector(".scoreboardScoreHome").innerHTML = `
    0 `
    document.querySelector(".scoreboardScoreVisitor").innerHTML = `
    0 `
    

    document.querySelector(".scoreFirstSet").style.visibility = "visible"

    submitFirstSet.remove()

    submitSecondSet.style.visibility = "visible";

    submitSecondSet.disabled = true

    checkBox.checked = false


    if (scoreHome > scoreVisitor) {
        document.querySelector(".scoreFirstSetHome").style.fontWeight = "bold"
        document.querySelector(".scoreSetHome").textContent = scoreSetHome = scoreSetHome+1
        document.querySelector(".scoreSetVisitor").textContent = scoreSetVisitor
        document.querySelector(".scoreboardSetHome").textContent = scoreSetHome
        document.querySelector(".scoreboardSetVisitor").textContent = scoreSetVisitor
    } if (scoreHome < scoreVisitor) {
        document.querySelector(".scoreFirstSetVisitor").style.fontWeight = "bold"
        document.querySelector(".scoreSetHome").textContent = scoreSetHome
        document.querySelector(".scoreSetVisitor").textContent = scoreSetVisitor = scoreSetVisitor+1
        document.querySelector(".scoreboardSetHome").textContent = scoreSetHome
        document.querySelector(".scoreboardSetVisitor").textContent = scoreSetVisitor
    } if (scoreHome === scoreVisitor) {
        alert("le score des deux équipes ne peuvent pas être identique")
    } if (submitFirstSet.mouseover) {
        submitFirstSet.style.background = "red"
    }

    scoreHome = 0
    scoreVisitor = 0
})

submitSecondSet.addEventListener("click", (e) => {
    document.querySelector(".scoreSecondSetHome").innerHTML = `
    ${scoreHome} `;
    document.querySelector(".scoreSecondSetVisitor").innerHTML = `
    ${scoreVisitor} `
    document.querySelector(".scoreLiveHome").innerHTML = `
    0 `
    document.querySelector(".scoreLiveVisitor").innerHTML = `
    0 `
    document.querySelector(".scoreboardScoreHome").innerHTML = `
    0 `
    document.querySelector(".scoreboardScoreVisitor").innerHTML = `
    0 `
    document.querySelector(".scoreSecondSet").style.visibility = "visible"

    submitSecondSet.remove()

    submitThirdSet.style.visibility = "visible"

    submitThirdSet.disabled = true

    checkBox.checked = false


    if (scoreHome > scoreVisitor) {
        document.querySelector(".scoreSecondSetHome").style.fontWeight = "bold"
        document.querySelector(".scoreSetHome").textContent = scoreSetHome = scoreSetHome+1
        document.querySelector(".scoreSetVisitor").textContent = scoreSetVisitor
        document.querySelector(".scoreboardSetHome").textContent = scoreSetHome
        document.querySelector(".scoreboardSetVisitor").textContent = scoreSetVisitor
    } if (scoreHome < scoreVisitor) {
        document.querySelector(".scoreSecondSetVisitor").style.fontWeight = "bold"
        document.querySelector(".scoreSetHome").textContent = scoreSetHome
        document.querySelector(".scoreSetVisitor").textContent = scoreSetVisitor = scoreSetVisitor+1
        document.querySelector(".scoreboardSetHome").textContent = scoreSetHome
        document.querySelector(".scoreboardSetVisitor").textContent = scoreSetVisitor
    } if (scoreHome === scoreVisitor) {
        alert("le score des deux équipes ne peuvent pas être identique")
    }

    scoreHome = 0
    scoreVisitor = 0
})

submitThirdSet.addEventListener("click", (e) => {
    document.querySelector(".scoreThirdSetHome").innerHTML = `
    ${scoreHome} `;
    document.querySelector(".scoreThirdSetVisitor").innerHTML = `
    ${scoreVisitor} `
    document.querySelector(".scoreLiveHome").innerHTML = `
    0 `
    document.querySelector(".scoreLiveVisitor").innerHTML = `
    0 `
    document.querySelector(".scoreboardScoreHome").innerHTML = `
    0 `
    document.querySelector(".scoreboardScoreVisitor").innerHTML = `
    0 `
    document.querySelector(".scoreThirdSet").style.visibility = "visible"

    submitThirdSet.remove()

    submitFourSet.style.visibility = "visible"

    submitFourSet.disabled = true

    checkBox.checked = false


    if (scoreHome > scoreVisitor) {
        document.querySelector(".scoreThirdSetHome").style.fontWeight = "bold"
        document.querySelector(".scoreSetHome").textContent = scoreSetHome = scoreSetHome+1
        document.querySelector(".scoreSetVisitor").textContent = scoreSetVisitor
        document.querySelector(".scoreboardSetHome").textContent = scoreSetHome
        document.querySelector(".scoreboardSetVisitor").textContent = scoreSetVisitor
    } if (scoreHome < scoreVisitor) {
        document.querySelector(".scoreThirdSetVisitor").style.fontWeight = "bold"
        document.querySelector(".scoreSetHome").textContent = scoreSetHome
        document.querySelector(".scoreSetVisitor").textContent = scoreSetVisitor = scoreSetVisitor+1
        document.querySelector(".scoreboardSetHome").textContent = scoreSetHome
        document.querySelector(".scoreboardSetVisitor").textContent = scoreSetVisitor
    } if (scoreHome === scoreVisitor) {
        alert("le score des deux équipes ne peuvent pas être identique")
    } if (scoreSetHome === 3) {
        validMatch.style.visibility = "visible"
        document.querySelector(".flex-container-buttons").remove()
        document.querySelector(".result").innerHTML = ` 
        <h2> L'équipe de ${teamHome} gagne le match ${scoreSetHome} - ${scoreSetVisitor} contre ${teamVisitor} </h2> `;
        document.querySelector(".scoreboardScore").remove()
    } if (scoreSetVisitor === 3) {
        validMatch.style.visibility = "visible"
        document.querySelector(".flex-container-buttons").remove()
        document.querySelector(".result").innerHTML = ` 
        <h2> L'équipe de ${teamVisitor} gagne le match ${scoreSetVisitor} - ${scoreSetHome} contre ${teamHome} </h2> `;
        document.querySelector(".scoreboardScore").remove()
    }

    scoreHome = 0
    scoreVisitor = 0
})

submitFourSet.addEventListener("click", (e) => {
    document.querySelector(".scoreFourSetHome").innerHTML = `
    ${scoreHome} `;
    document.querySelector(".scoreFourSetVisitor").innerHTML = `
    ${scoreVisitor} `
    document.querySelector(".scoreLiveHome").innerHTML = `
    0 `
    document.querySelector(".scoreLiveVisitor").innerHTML = `
    0 `
    document.querySelector(".scoreboardScoreHome").innerHTML = `
    0 `
    document.querySelector(".scoreboardScoreVisitor").innerHTML = `
    0 `
    document.querySelector(".scoreFourSet").style.visibility = "visible"

    submitFourSet.remove()

    submitFiveSet.style.visibility = "visible"

    submitFiveSet.disabled = true

    checkBox.style.visibility = "hidden"

    checkBox5.checked = false

    checkBox5.style.visibility= "visible"

    if (scoreHome > scoreVisitor) {
        document.querySelector(".scoreFourSetHome").style.fontWeight = "bold"
        document.querySelector(".scoreSetHome").textContent = scoreSetHome = scoreSetHome+1
        document.querySelector(".scoreSetVisitor").textContent = scoreSetVisitor
        document.querySelector(".scoreboardSetHome").textContent = scoreSetHome
        document.querySelector(".scoreboardSetVisitor").textContent = scoreSetVisitor
    } if (scoreHome < scoreVisitor) {
        document.querySelector(".scoreFourSetVisitor").style.fontWeight = "bold"
        document.querySelector(".scoreSetHome").textContent = scoreSetHome
        document.querySelector(".scoreSetVisitor").textContent = scoreSetVisitor = scoreSetVisitor+1
        document.querySelector(".scoreboardSetHome").textContent = scoreSetHome
        document.querySelector(".scoreboardSetVisitor").textContent = scoreSetVisitor
    } if (scoreHome === scoreVisitor) {
        alert("le score des deux équipes ne peuvent pas être identique")
    } if (scoreSetHome === 3) {
        document.querySelector(".flex-container-buttons").remove()
        document.querySelector(".result").innerHTML = ` 
        <h2> L'équipe de ${teamHome} gagne le match ${scoreSetHome} - ${scoreSetVisitor} contre ${teamVisitor} </h2> `;
        document.querySelector(".scoreboardScore").remove()
    } if (scoreSetVisitor === 3) {
        document.querySelector(".flex-container-buttons").remove()
        document.querySelector(".result").innerHTML = ` 
        <h2> L'équipe de ${teamVisitor} gagne le match ${scoreSetVisitor} - ${scoreSetHome} contre ${teamHome} </h2> `;
        document.querySelector(".scoreboardScore").remove()
    }

    scoreHome = 0
    scoreVisitor = 0
})

submitFiveSet.addEventListener("click", (e) => {
    document.querySelector(".scoreFiveSetHome").innerHTML = `
    ${scoreHome} `;
    document.querySelector(".scoreFiveSetVisitor").innerHTML = `
    ${scoreVisitor} `
    document.querySelector(".scoreLiveHome").innerHTML = `
    0 `
    document.querySelector(".scoreLiveVisitor").innerHTML = `
    0 `
    document.querySelector(".scoreboardScoreHome").innerHTML = `
    0 `
    document.querySelector(".scoreboardScoreVisitor").innerHTML = `
    0 `
    document.querySelector(".scoreFiveSet").style.visibility = "visible"

    submitFiveSet.remove()

    if (scoreHome > scoreVisitor) {
        document.querySelector(".scoreSetHome").textContent = scoreSetHome = scoreSetHome+1
        document.querySelector(".scoreSetVisitor").textContent = scoreSetVisitor
        document.querySelector(".scoreboardSetHome").textContent = scoreSetHome
        document.querySelector(".scoreboardSetVisitor").textContent = scoreSetVisitor
        document.querySelector(".scoreFiveSetHome").style.fontWeight = "bold"
    } if (scoreHome < scoreVisitor) {
        document.querySelector(".scoreSetHome").textContent = scoreSetHome
        document.querySelector(".scoreSetVisitor").textContent = scoreSetVisitor = scoreSetVisitor+1
        document.querySelector(".scoreboardSetHome").textContent = scoreSetHome
        document.querySelector(".scoreboardSetVisitor").textContent = scoreSetVisitor
        document.querySelector(".scoreFiveSetVisitor").style.fontWeight = "bold"
    } if (scoreHome === scoreVisitor) {
        alert("le score des deux équipes ne peuvent pas être identique")
    } if (scoreSetHome === 3) {
        document.querySelector(".flex-container-buttons").remove()
        document.querySelector(".result").innerHTML = ` 
        <h2> L'équipe de ${teamHome} gagne le match ${scoreSetHome} - ${scoreSetVisitor} contre ${teamVisitor} </h2> `;
        document.querySelector(".scoreboardScore").remove()
    } if (scoreSetVisitor === 3) {
        document.querySelector(".flex-container-buttons").remove()
        document.querySelector(".result").innerHTML = ` 
        <h2> L'équipe de ${teamVisitor} gagne le match ${scoreSetVisitor} - ${scoreSetHome} contre ${teamHome} </h2> `;
        document.querySelector(".scoreboardScore").remove()
    }

    scoreHome = 0
    scoreVisitor = 0
})

const validMatch = document.getElementById("validMatch")

validMatch.addEventListener("click", (e) => {
    window.close()
})

window.onbeforeunload = confirmload;
function confirmload() {
    return ""
}