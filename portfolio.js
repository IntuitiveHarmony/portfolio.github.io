//-------------
//  Welcome page
//-------------

const loadHome = () => {
  $(`.main`).empty()
  let $container = $(`<div>`)
    .addClass(`container`)
    .appendTo(`.main`)
  let $home = $(`<h3>`)
    .text(`Welcome`)
    .appendTo($container)
  let $message = $(`<p>`)
    .text(`You have stumbled upon my info page`)
    .appendTo($container)
}


//-----------
//  Bio Page
//-----------

const loadBio = () => {
  clearHome()
  let $container = $(`<div>`)
    .addClass(`container`)
    .appendTo(`.main`)
  let $bioHeader = $(`<h3>`)
    .text(`Constant Exploration`)
    .appendTo($container)
  let $bio = $(`<p>`)
    .text(`Hello, my name is Jason.`)
    .appendTo($container)
  let $bioPic = $(`<img>`)
    .addClass(`bioPic`)
    .attr(`src`, `files/pictures/IMG_0779.jpg`)
    .appendTo($container)
}


//--------------
//  Resume page
//--------------

const loadResume = () => {
  clearHome()
  let $container = $(`<div>`)
    .addClass(`container`)
    .appendTo(`.main`)
  let $resumeHeader = $(`<h3>`)
    .text(`Varied Work History`)
    .appendTo($container)
  let $resume = $(`<p>`)
    .text(`This is where my resume will go`)
    .appendTo($container)
}


//--------------
//  Projects page
//--------------

const loadProjects = () => {
  clearHome()
  let $container = $(`<div>`)
    .addClass(`container`)
    .appendTo(`.main`)
  let $projectHeader = $(`<h3>`)
    .text(`Projects`)
    .appendTo($container)
  let $project = $(`<h4>`)
    .text(`Rock, Paper, Scossors Game`)
    .appendTo($container)
  let $input2 = $(`<input>`)
    .attr(`type`, `submit`)
    .attr(`id`, `userClick`)
    .attr(`onClick`, `rockGame()`)
    .appendTo($container)
}


//--------------------------
//  Rock Paper Scissor game
//--------------------------

const rockChoices = [`ROCK`, `PAPER`, `SCISSOR`]
const rockGame = () => {
  //for random rock paper or scissor
const randomMove = () => {
  return (rockChoices[Math.floor(Math.random()*rockChoices.length)])
  }
const clearHand = () => {
  $(`.hand`).empty()
}

  clearHome()
  let $gameBoard = $(`<div>`)
    .addClass(`gameBoard`)
    .appendTo(`.main`)
  let $title = $(`<h3>`)
    .text(`Rock, Paper, Scissors`)
    .appendTo($gameBoard)
  let $intro = $(`<p>`)
    .text(`Type your response and press the button`)
    .appendTo($gameBoard)
  let $input = $(`<input>`)
    .attr(`type`, `text`)
    .attr(`id`, `userInput`)
    .attr(`placeholder`, `Rock, Paper or Scissor`)
    .appendTo($gameBoard)
  let $input3 = $(`<input>`)
    .attr(`type`, `submit`)
    .attr(`id`, `gameClick`)
    // .attr(`onClick`, `rockGame()`)
    .appendTo($gameBoard)


    $('#gameClick').on(`click`, () => {
      let $hand = $(`<div>`)
        .addClass(`hand`)
        .appendTo($gameBoard)
      const $choice = $(`#userInput`).val()
      randomMove()
      clearHand()
      let computerMove = randomMove()
      if ($choice.toUpperCase() === computerMove) {
        let $tie = $(`<p>`)
          .text(`Player chose: ${$choice} and the computer chose: ${computerMove}.  Tie game`)
          .appendTo($hand)
      } else if ($choice.toUpperCase() === `ROCK` && computerMove === `SCISSOR`) {
        let $op1 = $(`<p>`)
          .text(`Player chose: ${$choice} and the computer chose: ${computerMove}. Player Wins`)
          .appendTo($hand)
      } else if ($choice.toUpperCase() === `ROCK` && computerMove === `PAPER`) {
        let $op2 = $(`<p>`)
          .text(`Player chose: ${$choice} and the computer chose: ${computerMove}. Player Looses`)
          .appendTo($hand)
      } else if ($choice.toUpperCase() === `PAPER` && computerMove === `SCISSOR`) {
        let $op3 = $(`<p>`)
          .text(`Player chose: ${$choice} and the computer chose: ${computerMove}. Player Looses`)
          .appendTo($hand)
      } else if ($choice.toUpperCase() === `PAPER` && computerMove === `ROCK`) {
        let $op1 = $(`<p>`)
          .text(`Player chose: ${$choice} and the computer chose: ${computerMove}. Player Wins`)
          .appendTo($hand)
      } else if ($choice.toUpperCase() === `SCISSOR` && computerMove === `PAPER`) {
        let $op1 = $(`<p>`)
          .text(`Player chose: ${$choice} and the computer chose: ${computerMove}. Player Wins`)
          .appendTo($hand)
      } else if ($choice.toUpperCase() === `SCISSOR` && computerMove === `ROCK`) {
        let $op1 = $(`<p>`)
          .text(`Player chose: ${$choice} and the computer chose: ${computerMove}. Player Looses`)
          .appendTo($hand)
      } else {
        let op7 = $(`<p>`)
        .text(`You typed ${$choice}. Please type 'rock' 'paper' or 'scissor'`)
        .appendTo($hand)
      }
    })
}




//--------------
//  Links page
//--------------

const loadLinks = () => {
  clearHome()
  let $container = $(`<div>`)
    .addClass(`container`)
    .appendTo(`.main`)
  let $linkHeader = $(`<h3>`)
    .text(`Here are some external links`)
    .appendTo($container)
  let $ltext = $(`<p>`)
    .text(`more to follow if I ever decide to establish an online presence`)
    .appendTo($container)
  let $gitLink = $(`<a>`)
    .text(`Github - Intuitive Harmony`)
    .attr(`href`, `https://github.com/IntuitiveHarmony`)
    .attr(`target`, `blank`)
    .appendTo($container)
  let $soundLink = $(`<a>`)
    .text(`SoundClound - Invisible Birds`)
    .attr(`href`, `https://soundcloud.com/invisiblebirds`)
    .attr(`target`, `blank`)
    .appendTo($container)

}


//--------------------------------------------------
//  Add and remove the text of nav items with hover
//-------------------------------------------------

const hoverTextAdd = () => {
  $(`.focus`).siblings().show()
}
const hoverTextRemove = () => {
  $(`h2`).hide()
  console.log(`txtrm`)
}


//---------------------
//  Clear main section
//---------------------

const clearHome = () => {
  $(`.main`).empty()
}


$(() => {

  //----------
  //  Buttons
  //----------
  loadHome() //Start with the welcome page
  $(`.homeLink`).on(`click`, loadHome)     //  Home Button
  $(`#nav1`).on(`click`, loadBio)          //  Bio Button
  $(`#nav2`).on(`click`, loadResume)       //  Resume Button
  $(`#nav3`).on(`click`, loadProjects)     //  Projects Button
  $(`#nav4`).on(`click`, loadLinks)        //  Bio Button


    //---------------------------------------------------
    //  nav items focus when hovered (change class)
    //---------------------------------------------------
  $(`.navPic`).hover(function() {
    $(this).addClass(`focus`)
    // hoverTextAdd()
      }, function() {
        $(this).removeClass(`focus`).removeAttr(`id`, `current`)
        // hoverTextRemove()
    })

})




























//
