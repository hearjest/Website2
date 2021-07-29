const submitButton=document.querySelector('#submitWord');
let firstWord=true;
let startingLetter='';
let playerPoints=0;
//https://raw.githubusercontent.com/dwyl/english-words/master/words_alpha.txt
//https://www.w3schools.com/js/js_timing.asp
submitButton.addEventListener('click',function(){
    let word=document.getElementById('word').value;
    if(word.length<=1){
        //Check if it is a valid word
    }
    if(firstWord){
        startingLetter=word.charAt(word.length-1);
        firstWord=false;
    }else{
        if(word.charAt(0)===startingLetter){
            playerPoints++;
            startingLetter=word.charAt(word.length-1);
        }else{
            playerPoints--;
        }
    }
    document.getElementById('word').value='';
    document.getElementById('nextLetter').textContent=startingLetter;
    document.getElementById('scoreDisplay').textContent='Score: ' + playerPoints;
});