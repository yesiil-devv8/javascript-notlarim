# JavaScript Veri Tipleri (Data Types)

## 1. Veri tipi nedir?

Veri tipi (Data Type), bir değerin ne tür bir veri olduğunu belirtir. Örneğin bir değer sayı, metin veya doğru/yanlış bilgisi olabilir.

JavaScript'te bir değişken farklı zamanlarda farklı veri tiplerinde değerler tutabilir. Buna **dinamik tipleme (Dynamic Typing)** denir.

```js
"use strict";

let mesaj = "Merhaba";
console.log(mesaj);

mesaj = 123;
console.log(mesaj);

mesaj = true;
console.log(mesaj);
```

Bu kodda `mesaj` değişkeni önce metin, sonra sayı, ardından boolean değer tutar. JavaScript'te bu geçerli bir kullanımdır.

**Önemli:** `let` ile tanımlanan değişkenin değerini değiştirmek, değişkenin kendisini yeniden tanımlamak anlamına gelmez.

JavaScript'te toplam sekiz temel veri tipi vardır:

- `number` — Sayı
- `bigint` — Büyük tam sayı
- `string` — Metin
- `boolean` — Doğru/yanlış
- `null` — Bilinçli olarak boş bırakılan değer
- `undefined` — Değer atanmamış olması
- `symbol` — Benzersiz tanımlayıcı
- `object` — Nesne ve daha karmaşık veri yapıları

İlk yedi tip ilkel (primitive) veri tipleridir. `object` ise nesne tipidir.

---

## 2. Number — Sayı

JavaScript'te `number` veri tipi hem tam sayıları hem de ondalıklı sayıları tutabilir.

```js
let yas = 24;
let fiyat = 149.99;
let sicaklik = -5;

console.log(yas);
console.log(fiyat);
console.log(sicaklik);
```

JavaScript'te normal sayılar için ayrı bir `integer` ve `float` veri tipi yoktur. İkisi de `number` olarak değerlendirilir.

### Sayılarla matematiksel işlemler

```js
let sayi1 = 10;
let sayi2 = 3;

console.log(sayi1 + sayi2); // 13
console.log(sayi1 - sayi2); // 7
console.log(sayi1 * sayi2); // 30
console.log(sayi1 / sayi2); // 3.333...
console.log(sayi1 % sayi2); // 1
console.log(sayi1 ** sayi2); // 1000
```

- `+` : Toplama
- `-` : Çıkarma
- `*` : Çarpma
- `/` : Bölme
- `%` : Kalanı bulma
- `**` : Üs alma

### Özel sayısal değerler

JavaScript'te `number` tipi, normal sayılar dışında bazı özel değerleri de kapsar.

**Infinity**

Sonsuzluğu temsil eder.

```js
console.log(1 / 0); // Infinity
console.log(Infinity); // Infinity
```

**-Infinity**

Negatif sonsuzluğu temsil eder.

```js
console.log(-1 / 0); // -Infinity
```

**NaN**

`NaN`, İngilizce *Not a Number* ifadesinin kısaltmasıdır. Geçersiz bir matematiksel işlem sonucunda ortaya çıkabilir.

```js
console.log("Merhaba" / 2); // NaN
console.log("Merhaba" / 2 + 5); // NaN
```

`NaN` değeri bir `number` değeridir:

```js
console.log(typeof NaN); // "number"
```

**Dikkat:** `NaN`, JavaScript'te ayrı bir veri tipi değildir. `number` tipine ait özel bir değerdir.

---

## 3. BigInt — Büyük tam sayılar

JavaScript'teki `number` tipi, güvenli tam sayı aralığının dışındaki çok büyük tam sayıları hassas biçimde temsil edemez.

Güvenli tam sayı sınırları şöyledir:

```js
Number.MAX_SAFE_INTEGER;  // 9007199254740991
Number.MIN_SAFE_INTEGER;  // -9007199254740991
```

Bu sınırların ötesindeki büyük tam sayılar için `BigInt` kullanılabilir.

Bir sayının sonuna `n` eklenir:

```js
const buyukSayi = 123456789012345678901234567890n;

console.log(buyukSayi);
console.log(typeof buyukSayi); // "bigint"
```

