//BOTONERA REPRODUCTOR
let video = document.querySelector("video");
let playpausa = document.querySelector(".botrep"); 
let play = document.querySelector("#play");
let pausa = document.querySelector("#pausa");


console.dir(video);
playpausa.addEventListener("click", ()=>{
    if (video.pausa == true) {
        video.play()
        pausa.setAttribute
    } else {
        
    }
})

// ROMPECABEZAS
let im = document.querySelectorAll(".imgarr");
let des = document.querySelectorAll(".divdes");
console.dir(des)
for (let i = 0; i<3; i++) {
    
    im[i].addEventListener("dragstart", (e)=>{

        if (i==0) {
            e.dataTransfer.setData("text","./assets/imagenes/rompe2.png");

        } else if (i==1) {
            e.dataTransfer.setData("text","./assets/imagenes/rompe1.png");

        } else if (i==2) {
            e.dataTransfer.setData("text","./assets/imagenes/rompe3.png");
        }
    })

    des[i].addEventListener("dragover", (e)=>{
        e.preventDefault();
    })

    des[i].addEventListener("drop", (e)=>{
        let info = e.dataTransfer.getData("text");
        if (des[i].innerText == "Arrastre y suelte la imágenes aquí") {
            des[i].innerHTML= `<img src='${info}'"/>`
            im[i].style.display="none";
        }
       

    })
}
