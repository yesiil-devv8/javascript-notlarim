# JavaScript 2.4 — Değişkenler (Variables)

## 1. Değişken Nedir?

Değişkenler, program içerisinde verileri saklamak ve daha sonra kullanmak için oluşturduğumuz isimlendirilmiş alanlardır.

Bir değişkeni, üzerinde isim yazan ve içinde bir değer bulunan kutu gibi düşünebiliriz.

```javascript
let mesaj = "Merhaba!";
```

Bu örnekte:

- `let`: Yeni bir değişken tanımlar.
- `mesaj`: Değişkenin adıdır.
- `=`: Sağdaki değeri soldaki değişkene atar.
- `"Merhaba!"`: Değişkenin tuttuğu değerdir.

Değişkenin içindeki değeri kullanmak için değişkenin adını yazabiliriz:

```javascript
let mesaj = "Merhaba!";

alert(mesaj);
```

Bu kod çalıştırıldığında ekranda `Merhaba!` yazan bir uyarı penceresi açılır.

## 2. Değişken Tanımlama ve Değer Atama

Bir değişkeni tanımlarken başlangıç değerini verebiliriz:

```javascript
let yas = 23;
```

İstersek değişkeni önce tanımlayıp değerini daha sonra da atayabiliriz:

```javascript
let yas;
yas = 23;
```

Burada:

- `let yas;` değişkeni tanımlar.
- `yas = 23;` değişkene değer atar.

İlk tanımlama sırasında değer vermek zorunlu değildir.

## 3. Değişkenin Değerini Değiştirme

`let` ile tanımlanan bir değişkenin değeri sonradan değiştirilebilir.

```javascript
let mesaj = "Merhaba!";

mesaj = "Dünya!";

alert(mesaj);
```

Ekranda `Dünya!` görünür. Çünkü `mesaj` değişkenine ikinci kez değer atandığında eski değeri değiştirilmiştir.

**Önemli:** Değişkeni ilk kez tanımlarken `let` kullanırız. Daha sonra değerini değiştirirken tekrar `let` yazmayız.

```javascript
let yas = 23;
yas = 24;
```

## 4. Bir Değişkenden Diğerine Değer Atama

Bir değişkenin içindeki değeri başka bir değişkene aktarabiliriz.

```javascript
let merhaba = "Merhaba Dünya!";
let mesaj;

mesaj = merhaba;
```

Bu kodun sonunda hem `merhaba` hem de `mesaj` değişkeninin değeri `"Merhaba Dünya!"` olur.

`mesaj = merhaba;` ifadesi, `merhaba` değişkeninin değerini alıp `mesaj` değişkenine atar.

## 5. let, const ve var

JavaScript'te değişken tanımlamak için farklı anahtar kelimeler bulunur.

### let

Değeri sonradan değiştirilebilen değişkenler için kullanılır.

```javascript
let yas = 23;
yas = 24;
```

### const

Bir değişkene yeniden başka bir değer atanmasını istemediğimizde kullanılır.

```javascript
const dogumYili = 2002;
```

Aşağıdaki işlem hata verir:

```javascript
const dogumYili = 2002;
dogumYili = 2003;
```

Çünkü `const` ile tanımlanan değişkene yeniden değer atanamaz.

Not: `const` ile tanımlanan bir nesnenin veya dizinin içeriği bazı durumlarda değiştirilebilir. Buradaki kısıtlama, değişkene yeniden başka bir değer atamakla ilgilidir.

### var

JavaScript'te değişken tanımlamanın eski yöntemidir. `var` ile `let` arasında kapsam ve yeniden tanımlama gibi önemli farklar bulunur. Bu farkları ilerleyen derslerde öğrenebiliriz.

**Başlangıç için temel kural:**

- Değerini değiştireceksen `let` kullan.
- Yeniden değer atamayacaksan `const` kullan.
- Yeni kodlarında şimdilik `var` kullanmamayı tercih et.

## 6. Değişken İsimlendirme Kuralları

Değişken isimleri belirli kurallara uymalıdır.

### Geçerli değişken isimleri

```javascript
let kullaniciAdi;
let test123;
let _sayac;
let $fiyat;
```

### Dikkat edilmesi gereken kurallar

- Değişken adı harfle, `_` veya `$` işaretiyle başlayabilir.
- Değişken adı rakamla başlayamaz.
- İsimlerde harf, rakam, `_` ve `$` kullanılabilir.
- Değişken isimlerinde tire (`-`) kullanılamaz.
- `let`, `class` ve `return` gibi ayrılmış kelimeler değişken adı olarak kullanılamaz.
- Büyük ve küçük harfler farklı kabul edilir. `elma` ve `Elma` iki farklı isimdir.

### camelCase

Birden fazla kelimeden oluşan değişken isimlerinde genellikle `camelCase` kullanılır.

