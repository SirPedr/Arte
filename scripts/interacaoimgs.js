let musicaMichael = document.getElementById("musicaMJ"),
    imagemMichael = document.querySelector("#imagemMichael"),
    i = 0;

imagemMichael.addEventListener('click', function (){
      i++;
      if(i % 2 === 1){
        musicaMichael.play();
      }else{
        musicaMichael.pause();
      }
});

//ADD BARULHO DE CHUVA

let BarulhoChuvaEl = document.getElementById("Barulho-Chuva"),
    PixelArtEl = document.querySelector("#Pixel-Art"),
    j = 0;

PixelArtEl.addEventListener('click', function (){
      j++;
      if(j % 2 === 1){
        BarulhoChuvaEl.play();
      }else{
        BarulhoChuvaEl.pause();
      }

});
//ADD O SOLO MANEIRO
let SoloEl = document.getElementById("Solo"),
  PalhetaEl = document.querySelector("#img-palheta"),
  k = 0;
  PalhetaEl.addEventListener('click', function (){
        k++;
        if(k % 2 === 1){
          SoloEl.play();
        }else{
          SoloEl.pause();
        }

  });

  //ADD EASTEREGG TOCA A PISADINHA

  let PisadinhaEl = document.getElementById("Pisadinha"),
  l = 0;
  PalhetaEl.addEventListener('dblclick', function (){
        l++;
        if (l>=3) {
        if(l % 2 === 1){
          PisadinhaEl.play();
        }else{
          PisadinhaEl.pause();
        }
      }
  });

  //Página de Música: INTRO THUNDERSTRUCK

  let  ThunderEl = document.getElementById("Thunderstruck"),
       Angus = document.querySelector("#AngusTruck"),
       m = 0;
