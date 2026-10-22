# JavaScript: Koşul İfadeleri (if, else, else if) 2.10

## 1. Konunun Amacı

JavaScript'te koşul ifadeleri, belirli şartlara göre farklı kodların çalıştırılmasını sağlar.

Örneğin:
- Kullanıcının yaşı 18 veya üzerindeyse giriş izni vermek.
- Bütçe bir ürünün fiyatına yetiyorsa satın alma işlemini gerçekleştirmek.
- Bir sınav notuna göre başarı durumunu belirlemek.

Koşul ifadelerinde en sık kullanılan yapılar şunlardır:

- `if`
- `else`
- `else if`
- `?` (ternary operator)

## 2. if — Eğer

`if`, belirtilen koşul doğruysa (`true`) kod bloğunu çalıştırır.

### Kullanımı

```js
if (koşul) {
  // Koşul doğruysa çalışacak kod
}
```

### Örnek

```js
"use strict";

let havaYagmurlu = true;

if (havaYagmurlu) {
  console.log("Şemsiyeni al!");
}
```

**Çıktı:**

```text
Şemsiyeni al!
```

`havaYagmurlu` değişkeninin değeri `true` olduğu için `if` bloğu çalışır.

Değişkenin değeri `false` olsaydı mesaj yazdırılmazdı.

### Karşılaştırma operatörleriyle if kullanımı

```js
let yas = 22;

if (yas >= 18) {
  console.log("Yetişkinsin.");
}
```

**Çıktı:**

```text
Yetişkinsin.
```

`yas >= 18` ifadesinin sonucu `true` olduğu için mesaj gösterilir.

Başka bir örnek:

```js
let butce = 200;
let urunFiyati = 300;

if (butce >= urunFiyati) {
  console.log("Ürünü satın alabilirsin.");
}
```

Bu örnekte koşul `false` olur. Çünkü 200, 300'den büyük veya ona eşit değildir. Bu nedenle kod bloğu çalışmaz.

## 3. else — Değilse

`else`, `if` koşulu yanlış (`false`) olduğunda çalışacak kodu belirtir.

### Kullanımı

```js
if (koşul) {
  // Koşul doğruysa çalışır
} else {
  // Koşul yanlışsa çalışır
}
```

### Örnek

```js
let butce = 200;
let urunFiyati = 300;

if (butce >= urunFiyati) {
  console.log("Ürünü satın alabilirsin.");
} else {
  console.log("Bütçen yetersiz.");
}
```

**Çıktı:**

```text
Bütçen yetersiz.
```

Koşul yanlış olduğu için `else` bloğu çalışır.

`else` kullanmak zorunlu değildir. Koşul yanlış olduğunda herhangi bir işlem yapılması gerekmiyorsa yalnızca `if` kullanılabilir.

## 4. else if — Başka Bir Koşul

Birden fazla koşulu sırayla kontrol etmek istediğimizde `else if` kullanırız.

### Örnek: Sayının durumunu kontrol etme

```js
let sayi = -5;

if (sayi > 0) {
  console.log("Sayı pozitif.");
} else if (sayi < 0) {
  console.log("Sayı negatif.");
} else {
  console.log("Sayı sıfır.");
}
```

**Çıktı:**

```text
Sayı negatif.
```

JavaScript koşulları sırayla kontrol eder:

1. `sayi > 0` koşulu yanlış.
2. `sayi < 0` koşulu doğru.
3. İkinci bloğun kodu çalışır ve koşul zinciri sona erer.

### Örnek: Not değerlendirme

```js
let not = 75;

if (not >= 85) {
  console.log("Çok iyi!");
} else if (not >= 70) {
  console.log("İyi!");
} else if (not >= 50) {
  console.log("Geçtin.");
} else {
  console.log("Daha çok çalışmalısın.");
}
```

**Çıktı:**

```text
İyi!
```

İlk koşul yanlış, ikinci koşul doğru olduğu için `"İyi!"` mesajı yazdırılır.

**Önemli:** Koşullar sırayla değerlendirilir ve ilk doğru koşulun bloğu çalıştırıldıktan sonra zincirin geri kalanı atlanır. Bu nedenle koşulların sıralaması önemlidir.

## 5. Truthy ve Falsy Değerler

`if` koşulunda yalnızca `true` veya `false` kullanmak zorunda değiliz. JavaScript, diğer değerleri de Boolean bağlamında değerlendirir.

- **Truthy:** `true` gibi değerlendirilen değerler.
- **Falsy:** `false` gibi değerlendirilen değerler.

JavaScript'teki temel falsy değerler:

- `false`
- `0`
- `-0`
- `0n`
- `""` (boş metin)
- `null`
- `undefined`
- `NaN`

Bunların dışındaki değerler genel olarak truthy kabul edilir.

### Örnek

```js
if (1) {
  console.log("Birinci koşul çalıştı.");
}

if (0) {
  console.log("İkinci koşul çalıştı.");
}
```

**Çıktı:**

```text
Birinci koşul çalıştı.
```