```javascript
let kullaniciAdi = "Ayşe";
let alisverisSepeti = "Kitap";
```

İlk kelime küçük harfle başlar, sonraki kelimelerin ilk harfleri büyük yazılır.

Değişken isimleri anlamlı ve açıklayıcı olmalıdır. Örneğin, `kullaniciAdi` ismi `x` isminden daha anlaşılırdır.

## 7. Strict Mode ile İlişkisi

Strict mode, bazı hatalı kullanımların tespit edilmesine yardımcı olur.

```javascript
"use strict";

yas = 23;
```

Bu kod hata verir. Çünkü `yas` değişkeni önceden tanımlanmadan kullanılmaktadır.

Doğru kullanım:

```javascript
"use strict";

let yas = 23;
```

Strict mode kullanırken değişkenleri önce tanımlamak gerekir.

## 8. Büyük Harfle Yazılan Sabitler

Değeri önceden bilinen ve program boyunca değişmemesi gereken bazı sabitler tamamen büyük harflerle yazılabilir.

```javascript
const RENK_KIRMIZI = "#F00";
```

Bu bir isimlendirme geleneğidir. Sabitin değerinin önceden bilindiğini belirtmek için kullanılır.

Çalışma sırasında hesaplanan değerler için ise normal `camelCase` kullanılabilir:

```javascript
const sayfaYuklenmeSuresi = 1200;
```

Her `const` değişkeninin büyük harfle yazılması gerekmez.

## 9. Mini Tekrar

1. Değişken tanımlamak için hangi anahtar kelimeyi kullanabiliriz?
2. `let yas = 23;` yazdıktan sonra `yas = 24;` yazarsak ne olur?
3. `const` ile tanımlanan bir değişkene yeniden değer atayabilir miyiz?
4. `2kullanici` geçerli bir değişken adı mıdır?
5. `mesaj = merhaba;` ifadesi ne anlama gelir?
6. Strict mode kullanırken tanımlanmamış bir değişkene değer atarsak ne olur?

### Cevaplar

1. `let` veya `const` kullanabiliriz.
2. Değişkenin değeri 24 olur.
3. Hayır, yeniden değer atamak hata oluşturur.
4. Hayır, değişken adı rakamla başlayamaz.
5. `merhaba` değişkeninin değerini `mesaj` değişkenine atar.
6. Hata oluşur.

## 10. Kısa Özet

- Değişkenler verileri saklamak ve kullanmak için oluşturulur.
- `let` ile değişken tanımlanır ve değeri daha sonra değiştirilebilir.
- `const` ile tanımlanan değişkene yeniden değer atanamaz.
- `var`, değişken tanımlamanın eski yöntemidir.
- Değişken isimleri belirli kurallara uymalıdır.
- Anlamlı isimler kullanmak kodun okunabilirliğini artırır.
- Strict mode, tanımlanmamış değişkenlere yapılan atamalar gibi hataları yakalamaya yardımcı olur.

## 11. İngilizce Terimler Sözlüğü

| İngilizce Terim | Türkçe Karşılığı | Açıklama |
|---|---|---|
| Variable | Değişken | Veri saklamak için kullanılan isimlendirilmiş alan. |
| Declare | Tanımlamak | Bir değişkeni oluşturmak. |
| Declaration | Tanımlama | Bir değişkenin oluşturulması işlemi. |
| Assignment | Atama | Bir değişkene değer verme işlemi. |
| Assignment operator | Atama operatörü | `=` işareti; bir değeri değişkene atar. |
| Value | Değer | Değişkende saklanan bilgi. |
| Keyword | Anahtar kelime | JavaScript'te özel anlamı olan kelime. |
| Constant | Sabit | Yeniden değer atanmayan değişken. |
| Naming | İsimlendirme | Değişkenlere isim verme işlemi. |
| Naming convention | İsimlendirme geleneği | İsimleri belirli bir biçimde yazma alışkanlığı. |
| Case-sensitive | Büyük-küçük harfe duyarlı | Büyük ve küçük harfleri farklı kabul eden. |
| CamelCase | Deve yazımı | `kullaniciAdi` gibi birden fazla kelimeyi birleştirme biçimi. |
| Reserved word | Ayrılmış kelime | Özel anlamı olduğu için değişken adı olarak kullanılamayan kelime. |
| Strict mode | Katı mod | Bazı hatalı JavaScript kullanımlarını engelleyen veya tespit eden mod. |
| Readable | Okunabilir | Kolay anlaşılabilir. |
| Maintainability | Bakım yapılabilirlik | Kodun daha sonra kolayca anlaşılabilmesi ve düzenlenebilmesi. |
| Reassign | Yeniden atamak | Bir değişkene tekrar değer atamak. |
| Hard-coded value | Koda doğrudan yazılmış değer | Program içinde önceden açıkça belirtilmiş değer. |
