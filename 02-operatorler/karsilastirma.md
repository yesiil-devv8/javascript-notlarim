# JavaScript Karşılaştırma Operatörleri (Comparison) 2.8.

## 1. Karşılaştırma Operatörleri Nedir?

Karşılaştırma operatörleri, iki değeri karşılaştırmak için kullanılır. Karşılaştırma sonucunda `true` (doğru) veya `false` (yanlış) elde edilir.

Örneğin:

```js
console.log(10 > 5); // Çıktı: true
console.log(3 > 8);  // Çıktı: false
```

İlk işlemde 10, 5'ten büyük olduğu için sonuç `true`; ikinci işlemde 3, 8'den büyük olmadığı için sonuç `false` olur.

## 2. Karşılaştırma Operatörleri

| Operatör | Anlamı | Örnek | Sonuç |
|---|---|---|---|
| `>` | Büyüktür | `10 > 5` | `true` |
| `<` | Küçüktür | `3 < 8` | `true` |
| `>=` | Büyük veya eşittir | `5 >= 5` | `true` |
| `<=` | Küçük veya eşittir | `4 <= 5` | `true` |
| `==` | Gevşek eşitlik | `5 == "5"` | `true` |
| `!=` | Gevşek eşitsizlik | `5 != "5"` | `false` |
| `===` | Sıkı eşitlik | `5 === 5` | `true` |
| `!==` | Sıkı eşitsizlik | `5 !== "5"` | `true` |

## 3. Karşılaştırma Sonuçları: `true` ve `false`

Karşılaştırma işlemlerinin sonucu Boolean türündedir. Boolean yalnızca iki değer alır: `true` veya `false`.

```js
"use strict";

console.log(10 > 5);  // Çıktı: true
console.log(10 < 5);  // Çıktı: false
console.log(5 >= 5);  // Çıktı: true
console.log(4 === 7); // Çıktı: false
```

Karşılaştırma sonucunu bir değişkende de saklayabiliriz:

```js
let fiyat = 120;
let sonuc = fiyat > 100;

console.log(sonuc); // Çıktı: true
```

`fiyat > 100` ifadesi doğru olduğu için `sonuc` değişkenine `true` atanır.

## 4. String Değerleri Karşılaştırma

JavaScript metinleri karşılaştırırken karakterleri soldan başlayarak karşılaştırır. Karakterlerin sıralaması Unicode değerlerine dayanır.

İki metnin ilk karakterleri farklıysa JavaScript ilk farklı karaktere göre sonuca ulaşır.

### Örnek 1

```js
console.log("Z" > "A"); // Çıktı: true
```

`Z` karakterinin Unicode değeri `A` karakterinden büyüktür. Bu nedenle sonuç `true` olur.

### Örnek 2

```js
console.log("apple" > "pineapple"); // Çıktı: false
```

İlk karakterler karşılaştırılır:

- `apple` metninin ilk karakteri: `a`
- `pineapple` metninin ilk karakteri: `p`

`a`, `p` karakterinden önce geldiği için `apple`, `pineapple` metninden küçüktür. Bu nedenle sonuç `false` olur.

### Örnek 3

```js
console.log("2" > "12"); // Çıktı: true
```

Her iki değer de tırnak içinde olduğu için string türündedir.

İlk karakterler karşılaştırılır:

- İlk metin: `2`
- İkinci metnin ilk karakteri: `1`

`2`, `1` karakterinden sonra geldiği için sonuç `true` olur. JavaScript bu örnekte sayısal büyüklükleri değil, metinleri karşılaştırır.

Aynı değerleri sayı olarak yazarsak sonuç değişir:

```js
console.log(2 > 12); // Çıktı: false
```

Bu kez iki değer de number türündedir. Sayısal olarak 2, 12'den küçük olduğu için sonuç `false` olur.

**Önemli:** String karşılaştırması, her zaman Türkçe sözlük sıralamasıyla aynı değildir. Büyük-küçük harfler ve karakterlerin Unicode sıralaması sonucu etkileyebilir.

## 5. Farklı Veri Türlerini Karşılaştırma

JavaScript bazı karşılaştırmalarda otomatik tür dönüşümü yapabilir.

```js
console.log("2" > 1);    // Çıktı: true
console.log("01" == 1); // Çıktı: true

console.log(true == 1);  // Çıktı: true
console.log(false == 0); // Çıktı: true
```

Örneğin `"2" > 1` işleminde JavaScript string olan `"2"` değerini sayısal olarak değerlendirir. Böylece 2 ile 1 karşılaştırılır ve sonuç `true` olur.

Otomatik tür dönüşümü her operatörde aynı şekilde gerçekleşmez. Bu nedenle karşılaştırma yaparken değerlerin veri türlerini bilmek önemlidir.

## 6. `==` ve `===` Arasındaki Fark

### Gevşek eşitlik: `==`

`==` değerleri karşılaştırır ve gerektiğinde tür dönüşümü yapabilir.