`BigInt` özellikle çok büyük tam sayılarla çalışırken kullanışlıdır.

**Dikkat:** `BigInt` ve `number` değerleri her matematiksel işlemde doğrudan birlikte kullanılamaz.

```js
let sayi = 10;
let buyukTamSayi = 20n;

// console.log(sayi + buyukTamSayi); // TypeError
console.log(BigInt(sayi) + buyukTamSayi); // 30n
```

`BigInt(sayi)` ifadesi, `sayi` değerini `BigInt` tipine dönüştürür.

---

## 4. String — Metin

`string`, metinsel verileri tutmak için kullanılır. Harfler, kelimeler, cümleler ve rakam gibi görünen metinler bu tipte olabilir.

JavaScript'te üç farklı tırnak kullanımı vardır:

### Tek tırnak

```js
let isim = 'Kübra';
```

### Çift tırnak

```js
let sehir = "Kütahya";
```

Tek tırnak ile çift tırnak arasında temel kullanım açısından fark yoktur.

### Ters tırnak (Backticks)

```js
let mesaj = `Merhaba`;
```

Ters tırnakların önemli bir avantajı, metin içerisine değişken veya ifade yerleştirebilmektir.

### Template literals — Şablon dizeleri

Ters tırnakla yazılan metinlerde `${...}` kullanılarak değişkenlerin ve ifadelerin sonuçları metne eklenebilir.

```js
let isim = "Kübra";
let yas = 24;

console.log(`Benim adım ${isim}.`);
console.log(`Yaşım ${yas}.`);
console.log(`Bir sonraki yıl ${yas + 1} yaşında olacağım.`);
```

Çıktı:

```text
Benim adım Kübra.
Yaşım 24.
Bir sonraki yıl 25 yaşında olacağım.
```

`${...}` içerisinde yalnızca değişken değil, bir JavaScript ifadesi de kullanılabilir.

**Dikkat:** Değişken yerleştirme özelliği tek veya çift tırnakta aynı şekilde çalışmaz.

```js
let isim = "Kübra";

console.log("Merhaba ${isim}"); // Merhaba ${isim}
console.log(`Merhaba ${isim}`); // Merhaba Kübra
```

### String ile number arasındaki fark

Bir sayı ile sayı gibi görünen bir metin aynı şey değildir.

```js
let sayi = 24;
let metin = "24";

console.log(typeof sayi);  // "number"
console.log(typeof metin); // "string"
```

Bu fark işlemlerde önemlidir:

```js
console.log(10 + 5);    // 15
console.log("10" + 5);  // "105"
```

İlk örnekte toplama yapılır. İkinci örnekte `+` operatörü metinleri birleştirir.

JavaScript'te tek bir karakteri tutmak için ayrıca `char` adında bir veri tipi bulunmaz. Tek karakter de `string` tipindedir.

```js
let harf = "A";

console.log(typeof harf); // "string"
```

---

## 5. Boolean — Doğru ve yanlış

`boolean` veri tipi yalnızca iki değer alır:

- `true` — Doğru
- `false` — Yanlış

Özellikle koşullarda, karşılaştırmalarda ve kontrol işlemlerinde kullanılır.

```js
let girisYapildi = true;
let hesapAktif = false;

console.log(girisYapildi);
console.log(hesapAktif);
```

### Karşılaştırma sonucunda boolean oluşması

Karşılaştırma işlemlerinin sonucu `true` veya `false` olur.

```js
let sonuc1 = 10 > 5;
let sonuc2 = 10 < 5;
let sonuc3 = 10 === 10;

console.log(sonuc1); // true
console.log(sonuc2); // false
console.log(sonuc3); // true
```

Burada:

- `>` : Büyüktür.
- `<` : Küçüktür.
- `===` : Hem değer hem de veri tipi bakımından eşittir.

Örneğin:

```js
console.log(5 === 5);   // true
console.log(5 === "5"); // false
```

İkinci karşılaştırma `false` döndürür; çünkü biri `number`, diğeri `string` tipindedir.

---

## 6. Null — Bilinçli olarak boş değer

`null`, bir değişkende bilinçli olarak boş veya bilinmeyen bir değer bulunduğunu belirtmek için kullanılabilir.

