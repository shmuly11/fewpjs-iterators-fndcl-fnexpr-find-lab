const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array){
  let winningYear = array.find(o => o.result === 'W')
  return (winningYear ? winningYear.year : undefined)
}