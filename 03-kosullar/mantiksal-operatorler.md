# JavaScript: Mantıksal Operatörler 2.11(Logical Operators)

## 1. Mantıksal Operatörler Nedir?

Mantıksal operatörler, bir veya birden fazla koşulu değerlendirmek ve koşullar arasında mantıksal işlemler yapmak için kullanılır.

JavaScript'te üç temel mantıksal operatör bulunur:

- `||` (OR): Veya
- `&&` (AND): Ve
- `!` (NOT): Değil

Bu operatörler özellikle `if`, `else if` ve `else` yapılarıyla birlikte kullanılır.

Örneğin, bir ürünün bütçeme uygun olup olmadığını kontrol ederken birden fazla koşulu aynı anda değerlendirebilirim.

## 2. OR (`||`) — Veya Operatörü

`||` operatörü, koşullardan en az biri doğru olduğunda ilgili sonucu doğru kabul eder.

```js
"use strict";

let butce = 350;
let urunFiyati = 450;

if (urunFiyati <= butce || butce >= 300) {
    console.log("Koşullardan en az biri doğru.");
}
```

İlk koşul:

`urunFiyati <= butce` → `450 <= 350` → `false`

İkinci koşul:

`butce >= 300` → `350 >= 300` → `true`

Koşullardan biri doğru olduğu için `if` bloğu çalışır.

**Konsol çıktısı:**

```text
Koşullardan en az biri doğru.
```

### OR operatörünün doğruluk tablosu

| İlk koşul | İkinci koşul | Sonuç |
|---|---|---|
| `true` | `true` | `true` |
| `true` | `false` | `true` |
| `false` | `true` | `true` |
| `false` | `false` | `false` |

`||` operatörü yalnızca `true` veya `false` döndürmek zorunda değildir. Değerlerle kullanıldığında ilk truthy değeri, truthy değer yoksa son değeri döndürür.

```js
console.log(3 || 10);       // Çıktı: 3
console.log(0 || 10);       // Çıktı: 10
console.log("" || "Merhaba"); // Çıktı: Merhaba
```

`||` operatörünün sol tarafındaki değer truthy ise sağ tarafı değerlendirmeden durabilir. Buna **short-circuit (kısa devre değerlendirmesi)** denir.

## 3. AND (`&&`) — Ve Operatörü

`&&` operatöründe bütün koşulların doğru olması gerekir.

Örneğin, bir kişinin belirtilen yaş koşulunu sağlaması ve ehliyetinin bulunması durumunu kontrol edebiliriz.

```js
"use strict";

let yas = 24;
let ehliyetVar = true;

if (yas >= 18 && ehliyetVar === true) {
    console.log("Araç kullanma koşulları sağlanıyor.");
}
```

İlk koşul:

`yas >= 18` → `true`

İkinci koşul:

`ehliyetVar === true` → `true`

İki koşul da doğru olduğu için `if` bloğu çalışır.

**Konsol çıktısı:**

```text
Araç kullanma koşulları sağlanıyor.
```

### AND operatörünün doğruluk tablosu

| İlk koşul | İkinci koşul | Sonuç |
|---|---|---|
| `true` | `true` | `true` |
| `true` | `false` | `false` |
| `false` | `true` | `false` |
| `false` | `false` | `false` |

`&&` operatörü değerlerle kullanıldığında ilk falsy değeri döndürür. Bütün değerler truthy ise son değeri döndürür.

```js
console.log(1 && 5);                 // Çıktı: 5
console.log(0 && 5);                 // Çıktı: 0
console.log("Merhaba" && "JavaScript"); // Çıktı: JavaScript
```

`&&` operatörünün sol tarafındaki değer falsy ise sağ tarafı değerlendirmeden durabilir. Bu da kısa devre değerlendirmesidir.

## 4. NOT (`!`) — Değil Operatörü

`!` operatörü, bir değerin mantıksal karşılığını tersine çevirir.

- `true` değerini `false` yapar.
- `false` değerini `true` yapar.

```js
console.log(!true);  // Çıktı: false
console.log(!false); // Çıktı: true
console.log(!0);     // Çıktı: true
console.log(!1);     // Çıktı: false
```

`!` operatörü, değerleri önce mantıksal olarak değerlendirir ve sonucu tersine çevirir.

### Çift ünlem (`!!`)

İki ünlem işareti, bir değerin Boolean karşılığını elde etmek için kullanılabilir.

```js
console.log(!!125);      // Çıktı: true
console.log(!!0);        // Çıktı: false
console.log(!!"Merhaba"); // Çıktı: true
console.log(!!"");       // Çıktı: false
```

`!!deger` kullanımı, `Boolean(deger)` ile aynı mantıksal sonucu verir.

## 5. Mantıksal Operatörlerin Önceliği

Bir ifadede birden fazla mantıksal operatör bulunuyorsa JavaScript belirli bir öncelik sırası izler.

1. `!` — NOT
2. `&&` — AND
3. `||` — OR

Örnek:

```js
console.log(true || false && false);
```

Önce `false && false` değerlendirilir ve sonuç `false` olur. Ardından `true || false` değerlendirilir.

**Konsol çıktısı:**

```text
true
```

