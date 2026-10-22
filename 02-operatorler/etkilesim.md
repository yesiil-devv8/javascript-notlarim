# JavaScript: Alert, Prompt ve Confirm 2.9

## 1. Konunun Amacı

JavaScript'te kullanıcıyla etkileşim kurmak için `alert()`, `prompt()` ve `confirm()` fonksiyonları kullanılır.

- `alert()`: Kullanıcıya mesaj gösterir.
- `prompt()`: Kullanıcıdan veri girmesini ister.
- `confirm()`: Kullanıcıdan bir işlemi onaylamasını ister.

Bu fonksiyonlar tarayıcıda birer pencere açar. Pencere açıkken kullanıcı pencereyi kapatana kadar programın sonraki adımları bekler.

## 2. alert() — Mesaj Gösterme

`alert()` fonksiyonu kullanıcıya bir mesaj göstermek için kullanılır.

```js
"use strict";

alert("Merhaba Dünya!");
```

Bu kod çalıştırıldığında tarayıcıda "Merhaba Dünya!" mesajı görüntülenir. Kullanıcı Tamam düğmesine bastıktan sonra program devam eder.

`alert()` kullanıcıdan herhangi bir veri almaz. Yalnızca mesaj gösterir.

### Örnek

```js
alert("İşlem başarıyla tamamlandı!");
console.log("Program devam ediyor.");
```

Kullanıcı uyarı penceresini kapattıktan sonra konsola `Program devam ediyor.` yazdırılır.

## 3. prompt() — Kullanıcıdan Veri Alma

`prompt()` fonksiyonu kullanıcıdan bilgi almak için kullanılır. Açılan pencerede bir mesaj ve veri girilebilecek bir alan bulunur.

### Kullanımı

```js
let ad = prompt("Adın ne?", "");

console.log(ad);
```

Kodun açıklaması:

- `let ad`: Kullanıcının cevabını saklamak için `ad` değişkeni oluşturur.
- `"Adın ne?"`: Kullanıcıya gösterilen mesajdır.
- `""`: Giriş alanının varsayılan değeridir. Burada boş bırakılmıştır.
- `console.log(ad)`: Kullanıcının girdiği değeri konsola yazdırır.

Kullanıcı `Kübra` yazıp Tamam'a basarsa `ad` değişkeninin değeri `"Kübra"` olur.

### prompt() fonksiyonunun dönüş değerleri

| Kullanıcının işlemi | Dönen değer |
|---|---|
| `Kübra` yazıp Tamam'a basmak | `"Kübra"` |
| `25` yazıp Tamam'a basmak | `"25"` |
| Boş bırakıp Tamam'a basmak | `""` |
| İptal'e basmak | `null` |

**Önemli:** Kullanıcı `25` gibi sayısal görünen bir değer girse bile `prompt()` bu değeri varsayılan olarak `string` türünde döndürür.

```js
let yas = prompt("Kaç yaşındasın?", "");

console.log(yas);        // Örneğin: 25
console.log(typeof yas); // string
```

Sayıyla matematiksel işlem yapmak gerektiğinde tür dönüşümü uygulanabilir:

```js
let yas = prompt("Kaç yaşındasın?", "");
yas = Number(yas);

console.log(typeof yas); // number
```

Ancak kullanıcı İptal'e basarsa `prompt()` sonucu `null` olur. `Number(null)` ise `0` döndürür. Bu nedenle kullanıcı iptal etmiş mi diye kontrol etmek gerekebilir.

## 4. confirm() — Kullanıcıdan Onay Alma

`confirm()` fonksiyonu kullanıcıya bir soru yöneltir ve Tamam ile İptal seçeneklerini gösterir.

### Kullanımı

```js
let cevap = confirm("Devam etmek istiyor musun?");

console.log(cevap);
```

Fonksiyonun döndürdüğü değerler:

- Kullanıcı Tamam'a basarsa `true` döner.
- Kullanıcı İptal'e basarsa `false` döner.

`confirm()` fonksiyonunun sonucu `boolean` veri türündedir.

```js
let devam = confirm("Devam edelim mi?");

console.log(typeof devam); // boolean
```

### confirm() ve koşullar

`confirm()` fonksiyonunun sonucunu kullanarak kullanıcı seçimine göre farklı işlemler yapılabilir.

