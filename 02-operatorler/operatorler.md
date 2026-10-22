# JavaScript Operatörler (Operators) 2.7

## 1. Operatör Nedir?

Operatörler, değerler ve değişkenler üzerinde işlem yapmamızı sağlayan sembol veya ifadelerdir.

```js
let sonuc = 5 + 3;

console.log(sonuc); // 8
```

- `5` ve `3`: Operand (üzerinde işlem yapılan değerler)
- `+`: Operatör
- `5 + 3`: Expression (ifade)
- `sonuc`: İşlem sonucunu saklayan değişken

### Unary ve Binary Operatörler

**Unary operator:** Tek bir operand üzerinde işlem yapar.

```js
let sayi = 5;

console.log(-sayi); // -5
```

**Binary operator:** İki operand ile işlem yapar.

```js
console.log(5 - 3); // 2
```

Aynı `-` işareti, kullanımına göre unary veya binary olabilir.

---

## 2. Aritmetik Operatörler (Arithmetic Operators)

Matematiksel işlemler yapmak için kullanılırlar.

| Operatör | İşlem | Örnek | Sonuç |
|---|---|---|---|
| `+` | Toplama | `5 + 3` | `8` |
| `-` | Çıkarma | `5 - 3` | `2` |
| `*` | Çarpma | `5 * 3` | `15` |
| `/` | Bölme | `6 / 3` | `2` |
| `%` | Kalanı bulma | `10 % 3` | `1` |
| `**` | Üs alma | `2 ** 3` | `8` |

### Modulo (`%`) Operatörü

`%` operatörü yüzde hesaplamaz; bölme işleminden kalanı verir.

```js
console.log(10 % 3); // 1
console.log(8 % 3);  // 2
console.log(6 % 3);  // 0
```

Örneğin 10 sayısının 3'e bölümünden kalan 1'dir.

### Üs Alma (`**`) Operatörü

```js
console.log(2 ** 2); // 4
console.log(2 ** 3); // 8
console.log(3 ** 2); // 9
```

`2 ** 3`, 2 sayısının üçüncü kuvvetini ifade eder:

`2 * 2 * 2 = 8`

---

## 3. Toplama Operatörü (`+`) ve String Birleştirme

JavaScript'te `+` hem matematiksel toplama hem de String birleştirme için kullanılır.

```js
console.log(5 + 3);     // 8
console.log("5" + "3"); // "53"
console.log("5" + 3);   // "53"
console.log(5 + "3");   // "53"
```

Birleştirme yapılan örneklerde sonuç bir String olur.

Diğer matematiksel operatörler sayısal metinleri sayıya dönüştürebilir:

```js
console.log("6" - "2"); // 4
console.log("6" * "2"); // 12
console.log("6" / "2"); // 3
```

**Önemli:** `+` operatörünü gördüğümüzde değerlerin veri tiplerini kontrol etmeliyiz.

### Unary Plus (`+`) Operatörü

Tek başına kullanılan `+`, bir değeri sayıya dönüştürmek için kullanılabilir.

```js
let fiyat = "125";

console.log(+fiyat); // 125
console.log(typeof +fiyat); // "number"
console.log(typeof fiyat); // "string"
```

`+fiyat` ifadesi değişkenin kendisini değiştirmez. Değişkenin kendisini dönüştürmek için atama yapılabilir:

```js
fiyat = +fiyat;

console.log(fiyat); // 125
console.log(typeof fiyat); // "number"
```

Bu işlem `Number(fiyat)` kullanımına benzer.

---

## 4. Atama Operatörü (`=`)

`=` operatörü, sağ taraftaki değeri sol taraftaki değişkene atar. Eşitlik karşılaştırması yapmaz.

```js
let sayi = 10;
sayi = 20;

console.log(sayi); // 20
```

İlk satırda `sayi` değişkenine 10, ikinci satırda 20 atanır.

### Zincirleme Atama

JavaScript'te birden fazla değişkene aynı değer atanabilir.

```js
let a;
let b;

a = b = 5;

console.log(a); // 5
console.log(b); // 5
```

Atama sağdan sola doğru gerçekleşir. Başlangıçta daha anlaşılır olması için değişkenleri ayrı ayrı atamak tercih edilebilir.

---

## 5. Kısa Atama Operatörleri

Kısa atama operatörleri, mevcut değişken değerini bir işlemde kullanarak yeni değer atamamızı sağlar.

| Operatör | Uzun yazımı | Örnek |
|---|---|---|
| `+=` | `x = x + y` | `x += 5` |
| `-=` | `x = x - y` | `x -= 5` |
| `*=` | `x = x * y` | `x *= 5` |
| `/=` | `x = x / y` | `x /= 5` |

### Örnekler

```js
let sayi = 10;

sayi += 5;
console.log(sayi); // 15

sayi -= 3;
console.log(sayi); // 12

sayi *= 2;
console.log(sayi); // 24

sayi /= 4;
console.log(sayi); // 6
```

### Alışveriş Örneği

```js
let toplam = 375;
toplam += 75;

console.log(toplam); // 450
```

`toplam += 75`, `toplam = toplam + 75` ile aynı sonucu verir.

---

## 6. Artırma (`++`) ve Azaltma (`--`) Operatörleri

Bu operatörler sayısal bir değişkeni bir artırmak veya bir azaltmak için kullanılır.

```js
let sayac = 5;

sayac++;
console.log(sayac); // 6

sayac--;
console.log(sayac); // 5
```

### Prefix ve Postfix Farkı

**Postfix (`sayi++`):** Önce mevcut değer kullanılır, ardından değişken artırılır.

```js
let sayi = 5;

console.log(sayi++); // 5
console.log(sayi);   // 6
```

