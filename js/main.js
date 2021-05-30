let textMale = document.querySelector('.try_textWrapper').innerHTML;

const mapWords = {
  marzyłeś: "marzyłaś",
  studentów: "studentek i studentów",
  inżyniera: "inżyniera lub inżynierki"
};

document.querySelector('.try_textWrapper').innerHTML = 
textMale.replace(/\b(?:marzyłeś|studentów|inżynierki)\b/gi, matched => mapWords[matched]);
function textMentoFem() {
  
}