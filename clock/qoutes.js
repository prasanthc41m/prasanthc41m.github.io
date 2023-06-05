var phrase = new RandomPhrase().pickCurrent();
document.addEventListener('DOMContentLoaded', function() {
   document.getElementById('phrase').innerHTML = phrase;
});
