"use strict";

// ==========================================
// GÖREV 1: selamla
// ==========================================
// selamla adında bir fonksiyon oluştur.
// Fonksiyon bir isim parametresi alsın.
// İsmi kullanarak "Merhaba [isim]!" mesajını return ile döndür.
// Fonksiyonu en az 3 farklı isimle çağır.



function selamla(isim) {
    return "Merhaba " + isim + "!";
}

console.log(selamla("Kübra"));
console.log(selamla("Ayşe"));
console.log(selamla("Kübra"));


// ==========================================
// GÖREV 2: Matematik işlemleri
// ==========================================
// Dört ayrı fonksiyon oluştur:
// 1. topla(a, b) → İki sayıyı toplasın.
// 2. cikar(a, b) → İki sayıyı çıkarsın.
// 3. carp(a, b) → İki sayıyı çarpsın.
// 4. bol(a, b) → İki sayıyı bölsün.
// Her fonksiyon sonucu return ile döndürsün.



function topla(a, b) {
    return a + b;
}

console.log(topla(1, 5));

function cikar(a, b) {
    return a - b;
}

console.log(cikar(1, 5));

function carp(a, b) {
    return a * b;
}

console.log(carp(1, 5));

function bol(a, b) {
    return a / b;
}

console.log(bol(1, 5));


// ==========================================
// GÖREV 3: Varsayılan parametre
// ==========================================
// kullaniciBilgisi adında bir fonksiyon oluştur.
// Fonksiyon isim parametresi alsın.
// Varsayılan isim "Misafir" olsun.
// Kullanıcı isim gönderirse o ismi kullansın.
// Hiçbir isim gönderilmezse "Misafir" kullansın.
// Hoş geldin mesajını return ile döndür.

function kullaniciBilgisi(isim = "Misafir") {
    return "Hoş geldin, " + isim + "!";
}

console.log(kullaniciBilgisi("Kübra"));
console.log(kullaniciBilgisi("Ayşe"));
console.log(kullaniciBilgisi());


// ==========================================
// GÖREV 4: Koşullu fonksiyon
// ==========================================
// sayiyiKontrolEt adında bir fonksiyon oluştur.
// Fonksiyon bir sayi parametresi alsın.
// Sayı 0'dan büyükse "pozitif" döndürsün.
// Sayı 0 ise "sıfırdır" döndürsün.
// Sayı 0'dan küçükse "sayı negatiftir" döndürsün.
// Sonuçları üç farklı sayıyla test et.


function sayiyiKontrolEt(sayi) {
    if (sayi > 0) {
        return "pozitif";
    }
    else if (sayi === 0) {
        return "sıfırdır";
    }
    else {
        return "sayi negatiftir.";
    }
}

console.log(sayiyiKontrolEt(0));
console.log(sayiyiKontrolEt(-10));
console.log(sayiyiKontrolEt(10));


// ==========================================
// GÖREV 5: İndirim hesaplama
// ==========================================
// indirimHesapla adında bir fonksiyon oluştur.
// İki parametre alsın:
// fiyat → Ürünün ilk fiyatı.
// indirimOrani → İndirim yüzdesi.
// Önce indirim tutarını hesapla.
// Daha sonra indirim tutarını ilk fiyattan çıkar.
// İndirimli fiyatı return ile döndür.


function indirimHesapla(fiyat, indirimOrani) {
    let indirimTutari = fiyat * indirimOrani / 100;
    return fiyat - indirimTutari;
}

console.log(indirimHesapla(1000, 30));

