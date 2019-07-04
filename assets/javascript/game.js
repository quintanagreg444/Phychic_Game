var wordBank = ["javascript","python","jquery","mysql", "react"];
var randomWord  
function getRandomWord() {
 var index =Math.floor(Math.random() * wordBank.length);
 randomWord=wordBank[index];

}
getRandomWord()
console.log($("#randomWord"))
$("#randomWord").html(randomWord)

 $(document).on("keypress", function (event){
  console.log(String.fromCharCode(event.keyCode)
  ) })

