function kosong1() {
    let frm = document.getElementById("formulir");
    frm.a1.value = "";
}

function kosong2() {
    let frm = document.getElementById("formulir");
    frm.a2.value = "";
}


function kosongAll() {
    let frm = document.getElementById("formulir");
    frm.a1.value = "";
    frm.a2.value = "";
    frm.hasil.value = "";
}

function tambah() {
    let frm = document.getElementById("formulir");
    let a1 = frm.a1.value;
    let a2 = frm.a2.value;
    if (isNaN(a1) || a1 == '') {
        alert("Harap isi data berupa angka")
    } else {
        let hasil1 = a1 + a2;
        frm.hasil.value = hasil1;
    }
}

function kurang() {
    let frm = document.getElementById("formulir");
    let a1 = frm.a1.value;
    let a2 = frm.a2.value;
    if (isNaN(a1) || a1 == '') {
        alert("Harap isi data berupa angka")
    } else {
        let hasil1 = a1 - a2;
        frm.hasil.value = hasil1;
    }
}

function bagi() {
    let frm = document.getElementById("formulir");
    let a1 = frm.a1.value;
    let a2 = frm.a2.value;
    if (isNaN(a1) || a1 == '') {
        alert("Harap isi data berupa angka")
    } else {
        let hasil1 = a1 / a2;
        frm.hasil.value = hasil1;
    }
}

function kali() {
    let frm = document.getElementById("formulir");
    let a1 = frm.a1.value;
    let a2 = frm.a2.value;
    if (isNaN(a1) || a1 == '') {
        alert("Harap isi data berupa angka")
    } else {
        let hasil1 = a1 * a2;
        frm.hasil.value = hasil1;
    }
}