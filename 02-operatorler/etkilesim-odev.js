"use strict";

// AMAÇ:
// prompt() ile kullanıcıdan bilgi almak.
// console.log() ile konsola çıktı yazdırmak.
// alert() ile ekranda bilgilendirme mesajı göstermek.
// confirm() ile kullanıcıdan onay almak.
// typeof ile bir değişkenin veri türünü kontrol etmek.


// 1. KULLANICIDAN İSİM ALMA

let ad = prompt("Adın ne?", "");

// Konsol çıktısı: merhaba [girilen isim]
console.log("merhaba", ad);

// Ekran çıktısı: merhaba [girilen isim]
alert("merhaba " + ad);


// 2. KULLANICIDAN YAŞ ALMA VE VERİ TÜRÜNÜ KONTROL ETME

let yas = prompt("kaç yaşındasın", "");

// Konsol çıktısı: string
console.log(typeof yas);


// 3. KULLANICIDAN ONAY ALMA

let cevap = confirm("js öğrenmeye devam etmek istiyor musun ?");

// Konsol çıktısı:
// Onayla / Tamam seçilirse: true
// İptal seçilirse: false
console.log(cevap);


// 4. BİLGİLENDİRME MESAJI GÖSTERME

// Ekran çıktısı: bu bir bilgilendirme mesajıdır
alert("bu bir bilgilendirme mesajıdır");

