let TocarNota = document.querySelector("#botao-nota"),
    La = document.getElementById("NotaA"),
    Si = document.getElementById("NotaB"),
    Do = document.getElementById("NotaC"),
    Re = document.getElementById("NotaD"),
    Mi = document.getElementById("NotaE"),
    Fa = document.getElementById("NotaF"),
   Sol = document.getElementById("NotaG"),
   i = 0;


TocarNota.addEventListener('click', function(){
  let InputNota = document.querySelector("#input-nota").value;
      i++;
  if(InputNota =='Dó'){
    TocarNota.innerHTML = "Pausar";
    if(i % 2 == 1){
      Do.play();
    }else{
      Do.pause();
      TocarNota.innerHTML = 'Tocar';
    }
  }else if(InputNota == 'Ré'){
    TocarNota.innerHTML = "Pausar";
    if(i % 2 == 1){
      Re.play();
    }else{
      Re.pause();
      TocarNota.innerHTML = 'Tocar';
    }
  }else if(InputNota == 'Mi'){
    TocarNota.innerHTML = "Pausar";
    if(i % 2 == 1){
      Mi.play();
    }else{
      Mi.pause();
      TocarNota.innerHTML = 'Tocar';
    }
  }else if(InputNota == 'Fá'){
    TocarNota.innerHTML = "Pausar";
    if(i % 2 == 1){
      Fa .play();
    }else{
      Fa.pause();
      TocarNota.innerHTML = 'Tocar';
    }
  }else if(InputNota == 'Sol'){
    TocarNota.innerHTML = "Pausar";
    if(i % 2 == 1){
      Sol.play();
    }else{
      Sol.pause();
      TocarNota.innerHTML = 'Tocar';
    }
  }else if(InputNota == 'Lá'){
    TocarNota.innerHTML = "Pausar";
    if(i % 2 == 1){
      La.play();
    }else{
      La.pause();
      TocarNota.innerHTML = 'Tocar';
    }
  }else if(InputNota == 'Si'){
    TocarNota.innerHTML = "Pausar";
    if(i % 2 == 1){
      Si.play();
    }else{
      Si.pause();
      TocarNota.innerHTML = 'Tocar';
    }
  }
});
