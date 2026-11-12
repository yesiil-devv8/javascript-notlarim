# Function Expressions (Fonksiyon İfadeleri)

## 1. Function Expression Nedir?

JavaScript'te fonksiyon oluşturmanın birden fazla yolu vardır. Şimdiye kadar genellikle Function Declaration (Fonksiyon Tanımlama) yöntemini kullandık.

Örnek:

```javascript
function selamla(isim) {
    return "Merhaba " + isim + "!";
}

console.log(selamla("Kübra"));
```

Bu yönteme **Function Declaration** denir.

Fonksiyonları bir değişkenin içerisine atayarak da oluşturabiliriz. Bu yönteme **Function Expression (Fonksiyon İfadesi)** denir.

Örnek:

```javascript
let selamla = function(isim) {
    return "Merhaba " + isim + "!";
};

console.log(selamla("Kübra"));
```

Bu örnekte:

- `let selamla` ile bir değişken oluşturduk.
- `function(isim)` ile isimsiz bir fonksiyon tanımladık.
- Oluşturduğumuz fonksiyonu `selamla` değişkenine atadık.
- `selamla("Kübra")` diyerek fonksiyonu çağırdık.

Ekran çıktısı:

```text
Merhaba Kübra!
```

**Önemli:** Function Declaration ve Function Expression aynı işlemi yapabilir. Aralarındaki temel fark, fonksiyonun nasıl tanımlandığı ve ne zaman kullanılabildiğidir.

---

## 2. Function Declaration ve Function Expression Arasındaki Fark

### Function Declaration

Fonksiyonu doğrudan adıyla tanımlarız.

```javascript
function topla(a, b) {
    return a + b;
}

console.log(topla(5, 3));
```

Ekran çıktısı:

```text
8
```

### Function Expression

Fonksiyonu bir değişkene atarız.

```javascript
let topla = function(a, b) {
    return a + b;
};

console.log(topla(5, 3));
```

Ekran çıktısı:

```text
8
```

İki örnekte de sonuç aynıdır. Ancak tanımlama şekilleri farklıdır.

### Aralarındaki önemli fark: Hoisting

Function Declaration, tanımlandığı satırdan önce çağrılabilir.

```javascript
selamla();

function selamla() {
    alert("Merhaba!");
}
```

Bu kod çalışır ve ekranda bir uyarı penceresi açılır.

Ancak Function Expression ile aynı işlemi yaparsak:

```javascript
selamla();

let selamla = function() {
    alert("Merhaba!");
};
```

Hata alırız.

Çünkü `let` ile oluşturulan değişkene, tanımlandığı satırdan önce erişemeyiz.

**Hoisting:** JavaScript'in bazı tanımları kod çalıştırılmadan önce erişilebilir hâle getirmesidir.

Kısaca:

- Function Declaration: Tanımlanmadan önce çağrılabilir.
- Function Expression: Önce tanımlanmalı, sonra çağrılmalıdır.

---

## 3. Fonksiyonlar da Birer Değerdir

JavaScript'te fonksiyonlar da birer değerdir.

Değişkenlere sayı veya metin atayabildiğimiz gibi fonksiyon da atayabiliriz.

Örnek:

```javascript
let yas = 24;
let isim = "Kübra";

let mesaj = function() {
    alert("JavaScript öğreniyorum!");
};

mesaj();
```

Bu örnekte `mesaj` değişkeninin içerisinde bir fonksiyon bulunmaktadır.

`mesaj()` yazarak fonksiyonu çalıştırırız.

Ekranda şu mesaj görünür:

```text
JavaScript öğreniyorum!
```

**Önemli:** Fonksiyonları değişkenlerde saklayabilir ve daha sonra bu değişkenler aracılığıyla çağırabiliriz.

---

## 4. Fonksiyonu Kopyalamak

JavaScript'te bir fonksiyonu başka bir değişkene atayabiliriz.

Örnek:

```javascript
function selamVer() {
    alert("Merhaba!");
}

let yeniFonksiyon = selamVer;

yeniFonksiyon();
```

Bu örnekte `selamVer` fonksiyonunu `yeniFonksiyon` değişkenine atadık.

Artık `yeniFonksiyon()` diyerek aynı fonksiyonu çalıştırabiliriz.

Burada dikkat etmemiz gereken nokta, fonksiyon adının yanında parantez kullanmamamızdır.

### Parantez kullanımı arasındaki fark

```javascript
function topla() {
    return 5 + 5;
}

let birinci = topla;
let ikinci = topla();

console.log(birinci);
console.log(ikinci);
```

