function displayResult(test) {
  console.log('displayResult called on', test)
  if(palindrome(test)){
      // console.log(Success)
      document.getElementById('answer').innerHTML = "<h2 id='rightAnswer'>Congrats, it's a Palindrome!</h2>"
  } else {
      // console.log(FAILLLLLL)
      document.getElementById('answer').innerHTML = "<h2 id='wrongAnswer'>Sorry, this isn't a Palindrome. </h2>"
  }
}
function palindrome(str) {
  var ok = str.toLowerCase();
  var regex = /[a-zA-Z0-9]/gi;
  var lettersOnly = ok.match(regex)
  // console.log(lettersOnly)
  var reversedArray = [...lettersOnly].reverse();
  console.log(lettersOnly,reversedArray)
  for (var i = 0; i < lettersOnly.length; i++){
    if (lettersOnly[i] !== reversedArray[i]){
      return false
    } 
    else {
    }
      }    
      return true;
  }