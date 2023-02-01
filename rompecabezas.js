
let im = document.querySelectorAll(".imgarr");
let des = document.querySelectorAll(".divdes");
let reinicio = document.querySelector(".boton");

for (let i = 0; i<3; i++) {
    im[i].addEventListener("dragstart", (e)=>{
        if (i==0) {
            e.dataTransfer.setData("text","./assets/imagenes/rompe2.png");

        } else if (i==1) {
            e.dataTransfer.setData("text","./assets/imagenes/rompe1.png");

        } else if (i==2) {
            e.dataTransfer.setData("text","./assets/imagenes/rompe3.png");
        };
    });

    des[i].addEventListener("dragover", (e)=>{
        e.preventDefault();
    });

    des[i].addEventListener("drop", (e)=>{
        let info = e.dataTransfer.getData("text");

        if (des[i].innerText == "Arrastre y suelte la imágenes aquí") {
            des[i].innerHTML= `<img src='${info}' class="divdes" style="flex: 100%;"/>`;
        };
        
        if (info == "./assets/imagenes/rompe2.png") {
            im[0].classList.add("desaparece");

        } else if (info == "./assets/imagenes/rompe1.png") {
            im[1].classList.add("desaparece");

        } else if (info == "./assets/imagenes/rompe3.png") {
            im[2].classList.add("desaparece");
        };
    });
};

reinicio.addEventListener("click", ()=>{
    window.location.reload();
});
