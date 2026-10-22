"use strict";

// AMAÇ:
// JavaScript'te tip dönüşümlerini uygulamak.
// String ve Number arasındaki farkı görmek.
// Number(), Boolean() ve typeof kullanmayı öğrenmek.
// Ürün toplamını ve %20 KDV tutarını hesaplamak.


// 1. DEĞİŞKENLERİ TANIMLAMA
// Ürün fiyatını ve miktarını başlangıçta String (metin) olarak tanımlıyoruz.

let urunFiyat = "125";
let urunMiktar = "3";
let urunFytdgr = "125TL";


// 2. STRING BİRLEŞTİRME
// İki değer de String olduğu için + operatörü metinleri birleştirir.

console.log(urunFiyat + urunMiktar); // Çıktı: 1253


// 3. STRING DEĞERLERİ NUMBER TİPİNE DÖNÜŞTÜRME
// Number() ile değerleri sayıya çevirmeyi deniyoruz.
// "125" ve "3" sayıya dönüşür.
// "125TL" geçerli bir sayı metni olmadığı için NaN sonucunu verir.

urunFytdgr = Number(urunFytdgr);
urunFiyat = Number(urunFiyat);
urunMiktar = Number(urunMiktar);


// 4. DÖNÜŞTÜRÜLEN DEĞERLERİ KONSOLDA GÖSTERME

console.log(urunFiyat); // Çıktı: 125
console.log(urunMiktar); // Çıktı: 3


// 5. NUMBER İLE TOPLAMA
// Artık iki değişken de Number olduğu için + matematiksel toplama yapar.

console.log(urunFiyat + urunMiktar); // Çıktı: 128


// 6. ÜRÜN TOPLAM FİYATINI HESAPLAMA
// Ürün fiyatını miktarla çarpıyoruz.

let toplam = urunFiyat * urunMiktar;

console.log(toplam); // Çıktı: 375


// 7. %20 KDV TUTARINI HESAPLAMA
// Toplam fiyatın %20'sini hesaplıyoruz.

let kdvTutari = toplam * (20 / 100);

console.log("KDV tutarı:", kdvTutari); // Çıktı: KDV tutarı: 75


// 8. KDV DAHİL FİYATI HESAPLAMA
// Ürün toplamına KDV tutarını ekliyoruz.

let kdvDahilFiyat = toplam + kdvTutari;

console.log("KDV dahil fiyat:", kdvDahilFiyat);
// Çıktı: KDV dahil fiyat: 450


// 9. BOOLEAN İLE TİP DÖNÜŞÜMÜ
// Boolean() değerleri true veya false sonucuna dönüştürür.

console.log(Boolean(urunFiyat)); // Çıktı: true (125, sıfırdan farklı bir sayı)
console.log(Boolean("0"));      // Çıktı: true (boş olmayan String)
console.log(Boolean(0));        // Çıktı: false (sayısal sıfır)
console.log(Boolean(""));       // Çıktı: false (boş String)
console.log(Boolean("1"));      // Çıktı: true (boş olmayan String)
console.log(Boolean(toplam));   // Çıktı: true (375, sıfırdan farklı bir sayı)
console.log(Boolean());         // Çıktı: false (argüman verilmediği için undefined)


// 10. TYPEOF İLE VERİ TİPİNİ KONTROL ETME
// "125TL" değeri Number() ile dönüştürüldüğünde NaN olur.
// NaN özel bir değerdir ancak JavaScript'teki veri tipi number'dır.

console.log(urunFytdgr);        // Çıktı: NaN
console.log(typeof urunFytdgr); // Çıktı: number
