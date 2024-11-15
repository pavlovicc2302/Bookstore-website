function functionRegistracija() {
    let ime = document.querySelector('#ime').value;
    let prezime = document.querySelector('#prezime').value;
    let adresa = document.querySelector('#adresa').value;
    let telefon = document.querySelector('#telefon').value;
    let email = document.querySelector('#email').value;
    let checkBox = document.querySelector('#checkBox').checked;
    let placanje2 = "";

    if (ime === "") {
        alert("Pogrešan unos imena!");
        return false;
    } else if (prezime === "") {
        alert("Pogrešan unos prezimena!");
        return false;
    }
    else if (adresa === "") {
        alert("Pogresan unos adrese!");
        return false;
    }
    else if (telefon === "" || telefon.length < 9) {
        alert("Pogresan unos broja telefona!");
        return false;
    }
    else if (email === "" || !email.includes('@')) {
        alert("Pogrešan unos! Unesi ispravan email!");
        return false;
    }
    else if (document.getElementById('pouzece').checked === false && document.getElementById('mastercard').checked === false
        && document.getElementById('dinacard').checked === false) {
        alert("Morate da odaberete način plaćanja!");
        return false;
    }
    else {
        if (document.getElementById('pouzece').checked) {
            placanje2 = document.getElementById('pouzece').value;
        }
        else if (document.getElementById('mastercard').checked) {
            placanje2 = document.getElementById('mastercard').value;
        }
        else {
            placanje2 = document.getElementById('dinacard').value;
        }
        if (checkBox === true) {
            checkBox = "Da";
        }
        else {
            checkBox = "Ne";
        }

        let tekst = "Vasi podaci: \nIme:  " + ime + "\nPrezime:  " + prezime + "\nAdresa:  " + adresa + "\nEmail:  " + email + "\nTelefon:  " + telefon + "\nNacin placanja  " + placanje2 + "\nPrimanje ponuda na mail:  " + checkBox + "\n" + "\nDa li želite da potvrdite svoju registraciju?";


        if (confirm(tekst) === true)
            alert("Vaša registracija je uspešno evidentirana");
        else {
            alert("Vaša registracija nije evidentirana");
        }
    }
}


function functionReset() {
    let ime = document.getElementById('#ime').value;
    let prezime = document.getElementById('#prezime').value;
    let adresa = document.getElementById('#adresa').value;
    let telefon = document.getElementById('#telefon').value;
    let email = document.getElementById('#email').value;
    let checkBox = document.getElementById('#checkBox').checked;

    if (ime != null) {
        ime.innerHTML = "";
    }
    if (prezime != null) {
        prezime.innerHTML = "";
    }
    if (adresa != null) {
        adresa.innerHTML = "";
    }
    if (telefon != null) {
        telefon.innerHTML = "";
    }
    if (email != null) {
        email.innerHTML = "";
    }
    if (getElementById('pouzece').checked == true) {
        getElementById('pouzece').checked == false;
    }
    if (getElementById('mastercard').checked == true) {
        getElementById('mastercard').checked == false;
    }
    if (getElementById('dinacard').checked == true) {
        getElementById('dinacard').checked == false;
    }

    if (checkBox == true) {
        getElementById('#checkBox').checked == false;
    }
}

$(".poljaForme").on("focus blur", function (event) {
    if (event.type == "focus") {
        $(".poljaForme:focus").css("border", "3px solid red");
    } else {
        $(this).css("border", "1px solid green");
    }
})