`1` truthy, `0` ise falsy olduğu için yalnızca ilk blok çalışır.

### Dikkat: "0" ile 0 aynı değildir

```js
if ("0") {
  console.log("Metin koşulu çalıştı.");
}

if (0) {
  console.log("Sayı koşulu çalıştı.");
}
```

**Çıktı:**

```text
Metin koşulu çalıştı.
```

`"0"` boş olmayan bir metin olduğu için truthy kabul edilir. `0` ise falsy kabul edilir.

## 6. Ternary Operator (?) — Üçlü Koşul Operatörü

`?` operatörü, bir koşula bağlı olarak iki değerden birini seçmek için kullanılır.

### Kullanımı

```js
koşul ? doğruysaDeğer : yanlışsaDeğer;
```

- Koşul doğruysa `?` sonrasındaki değer seçilir.
- Koşul yanlışsa `:` sonrasındaki değer seçilir.

### Örnek

```js
let yas = 20;

let sonuc = yas >= 18 ? "Giriş serbest." : "Giriş yasak.";

console.log(sonuc);
```

**Çıktı:**

```text
Giriş serbest.
```

Çünkü `yas >= 18` koşulu doğrudur.

### if/else ile karşılaştırma

Aynı işlem `if/else` ile şöyle yazılabilir:

```js
let yas = 20;
let sonuc;

if (yas >= 18) {
  sonuc = "Giriş serbest.";
} else {
  sonuc = "Giriş yasak.";
}

console.log(sonuc);
```

`?` operatörü kısa değer seçimlerinde kullanışlıdır. Birden fazla işlem veya karmaşık koşul söz konusuysa `if/else` yapısı genellikle daha okunaklıdır.

## 7. Sık Yapılan Hatalar

### Hata 1: Atama ve karşılaştırmayı karıştırmak

```js
let yas = 18;

if (yas === 18) {
  console.log("Yaş 18.");
}
```

`=` değer atamak için, `===` ise katı eşitlik karşılaştırması için kullanılır.

### Hata 2: Koşulları yanlış sıralamak

```js
let not = 75;

if (not >= 50) {
  console.log("Geçtin.");
} else if (not >= 70) {
  console.log("İyi!");
}
```

Bu örnekte `"Geçtin."` yazdırılır. Çünkü ilk koşul zaten doğrudur ve ikinci koşula geçilmez.

### Hata 3: String ve number farkını unutmak

```js
let yas = "18";

if (yas === 18) {
  console.log("Koşul doğru.");
} else {
  console.log("Koşul yanlış.");
}
```

**Çıktı:**

```text
Koşul yanlış.
```

`"18"` bir `string`, `18` ise bir `number` değeridir. `===` hem değeri hem veri türünü kontrol eder.

## 8. Konunun Özeti

| Yapı | Görevi |
|---|---|
| `if` | Koşul doğruysa kod bloğunu çalıştırır. |
| `else` | Önceki `if` koşulu yanlışsa çalışır. |
| `else if` | Ek koşulları sırayla kontrol eder. |
| `? :` | Koşula göre iki değerden birini seçer. |
| `true` | Boolean doğru değeri. |
| `false` | Boolean yanlış değeri. |
| `Truthy` | Boolean bağlamında `true` gibi değerlendirilen değer. |
| `Falsy` | Boolean bağlamında `false` gibi değerlendirilen değer. |

## 9. İngilizce Teknik Terimler Sözlüğü

| İngilizce Terim | Türkçe Karşılığı | Açıklama |
|---|---|---|
| Condition | Koşul | Bir işlemin gerçekleşmesi için kontrol edilen ifade. |
| Conditional statement | Koşul ifadesi | Koşula bağlı olarak kod çalıştıran yapı. |
| If statement | Eğer ifadesi | Koşul doğruysa kod bloğunu çalıştırır. |
| Else | Değilse | Önceki koşul yanlış olduğunda çalışır. |
| Else if | Aksi durumda eğer | Ek bir koşulun kontrol edilmesini sağlar. |
| Boolean | Mantıksal veri türü | `true` ve `false` değerlerini içerir. |
| Truthy | Doğru gibi değerlendirilen | Boolean bağlamında `true` sonucunu veren değer. |
| Falsy | Yanlış gibi değerlendirilen | Boolean bağlamında `false` sonucunu veren değer. |
| Ternary operator | Üçlü koşul operatörü | Koşula göre iki değerden birini seçer: `? :`. |
| Comparison operator | Karşılaştırma operatörü | İki değeri karşılaştırmak için kullanılır. |
| Assignment | Atama | Bir değişkene değer verme işlemi. |
| Code block | Kod bloğu | Süslü parantezler `{ }` arasında bulunan kod bölümü. |
| Evaluate | Değerlendirmek | Bir ifadenin sonucunu hesaplamak veya belirlemek. |
| Expression | İfade | Bir değer üreten kod parçası. |
| Nested condition | İç içe koşul | Bir koşul bloğunun içinde bulunan başka bir koşul. |
