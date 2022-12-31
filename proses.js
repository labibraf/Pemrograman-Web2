const selectionButtons = document.querySelectorAll('[data-selection]')
const finalColumn =  document.querySelector('[data-final-column]')
const computerScoreSpan = document.querySelector('[data-computer-score]')
const yourScoreSpan = document.querySelector('[data-your-score]')


const SELECTIONS =[
    {
        name : 'rock',
        emoji : '🌑',
        beats : 'scissors'
    },
    {
        name : 'paper',
        emoji : '📃',
        beats : 'rock'
    },
    {
        name : 'scissors',
        emoji : '✂',
        beats : 'paper'
    }
]


selectionButtons.forEach(selectionButtons => {
    selectionButtons.addEventListener('click', e => {
        const selectionName = selectionButtons.dataset.selection
        const selection = SELECTIONS.find(selection => selection.name === selectionName)
        makeSelection(selection)
    })
})

function makeSelection(selection){
    const computerSelection = randomSelection()
    const yourWinner = isWinner(selection, computerSelection)
    const computerWinner = isWinner(computerSelection, selection)
    const round = 5

    addSelectionResult(computerSelection, computerWinner)
    addSelectionResult(selection, yourWinner)
    // add new score
    if(yourWinner) incrementScore(yourScoreSpan)
    if(computerWinner) incrementScore(computerScoreSpan)
    if(incrementScore(yourScoreSpan >= round)){
        console.log("player wins")
    }
    else if(incrementScore(computerScoreSpan >= round)){
        console.log("computer Wins")
    }
}

function incrementScore(scoreSpan){
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
}

function addSelectionResult(selection, winner){
    const div = document.createElement('div')
    div.innerText = selection.emoji
    div.classList.add('result-selection')
    if(winner) div.classList.add('winner')
    finalColumn.after(div)
}

function isWinner(selection, opponentSelection){
    return selection.beats === opponentSelection.name
}

function randomSelection(){
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
    return SELECTIONS[randomIndex]
}
