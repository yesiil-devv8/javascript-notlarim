# JavaScript — while ve for Döngüleri

## 1. Döngüler (Loops) Nedir?

Döngüler, belirli bir kod bloğunu birden fazla kez çalıştırmamızı sağlar.

Örneğin, 1'den 5'e kadar sayıları ekrana yazdırmak için beş ayrı `console.log()` yazmak yerine bir döngü kullanabiliriz.

```js
"use strict";

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Ekran çıktısı:
// 1
// 2
// 3
// 4
// 5
```

Döngüler sayesinde kod tekrarını azaltır ve işlemleri daha kolay yönetiriz.

## 2. while Döngüsü

`while`, belirtilen koşul doğru (`true`) olduğu sürece kod bloğunu çalıştırır.

### Sözdizimi (Syntax)

```js
while (koşul) {
    // Tekrar çalışacak kodlar
}
```

### Örnek

```js
let sayi = 1;

while (sayi <= 5) {
    console.log(sayi);
    sayi++;
}

// Ekran çıktısı:
// 1
// 2
// 3
// 4
// 5
```

### Nasıl Çalışır?

1. `sayi` değişkeni 1 olarak tanımlanır.
2. `sayi <= 5` koşulu kontrol edilir.
3. Koşul doğruysa sayı ekrana yazdırılır.
4. `sayi++` ile sayı 1 artırılır.
5. Koşul yeniden kontrol edilir.
6. Koşul yanlış olduğunda döngü sona erer.

**Dikkat:** Sayaç değişkeni artırılmazsa koşul sürekli doğru kalabilir ve sonsuz döngü oluşabilir.

## 3. do...while Döngüsü

`do...while`, önce kod bloğunu çalıştırır, ardından koşulu kontrol eder. Bu nedenle kod bloğu en az bir kez çalışır.

### Sözdizimi

```js
do {
    // Çalışacak kodlar
} while (koşul);
```

### Örnek

```js
let sayi = 10;

do {
    console.log(sayi);
    sayi++;
} while (sayi < 5);

// Ekran çıktısı:
// 10
```

Koşul başlangıçta yanlış olsa bile `do` bloğu bir kez çalışır. Ardından koşul kontrol edilir ve döngü sona erer.

**Temel fark:**
- `while`: Önce koşulu kontrol eder.
- `do...while`: Önce kodu çalıştırır, sonra koşulu kontrol eder.

## 4. for Döngüsü

`for`, özellikle sayaç kullanarak belirli sayıda tekrar yapmak istediğimizde kullanışlıdır.

### Sözdizimi

```js
for (başlangıç; koşul; artış) {
    // Tekrar çalışacak kodlar
}
```

### Örnek

```js
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Ekran çıktısı:
// 1
// 2
// 3
// 4
// 5
```

### for Döngüsünün Üç Bölümü

```js
for (let i = 1; i <= 5; i++)
```

- `let i = 1`: Sayaç değişkenini oluşturur ve başlangıç değerini belirler. Bir kez çalışır.
- `i <= 5`: Döngünün devam edip etmeyeceğini kontrol eder.
- `i++`: Her turdan sonra sayacı 1 artırır.

Çalışma sırası:

1. Başlangıç değeri atanır.
2. Koşul kontrol edilir.
3. Koşul doğruysa döngü gövdesi çalışır.
4. Artış işlemi yapılır.
5. Koşul tekrar kontrol edilir.
6. Koşul yanlış olduğunda döngü biter.

## 5. while ve for Arasındaki Fark

| while | for |
|---|---|
| Koşul doğru olduğu sürece çalışır. | Koşul doğru olduğu sürece çalışır. |
| Başlangıç ve artış genellikle ayrı yazılır. | Başlangıç, koşul ve artış aynı satırda yazılır. |
| Tekrar sayısı önceden belli olmadığında da kullanılabilir. | Sayaçla belirli sayıda tekrar için kullanışlıdır. |

İki döngü de benzer işlemleri gerçekleştirebilir. Hangi döngünün kullanılacağı ihtiyaca bağlıdır.

## 6. Artırma ve Azaltma Operatörleri

### Artırma: `++`

Bir değişkenin değerini 1 artırır.

```js
let sayi = 5;

sayi++;

console.log(sayi); // 6
```

### Azaltma: `--`

Bir değişkenin değerini 1 azaltır.

```js
let sayi = 5;

sayi--;

console.log(sayi); // 4
```

### `i++` ve `++i` Arasındaki Fark

```js
let i = 0;

console.log(i++); // 0
console.log(i);   // 1
```

`i++`, önce mevcut değeri verir, ardından artırır.

```js
let j = 0;

console.log(++j); // 1
console.log(j);   // 1
```

`++j`, önce artırır, ardından yeni değeri verir.

## 7. break — Döngüyü Sonlandırma

`break`, döngüyü hemen sonlandırır.

