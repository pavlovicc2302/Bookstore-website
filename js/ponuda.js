functionR1();

function functionR1() {
    var tekst = document.getElementById("ponuda1");
    var tekstDugmeta = document.getElementById("btnRead1");
    if (tekst.style.display === "none") {
        tekst.style.display = "inline";
        tekstDugmeta.innerHTML = "Izadji iz ponude...";
        $("#promoPonuda1").show(3000).css("color", "#660000");
    }
    else {
        tekst.style.display = "none";
        tekstDugmeta.innerHTML = "Pogledaj ponudu...";
        $("#promoPonuda1").hide().css("color", "#660000");
    }

}


functionR2();

function functionR2() {
    var tekst = document.getElementById("ponuda2");
    var tekstDugmeta = document.getElementById("btnRead2");
    if (tekst.style.display === "none") {
        tekst.style.display = "inline";
        tekstDugmeta.innerHTML = "Izadji iz ponude...";
        $("#promoPonuda2").show(3000).css("color", "#660000");
    }
    else {
        tekst.style.display = "none";
        tekstDugmeta.innerHTML = "Pogledaj ponudu...";
        $("#promoPonuda2").hide().css("color", "#660000");
    }

}



functionR3();

function functionR3() {
    var tekst = document.getElementById("ponuda3");
    var tekstDugmeta = document.getElementById("btnRead3");
    if (tekst.style.display === "none") {
        tekst.style.display = "inline";
        tekstDugmeta.innerHTML = "Izadji iz ponude...";
        $("#promoPonuda3").show(3000).css("color", "#660000");
    }
    else {
        tekst.style.display = "none";
        tekstDugmeta.innerHTML = "Pogledaj ponudu...";
        $("#promoPonuda3").hide().css("color", "#660000");
    }

}

// ------------------------------------------------------------------
