# JavaScript Tip Dönüşümleri 2.6 (Type Conversions)

Kaynak: [JavaScript.info — Type Conversions](https://tr.javascript.info/type-conversions)

## 1. Tip dönüşümü nedir?

Tip dönüşümü (Type Conversion), bir değerin veri tipinin başka bir veri tipine dönüştürülmesidir.

JavaScript'te bir değer `string`, `number` veya `boolean` gibi farklı veri tiplerine dönüştürülebilir.

Örneğin:

```js
let yas = "24";

console.log(typeof yas); // "string"

yas = Number(yas);

console.log(yas);        // 24
console.log(typeof yas); // "number"
```

İlk durumda `yas`, `"24"` metnini tutar. `Number()` ile sayı dönüşümü yapıldıktan sonra aynı değişken `24` sayısını tutar.

JavaScript'te tip dönüşümü iki şekilde gerçekleşebilir:

- **Açık dönüşüm (Explicit Conversion):** Dönüşümü programcı kendisi yapar. Örneğin `Number("24")`.
- **Otomatik dönüşüm (Implicit Conversion):** JavaScript, yapılan işleme göre değerleri otomatik olarak dönüştürür. Örneğin `"6" / "2"` işlemi.

---

## 2. String dönüşümü

Bir değeri metin türüne dönüştürmek için `String()` kullanılır.

### Örnekler

```js
let sayi = 24;
let mantiksalDeger = true;

console.log(String(sayi));           // "24"
console.log(String(mantiksalDeger)); // "true"
console.log(String(false));          // "false"
console.log(String(null));           // "null"
console.log(String(undefined));      // "undefined"
```

Bu örneklerde farklı veri tipleri metne dönüştürülür.

### Dönüşümden sonra veri tipi

```js
let sonuc = String(100);

console.log(sonuc);        // "100"
console.log(typeof sonuc); // "string"
```

`String(100)` ifadesinin sonucu `"100"` metnidir.

### String dönüşümü ne zaman kullanılır?

Bir değeri metin olarak göstermek veya başka bir metinle birleştirmek istediğimizde kullanabiliriz.

Örneğin:

```js
let yas = 24;

let mesaj = "Yaşım: " + String(yas);

console.log(mesaj); // "Yaşım: 24"
```

Burada sayı önce metne dönüştürülür, ardından metinle birleştirilir.

**Önemli:** `String(null)` sonucu `"null"` olur. Bu, `null` değerinin kendisiyle aynı şey değildir. Birincisi `string`, ikincisi özel bir değerdir.

---

## 3. Number dönüşümü

Bir değeri sayıya dönüştürmek için `Number()` kullanılır.

Özellikle kullanıcıdan alınan veriler metin olarak geldiğinde sayısal işlem yapabilmek için bu dönüşüm gerekebilir.

### Örnek

```js
let yasMetni = "24";

let yas = Number(yasMetni);

console.log(yas);        // 24
console.log(typeof yas); // "number"
```

### Number dönüşüm kuralları

| Değer | Number() sonucu |
|---|---:|
| `"24"` | `24` |
| `"3.14"` | `3.14` |
| `"  25  "` | `25` |
| `""` | `0` |
| `"   "` | `0` |
| `null` | `0` |
| `undefined` | `NaN` |
| `true` | `1` |
| `false` | `0` |
| `"merhaba"` | `NaN` |
| `"24abc"` | `NaN` |

### Örneklerle inceleyelim

```js
console.log(Number("24"));        // 24
console.log(Number("3.14"));      // 3.14
console.log(Number(""));          // 0
console.log(Number("   "));       // 0
console.log(Number(null));        // 0
console.log(Number(undefined));   // NaN
console.log(Number(true));        // 1
console.log(Number(false));       // 0
console.log(Number("merhaba"));   // NaN
console.log(Number("24abc"));     // NaN
```

### Boş metin neden sıfır olur?

JavaScript, `Number()` dönüşümünde boş veya yalnızca boşluk içeren metni sıfır olarak değerlendirir.

```js
console.log(Number(""));    // 0
console.log(Number("   ")); // 0
```

### Null ve undefined farkı

Bu iki değer dönüşüm sırasında aynı sonucu vermez.

```js
console.log(Number(null));      // 0
console.log(Number(undefined)); // NaN
```

- `null`, `Number()` ile `0` olur.
- `undefined`, `Number()` ile `NaN` olur.

### NaN nedir?

`NaN`, İngilizce *Not a Number* ifadesinin kısaltmasıdır. Sayısal dönüşümün geçerli bir sayı üretemediği durumlarda ortaya çıkabilir.

```js
let sonuc = Number("abc");

console.log(sonuc);        // NaN
console.log(typeof sonuc); // "number"
```

`NaN`, ayrı bir veri tipi değildir; `number` tipine ait özel bir değerdir.

**Dikkat:** Bir metnin başında veya sonunda boşluk olması, sayı içeren metnin dönüşümünü engellemez. Ancak sayı olmayan karakterler içeren `"24abc"` gibi bir metin `NaN` sonucunu verir.

---

## 4. Otomatik sayısal dönüşüm

JavaScript, matematiksel işlemlerde bazı değerleri otomatik olarak sayıya dönüştürür.

### Bölme, çarpma ve çıkarma

```js
console.log("6" / "2"); // 3
console.log("6" * "2"); // 12
console.log("6" - "2"); // 4
```

Bu örneklerde değerler başlangıçta `string` tipindedir. Ancak kullanılan matematiksel operatörler sayısal işlem gerektirdiğinden JavaScript metinleri sayıya dönüştürür.

### Toplama operatörünün farklı davranması

`+` operatörü hem matematiksel toplama hem de metin birleştirme için kullanılabilir.

```js
console.log(6 + 2);       // 8
console.log("6" + "2");   // "62"
console.log("6" + 2);     // "62"
console.log(6 + "2");     // "62"
```

İlk örnekte iki sayı toplanır.

Diğer örneklerde `string` değerleri bulunduğundan `+` operatörü metin birleştirme yapar.

### Diğer matematiksel operatörlerle karşılaştırma

```js
console.log("10" - 5); // 5
console.log("10" * 5); // 50
console.log("10" / 5); // 2
```

Bu işlemlerde `"10"` metni sayıya dönüştürülür.

**Akılda tut:**

- `+` hem toplama hem metin birleştirme yapabilir.
- `-`, `*` ve `/` gibi operatörler sayısal işlem yapmak için değerleri sayıya dönüştürmeye çalışır.
- Bir operatörün davranışını anlamak için yalnızca değerlerin görünüşüne değil, veri tiplerine de bakmalıyız.

---

## 5. Boolean dönüşümü

Bir değeri mantıksal değere dönüştürmek için `Boolean()` kullanılır.

Sonuç yalnızca `true` veya `false` olabilir.

```js
console.log(Boolean(1));         // true
console.log(Boolean(0));         // false
console.log(Boolean("Merhaba")); // true
console.log(Boolean(""));        // false
```

### False olarak değerlendirilen değerler

JavaScript'te aşağıdaki değerler boolean dönüşümünde `false` olur:

| Değer | Boolean() sonucu |
|---|---|
| `0` | `false` |
| `-0` | `false` |
| `""` | `false` |
| `null` | `false` |
| `undefined` | `false` |
| `NaN` | `false` |

Örnek:

```js
console.log(Boolean(0));         // false
console.log(Boolean(-0));        // false
console.log(Boolean(""));        // false
console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN));       // false
```

### True olarak değerlendirilen değerler

Bu değerlerin dışındaki değerler genel olarak `true` olur.

```js
console.log(Boolean(1));         // true
console.log(Boolean(24));        // true
console.log(Boolean(-5));        // true
console.log(Boolean("Merhaba")); // true
console.log(Boolean([]));        // true
console.log(Boolean({}));        // true
```

Boş diziler (`[]`) ve boş nesneler (`{}`) de `true` olarak değerlendirilir.

### "0" ile 0 arasındaki fark

Bu ayrım özellikle önemlidir:

```js
console.log(Boolean(0));   // false
console.log(Boolean("0")); // true
```

`0`, sayısal sıfırdır ve `false` olur.

`"0"` ise boş olmayan bir metindir ve `true` olur.

Aynı durum boşluk karakteri için de geçerlidir:

```js
console.log(Boolean(""));  // false
console.log(Boolean(" ")); // true
```

İlk metin tamamen boştur. İkinci metinde ise bir boşluk karakteri vardır.

**Önemli:** Boolean dönüşümünde metnin içinde ne yazdığına değil, metnin boş olup olmadığına bakılır. Bu nedenle `"false"` metni de `true` olur.

```js
console.log(Boolean("false")); // true
```

---

## 6. Açık ve otomatik dönüşüm karşılaştırması

### Açık dönüşüm

Dönüşümü kendimiz belirtiriz.

```js
let sayiMetni = "50";

let sayi = Number(sayiMetni);

console.log(sayi);        // 50
console.log(typeof sayi); // "number"
```

### Otomatik dönüşüm

JavaScript, işlem sırasında gereken dönüşümü kendisi yapar.

```js
console.log("50" - 10); // 40
```

Burada `Number()` yazmadık. Çıkarma işlemi nedeniyle JavaScript `"50"` metnini sayıya dönüştürür.

Otomatik dönüşümler kodun nasıl çalıştığını anlamak için önemlidir. Ancak kodun daha anlaşılır olması gereken durumlarda açık dönüşüm kullanmak faydalı olabilir.

---

## 7. Uygulamalı örnek: Kullanıcı yaşını dönüştürme

```js
"use strict";

let kullaniciYasi = "24";

console.log("İlk değer:", kullaniciYasi);
console.log("İlk veri tipi:", typeof kullaniciYasi);

kullaniciYasi = Number(kullaniciYasi);

console.log("Dönüştürülen değer:", kullaniciYasi);
console.log("Yeni veri tipi:", typeof kullaniciYasi);
```

Beklenen çıktı:

```text
İlk değer: 24
İlk veri tipi: string
Dönüştürülen değer: 24
Yeni veri tipi: number
```

Bu örnekte:

1. `let` ile değişken oluşturuldu.
2. Değişkene `"24"` metni atandı.
3. `typeof` ile ilk veri tipi kontrol edildi.
4. `Number()` ile metin sayıya dönüştürüldü.
5. Dönüştürülen değer aynı değişkene atandı.
6. `typeof` ile yeni veri tipi kontrol edildi.

Bu örnek, değişkenler ve veri tipleri konusunda öğrendiklerimizi tip dönüşümleriyle birleştirir.

---

## 8. Önemli noktaların özeti

1. Tip dönüşümü, bir değerin veri tipinin başka bir tipe dönüştürülmesidir.
2. `String()` bir değeri metne dönüştürür.
3. `Number()` bir değeri sayıya dönüştürmeye çalışır.
4. `Boolean()` bir değeri `true` veya `false` olarak değerlendirir.
5. `Number("")` ve `Number("   ")` sonucu `0` olur.
6. `Number(null)` sonucu `0`, `Number(undefined)` sonucu `NaN` olur.
7. `NaN`, `number` veri tipine ait özel bir değerdir.
8. JavaScript matematiksel işlemler sırasında otomatik tip dönüşümü yapabilir.
9. `+` operatörü hem toplama hem de metin birleştirme yapabilir.
10. Boolean dönüşümünde `0`, `""`, `null`, `undefined` ve `NaN` değeri `false` olur.
11. `"0"` ve `"false"` gibi boş olmayan metinler boolean dönüşümünde `true` olur.
12. Boş dizi ve boş nesne de boolean dönüşümünde `true` olur.

---

## 9. İngilizce – Türkçe Teknik Terimler

| İngilizce Terim | Türkçe Karşılığı | Açıklama |
|---|---|---|
| Type Conversion | Tip dönüşümü | Bir değerin veri tipini başka bir tipe dönüştürme işlemidir. |
| Explicit Conversion | Açık dönüşüm | Dönüşümün programcı tarafından açıkça yapılmasıdır. |
| Implicit Conversion | Otomatik / örtük dönüşüm | JavaScript'in işlem sırasında kendisinin dönüşüm yapmasıdır. |
| String | Metin / karakter dizisi | Metinsel verileri temsil eden veri tipidir. |
| Number | Sayı | Tam ve ondalıklı sayıları temsil eden veri tipidir. |
| Boolean | Mantıksal veri tipi | `true` veya `false` değerlerini tutar. |
| True | Doğru | Mantıksal olarak doğru kabul edilen değerdir. |
| False | Yanlış | Mantıksal olarak yanlış kabul edilen değerdir. |
| Null | Bilinçli boş değer | Değerin bilinçli olarak boş bırakıldığını belirtir. |
| Undefined | Değer atanmamış | Bir değişkene henüz değer atanmadığında görülebilen değerdir. |
| NaN (Not a Number) | Sayı değil | Geçersiz sayısal sonuçları temsil eden özel `number` değeridir. |
| Number Conversion | Sayıya dönüştürme | Bir değeri `number` tipine çevirmeye çalışma işlemidir. |
| String Conversion | Metne dönüştürme | Bir değeri `string` tipine çevirme işlemidir. |
| Boolean Conversion | Mantıksal değere dönüştürme | Bir değeri `true` veya `false` olarak değerlendirme işlemidir. |
| Typeof Operator | Tip sorgulama operatörü | Bir değerin veri tipini metin olarak döndürür. |
| Operator | Operatör | Değerler üzerinde işlem gerçekleştiren sembol veya anahtar sözcüktür. |
| Addition | Toplama | Sayıları toplama işlemidir. |
| Subtraction | Çıkarma | Bir değerden diğerini çıkarma işlemidir. |
| Multiplication | Çarpma | Sayıları çarpma işlemidir. |
| Division | Bölme | Bir sayıyı başka bir sayıya bölme işlemidir. |
| Concatenation | Birleştirme | Metinleri birbirine ekleme işlemidir. |
| Empty String | Boş metin | İçinde hiçbir karakter bulunmayan `""` değeridir. |
| Whitespace | Boşluk karakteri | Metin içinde bulunan boşluk veya benzeri görünmeyen karakterdir. |
| Truthy | Doğru kabul edilen | Boolean bağlamında `true` olarak değerlendirilen değerdir. |
| Falsy | Yanlış kabul edilen | Boolean bağlamında `false` olarak değerlendirilen değerdir. |
| Value | Değer | Bir değişkende tutulan veya bir ifade tarafından üretilen bilgidir. |
| Variable | Değişken | Bir değeri tutmak için kullanılan isimlendirilmiş alandır. |
| Expression | İfade | Değerlendirildiğinde bir sonuç üreten kod parçasıdır. |
| Result | Sonuç | Bir işlem veya ifadenin ürettiği değerdir. |
| Data Type | Veri tipi | Bir değerin hangi türde veri olduğunu belirtir. |
| Assignment | Atama | Bir değişkene değer verme işlemidir. |
| Mathematical Operation | Matematiksel işlem | Toplama, çıkarma, çarpma veya bölme gibi işlemlerdir. |
| Conversion Rule | Dönüşüm kuralı | Bir değerin başka bir tipe dönüştürülürken nasıl davranacağını belirleyen kuraldır. |
| Empty Array | Boş dizi | İçinde eleman bulunmayan `[]` dizisidir. Boolean dönüşümünde `true` olur. |
| Empty Object | Boş nesne | Özelliği bulunmayan `{}` nesnesidir. Boolean dönüşümünde `true` olur. |