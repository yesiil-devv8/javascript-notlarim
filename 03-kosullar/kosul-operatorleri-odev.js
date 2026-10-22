"use strict";

// AMAÇ:
// if, else if ve else koşul yapılarını öğrenmek.
// Karşılaştırma operatörlerini koşullarda kullanmak.
// Koşullara göre farklı mesajlar yazdırmak.
// === operatörü ile eşitlik kontrolü yapmak.
// Farklı ürün fiyatlarıyla programın sonucunu test etmek.


// 1. DEĞİŞKENLERİ TANIMLAMA
// Alışveriş için ayırdığımız bütçeyi ve ürünün fiyatını belirliyoruz.

let butce = 350;
let urunFiyati = 450;


// 2. IF İLE İLK KOŞULU KONTROL ETME
// Ürün fiyatının bütçeden küçük olup olmadığını kontrol ediyoruz.
// Koşul doğruysa bu blok çalışır.

if (urunFiyati < butce) {
    console.log("Bu ürünü alabilirsin, paran da artar.");
}
// urunFiyati = 450 olduğu için 450 < 350 koşulu false olur.
// Bu nedenle ilk blok çalışmaz.


// 3. ELSE IF İLE İKİNCİ KOŞULU KONTROL ETME
// İlk koşul gerçekleşmediyse ürün fiyatının bütçeye eşit olup olmadığını
// === operatörüyle kontrol ediyoruz.

else if (urunFiyati === butce) {
    console.log("Bu ürünü tam bütçenle alabilirsin.");
}
// 450 === 350 koşulu false olur.
// Bu nedenle ikinci blok da çalışmaz.


// 4. ELSE İLE GERİYE KALAN DURUMU KONTROL ETME
// İlk iki koşul da gerçekleşmediyse else bloğu çalışır.
// Bu örnekte ürün fiyatı bütçeden yüksektir.

else {
    console.log("Bütçen bu ürünü almaya yetmiyor.");
}
// Çıktı: Bütçen bu ürünü almaya yetmiyor.


// 5. FARKLI ÜRÜN FİYATLARIYLA TEST ETME
// urunFiyati değişkenini aşağıdaki değerlerle değiştirerek
// programın farklı koşullarda nasıl çalıştığını gözlemleyebiliriz.

// let urunFiyati = 250;
// Beklenen çıktı: Bu ürünü alabilirsin, paran da artar.

// let urunFiyati = 350;
// Beklenen çıktı: Bu ürünü tam bütçenle alabilirsin.

// let urunFiyati = 450;
// Beklenen çıktı: Bütçen bu ürünü almaya yetmiyor.


// 6. KARŞILAŞTIRMA OPERATÖRLERİNİ ANLAMA
// <  : Küçüktür.
// ===: Değer ve veri türü eşitliğini kontrol eder.
// >  : Büyüktür.

// Örneğimizde bütçe ve ürün fiyatı Number türündedir.
// Bu nedenle eşitlik kontrolünde === kullanmak uygundur.


// 7. IF, ELSE IF VE ELSE ARASINDAKİ FARK
// if: İlk koşulu kontrol eder.
// else if: Önceki koşul gerçekleşmediyse başka bir koşulu kontrol eder.
// else: Önceki koşulların hiçbiri gerçekleşmediyse çalışır.

// else if koşul alır.
// else koşul almaz; bu nedenle else (urunFiyati > butce)
// biçiminde yazmak sözdizimi hatasına neden olur.

`
Başlangıç değerlerimiz:

js
let butce = 350;
let urunFiyati = 450;


Program çalıştırıldığında konsolda şu mesaj görünür:

text
Bütçen bu ürünü almaya yetmiyor.
Bunun nedeni ürün fiyatının bütçeden yüksek olmasıdır. İlk iki koşul false olduğu için else bloğu çalışır.

## 9. BU ÖDEVDE NELER ÖĞRENDİM?

- if ile koşul kontrol etmeyi öğrendim.
- else if ile alternatif bir koşul kontrol etmeyi öğrendim.
- else ile önceki koşullar gerçekleşmediğinde kod çalıştırmayı öğrendim.
- < operatörüyle küçüklük karşılaştırması yapmayı öğrendim.
- === operatörüyle katı eşitlik kontrolünü pekiştirdim.
- Koşul bloklarının süslü parantezlerle {} nasıl yazıldığını gördüm.
- Farklı değerler kullanarak programın sonuçlarını test etmeyi öğrendim.
- Kodun okunabilirliği için yorum satırlarından yararlandım.
`