```js
let secilenKullanici = null;

console.log(secilenKullanici); // null
```

Örneğin henüz bir kullanıcı seçilmediyse `secilenKullanici` değişkeninin `null` olması anlamlıdır.

`null`, JavaScript'te kendi başına özel bir değerdir.

### Null ve undefined arasındaki fark

Bu iki değer sıkça karıştırılır.

- `null`: Değerin boş olduğu bilinçli olarak belirtilmiştir.
- `undefined`: Değişkene henüz bir değer atanmamıştır veya değer mevcut değildir.

Örnek:

```js
let kullanici = null;
let yas;

console.log(kullanici); // null
console.log(yas);       // undefined
```

İlk değişkene açıkça `null` atanmıştır. İkinci değişkene ise herhangi bir değer atanmamıştır.

**Önemli:** `null`, “değeri bilinçli olarak boş” anlamında kullanılır; `undefined` ise çoğunlukla “değer atanmamış” durumunu gösterir.

---

## 7. Undefined — Değer atanmamış olması

`undefined`, bir değişkenin değerinin henüz belirlenmediğini ifade eder.

Bir değişken tanımlanıp değer atanmadan bırakılırsa varsayılan değeri `undefined` olur.

```js
let kullaniciAdi;

console.log(kullaniciAdi); // undefined
console.log(typeof kullaniciAdi); // "undefined"
```

Daha sonra değişkene değer atanabilir:

```js
let kullaniciAdi;

kullaniciAdi = "Kübra";

console.log(kullaniciAdi); // Kübra
```

### Undefined değerini elle atamak

Teknik olarak mümkündür:

```js
let sonuc = 100;

sonuc = undefined;

console.log(sonuc); // undefined
```

Ancak bir değişkeni bilinçli olarak boşaltmak istediğinde çoğu durumda `null` kullanmak daha anlaşılırdır.

```js
let secilenUrun = "Kalem";

secilenUrun = null; // Artık seçili ürün yok.
```

**Akılda tut:**

```js
let a;
let b = null;

console.log(a); // undefined
console.log(b); // null
```

---

## 8. Object — Nesne

`object`, birden fazla ilişkili bilgiyi bir arada tutabilen veri yapıları oluşturmak için kullanılır.

Örneğin bir kullanıcı hakkında ad, yaş ve şehir bilgilerini tek bir nesnede saklayabiliriz.

```js
let kullanici = {
    isim: "Kübra",
    yas: 24,
    sehir: "Kütahya"
};

console.log(kullanici);
console.log(kullanici.isim); // Kübra
console.log(kullanici.yas);  // 24
```

Burada:

- `kullanici`, nesnenin değişken adıdır.
- `isim`, `yas` ve `sehir` özellik (property) adlarıdır.
- `"Kübra"`, `24` ve `"Kütahya"` bu özelliklerin değerleridir.

Nesneler, tek bir değer yerine ilişkili birden fazla bilgiyi düzenli şekilde saklamak için kullanışlıdır.

### Primitive ve Object arasındaki temel fark

İlkel tipler (`primitive`) tek bir değer temsil eder:

```js
let isim = "Kübra";
let yas = 24;
let aktif = true;
```

Nesne ise özellikler aracılığıyla birden fazla bilgiyi bir arada tutabilir:

```js
let kullanici = {
    isim: "Kübra",
    yas: 24
};
```

JavaScript'te diziler (arrays) ve fonksiyonlar (functions) da nesne yapısıyla ilişkili özel yapılardır. `typeof` operatörünün fonksiyonlar için verdiği sonuç ise ayrıca ele alınacaktır.

---

## 9. Symbol — Benzersiz tanımlayıcı

`symbol`, benzersiz değerler oluşturmak için kullanılan ilkel bir veri tipidir.

```js
let sembol1 = Symbol("id");
let sembol2 = Symbol("id");

console.log(sembol1 === sembol2); // false
console.log(typeof sembol1);      // "symbol"
```

İki sembol aynı açıklamayla (`"id"`) oluşturulsa bile birbirinden farklıdır.

Symbol özellikle nesnelerde benzersiz özellik anahtarları oluşturmak gibi durumlarda kullanılabilir.