```js
let devam = confirm("Alışverişe devam etmek istiyor musun?");

if (devam === true) {
  alert("Alışverişe devam ediyorsun.");
} else {
  alert("Alışveriş sona erdi.");
}
```

Kullanıcı Tamam'a basarsa ilk mesaj, İptal'e basarsa ikinci mesaj gösterilir.

Burada `if` ve `else` yapıları bir koşulun sonucuna göre hangi kodun çalışacağını belirler.

## 5. Üç Fonksiyonun Karşılaştırılması

| Özellik | `alert()` | `prompt()` | `confirm()` |
|---|---|---|---|
| Mesaj gösterir mi? | Evet | Evet | Evet |
| Kullanıcıdan veri alır mı? | Hayır | Evet | Onay alır |
| Dönüş değeri | `undefined` | `string` veya `null` | `boolean` |
| Kullanıcı seçenekleri | Tamam | Tamam / İptal | Tamam / İptal |

### alert() fonksiyonunun dönüş değeri

```js
let sonuc = alert("Merhaba!");

console.log(sonuc); // undefined
```

`alert()` bir mesaj gösterir ancak kullanıcıdan bir cevap değeri almaz. Bu nedenle dönüş değeri `undefined` olur.

## 6. Bu Fonksiyonların Sınırlamaları

- Pencerelerin görünümü CSS ile özelleştirilemez.
- Görünüm tarayıcıya ve işletim sistemine göre değişebilir.
- Pencere açıkken kullanıcı sayfanın geri kalanıyla normal şekilde etkileşim kuramaz.

Daha gelişmiş uygulamalarda HTML, CSS ve JavaScript kullanılarak özel tasarımlı pencereler oluşturulabilir.

## 7. Konunun Özeti

- `alert()` kullanıcıya mesaj gösterir.
- `prompt()` kullanıcıdan veri alır ve genellikle `string` veya `null` döndürür.
- `confirm()` kullanıcıdan onay alır ve `true` veya `false` döndürür.
- `typeof`, bir değerin veri türünü kontrol etmek için kullanılabilir.
- `Number()`, uygun değerleri sayıya dönüştürmek için kullanılabilir.
- `console.log()`, değerleri konsolda görüntüler.

**Hatırlatma:** `prompt()` ile girilen sayısal değerler otomatik olarak `number` olmaz. Gerekli olduğunda `Number()` ile dönüştürülmelidir.

## 8. İngilizce Teknik Terimler Sözlüğü

| İngilizce Terim | Türkçe Karşılığı | Açıklama |
|---|---|---|
| Alert | Uyarı | Kullanıcıya mesaj gösteren pencere veya bildirim. |
| Prompt | İstem / Girdi isteme | Kullanıcıdan veri girmesini isteyen pencere. |
| Confirm | Onaylama | Kullanıcıdan bir işlemi onaylamasını isteyen pencere. |
| Function | Fonksiyon | Belirli bir işlemi gerçekleştirmek için kullanılan kod yapısı. |
| Parameter | Parametre | Fonksiyon tanımında kullanılan girdiyi temsil eden isim. |
| Argument | Argüman | Fonksiyon çağrılırken parantez içine verilen gerçek değer. |
| Return value | Dönüş değeri | Fonksiyonun çağrıldığı yere döndürdüğü değer. |
| String | Metin | Karakterlerden oluşan veri türü. |
| Number | Sayı | Sayısal değerleri temsil eden veri türü. |
| Boolean | Mantıksal değer | `true` veya `false` değerlerini içeren veri türü. |
| Undefined | Tanımsız | Bir değerin henüz atanmadığını veya mevcut olmadığını belirten özel değer. |
| Null | Boş değer | Bilinçli olarak boş veya mevcut olmayan değer belirtmek için kullanılan özel değer. |
| Type conversion | Tür dönüşümü | Bir değerin veri türünü başka bir türe dönüştürme işlemi. |
| Modal window | Kipli pencere | Kapatılana kadar sayfanın geri kalanıyla etkileşimi engelleyen pencere. |
| Strict mode | Sıkı mod | JavaScript'te bazı hataların daha erken fark edilmesini sağlayan çalışma modu. |
