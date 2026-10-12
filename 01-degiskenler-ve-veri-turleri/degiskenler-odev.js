/*

1. Yönetici adını tanımla ve bir değer ata.
2. Yönetici yaşını tanımla ve değerini ata.
3. Şirket adını tanımla ve bir değer ata.
4. `mesaj` değişkenini oluştur ve yönetici adının değerini bu değişkene aktar.
5. Konsola şirket adını ve tanımladığın değeri yazdır.
6. Konsola yönetici yaşını ve tanımladığın yaş değerini yazdır.
7. `ornekSabit` adında bir sabit oluştur, bir değer ata ve konsola yazdır.

*/ 

"use strict";

let yoneticiAdi = "kübra";
let yoneticiYasi;
yoneticiYasi = 24;
let sirketAdi = "Ydev";

let mesaj = yoneticiAdi;

alert (mesaj);

console.log("Şirket adı:", sirketAdi);
console.log("Yönetici Yaşı:", yoneticiYasi);

const ornekSabit = 2026;
console.log(ornekSabit);

/*

NOT: let yoneticiYasi; ile değişkeni tanımlayıp sonraki 
satırda yoneticiYasi = 24; 
diyerek değer ataman doğru. İki işlemi ayrı 
yapabildiğini öğrenmiş oldun.

ornekSabit için 2026 değerini seçmen de uygun. 
Ancak const kullanmanın asıl özelliği, aynı değişkene
yeniden değer atayamamandır. 

*/