Bu aşamada `Symbol` tipinin varlığını ve amacını bilmek yeterlidir. Ayrıntıları nesneler konusunu işlerken öğrenmek daha kolay olacaktır.

---

## 10. Typeof — Veri tipini öğrenme

`typeof`, bir değerin hangi veri tipinde olduğunu anlamak için kullanılan bir operatördür.

İki şekilde yazılabilir:

```js
typeof degisken
typeof(degisken)
```

Her iki kullanım da aynı sonucu verir.

Örnekler:

```js
console.log(typeof 24);           // "number"
console.log(typeof 3.14);         // "number"
console.log(typeof "Kübra");      // "string"
console.log(typeof true);         // "boolean"
console.log(typeof undefined);    // "undefined"
console.log(typeof 123n);         // "bigint"
console.log(typeof Symbol("id")); // "symbol"
console.log(typeof {});           // "object"
```

### Typeof neden tırnak içinde sonuç verir?

`typeof` sonucunda `"number"`, `"string"` veya `"boolean"` gibi bir metin döner.

```js
let yas = 24;

console.log(typeof yas); // "number"
```

Buradaki `"number"` bir `string` değeridir; değişkenin kendisi değildir.

```js
console.log(typeof typeof yas); // "string"
```

Çünkü ilk `typeof` işlemi `"number"` metnini döndürür. İkinci `typeof` ise bu metnin veri tipini kontrol eder.

### Önemli istisna: typeof null

```js
console.log(typeof null); // "object"
```

Bu sonuç ilk başta şaşırtıcı gelebilir. Çünkü `null`, nesne değildir; kendine özgü bir değerdir.

`typeof null` sonucunun `"object"` olması JavaScript'in geçmişten gelen bir özelliğidir. Eski kodlarla uyumluluğu korumak için bu davranış devam eder.

**Sınavlık bilgi:** `typeof null` sonucu `"object"` olur; ancak bu, `null` değerinin gerçekten nesne olduğu anlamına gelmez.

### Fonksiyonlarda typeof

```js
function selamla() {
    console.log("Merhaba");
}

console.log(typeof selamla); // "function"
```

Fonksiyonlar JavaScript'te nesne yapısıyla ilişkili olsa da `typeof` sonucu `"function"` olarak döner.

---

## 11. Konunun genel özeti

| Veri tipi | Ne için kullanılır? | Örnek |
|---|---|---|
| `number` | Sayılar | `24`, `3.14` |
| `bigint` | Çok büyük tam sayılar | `123n` |
| `string` | Metin | `"Merhaba"` |
| `boolean` | Doğru/yanlış | `true`, `false` |
| `null` | Bilinçli olarak boş değer | `null` |
| `undefined` | Değer atanmamış olması | `let x;` |
| `symbol` | Benzersiz tanımlayıcı | `Symbol("id")` |
| `object` | Nesneler ve karmaşık veri yapıları | `{ isim: "Kübra" }` |

### Özellikle hatırlanması gerekenler

1. JavaScript dinamik tipli bir dildir; değişkenin tuttuğu değerin tipi zaman içinde değişebilir.
2. `typeof`, veri tipini metin olarak döndürür.
3. `typeof null` sonucu `"object"` olsa da `null` nesne değildir.
4. `NaN`, ayrı bir veri tipi değil, `number` tipine ait özel bir değerdir.
5. `string` ile `number` aynı şey değildir. `"24"` metin, `24` sayıdır.
6. `${...}` ile değişken veya ifade yerleştirmek için ters tırnak kullanılır.
7. `null` genellikle bilinçli boşluğu, `undefined` ise atanmamış değeri belirtir.
8. `BigInt` değerleri tam sayının sonuna `n` eklenerek yazılabilir.
9. Tek karakter için ayrı bir `char` veri tipi yoktur; tek karakter de `string` tipindedir.

---

## 12. İngilizce – Türkçe teknik terimler

