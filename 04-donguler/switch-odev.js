"use strict";

// AMAÇ:
// switch, case, break ve default yapılarını öğrenmek.
// Belirlediğimiz işlem işaretine göre uygun kodun çalışmasını sağlamak.

// İki sayı tanımlıyoruz.
let sayi1 = 10;
let sayi2 = 5;

// Yapılacak işlemi belirliyoruz.
// "+" işareti toplama işlemini temsil ediyor.
let islem = "+";

// switch, islem değişkeninin değerini kontrol eder.
switch (islem) {

    // islem değeri "+" ise bu bölüm çalışır.
    case ("+"):
        // sayi1 ile sayi2 toplanır ve sonuç konsola yazdırılır.
        console.log(sayi1 + sayi2);

        // İşlem tamamlandığı için switch yapısından çıkar.
        break;

    // Hiçbir case eşleşmezse bu bölüm çalışır.
    default:
        console.log("Geçersiz İşlem");
}

// EKRAN ÇIKTISI:
// 15
//
// ÇALIŞMA SIRASI:
// 1. islem değişkeninin değeri "+" olur.
// 2. switch, case ("+") ile eşleşme bulur.
// 3. 10 + 5 işlemi yapılır.
// 4. console.log() ekrana 15 yazdırır.
// 5. break, switch yapısından çıkılmasını sağlar.
// 6. default çalışmaz çünkü eşleşme bulunmuştur.


// İKİNCİ ÖRNEK: ÇIKARMA İŞLEMİ

// Çıkarma işlemini temsil eden değişkeni tanımlıyoruz.
let cikarma = "-";

// Bu kez switch, cikarma değişkenini kontrol eder.
switch (cikarma) {

    // cikarma değeri "+" olsaydı bu bölüm çalışırdı.
    // Ancak bu bölümde çıkarma işlemi yazılmış.
    // İşlem işareti ile yapılan işlemin uyumlu olması gerekir.
    case ("+"):
        console.log(sayi1 - sayi2);
        break;

    // cikarma değişkeninin değeri "-" olduğu için bu bölüm çalışır.
    case("-"):
        // 10 sayısından 5 çıkarılır ve sonuç konsola yazdırılır.
        console.log(sayi1 - sayi2);
        break;

    // Hiçbir case eşleşmezse bu mesaj yazdırılır.
    default:
        console.log("Geçersiz İşlem");
}

// EKRAN ÇIKTISI:
// 5
//
// ÇALIŞMA SIRASI:
// 1. cikarma değişkeninin değeri "-" olur.
// 2. switch, case ("+") ile eşleşme bulamaz ve bu bölümü atlar.
// 3. case ("-") ile eşleşme bulur.
// 4. 10 - 5 işlemi yapılır.
// 5. console.log() ekrana 5 yazdırır.
// 6. break, switch yapısından çıkar.
// 7. default çalışmaz çünkü eşleşme bulunmuştur.
