
"use strict";

// ==================================================
// 1. WHILE DÖNGÜSÜ: 1'DEN 10'A KADAR SAYILARI YAZDIRMA
// ==================================================

// AMAÇ:
// while döngüsünün bir koşul doğru olduğu sürece
// kodları tekrar tekrar çalıştırdığını öğrenmek.

// Başlangıç değerimiz 1.
let sayi = 1;

// sayi 10'dan küçük veya 10'a eşit olduğu sürece döngü çalışır.
while (sayi <= 10) {

    // O anki sayıyı ekrana yazdırır.
    console.log(sayi);

    // Sayıyı 1 artırır.
    // Bu satır olmazsa sayi sürekli 1 kalır ve döngü bitmez.
    sayi++;
}

// EKRAN ÇIKTISI:
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
//
// ÇALIŞMA SIRASI:
// 1. sayi = 1 olur.
// 2. sayi <= 10 koşulu kontrol edilir.
// 3. Koşul doğruysa sayı yazdırılır.
// 4. sayi++ ile sayı 1 artırılır.
// 5. Koşul yeniden kontrol edilir.
// 6. sayi 11 olduğunda koşul yanlış olur ve döngü biter.


// ==================================================
// 2. FOR DÖNGÜSÜ: 1'DEN 20'YE KADAR ÇİFT SAYILARI BULMA
// ==================================================

// AMAÇ:
// for döngüsünü ve mod alma (%) operatörünü kullanarak
// belirli bir koşula uyan sayıları bulmak.

// sayi2 = 1: Başlangıç değeri.
// sayi2 <= 20: Döngünün devam etme koşulu.
// sayi2++: Her turda sayıyı 1 artırır.

for (let sayi2 = 1; sayi2 <= 20; sayi2++) {

    // Bir sayının 2'ye bölümünden kalan 0 ise sayı çifttir.
    if (sayi2 % 2 === 0) {

        // Yalnızca çift sayılar ekrana yazdırılır.
        console.log(sayi2);
    }
}

// EKRAN ÇIKTISI:
// 2
// 4
// 6
// 8
// 10
// 12
// 14
// 16
// 18
// 20
//
// ÇALIŞMA SIRASI:
// 1. sayi2, 1'den başlar.
// 2. Her sayı için sayi2 % 2 === 0 koşulu kontrol edilir.
// 3. Koşul doğruysa sayı yazdırılır.
// 4. Her turda sayi2 bir artırılır.
// 5. 20'den sonraki 21 değeri koşulu sağlamadığı için döngü biter.


// ==================================================
// 3. FOR DÖNGÜSÜ: 1'DEN 100'E KADAR SAYILARI TOPLAMA
// ==================================================

// AMAÇ:
// Döngü boyunca biriken sonuçları bir değişkende tutmayı öğrenmek.

// toplam değişkeni, sayıların toplamını saklar.
// Başlangıçta toplam 0'dır.
let toplam = 0;

// 1'den 100'e kadar bütün sayılar üzerinde döngü kurulur.
for (let say = 1; say <= 100; say++) {

    // Her turda o anki sayıyı toplamın üzerine ekler.
    toplam = toplam + say;
}

// Döngü bittiğinde biriken toplam ekrana yazdırılır.
console.log(toplam);

// EKRAN ÇIKTISI:
// 5050
//
// ÖRNEK:
// İlk tur: toplam = 0 + 1  -> 1
// İkinci tur: toplam = 1 + 2 -> 3
// Üçüncü tur: toplam = 3 + 3 -> 6
// ...
// Son turda 100 de eklenir ve sonuç 5050 olur.


// ==================================================
// 4. FOR DÖNGÜSÜ: 1'DEN 100'E KADAR ÇİFT SAYILARIN TOPLAMI
// ==================================================

// AMAÇ:
// if koşulunu döngüyle birlikte kullanarak
// yalnızca belirli sayıları toplama işlemine dahil etmek.

// Çift sayıların toplamını tutacak değişken.
let topl = 0;

// 1'den 100'e kadar bütün sayıları kontrol eder.
for (let s = 1; s <= 100; s++) {

    // Sayının 2'ye bölümünden kalan 0 ise çifttir.
    if (s % 2 === 0) {

        // Yalnızca çift sayılar toplama eklenir.
        topl = topl + s;
    }
}

// Çift sayıların toplamını ekrana yazdırır.
console.log(topl);

// EKRAN ÇIKTISI:
// 2550
//
// TOPLANAN SAYILAR:
// 2 + 4 + 6 + 8 + ... + 98 + 100 = 2550
//
// Tek sayılar koşulu sağlamadığı için toplama eklenmez.


// ==================================================
// 5. FOR DÖNGÜSÜ: 1'DEN 100'E KADAR 3'ÜN KATLARININ TOPLAMI
// ==================================================

// AMAÇ:
// Mod alma (%) ve if koşulunu kullanarak
// 3'e tam bölünen sayıları bulup toplamak.

// 3'ün katlarının toplamını tutar.
let orn = 0;

// 1'den 100'e kadar sayıları kontrol eder.
for (let a = 1; a <= 100; a++) {

    // Sayının 3'e bölümünden kalan 0 ise
    // sayı 3'e tam bölünür.
    if (a % 3 === 0) {

        // 3'e tam bölünen sayıyı toplama ekler.
        orn = orn + a;
    }
}

// Bulunan sayıların toplamını ekrana yazdırır.
console.log(orn);

// EKRAN ÇIKTISI:
// 1683
//
// TOPLANAN SAYILAR:
// 3 + 6 + 9 + 12 + ... + 96 + 99 = 1683


// ==================================================
// 6. FOR DÖNGÜSÜ: CONTINUE VE BREAK KULLANIMI
// ==================================================

// AMAÇ:
// continue ile bir turu atlamayı,
// break ile döngüyü tamamen bitirmeyi öğrenmek.

// i değişkeni 1'den başlar ve 10'a kadar ilerleyecek şekilde ayarlanır.
for (let i = 1; i <= 10; i++) {

    // i değeri 5 ise o turu atlar.
    // Alttaki console.log(i) çalışmaz ve sonraki tura geçilir.
    if (i === 5) {
        continue;
    }

    // i değeri 8 ise döngüyü tamamen bitirir.
    if (i === 8) {
        break;
    }

    // Yukarıdaki koşullardan hiçbiri döngüyü atlatmaz veya bitirmezse
    // i değeri ekrana yazdırılır.
    console.log(i);
}

// EKRAN ÇIKTISI:
// 1
// 2
// 3
// 4
// 6
// 7
//
// ÇALIŞMA SIRASI:
// 1. 1, 2, 3 ve 4 ekrana yazdırılır.
// 2. i = 5 olduğunda continue çalışır; 5 yazdırılmaz.
// 3. 6 ve 7 ekrana yazdırılır.
// 4. i = 8 olduğunda break çalışır ve döngü biter.
// 5. 9 ve 10'a hiç ulaşılmaz.
