function myFunction() {
    var x = document.getElementById("MenuMol");
    if (x.style.display === "flex") {
        x.style.display = "none";
    } else {
        x.style.display = "flex";
    }
}

function pdf() {
    window.open('./images/CV.pdf')
}


function See() {

    var card = document.querySelectorAll(".card");
    var btn = document.getElementById("work-but")

    for (let i = 0 ; i < card.length ; i++) {
    if (card[i].classList.contains('hidden')) {
        console.log('ok')
        card[i].classList.remove("hidden");
        btn.textContent = 'See less';
    }
    else {
        console.log('ok')
        btn.textContent = 'See more';
        card[i].classList.add("hidden");
    }
}
}

function See2() {

    var card = document.querySelectorAll(".card2");
    var btn = document.getElementById("work-but2")

    for (let i = 0; i < card.length; i++) {
        if (card[i].classList.contains('hidden')) {
            console.log('ok')
            card[i].classList.remove("hidden");
            btn.textContent = 'See less';
        }
        else {
            console.log('ok')
            btn.textContent = 'See more';
            card[i].classList.add("hidden");
        }
    }
}
