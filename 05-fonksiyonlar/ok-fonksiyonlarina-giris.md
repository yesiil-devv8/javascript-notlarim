# Arrow Functions (Ok Fonksiyonları)

**Kaynak:** https://tr.javascript.info/arrow-functions-basics

## 1. Arrow Function Nedir?

Arrow Function, JavaScript'te fonksiyonları daha kısa yazmamızı sağlayan bir yöntemdir. `=>` işareti kullanılır.

**Function Expression:**
```javascript
let topla = function(a, b) {
    return a + b;
};
```

**Arrow Function:**
```javascript
let topla = (a, b) => a + b;

console.log(topla(5, 10)); // 15
```

İki kullanım da aynı işlemi gerçekleştirir.

## 2. Birden Fazla Parametre

Birden fazla parametre varsa parantez kullanılır.

```javascript
let carp = (a, b) => a * b;

console.log(carp(4, 5)); // 20
```

## 3. Tek Parametre

Tek parametre varsa parantez kullanmak zorunlu değildir.

```javascript
let ikiKati = sayi => sayi * 2;

console.log(ikiKati(5)); // 10
```

Parantezli yazmak da doğrudur:

```javascript
let ikiKati = (sayi) => sayi * 2;
```

## 4. Parametresiz Fonksiyon

Fonksiyon parametre almıyorsa boş parantez kullanılır.

```javascript
let selamVer = () => alert("Merhaba!");

selamVer();
```

## 5. Otomatik Return

Arrow Function'da süslü parantez kullanılmadan tek bir ifade yazılırsa sonuç otomatik olarak döndürülür. `return` yazmaya gerek yoktur.

```javascript
let topla = (a, b) => a + b;

console.log(topla(5, 10)); // 15
```

Bu kod şu kullanımla aynı sonucu verir:

```javascript
let topla = function(a, b) {
    return a + b;
};
```

## 6. Birden Fazla Satır ve Return

Birden fazla işlem yapılacaksa süslü parantez `{}` kullanılır. Sonucu döndürmek için `return` yazılmalıdır.

```javascript
let toplam = (a, b) => {
    let sonuc = a + b;
    return sonuc;
};

console.log(toplam(5, 10)); // 15
```

**Önemli:** Süslü parantez kullanıldığında otomatik return yapılmaz.

Aşağıdaki örnek `undefined` döndürür:

```javascript
let topla = (a, b) => {
    a + b;
};

console.log(topla(3, 5)); // undefined
```

## 7. Callback ile Arrow Function

Arrow Function, callback fonksiyonlarını daha kısa yazmamızı sağlar.

**Function Expression ile:**

```javascript
function fonksiyonCalistir(callback) {
    callback();
}

fonksiyonCalistir(function() {
    alert("Merhaba!");
});
```

**Arrow Function ile:**

```javascript
function fonksiyonCalistir(callback) {
    callback();
}

fonksiyonCalistir(() => alert("Merhaba!"));
```

Her iki örnekte de gönderilen fonksiyon çağrıldığında çalışır.

## 8. Koşullu İfadelerde Arrow Function

Koşula göre farklı fonksiyonlar seçilebilir.

```javascript
let yas = 17;

let merhaba = (yas < 18)
    ? () => alert("Merhaba")
    : () => alert("Merhabalar!");

merhaba();
```

Yaş 18'den küçükse ilk fonksiyon, değilse ikinci fonksiyon çalışır.

## 9. Fonksiyon Türlerinin Karşılaştırılması

| Fonksiyon türü | Örnek |
|---|---|
| Function Declaration | `function topla(a,b) { return a+b; }` |
| Function Expression | `let topla = function(a,b) { return a+b; };` |
| Arrow Function | `let topla = (a,b) => a+b;` |

Üçü de fonksiyon oluşturmak için kullanılır ancak bazı davranış farklılıkları vardır. Özellikle Arrow Function'ın `this` davranışı diğerlerinden farklıdır.

---

## Teknik Terimler (English – Türkçe)

| English | Türkçe | Açıklama |
|---|---|---|
| Arrow Function | Ok Fonksiyonu | `=>` işaretiyle yazılan kısa fonksiyon türü. |
| Arrow | Ok | Fonksiyon yazımındaki ok işareti. |
| Expression | İfade | Bir değer üreten kod parçası. |
| Parameter | Parametre | Fonksiyonun tanımlanırken aldığı değişken. |
| Argument | Argüman | Fonksiyon çağrılırken gönderilen gerçek değer. |
| Return | Döndürmek | Fonksiyondan dışarıya değer göndermek. |
| Callback | Geri çağırma | Başka bir fonksiyona parametre olarak gönderilen fonksiyon. |
| Anonymous | Anonim | İsmi olmayan fonksiyon. |
| Implicit Return | Örtük Dönüş | Tek ifadeli Arrow Function'da sonucun otomatik döndürülmesi. |
| Explicit Return | Açık Dönüş | `return` kullanılarak değerin açıkça döndürülmesi. |
| Syntax | Söz Dizimi | Kodun yazım kuralları. |
| Condition | Koşul | Belirli bir duruma göre karar verilmesini sağlayan ifade. |