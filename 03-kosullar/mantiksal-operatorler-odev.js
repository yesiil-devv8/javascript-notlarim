
"use strict";

// AMAÇ:
// Mantıksal operatörleri (||, &&, !), Truthy ve Falsy değerleri
// ve koşullu ifadeleri kullanarak JavaScript pratiği yapmak.

// ==========================================
// 1. GÖREV: MANTIKSAL OPERATÖRLER
// ==========================================

console.log(true || false);       // Çıktı: true
console.log(true && false);       // Çıktı: false
console.log(!true);               // Çıktı: false
console.log(!false);              // Çıktı: true

console.log(0 || "Merhaba");      // Çıktı: Merhaba
console.log(5 && 10);             // Çıktı: 10
console.log("" || "JavaScript");  // Çıktı: JavaScript
console.log(!0);                  // Çıktı: true
console.log(!!"");                // Çıktı: false
console.log(Boolean("false"));    // Çıktı: true


// ==========================================
// 2. GÖREV: KULLANICI ADI VE ŞİFRE KONTROLÜ
// ==========================================

let kullaniciAdi = "kubra";
let sifre = "js123";

if (kullaniciAdi === "kubra" && sifre === "js123") {
    console.log("Giriş başarılı!");
    // Çıktı: Giriş başarılı!
} else {
    console.log("Kullanıcı adı veya şifre hatalı!");
}

// Test 1: Şifreyi yanlış yap.
sifre = "yanlis";

if (kullaniciAdi === "kubra" && sifre === "js123") {
    console.log("Giriş başarılı!");
} else {
    console.log("Kullanıcı adı veya şifre hatalı!");
    // Çıktı: Kullanıcı adı veya şifre hatalı!
}

// Test 2: Kullanıcı adını yanlış yap.
kullaniciAdi = "ahmet";
sifre = "js123";

if (kullaniciAdi === "kubra" && sifre === "js123") {
    console.log("Giriş başarılı!");
} else {
    console.log("Kullanıcı adı veya şifre hatalı!");
    // Çıktı: Kullanıcı adı veya şifre hatalı!
}


// ==========================================
// 3. GÖREV: BÜTÇE VE STOK KONTROLÜ
// ==========================================

let butce = 500;
let urunFiyati = 350;
let stoktaVar = true;

if (stoktaVar && butce >= urunFiyati) {
    console.log("Ürünü satın alabilirsin.");
    // Çıktı: Ürünü satın alabilirsin.
} else {
    console.log("Ürünü satın alamazsın.");
}

// Test A: Bütçe yetersiz.
butce = 300;

if (stoktaVar && butce >= urunFiyati) {
    console.log("Ürünü satın alabilirsin.");
} else {
    console.log("Ürünü satın alamazsın.");
    // Çıktı: Ürünü satın alamazsın.
}

// Test B: Ürün stokta yok.
butce = 500;
stoktaVar = false;

if (stoktaVar && butce >= urunFiyati) {
    console.log("Ürünü satın alabilirsin.");
} else {
    console.log("Ürünü satın alamazsın.");
    // Çıktı: Ürünü satın alamazsın.
}

// Test C: Bütçe yeterli ve ürün stokta.
butce = 500;
stoktaVar = true;

if (stoktaVar && butce >= urunFiyati) {
    console.log("Ürünü satın alabilirsin.");
    // Çıktı: Ürünü satın alabilirsin.
} else {
    console.log("Ürünü satın alamazsın.");
}


// ==========================================
// 4. GÖREV: TRUTHY VE FALSY DEĞERLER
// ==========================================

let a = 0;
let b = "JavaScript";
let c = "";

console.log(a || b);       // Çıktı: JavaScript
console.log(a && b);       // Çıktı: 0
console.log(b && c);       // Çıktı: "" (boş metin)
console.log(!a);           // Çıktı: true
console.log(!!b);          // Çıktı: true
console.log(Boolean(c));   // Çıktı: false


// ==========================================
// 5. GÖREV: KENDİNİ TEST ET
// ==========================================

// Soru 1: || operatörü hangi durumda sağ taraftaki değeri döndürür?
// Cevap: Sol taraftaki değer falsy ise sağ taraftaki değere geçer.

// Soru 2: && operatörü hangi durumda ilk değeri döndürür?
// Cevap: İlk değer falsy ise doğrudan ilk değeri döndürür.

// Soru 3: "false" metni neden truthy kabul edilir?
// Cevap: Boş olmayan metinler truthy kabul edilir.
// "false" bir metindir, Boolean false değeri değildir.

// Soru 4: 0 neden falsy kabul edilir?
// Cevap: JavaScript'te 0, falsy değerlerden biridir.

// Soru 5: ! ve !! arasındaki fark nedir?
// Cevap: ! değerin Boolean karşılığını tersine çevirir.
// !! değeri Boolean karşılığına dönüştürür.

// Soru 6: Mantıksal operatörler her zaman true veya false mu döndürür?
// Cevap: Hayır. || ve && doğrudan bir değeri döndürebilir.
// Örnek: console.log(5 && 10); // Çıktı: 10
// Örnek: console.log(0 || "Merhaba"); // Çıktı: Merhaba