```js
console.log(5 == "5"); // Çıktı: true
console.log(0 == false); // Çıktı: true
```

### Sıkı eşitlik: `===`

`===` hem değerin hem de veri türünün aynı olmasını gerektirir. Otomatik tür dönüşümü yapmaz.

```js
console.log(5 === "5");   // Çıktı: false
console.log(0 === false); // Çıktı: false
console.log(5 === 5);     // Çıktı: true
```

İlk örnekte `5` number, `"5"` ise string türündedir. Değerler aynı görünse de veri türleri farklıdır.

JavaScript'te özel bir neden yoksa genellikle `===` ve `!==` kullanmak daha güvenlidir.

## 7. `null` ve `undefined` Karşılaştırmaları

`null`, bilinçli olarak boş bırakılan bir değeri; `undefined` ise tanımlanmamış veya değeri bulunmayan bir durumu temsil eder.

```js
console.log(null == undefined);  // Çıktı: true
console.log(null === undefined); // Çıktı: false
```

`==`, bu iki değeri eşit kabul eder. `===` ise veri türleri farklı olduğu için eşit kabul etmez.

Bir başka önemli örnek:

```js
console.log(null > 0);  // Çıktı: false
console.log(null == 0); // Çıktı: false
console.log(null >= 0); // Çıktı: true
```

Bu sonuçlar JavaScript'in farklı karşılaştırma kurallarından kaynaklanır. `null` ve `undefined` ile karşılaştırma yaparken dikkatli olmak gerekir.

## 8. Karşılaştırma ve Atama Arasındaki Fark

Bu üç ifadeyi birbirinden ayırmalıyız:

```js
let fiyat = 100;       // Atama
console.log(fiyat == "100");  // Çıktı: true
console.log(fiyat === "100"); // Çıktı: false
```

- `=`: Değişkene değer atar.
- `==`: Gevşek eşitlik kontrolü yapar.
- `===`: Sıkı eşitlik kontrolü yapar.

## 9. Genel Örnek

```js
"use strict";

// Amaç: Karşılaştırma operatörlerinin kullanımını incelemek.

let urunFiyat = 120;
let butce = 150;

console.log(urunFiyat > butce);   // Çıktı: false
console.log(urunFiyat < butce);   // Çıktı: true
console.log(urunFiyat <= butce);  // Çıktı: true
console.log(urunFiyat === 120);   // Çıktı: true
console.log(urunFiyat !== 150);   // Çıktı: true
```

Bu örnekte ürün fiyatı bütçeden küçük olduğu için `urunFiyat < butce` sonucu `true` olur.

## 10. Özet

- Karşılaştırma operatörleri `true` veya `false` üretir.
- `>` büyüklüğü, `<` küçüklüğü kontrol eder.
- `>=` ve `<=` eşitlik durumunu da kapsar.
- String değerler karşılaştırılırken karakter sıralaması dikkate alınır.
- `"2" > "12"` sonucu `true`, ancak `2 > 12` sonucu `false` olur.
- `==` gerektiğinde tür dönüşümü yapabilir.
- `===` hem değeri hem veri türünü kontrol eder.
- `=` atama operatörüdür; karşılaştırma operatörü değildir.
- `null` ve `undefined` karşılaştırmaları özel kurallara sahiptir.

## İngilizce – Türkçe Teknik Terimler

| İngilizce Terim | Türkçe Karşılığı | Açıklama |
|---|---|---|
| Comparison | Karşılaştırma | İki değeri kıyaslama işlemi |
| Comparison Operator | Karşılaştırma operatörü | Değerleri karşılaştıran operatör |
| Greater Than | Büyüktür | `>` operatörü |
| Less Than | Küçüktür | `<` operatörü |
| Greater Than or Equal | Büyük veya eşittir | `>=` operatörü |
| Less Than or Equal | Küçük veya eşittir | `<=` operatörü |
| Equality | Eşitlik | İki değerin eşit olup olmadığını kontrol etme |
| Strict Equality | Sıkı eşitlik | Değeri ve veri türünü birlikte kontrol etme |
| Inequality | Eşitsizlik | İki değerin eşit olmadığını kontrol etme |
| Strict Inequality | Sıkı eşitsizlik | Değer veya tür farklılığını kontrol etme |
| Boolean | Mantıksal veri türü | `true` veya `false` değerlerini tutar |
| String | Metin | Tırnak işaretleri içinde tutulan metin türü |
| Number | Sayı | Sayısal değerleri temsil eden veri türü |
| Unicode | Unicode karakter standardı | Karakterlere sayısal kod değerleri atayan standart |
| Type Conversion | Tür dönüşümü | Bir değeri başka bir veri türüne dönüştürme |
| Assignment | Atama | Bir değişkene değer verme |
| Null | Boş değer | Bilinçli olarak boş bırakılmış değeri temsil eder |
| Undefined | Tanımsız değer | Değeri bulunmayan veya atanmamış durumu temsil eder |
