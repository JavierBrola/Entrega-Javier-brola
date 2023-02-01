
let play = document.querySelector("#play");
let pausa = document.querySelector("#pausa");
let video = document.querySelector("video");
let agrandar = document.querySelector("#agrandar");

play.addEventListener("click", (e)=>{
    video.play();
    let min = Math.trunc(video.duration/60);
    let calculo = (video.duration/60) - min;
    let seg = Math.trunc(calculo*60);
    document.querySelector("#tiempo").innerText= `${min}:${seg}`;

    const time = () =>{
        let tmin =Math.trunc(video.currentTime/60);
        let ccal = (video.currentTime/60) - tmin;
        let tseg = Math.trunc(ccal*60);
        document.querySelector("#transcurrido").innerText= `${tmin}:${tseg}`;
    };
    
    setInterval(time, 1000);
});

pausa.addEventListener("click", ()=>{
    video.pause();    
});

agrandar.addEventListener("click", ()=>{
    video.classList.toggle("grande");
    document.querySelector(".repro").classList.toggle("expandir");
})
