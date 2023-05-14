var el = document.querySelector("#text");
var text = "Encontre e contrate o funcionário certo para o seu serviço."
var interval = 150;
function showtext(el, text, interval) {
  var char = text.split("").reverse();
  var typer = setInterval(function() {
  
    if (!char.length) {
        return clearInterval(typer)
    }
    var next = char.pop();
    el.innerHTML += next;
  }, interval);
  
}
showtext(el, text, interval);

// n2
var el = document.querySelector("#text1");
var text = "Encontre e contrate o funcionário certo para o seu serviço."
var interval = 150;
function showtext(el, text, interval) {
  var char = text.split("").reverse();

  var typer = setInterval(function() {
  
    if (!char.length) {
        return clearInterval(typer)
    }
    
    var next = char.pop();
    
    el.innerHTML += next;
    
  }, interval);
  
}
showtext(el, text, interval);