Burada iki farklı işlem yaptık:

**birinci:**

`topla` yazdığımız için fonksiyonun kendisini değişkene atadık.

**ikinci:**

`topla()` yazdığımız için fonksiyonu çalıştırdık ve dönen sonucu değişkene atadık.

Ekran çıktısı:

```text
ƒ topla() {
    return 5 + 5;
}
10
```

Kısaca:

- `topla` = Fonksiyonun kendisi.
- `topla()` = Fonksiyonun çalıştırılması ve dönüş değeri.

---

## 5. Anonymous Function (Anonim Fonksiyon)

Anonymous Function, isimsiz fonksiyon anlamına gelir.

Fonksiyon tanımlarken `function` kelimesinden sonra bir isim yazmazsak anonim fonksiyon oluşturmuş oluruz.

Örnek:

```javascript
let mesaj = function() {
    alert("Hoş geldin!");
};

mesaj();
```

Bu örnekte fonksiyonun kendi adı yoktur.

Ancak fonksiyonu `mesaj` değişkeni üzerinden çağırabiliriz.

Ekranda şu mesaj görünür:

```text
Hoş geldin!
```

Anonim fonksiyonlar özellikle başka fonksiyonlara parametre olarak gönderilirken kullanılır.

---

## 6. Callback Function (Geri Çağırım Fonksiyonu)

Callback Function, bir fonksiyonun başka bir fonksiyona parametre olarak gönderilmesidir.

Gönderilen fonksiyon, ihtiyaç duyulduğunda diğer fonksiyonun içerisinden çağrılır.

Örnek:

```javascript
function selamVer() {
    alert("Merhaba!");
}

function islemYap(callback) {
    callback();
}

islemYap(selamVer);
```

Bu örnekte:

1. `selamVer` adında bir fonksiyon oluşturduk.
2. `islemYap` adında başka bir fonksiyon oluşturduk.
3. `islemYap` fonksiyonuna `callback` parametresi verdik.
4. `islemYap(selamVer)` diyerek `selamVer` fonksiyonunu parametre olarak gönderdik.
5. `callback()` komutu ile gönderilen fonksiyonu çalıştırdık.

Ekranda bir uyarı penceresi açılır:

```text
Merhaba!
```

**Önemli:** `callback` JavaScript'e ait özel bir kelime değildir. Fonksiyon parametresine verilen bir isimdir. İstenirse farklı bir isim de kullanılabilir.

### Callback Fonksiyonunu Anonim Olarak Kullanmak

Fonksiyonu önceden tanımlamadan doğrudan başka bir fonksiyona gönderebiliriz.

Örnek:

```javascript
function islemYap(callback) {
    callback();
}

islemYap(function() {
    alert("JavaScript öğreniyorum!");
});
```

Bu örnekte:

- Ayrı bir fonksiyon tanımlamadık.
- Anonim bir fonksiyon oluşturduk.
- Bu fonksiyonu doğrudan `islemYap` fonksiyonuna gönderdik.
- `callback()` ile çalıştırdık.

Ekranda şu mesaj görünür:

```text
JavaScript öğreniyorum!
```

---

## 7. Callback Fonksiyonlarının Gerçek Kullanımı

Callback fonksiyonları JavaScript'te özellikle kullanıcı etkileşimlerinde sıkça kullanılır.

Örneğin bir butona tıklandığında işlem yapmak isteyebiliriz.

HTML:

```html
<button id="buton">Tıkla</button>
```

JavaScript:

```javascript
document.querySelector("#buton").addEventListener("click", function() {
    alert("Butona tıklandı!");
});
```

Bu örnekte:

- `document.querySelector()` ile HTML içerisindeki butonu seçtik.
- `addEventListener()` ile butonun tıklanma olayını dinledik.
- `"click"` tıklama olayını belirtti.
- `function()` ile callback fonksiyonu oluşturduk.
- Butona tıklandığında `alert()` çalıştı.

Bu kullanım özellikle DOM (Document Object Model) öğrenirken karşımıza çıkacaktır.

---

## 8. Function Expression ile Koşullu İşlem Yapmak

Fonksiyon ifadelerini koşullarla birlikte kullanabiliriz.

Örneğin kullanıcının yaşına göre farklı mesajlar göstermek isteyelim.

```javascript
let yas = 16;

let mesaj;

if (yas < 18) {
    mesaj = function() {
        alert("Giriş reddedildi!");
    };
} else {
    mesaj = function() {
        alert("Giriş başarılı!");
    };
}

mesaj();
```

Bu örnekte:

1. `yas` değişkenine 16 değerini atadık.
2. `mesaj` adında bir değişken oluşturduk.
3. Yaş 18'den küçük olduğu için ilk fonksiyonu `mesaj` değişkenine atadık.
4. `mesaj()` diyerek atanan fonksiyonu çalıştırdık.

Ekranda şu mesaj görünür:

```text
Giriş reddedildi!
```

Koşula göre değişkene farklı fonksiyonlar atayabiliriz.

---

## 9. Noktalı Virgül Kullanımı

Function Declaration:

```javascript
function topla(a, b) {
    return a + b;
}
```

Function Expression:

```javascript
let topla = function(a, b) {
    return a + b;
};
```

Function Expression örneğinde noktalı virgül kullanmamızın nedeni, fonksiyonun bir değişkene atanan ifade olmasıdır.

Noktalı virgül, atama ifadesinin sonunda kullanılır.

---

## 10. Function Expression ve Function Declaration Karşılaştırması

| Özellik | Function Declaration | Function Expression |
|---|---|---|
| Tanımlama şekli | Doğrudan fonksiyon tanımlanır. | Fonksiyon bir değişkene atanır. |
| Fonksiyon adı | Genellikle vardır. | Anonim olabilir. |
| Önceden çağırma | Evet | `let` ile hayır |
| Noktalı virgül | Genellikle kullanılmaz. | Atama sonunda kullanılır. |
| Kullanım | Genel fonksiyonlar | Değişkene fonksiyon atamak |

---

## 11. Konu Özeti

Bu derste öğrendiğimiz temel kavramlar:

- Function Expression: Fonksiyonun bir değişkene atanarak oluşturulmasıdır.
- Function Declaration: Fonksiyonun doğrudan tanımlanmasıdır.
- Hoisting: Bazı tanımların kod çalışmadan önce erişilebilir hâle gelmesidir.
- Anonymous Function: İsimsiz fonksiyondur.
- Callback Function: Başka bir fonksiyona parametre olarak gönderilen fonksiyondur.
- Fonksiyonları değişkenlere atayabilir ve başka değişkenlere kopyalayabiliriz.
- `fonksiyon` ile `fonksiyon()` aynı anlama gelmez. İlki fonksiyonun kendisini, ikincisi fonksiyonun çağrılmasını ifade eder.
- Callback fonksiyonları kullanıcı etkileşimlerinde ve olay dinleyicilerinde sıkça kullanılır.

---

## 12. Teknik Sözlük (Technical Vocabulary)

| İngilizce | Türkçe | Açıklama |
|---|---|---|
| Function | Fonksiyon | Belirli bir işlemi gerçekleştiren kod bloğu |
| Function Expression | Fonksiyon ifadesi | Fonksiyonun bir ifade olarak oluşturulması ve genellikle değişkene atanması |
| Function Declaration | Fonksiyon tanımlama | Fonksiyonun doğrudan isimlendirilerek tanımlanması |
| Anonymous Function | Anonim fonksiyon | İsmi olmayan fonksiyon |
| Callback Function | Geri çağırım fonksiyonu | Başka bir fonksiyona parametre olarak gönderilen fonksiyon |
| Hoisting | Yukarı taşıma | Bazı tanımların çalışma öncesinde erişilebilir hâle gelmesi |
| Scope | Kapsam | Değişken veya fonksiyona erişilebilen alan |
| Parameter | Parametre | Fonksiyon tanımlanırken belirtilen değişken |
| Argument | Argüman | Fonksiyon çağrılırken gönderilen gerçek değer |
| Assignment | Atama | Bir değişkene değer verme |
| Value | Değer | Bir değişkenin taşıdığı veri |
| Invoke | Çağırmak | Bir fonksiyonu çalıştırmak |
| Copy | Kopyalamak | Bir değeri başka bir değişkene aktarmak |
| Event | Olay | Tıklama, klavye kullanımı gibi gerçekleşen etkileşim |
| Event Listener | Olay dinleyici | Bir olayın gerçekleşmesini bekleyen yapı |
| Click | Tıklama | Fareyle tıklama olayı |
| Alert | Uyarı | Tarayıcıda uyarı penceresi açan JavaScript metodu |
| Expression | İfade | Bir değer üreten kod parçası |
| Strict Mode | Sıkı mod | JavaScript'in daha katı kurallarla çalışmasını sağlayan mod |

---

**Hatırlatma:** Function Declaration, Function Expression ve Callback konularını birbirinden ayırabilmek için örnekleri kendin yazarak tekrar et. Özellikle `fonksiyon` ve `fonksiyon()` arasındaki farkı iyi öğren.