**Prefix (`++sayi`):** Önce değişken artırılır, ardından yeni değer kullanılır.

```js
let sayi = 5;

console.log(++sayi); // 6
console.log(sayi);   // 6
```

Aynı ayrım `--sayi` ve `sayi--` için de geçerlidir.

---

## 7. Operatör Önceliği (Operator Precedence)

Bir ifadede birden fazla operatör olduğunda JavaScript işlemleri belirli bir öncelik sırasına göre yapar.

```js
console.log(2 + 3 * 4); // 14
```

Önce çarpma yapılır:

1. `3 * 4 = 12`
2. `2 + 12 = 14`

Parantez kullanarak işlem sırasını değiştirebiliriz.

```js
console.log((2 + 3) * 4); // 20
```

Önce parantez içi hesaplanır:

1. `2 + 3 = 5`
2. `5 * 4 = 20`

Başlangıçta bilinmesi gereken temel sıra:

1. Parantez: `()`
2. Üs alma: `**`
3. Çarpma, bölme, kalan: `*`, `/`, `%`
4. Toplama ve çıkarma: `+`, `-`
5. Atama: `=`, `+=`, `-=`

Bu liste temel operatörler için basitleştirilmiş bir özettir; tüm JavaScript operatörlerinin eksiksiz öncelik listesi değildir.

---

## 8. Bitsel Operatörler (Bitwise Operators)

Bitsel operatörler, sayıları ikili gösterimleri üzerinden işler. Bazı özel veri işleme ve düşük seviyeli programlama senaryolarında kullanılırlar.

| Operatör | Anlamı |
|---|---|
| `&` | Bitsel VE |
| `|` | Bitsel VEYA |
| `^` | Bitsel özel VEYA |
| `~` | Bitsel DEĞİL |
| `<<` | Sola kaydırma |
| `>>` | Sağa kaydırma |
| `>>>` | Sıfır doldurarak sağa kaydırma |

Şimdilik bu operatörlerin varlığını bilmek yeterlidir. Ayrıntılı kullanımını ihtiyaç duyduğumuzda öğrenebiliriz.

---

## 9. Genel Uygulama Örneği

```js
"use strict";

let fiyat = 100;
let miktar = 3;

let toplam = fiyat * miktar;

console.log(toplam); // 300

toplam += 20;
console.log(toplam); // 320

console.log(10 % 3); // 1
console.log(2 ** 3); // 8

let sayac = 1;
sayac++;

console.log(sayac); // 2

console.log(2 + 3 * 4);   // 14
console.log((2 + 3) * 4); // 20
```

Bu örnekte öğrendiklerimiz:

- `*` ile çarpma yaptık.
- `+=` ile değişkenin değerini artırdık.
- `%` ile bölümden kalanı bulduk.
- `**` ile üs alma işlemi yaptık.
- `++` ile sayacı artırdık.
- Parantez kullanarak işlem önceliğini değiştirdik.

---

## 10. İngilizce – Türkçe Teknik Terimler

| İngilizce Terim | Türkçe Karşılığı | Açıklama |
|---|---|---|
| Operator | Operatör | Değerler üzerinde işlem yapan sembol veya ifade. |
| Operand | İşlenen | Operatörün üzerinde işlem yaptığı değer. |
| Unary operator | Tek operandlı operatör | Tek bir değer üzerinde işlem yapan operatör. |
| Binary operator | İki operandlı operatör | İki değer üzerinde işlem yapan operatör. |
| Expression | İfade | Bir değer üreten kod parçası. |
| Arithmetic operator | Aritmetik operatör | Matematiksel işlem yapan operatör. |
| Addition | Toplama | Sayıları toplama işlemi. |
| Subtraction | Çıkarma | Bir sayıdan diğerini çıkarma işlemi. |
| Multiplication | Çarpma | Sayıları çarpma işlemi. |
| Division | Bölme | Bir sayıyı diğerine bölme işlemi. |
| Remainder | Kalan | Bölme işleminden geriye kalan değer. |
| Modulo | Modulo / kalan işlemi | JavaScript'te `%` operatörünün yaptığı işlem. |
| Exponentiation | Üs alma | Bir sayının kuvvetini hesaplama işlemi. |
| String concatenation | Metin birleştirme | String değerlerini birleştirme işlemi. |
| Unary plus | Tekli artı | Bir değeri sayıya dönüştürmek için kullanılabilen `+` operatörü. |
| Assignment | Atama | Bir değişkene değer verme işlemi. |
| Assignment operator | Atama operatörü | Değişkene değer atamak için kullanılan operatör. |
| Compound assignment | Bileşik atama | İşlem yapıp sonucu aynı değişkene atama yöntemi. |
| Increment | Artırma | Sayısal değeri bir artırma işlemi. |
| Decrement | Azaltma | Sayısal değeri bir azaltma işlemi. |
| Prefix | Önek | `++` veya `--` operatörünün operanddan önce gelmesi. |
| Postfix | Sonek | `++` veya `--` operatörünün operanddan sonra gelmesi. |
| Operator precedence | Operatör önceliği | Bir ifadede hangi işlemin önce yapılacağını belirleyen kural. |
| Bitwise operator | Bitsel operatör | Sayıları ikili gösterimleri üzerinden işleyen operatör. |
| Binary representation | İkili gösterim | Sayıların 0 ve 1'lerden oluşan gösterimi. |
| Type conversion | Tip dönüşümü | Bir değerin veri tipini dönüştürme işlemi. |
| Number | Sayı | JavaScript'in sayısal veri tipi. |
| String | Metin | Karakter dizilerini tutan veri tipi. |
| Boolean | Mantıksal veri tipi | `true` veya `false` değerlerini tutan veri tipi. |
| Result | Sonuç | Bir işlemin ürettiği değer. |
