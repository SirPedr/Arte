
let botaoTocarNota = document.querySelector("#botao-nota"),
    selectOpcoesNota = document.querySelector('select'),
    audioNotaAnterior = new Audio("audio/NotaA.mp3"),
    auxContador = 1;

botaoTocarNota.addEventListener('click', function toggleNotaCorrespondente(){
   audioNotaAnterior.pause();

   let urlAudio = "audio/Nota" + selectOpcoesNota.value + ".mp3",
       notaEscolhida = new Audio(urlAudio);

   audioNotaAnterior = notaEscolhida;

   if(auxContador % 2 === 0)
      notaEscolhida.pause();
   else
      notaEscolhida.play();

   auxContador++;
});
