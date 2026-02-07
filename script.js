function igenValasz() {

    document.getElementById("kerdes-doboz").style.display = "none";
    
    document.getElementById("valasz-doboz").style.display = "block";
    
    document.body.style.backgroundColor = "#ffcccc";
}

function nemValasz() {
    alert("Hoppá! Ez a gomb nem működik... Próbáld a másikat! 😉");
}

function igenValasz() {
    
    document.getElementById("kerdes-doboz").style.display = "none";
    document.getElementById("valasz-doboz").style.display = "block";
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            let sziv = document.createElement("div");
            sziv.innerHTML = "❤️";
            sziv.classList.add("sziv-effekt");
            
            sziv.style.left = Math.random() * 100 + "vw";
            sziv.style.animationDuration = (Math.random() * 2 + 3) + "s";
            sziv.style.fontSize = (Math.random() * 20 + 10) + "px";
            
            document.body.appendChild(sziv);

            setTimeout(() => {
                sziv.remove();
            }, 5000);
        }, i * 100);
    }
}

function igenValasz() {
    document.getElementById("kerdes-doboz").style.display = "none";
    document.getElementById("valasz-doboz").style.display = "block";

    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            let elem = document.createElement("div");
            elem.classList.add("sziv-effekt");
            
            if (Math.random() > 0.3) {
                elem.innerHTML = "❤️";
                elem.style.fontSize = (Math.random() * 20 + 15) + "px";
            } else {
                let miniStitch = document.createElement("img");
                miniStitch.src = "stitch.png";
                elem.appendChild(miniStitch);
            }

            elem.style.left = Math.random() * 100 + "vw";
            elem.style.animationDuration = (Math.random() * 2 + 3) + "s";
            document.body.appendChild(elem);

            setTimeout(() => { elem.remove(); }, 5000);
        }, i * 150);
    }
}

function igenValasz() {
    const kerdes = document.getElementById("kerdes-doboz");
    const valasz = document.getElementById("valasz-doboz");

    // 1. Kérdés eltüntetése
    kerdes.classList.add("elhalvanyul");

    setTimeout(() => {
        kerdes.style.display = "none";
        
        // 2. Válasz előkészítése
        valasz.style.display = "block"; 
        
        // Kell egy pici szünet, hogy a böngésző "észrevegye" a display váltást
        setTimeout(() => {
            valasz.classList.add("lathato");
            
            // Itt hívd meg a szívecskés/Stitches függvényedet!
            if (typeof inditsEffekteket === "function") {
                inditsEffekteket();
            }
        }, 50);
    }, 600);
}

function igenValasz() {
    const kerdes = document.getElementById("kerdes-doboz");
    const valasz = document.getElementById("valasz-doboz");

    // 1. Kérdés elhalványítása
    kerdes.classList.add("elhalvanyul");

    setTimeout(() => {
        kerdes.style.display = "none";
        valasz.style.display = "block"; 
        
        setTimeout(() => {
            valasz.classList.add("lathato");

            // --- Itt indul a Szív és Saját kép effekt ---
            for (let i = 0; i < 50; i++) {
                setTimeout(() => {
                    let elem = document.createElement("div");
                    elem.classList.add("sziv-effekt");
                    
                    if (Math.random() > 0.3) {
                        elem.innerHTML = "❤️";
                        elem.style.fontSize = (Math.random() * 20 + 15) + "px";
                    } else {
                        let miniKep = document.createElement("img");
                        miniKep.src = "sajat_keped_neve.jpg"; // Ide írd a saját képed nevét!
                        elem.appendChild(miniKep);
                    }

                    elem.style.left = Math.random() * 100 + "vw";
                    elem.style.animationDuration = (Math.random() * 2 + 3) + "s";
                    document.body.appendChild(elem);

                    setTimeout(() => { elem.remove(); }, 5000);
                }, i * 150);
            }
            // --- Effekt vége ---

        }, 50);
    }, 600);
}