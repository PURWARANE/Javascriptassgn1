//10 quotes 
var quotes= [
  'Insane means fewer cameras! -Ally Carter',
  'Never ask an elf for help they might decide your better off dead,eh?- Christopher Paolini',
  'All of my best friends are dead people. Someday I have got to figure out how that happened. - Claudia Gra',
  'Act first, explain later.-Dan Brown',
  'Life would be a great deal easier if dead things had the decency to remain dead.-Doug MacLeod',
  'If you cannot convince them, confuse them.-Harry S Truman',
  'The only thing that overcomes hard luck is hard work.-Harry Golden',
  'Anger is the ultimate destroyer of your own peace of mind.          -Dalai Lama',
  'Do not be afraid.Be focused. Be determined. Be hopeful. Be empowered.-Michelle Obama',
  'Emotional empathy is what motivates us to help others.-Brian Goldman'
  ]
//function for onclick new quotes
//floor method of math object is used
function newquote() {
  var randomNum= Math.floor(Math.random() *(quotes.length));
  //display quotes
  document.getElementById('quotedisplay').innerHTML
    =quotes[randomNum];

  
}
