"use strict";

/*
ÖDEV: Mini Alışveriş Sepeti

AMAÇ:
JavaScript operatörlerini uygulamalı olarak öğrenmek ve kullanmak.

GÖREVLER:
1. Üç farklı ürünün adet ve fiyat bilgilerini değişkenlerde tutmak.
2. En az bir değişkeni string olarak tanımlamak ve Number() ile number türüne dönüştürmek.
3. typeof kullanarak değişkenlerin türlerini kontrol etmek.
4. Her ürünün toplam tutarını çarpma operatörüyle hesaplamak.
5. Ürün tutarlarını toplayarak ara toplamı bulmak.
6. Ara toplamın %10'u kadar indirimi hesaplamak.
7. İndirim tutarını ara toplamdan çıkararak ödenecek tutarı bulmak.
8. ++ ve -- operatörleriyle ürün adetlerini artırıp azaltmak.
9. İşlemlerin sonuçlarını console.log() ile ekrana yazdırmak.

NOT:
Kargo hesaplama görevi, henüz koşullar konusu öğrenilmediği için
bu çalışmaya dahil edilmemiştir.
*/

let makarnaAdet = "20"; // String olarak tanımlanan makarna adedi
let makarnaFiyat = 50; // Makarna birim fiyatı: 50

let yagAdet = 5; // Yağ adedi: 5
let yagFiyat = 300; // Yağ birim fiyatı: 300

let cipsAdet = 12; // Cips adedi: 12
let cipsFiyat = 80; // Cips birim fiyatı: 80

// String olan makarna adedini number türüne dönüştür.
makarnaAdet = Number(makarnaAdet);

// Değişkenlerin türlerini kontrol et.
console.log(typeof makarnaFiyat); // Çıktı: number
console.log(typeof makarnaAdet); // Çıktı: number

// Her ürünün toplam tutarını hesapla.
let makarnaTpl = makarnaAdet * makarnaFiyat;
console.log(makarnaTpl); // Çıktı: 1000

let yagTpl = yagFiyat * yagAdet;
console.log(yagTpl); // Çıktı: 1500

let cipsTpl = cipsAdet * cipsFiyat;
console.log(cipsTpl); // Çıktı: 960

// Üç ürünün tutarlarını toplayarak ara toplamı bul.
let urunTpl = yagTpl + makarnaTpl + cipsTpl;
console.log(urunTpl); // Çıktı: 3460

// Ara toplamın %10'u kadar indirim hesapla.
let indirimTutar = urunTpl * 10 / 100;
console.log(indirimTutar); // Çıktı: 346

// İndirimi ara toplamdan çıkar.
console.log(urunTpl - indirimTutar); // Çıktı: 3114

// Ön ek artırma: Önce artırır, sonra yeni değeri yazdırır.
console.log(++cipsAdet); // Çıktı: 13

// Son ek artırma: Önce mevcut değeri yazdırır, sonra artırır.
console.log(cipsAdet++); // Çıktı: 13

// Son ek azaltma: Önce mevcut değeri yazdırır, sonra azaltır.
console.log(yagAdet--); // Çıktı: 5

// Artırma ve azaltma işlemlerinden sonraki değerleri kontrol et.
console.log(cipsAdet); // Çıktı: 14
console.log(yagAdet); // Çıktı: 4