```js
for (let i = 1; i <= 10; i++) {
    if (i === 4) {
        break;
    }

    console.log(i);
}

// Ekran çıktısı:
// 1
// 2
// 3
```

`i` değeri 4 olduğunda `break` çalışır ve döngü biter. 4 ekrana yazdırılmaz.

## 8. continue — Bir Tekrarı Atlama

`continue`, o anki turun kalanını atlar ve döngünün sonraki turuna geçer.

```js
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }

    console.log(i);
}

// Ekran çıktısı:
// 1
// 2
// 4
// 5
```

`i` değeri 3 olduğunda `console.slog(i)` çalışmaz. Döngü devam eder.

**Unutma:**
- `break`: Döngüyü bitirir.
- `continue`: Yalnızca mevcut tekrarı atlar.

## 9. if ve Döngüyü Birlikte Kullanmak

Döngü içinde koşullu ifadeler kullanabiliriz.

### Çift Sayıları Yazdırma

```js
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Ekran çıktısı:
// 2
// 4
// 6
// 8
// 10
```

`%` operatörü bölme işleminden kalanı verir.

- `4 % 2` sonucu `0` olur.
- `5 % 2` sonucu `1` olur.

Bir sayının 2'ye bölümünden kalan 0 ise o sayı çifttir.

## 10. İç İçe Döngüler (Nested Loops)

Bir döngünün içinde başka bir döngü bulunmasına iç içe döngü denir.

```js
for (let i = 1; i <= 2; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(i, j);
    }
}

// Ekran çıktısı:
// 1 1
// 1 2
// 1 3
// 2 1
// 2 2
// 2 3
```

Dış döngünün her turunda iç döngü üç kez çalışır. Dış döngü iki tur yaptığı için toplam altı çıktı oluşur.

## 11. Etiketli Döngüler (Labeled Loops)

Etiketler, özellikle iç içe döngülerde belirli bir döngüyü hedeflemek için kullanılabilir.

```js
outer: for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (i === 2 && j === 2) {
            break outer;
        }

        console.log(i, j);
    }
}

// Ekran çıktısı:
// 1 1
// 1 2
// 1 3
// 2 1
```

`break outer`, yalnızca iç döngüyü değil, `outer` etiketiyle belirtilen dış döngüyü de sonlandırır.

Bu özellik daha ileri bir konudur. Başlangıçta `while`, `for`, `break` ve `continue` konularını iyi anlamak yeterlidir.

## 12. Konu Özeti

- Döngüler, kod bloklarını tekrar çalıştırır.
- `while`, önce koşulu kontrol eder.
- `do...while`, kodu en az bir kez çalıştırır.
- `for`, başlangıç, koşul ve artış bölümlerini bir araya getirir.
- `i++` bir artırır, `i--` bir azaltır.
- `break` döngüyü bitirir.
- `continue` mevcut tekrarı atlar.
- İç içe döngüler, bir döngünün içinde başka bir döngü çalıştırır.

## 13. İngilizce – Türkçe Teknik Terimler Sözlüğü

| İngilizce Terim | Türkçe Karşılığı | Açıklama |
|---|---|---|
| Loop | Döngü | Kodun tekrar çalışmasını sağlayan yapı. |
| While loop | While döngüsü | Koşul doğru olduğu sürece çalışan döngü. |
| Do...while loop | Do...while döngüsü | Önce çalışıp sonra koşulu kontrol eden döngü. |
| For loop | For döngüsü | Başlangıç, koşul ve artış bölümlerini içeren döngü. |
| Condition | Koşul | Bir ifadenin doğru veya yanlış olmasına göre karar veren kontrol. |
| Iteration | Tekrar / tur | Döngünün bir kez çalışması. |
| Counter | Sayaç | Tekrarları saymak için kullanılan değişken. |
| Loop body | Döngü gövdesi | Döngü içinde tekrar çalıştırılan kod bloğu. |
| Infinite loop | Sonsuz döngü | Sonlanmayan veya bitiş koşuluna ulaşmayan döngü. |
| Increment | Artırma | Bir değeri artırma işlemi. |
| Decrement | Azaltma | Bir değeri azaltma işlemi. |
| Break | Sonlandırma | Döngüden çıkmayı sağlayan komut. |
| Continue | Sonraki tekrara geçme | Mevcut turun kalanını atlayan komut. |
| Nested loop | İç içe döngü | Bir döngünün içinde başka bir döngü bulunması. |
| Label | Etiket | Bir döngüyü adlandırarak kontrol akışında hedefleme. |
| Syntax | Sözdizimi | Kodun doğru yazılması için gereken kurallar. |
| Loop control | Döngü kontrolü | Döngünün devamını veya sonlanmasını belirleyen işlemler. |
| Expression | İfade | Bir değer üreten veya hesaplama yapan kod parçası. |
| Modulo operator | Mod alma operatörü | `%` ile bölümden kalanı hesaplayan operatör. |
| Scope | Kapsam | Bir değişkenin erişilebilir olduğu kod alanı. |
