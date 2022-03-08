class gempa {

    constructor(lokasi, skala) {
        this.lokasi = lokasi;
        this.skala = skala;

    }

    dampak() {
        let k;
        if (this.skala >= 0 && this.skala <= 2) {
            k = "dampak tidak terasa";
        } else if (this.skala >= 3 && this.skala <= 4) {
            k = "bangunan retak-retak";
        } else if (this.skala >= 5 && this.skala <= 6) {
            k = "bangunan Roboh";
        } else {
            k = "bangunan Roboh dan berpotensi Tsunami";
        }
        document.write(`<tr>
            <td>${this.lokasi}</td>
            <td align='right'>${this.skala} SR</td>
            <td>${k}</td>
            </tr>`);

    }
}
let n1 = new gempa('Indoensia', 8.1);
let n2 = new gempa('Amerika,California', 7.1);
let n3 = new gempa('Sydney', 6);
let n4 = new gempa('India', 1);
let n5 = new gempa('Jepang', 7);
let n6 = new gempa('Korea', 5);
let n7 = new gempa('London', 3);
let n8 = new gempa('San Francisco', 2);
let n9 = new gempa('Rusia', 8);
let n10 = new gempa('ukraina', 11);

n1.dampak();
n2.dampak();
n3.dampak();
n4.dampak();
n5.dampak();
n6.dampak();
n7.dampak();
n8.dampak();
n9.dampak();
n10.dampak();