İşlem sırasını daha anlaşılır hâle getirmek için parantez kullanılabilir.

```js
console.log((true || false) && false);
// Çıktı: false
```

Parantezler, hangi işlemin önce yapılacağını değiştirir.

## 6. Truthy ve Falsy Değerler

JavaScript'te koşullar değerlendirilirken her zaman doğrudan `true` veya `false` yazmamız gerekmez. Başka değerler de mantıksal olarak doğru veya yanlış kabul edilir.

Bu kavramlara **truthy** ve **falsy** denir.

### Falsy değerler

Falsy değerler, koşul içinde kullanıldığında `false` gibi davranan değerlerdir.

JavaScript'te şu değerler falsy'dir:

- `false`
- `0`
- `-0`
- `0n`
- `""` (boş metin)
- `null`
- `undefined`
- `NaN`

Örnek:

```js
if (0) {
    console.log("Bu mesaj görünmez.");
}

if ("") {
    console.log("Bu mesaj da görünmez.");
}

if (null) {
    console.log("Bu mesaj da görünmez.");
}
```

Bu örnekte hiçbir mesaj konsola yazdırılmaz; çünkü üç koşul da falsy değer içerir.

### Truthy değerler

Truthy değerler, koşul içinde kullanıldığında `true` gibi davranan değerlerdir.

Falsy listesinde bulunmayan değerler truthy kabul edilir. Örneğin:

- `true`
- `1`
- `-1`
- `"Merhaba"`
- `"0"`
- `"false"`
- `[]` (boş dizi)
- `{}` (boş nesne)

Örnek:

```js
if ("Merhaba") {
    console.log("Metin boş olmadığı için bu mesaj görünür.");
}

if ("0") {
    console.log("Bu mesaj da görünür.");
}

if ([]) {
    console.log("Boş dizi de truthy kabul edilir.");
}
```

**Konsol çıktısı:**

```text
Metin boş olmadığı için bu mesaj görünür.
Bu mesaj da görünür.
Boş dizi de truthy kabul edilir.
```

### Sayısal sıfır ile metin olarak sıfır arasındaki fark

Bu ayrım önemlidir:

```js
console.log(Boolean(0));   // Çıktı: false
console.log(Boolean("0")); // Çıktı: true
```

`0` sayısal bir değerdir ve falsy kabul edilir. `"0"` ise boş olmayan bir metindir ve truthy kabul edilir.

Aynı şekilde:

```js
console.log(Boolean(""));      // Çıktı: false
console.log(Boolean("false")); // Çıktı: true
```

`""` boş metin olduğu için falsy'dir. `"false"` ise içinde karakter bulunan bir metin olduğu için truthy'dir. Metnin içeriğinin `false` yazması, onu Boolean `false` yapmaz.

### Truthy ve falsy değerlerin mantıksal operatörlerle kullanımı

```js
console.log(0 || 5);  // Çıktı: 5
console.log(5 || 0);  // Çıktı: 5

console.log(0 && 5);  // Çıktı: 0
console.log(5 && 0);  // Çıktı: 0

console.log(!0);      // Çıktı: true
console.log(!5);      // Çıktı: false
```

Bu örnekler, `||` ve `&&` operatörlerinin değerleri nasıl değerlendirdiğini gösterir.

## 7. Bu Konuda Öğrendiklerim

- `||` operatörüyle VEYA işlemi yapmayı öğrendim.
- `&&` operatörüyle VE işlemi yapmayı öğrendim.
- `!` operatörüyle mantıksal sonucu tersine çevirmeyi öğrendim.
- `!!` kullanarak bir değerin Boolean karşılığını elde etmeyi öğrendim.
- Mantıksal operatörlerin yalnızca `true` ve `false` döndürmediğini öğrendim.
- Kısa devre değerlendirmesinin nasıl çalıştığını öğrendim.
- Truthy ve falsy değerler arasındaki farkı öğrendim.
- Sayı olan `0` ile metin olan `"0"` arasındaki farkı öğrendim.
- Mantıksal operatörlerin öncelik sırasını öğrendim.

## 8. İngilizce Teknik Terimler

| İngilizce Terim | Türkçe Karşılığı | Açıklama |
|---|---|---|
| Logical Operator | Mantıksal operatör | Mantıksal işlemler yapar |
| OR | Veya | `||` operatörünün adı |
| AND | Ve | `&&` operatörünün adı |
| NOT | Değil | `!` operatörünün adı |
| Truthy | Doğru kabul edilen | Koşulda `true` gibi davranan değer |
| Falsy | Yanlış kabul edilen | Koşulda `false` gibi davranan değer |
| Boolean | Mantıksal veri türü | `true` ve `false` değerlerini içerir |
| Short-circuit | Kısa devre değerlendirmesi | Sonuç belli olduğunda diğer tarafın değerlendirilmemesi |
| Operand | İşlenen | Bir operatörün üzerinde işlem yaptığı değer |
| Expression | İfade | Bir değer veya sonuç üreten kod parçası |
| Operator Precedence | Operatör önceliği | İşlemlerin hangi sırayla değerlendirileceğini belirler |
| Negation | Olumsuzlama | Mantıksal bir değerin tersini alma işlemi |
