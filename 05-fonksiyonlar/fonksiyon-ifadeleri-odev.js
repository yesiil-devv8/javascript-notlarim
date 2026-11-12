"use strict";

// GÖREV 1:
// Function Expression kullanarak selamla adında bir fonksiyon oluştur.
// isim parametresi alsın ve "Merhaba [isim]!" şeklinde bir metin döndürsün.
// Fonksiyonu üç farklı isimle çağır.

// SENİN KODUN:
let selamla = function (isim) {
    return "merhaba " + isim + "!"
};

console.log(selamla("Kübra"));


// GÖREV 2:
// Function Expression kullanarak iki sayı toplayan topla fonksiyonu oluştur.
// Fonksiyonun kendisini yeniTopla adında başka bir değişkene kopyala.
// Her iki fonksiyonu da 5 ve 10 değerleriyle çağır.

// SENİN KODUN:
let topla = function (a, b) {
    return a + b;
};

// Fonksiyonun kendisini kopyalıyoruz.
let yeniTopla = topla;

// İki fonksiyonu da çağırıyoruz.
console.log(topla(5, 10));
console.log(yeniTopla(5, 10));


// GÖREV 3:
// mesajGoster adında anonim bir Function Expression oluştur.
// Fonksiyon çalıştığında alert() ile "Selam" mesajı göstersin.
// Ardından fonksiyonu çağır.

// SENİN KODUN:
let mesajGoster = function () {
    alert("selam");
};

mesajGoster();


// GÖREV 4:
// merhaba adında bir Function Declaration oluştur.
// Fonksiyon alert() ile "Merhaba" mesajı göstersin.
// fonksiyonCalistir adında bir fonksiyon oluştur.
// Bu fonksiyon parametre olarak başka bir fonksiyon alsın ve onu çağırsın.
// merhaba fonksiyonunu callback olarak gönder.

// SENİN KODUN:
function merhaba() {
    alert("Merhaba");
}

function fonksiyonCalistir(gönder) {
    gönder();
}

fonksiyonCalistir(merhaba);


// GÖREV 5:
// islemYap adında bir fonksiyon oluştur.
// Bu fonksiyon parametre olarak başka bir fonksiyon alsın ve onu çalıştırsın.
// islemYap fonksiyonunu çağırırken içine anonim bir fonksiyon gönder.
// Gönderdiğin anonim fonksiyon alert() ile bir mesaj göstersin.


function islemYap(callback) {
    callback();
}

islemYap(function () {
    alert("İşlem başarıyla tamamlandı!");
});
