
"use strict";

// 1. ÖDEV:
// selamla adında bir Arrow Function oluştur.
// Parametre olarak isim almalı ve "Merhaba [isim]!" mesajını döndürmeli.
// Fonksiyonu Kübra ismiyle çağır ve sonucu ekrana yazdır.

let selamla = (isim) => "Merhaba " + isim + "!";

console.log(selamla("Kübra"));


// 2. ÖDEV:
// karesi adında bir Arrow Function oluştur.
// Verilen sayının karesini hesaplayıp sonucu döndürmeli.
// Fonksiyonu 5, 8 ve 3 sayılarıyla çağır.

let karesi = sayi => sayi * sayi;

console.log(karesi(5));
console.log(karesi(8));
console.log(karesi(3));


// 3. ÖDEV:
// indirimHesapla adında bir Arrow Function oluştur.
// İki parametre almalı: fiyat ve indirimOrani.
// Önce indirim tutarını hesaplamalı.
// Daha sonra indirim uygulanmış fiyatı return ile döndürmeli.
// 1000 TL ve %20 indirim ile test et.

let indirimHesapla = (fiyat, indirimOrani) => {
    let indirimTutari = fiyat * indirimOrani / 100;
    return fiyat - indirimTutari;
};

console.log(indirimHesapla(1000, 20));


// 4. ÖDEV:
// sayiKontrol adında bir Arrow Function oluştur.
// Verilen sayının çift mi tek mi olduğunu kontrol etmeli.
// Çiftse "Çift sayı", tekse "Tek sayı" metnini return etmeli.
// Fonksiyonu 5 ve 10 sayılarıyla test et.

let sayiKontrol = (sayi) => {
    if (sayi % 2 === 0) {
        return "Çift sayı";
    } else {
        return "Tek sayı";
    }
};

console.log(sayiKontrol(5));
console.log(sayiKontrol(10));


// 4. ÖDEV - ALTERNATİF YÖNTEM:
// Sayının çift olup olmadığını kontrol eden ayrı bir ciftMi fonksiyonu oluştur.
// Bu fonksiyon true veya false döndürmeli.
// Daha sonra sayiKontrol2 fonksiyonunda ciftMi fonksiyonunu kullan.
// Sonucu metin olarak döndür.

let ciftMi = (sayi) => sayi % 2 === 0;

let sayiKontrol2 = (sayi) => {
    if (ciftMi(sayi)) {
        return "Çift sayı";
    } else {
        return "Tek sayı";
    }
};

console.log(sayiKontrol2(5));
console.log(sayiKontrol2(10));


// 5. ÖDEV - RETURN MANTIĞI:
// Birinci fonksiyonda iki sayıyı topla.
// Süslü parantez kullanma.
// JavaScript sonucu otomatik olarak döndürsün (Implicit Return).

let topla = (a, b) => a + b;

console.log(topla(5, 10));


// 5. ÖDEV - AÇIK RETURN:
// İkinci fonksiyonda iki sayıyı topla.
// Süslü parantez kullan ve return ile sonucu açıkça döndür (Explicit Return).

let toplaReturn = (a, b) => {
    return a + b;
};

console.log(toplaReturn(5, 10));


// 5. ÖDEV - RETURN OLMADAN:
// Üçüncü fonksiyonda iki sayıyı topla.
// Süslü parantez kullan ama return yazma.
// Fonksiyonun sonucunun ne olacağını gözlemle.
// Sonuç: undefined

let toplaReturnYok = (a, b) => {
    a + b;
};

console.log(toplaReturnYok(5, 10));
