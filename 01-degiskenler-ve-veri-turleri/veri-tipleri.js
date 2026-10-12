
"use strict";

// 1. String, Number ve Boolean
let ad = "Kübra";
let yas = 24;
let yazilimOgreniyor = true;

console.log("Ad:", ad);
console.log("Yaş:", yas);
console.log("Yazılım öğreniyor mu?", yazilimOgreniyor);

// 2. Null ve Undefined
let secilenProje = null;
let projeAdi;

console.log("Seçilen proje:", secilenProje);
console.log("Proje adı:", projeAdi);

// 3. Typeof ile veri tiplerini kontrol etme
console.log("Ad tipi:", typeof ad);
console.log("Yaş tipi:", typeof yas);
console.log("Yazılım öğreniyor tipi:", typeof yazilimOgreniyor);
console.log("Seçilen proje tipi:", typeof secilenProje);
console.log("Proje adı tipi:", typeof projeAdi);

// 4. String ve Number farkı
console.log(10 + 5);
console.log("10" + 5);

// 5. Template Literal (Şablon dizesi)
console.log(`Benim adım ${ad} ve ${yas} yaşındayım.`);

// 6. Object (Nesne)
let ogrenci = {
    ad: "Kübra",
    yas: 24,
    ogrendigiDil: "JavaScript"
};

console.log("Öğrenci:", ogrenci);
console.log("Öğrencinin adı:", ogrenci.ad);
console.log("Öğrendiği dil:", ogrenci.ogrendigiDil);

// 7. BigInt
let buyukSayi = 123456789012345678901234567890n;

console.log("Büyük sayı:", buyukSayi);
console.log("Büyük sayının tipi:", typeof buyukSayi);

// 8. Symbol
let sembol1 = Symbol("ogrenciId");
let sembol2 = Symbol("ogrenciId");

console.log("Sembol tipi:", typeof sembol1);
console.log("Semboller eşit mi?", sembol1 === sembol2);

// 9. NaN ve typeof null
console.log("NaN tipi:", typeof NaN);
console.log("Null tipi:", typeof null);

// 10. Değişkenin değerini değiştirme
ad = "Yeni isim";
console.log("Yeni ad:", ad);


/*
========================================
UYGULAMADA YAPILANLAR
========================================

1. Değişken oluşturma:
   let kullanarak ad, yas ve yazilimOgreniyor
   değişkenleri oluşturuldu.

2. Temel veri tiplerini kullanma:
   String, Number ve Boolean veri tipleri
   örneklerle uygulandı.

3. Null kullanımı:
   Henüz seçilmemiş projeyi belirtmek için
   secilenProje değişkenine null atandı.

4. Undefined kullanımı:
   Değer atanmayan projeAdi değişkeninin
   başlangıçta undefined olduğu gözlemlendi.

5. Typeof operatörü:
   Değişkenlerin veri tiplerini kontrol etmek
   için typeof operatörü kullanıldı.

6. String ve Number farkı:
   10 + 5 işlemiyle matematiksel toplama,
   "10" + 5 işlemiyle metin birleştirme
   arasındaki fark incelendi.

7. Template Literal:
   Ters tırnak ve ${...} kullanılarak
   değişkenler bir metin içerisine yerleştirildi.

8. Object oluşturma:
   Bir öğrenci nesnesi oluşturuldu.
   Nesneye ad, yaş ve öğrenilen dil özellikleri
   eklendi. Özelliklere nokta (.) ile erişildi.

9. BigInt kullanımı:
   Sonuna n eklenerek büyük bir tam sayı
   oluşturuldu ve veri tipi kontrol edildi.

10. Symbol kullanımı:
    Aynı açıklamayla iki Symbol oluşturuldu.
    İki sembolün birbirinden farklı olduğu
    eşitlik karşılaştırmasıyla kontrol edildi.

11. NaN incelemesi:
    NaN değerinin typeof sonucunun
    "number" olduğu gözlemlendi.

12. Typeof null istisnası:
    null değerinin typeof sonucunun
    "object" olduğu görüldü.

13. Değişkenin değerini değiştirme:
    Daha önce oluşturulan ad değişkenine
    yeni bir değer atandı ve sonuç yazdırıldı.

========================================
*/