| İngilizce Terim | Türkçe Karşılığı | Açıklama |
|---|---|---|
| Data Type | Veri tipi | Bir değerin hangi türde veri olduğunu belirtir. |
| Dynamic Typing | Dinamik tipleme | Bir değişkenin farklı zamanlarda farklı veri tiplerinde değerler tutabilmesidir. |
| Primitive Type | İlkel veri tipi | Tek bir temel değeri temsil eden veri tipidir. |
| Number | Sayı | Tam ve ondalıklı sayıları temsil eder. |
| Integer | Tam sayı | Kesirli kısmı olmayan sayıdır. |
| Floating-Point Number | Kayan noktalı sayı | Ondalıklı sayıları temsil etmek için kullanılan sayı biçimidir. |
| BigInt | Büyük tam sayı | Güvenli tam sayı aralığının dışındaki büyük tam sayılarla çalışmayı sağlar. |
| String | Metin / karakter dizisi | Harf, kelime, cümle ve metinsel verileri tutar. |
| Character | Karakter | Tek bir harf veya semboldür. JavaScript'te ayrı bir `char` tipi yoktur. |
| Boolean | Mantıksal veri tipi | Yalnızca `true` veya `false` değerlerini alır. |
| True | Doğru | Mantıksal olarak doğru olan değerdir. |
| False | Yanlış | Mantıksal olarak yanlış olan değerdir. |
| Null | Bilinçli boş değer | Bir değerin bilinçli olarak boş olduğunu belirtir. |
| Undefined | Değer atanmamış | Bir değişkene henüz değer atanmadığında görülebilir. |
| Object | Nesne | Birden fazla ilişkili bilgiyi özellikler aracılığıyla bir arada tutabilir. |
| Property | Özellik | Bir nesne içinde bulunan adlandırılmış bilgi veya değerdir. |
| Symbol | Sembol | Benzersiz değerler oluşturmak için kullanılan ilkel veri tipidir. |
| Operator | Operatör | Değerler üzerinde işlem yapan sembol veya anahtar sözcüktür. |
| Typeof | Tip sorgulama operatörü | Bir değerin veri tipini metin olarak döndürür. |
| Expression | İfade | Bir değer üreten veya hesaplanan JavaScript kodu parçasıdır. |
| Template Literal | Şablon dizesi | Ters tırnakla yazılır ve metin içine değişken veya ifade yerleştirmeyi sağlar. |
| Backticks | Ters tırnaklar | Şablon dizeleri oluşturmak için kullanılan `` ` `` karakterleridir. |
| String Interpolation | Metin içine değer yerleştirme | `${...}` kullanarak bir değişkeni veya ifadeyi metne eklemektir. |
| Assignment | Atama | Bir değişkene değer vermektir. |
| Comparison | Karşılaştırma | İki değeri karşılaştırarak sonuç üretir. |
| Concatenation | Birleştirme | Metinleri birbirine ekleme işlemidir. |
| Infinity | Sonsuzluk | JavaScript'te pozitif sonsuzluğu temsil eden özel sayısal değerdir. |
| -Infinity | Negatif sonsuzluk | Negatif yöndeki sonsuzluğu temsil eder. |
| NaN (Not a Number) | Sayı değil | Geçersiz sayısal işlemlerde ortaya çıkabilen özel bir `number` değeridir. |
| Safe Integer | Güvenli tam sayı | JavaScript'in `number` tipiyle güvenilir biçimde temsil edebildiği tam sayı aralığındaki değerdir. |
| Unique | Benzersiz | Başka bir değerle aynı olmayan, kendine özgü anlamına gelir. |
| Value | Değer | Bir değişkende tutulan veya bir ifade tarafından üretilen bilgidir. |
| Variable | Değişken | Bir değeri tutmak için kullanılan isimlendirilmiş alandır. |
| Function | Fonksiyon | Belirli bir işi gerçekleştirmek üzere tanımlanan kod bloğudur. |
| Array | Dizi | Birden fazla değeri sıralı şekilde tutan veri yapısıdır. |
| Return Value | Dönüş değeri | Bir fonksiyonun veya ifadenin geri verdiği değerdir. |
| Type Conversion | Tip dönüşümü | Bir değerin başka bir veri tipine dönüştürülmesidir. |
| Error | Hata | Kod çalışırken veya değerlendirilirken ortaya çıkan problemdir. |
| Compatibility | Uyumluluk | Farklı sürüm veya sistemlerle birlikte çalışabilme durumudur. |