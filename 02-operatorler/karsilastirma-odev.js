"use strict";

// AMAÇ:
// Karşılaştırma operatörlerini öğrenmek.
// Sayıları büyüklük ve küçüklük açısından karşılaştırmak.
// ==, === ve !== operatörleri arasındaki farkı görmek.
// String ve Number değerlerinin karşılaştırılmasını anlamak.
// String değerlerin kendi aralarında nasıl karşılaştırıldığını görmek.


// 1. DEĞİŞKENLERİ TANIMLAMA
// Ürün fiyatlarını ve alışveriş bütçesini belirliyoruz.

let makarnaFiyat = 50;
let yagFiyat = 300;
let cipsFiyat = 80;
let butce = 350;


// 2. BÜYÜKLÜK VE KÜÇÜKLÜK KARŞILAŞTIRMALARI
// >  : Büyüktür.
// <  : Küçüktür.
// >= : Büyük veya eşittir.
// <= : Küçük veya eşittir.

console.log(makarnaFiyat > yagFiyat); 
// Çıktı: false

console.log(cipsFiyat < makarnaFiyat); 
// Çıktı: false

console.log(yagFiyat >= butce); 
// Çıktı: false

console.log(makarnaFiyat <= butce); 
// Çıktı: true


// 3. == OPERATÖRÜ İLE EŞİTLİK KONTROLÜ
// == karşılaştırma sırasında gerekirse veri türü dönüşümü yapar.

console.log(50 == "50"); 
// Çıktı: true


// 4. === OPERATÖRÜ İLE KATI EŞİTLİK KONTROLÜ
// === hem değeri hem de veri türünü karşılaştırır.

console.log(50 === "50"); 
// Çıktı: false


// 5. !== OPERATÖRÜ İLE KATI EŞİTSİZLİK KONTROLÜ
// !== değer veya veri türü farklı olduğunda true sonucunu verir.

console.log(300 !== "300"); 
// Çıktı: true


// 6. STRING DEĞERLERİ KARŞILAŞTIRMA
// String değerler karşılaştırılırken karakterlerin
// Unicode sıralama değerleri dikkate alınır.

console.log("3" > "21"); 
// Çıktı: true
// İlk karakterler karşılaştırılır: "3", "2" karakterinden büyüktür.


// 7. NUMBER DEĞERLERİ KARŞILAŞTIRMA
// Number değerleri sayısal büyüklüklerine göre karşılaştırılır.

console.log(3 > 21); 
// Çıktı: false
