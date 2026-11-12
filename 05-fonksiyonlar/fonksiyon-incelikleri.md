# JavaScript Special – JavaScript İncelikleri

## 1. Kod Yapısı (Code Structure)

JavaScript'te komutlar genellikle noktalı virgül (`;`) ile birbirinden ayrılır.

```javascript
alert("Merhaba");
alert("Dünya");
```

Her komutu ayrı satıra yazdığımızda JavaScript çoğu zaman noktalı virgülü otomatik olarak ekler. Buna **Automatic Semicolon Insertion (ASI)** denir.

Ancak otomatik noktalı virgül ekleme her durumda doğru çalışmayabilir. Bu nedenle komutların sonuna noktalı virgül koymak iyi bir alışkanlıktır.

**Önemli:**
- Komutların sonunda `;` kullanılır.
- Fonksiyon ve döngü bloklarının kapanış süslü parantezinden sonra genellikle `;` kullanılmaz.
- Kodların düzenli yazılması okunabilirliği artırır.

---

## 2. Sıkı Mod (Strict Mode)

JavaScript'in daha güvenli ve kurallı çalışmasını sağlayan moda Strict Mode denir.

```javascript
"use strict";

let isim = "Kübra";

console.log(isim);
```

`"use strict"` ifadesi dosyanın en başında yazılmalıdır.

Strict Mode sayesinde JavaScript bazı hatalı kullanımlara izin vermez.

Örneğin:

```javascript
"use strict";

isim = "Kübra";

console.log(isim);
```

Bu kod hata verir. Çünkü `isim` değişkeni önceden `let`, `const` veya `var` ile tanımlanmamıştır.

**Unutma:** Strict Mode kullanmak hataları daha erken fark etmemize yardımcı olur.

---

## 3. Değişkenler (Variables)

JavaScript'te değişken tanımlamak için üç anahtar kelime kullanılır:

| Anahtar kelime | Açıklama |
|---|---|
| `let` | Değeri sonradan değiştirilebilir. |
| `const` | Başka bir değere yeniden atanamaz. |
| `var` | Eski değişken tanımlama yöntemidir. |

Örnek:

```javascript
let yas = 24;
yas = 25;

const isim = "Kübra";

console.log(yas);
console.log(isim);
```

`let` ile tanımlanan değişkenin değeri değiştirilebilir. `const` ile tanımlanan değişkene yeniden değer atanamaz.

### Değişken isimlendirme kuralları

- Harf, rakam, `$` ve `_` kullanılabilir.
- Değişken adı rakamla başlayamaz.
- Boşluk kullanılamaz.
- JavaScript anahtar kelimeleri değişken adı olarak kullanılamaz.
- Değişken isimleri büyük-küçük harfe duyarlıdır.

Örnek:

```javascript
let kullaniciAdi = "Kübra";
let yas2 = 24;
let _sayi = 10;
let $fiyat = 100;
```

### JavaScript dinamik türlendirmeye sahiptir

Bir değişkenin değeri sonradan farklı bir veri türüne dönüşebilir.

```javascript
let deger = 10;

deger = "Merhaba";

console.log(deger);
```

Çıktı:

```text
Merhaba
```

---

## 4. Veri Türleri (Data Types)

JavaScript'te 7 temel veri türü bulunur.

| Veri türü | Açıklama | Örnek |
|---|---|---|
| `number` | Sayılar | `25`, `3.14` |
| `string` | Metinler | `"Merhaba"` |
| `boolean` | Doğru veya yanlış | `true`, `false` |
| `null` | Bilerek boş bırakılmış değer | `null` |
| `undefined` | Değer atanmamış değişken | `undefined` |
| `object` | Nesneler ve karmaşık veri yapıları | `{isim: "Kübra"}` |
| `symbol` | Benzersiz tanımlayıcılar | `Symbol("id")` |

Örnek:

```javascript
let isim = "Kübra";
let yas = 24;
let aktifMi = true;
let adres = null;
let sonuc;

console.log(typeof isim);
console.log(typeof yas);
console.log(typeof aktifMi);
console.log(typeof sonuc);
```

### typeof operatörü

Bir değişkenin veya değerin veri türünü öğrenmek için `typeof` kullanılır.

```javascript
console.log(typeof "Merhaba"); // string
console.log(typeof 25);        // number
console.log(typeof true);      // boolean
console.log(typeof undefined); // undefined
```

**Dikkat edilmesi gereken özel durum:**

```javascript
console.log(typeof null);
```

Çıktı:

```text
object
```

Bu, JavaScript'in eski dönemlerinden kalan bilinen bir özelliktir. `null` aslında bir nesne değildir.

Fonksiyonlarda da özel bir davranış vardır:

```javascript
function selamla() {
    alert("Merhaba");
}

console.log(typeof selamla);
```

Çıktı:

```text
function
```

---

## 5. Kullanıcıyla Etkileşim (Interaction)

Tarayıcı ortamında kullanıcıyla etkileşim kurmak için üç temel fonksiyon kullanılır:

### alert()

Kullanıcıya mesaj göstermek için kullanılır.

```javascript
alert("Merhaba Kübra!");
```

### prompt()

Kullanıcıdan bilgi almak için kullanılır.

```javascript
let isim = prompt("Adınız nedir?");

alert("Merhaba " + isim);
```

`prompt()` kullanıcının girdiği değeri string olarak döndürür. Kullanıcı iptal ederse `null` döndürür.

Örneğin kullanıcı 25 yazarsa:

```javascript
let yas = prompt("Yaşınızı giriniz:");

console.log(typeof yas);
```

Çıktı:

```text
string
```

Sayısal işlem yapmak istiyorsak dönüşüm yapmalıyız:

```javascript
let yas = Number(prompt("Yaşınızı giriniz:"));

console.log(yas + 5);
```

### confirm()

Kullanıcıya Tamam ve İptal seçenekleri sunar.

```javascript
let onay = confirm("Devam etmek istiyor musunuz?");

console.log(onay);
```

- Tamam seçilirse `true`
- İptal seçilirse `false`

### Üç fonksiyonun karşılaştırması

| Fonksiyon | Görevi | Döndürdüğü değer |
|---|---|---|
| `alert()` | Mesaj gösterir. | `undefined` |
| `prompt()` | Kullanıcıdan bilgi alır. | `string` veya `null` |
| `confirm()` | Kullanıcıdan onay alır. | `boolean` |

**Önemli:** Bu fonksiyonlar tarayıcıya aittir. Kullanıcı etkileşimde bulunana kadar kodun devam etmesini bekletirler.

---

## 6. Operatörler (Operators)

JavaScript'te işlemleri gerçekleştirmek için operatörler kullanılır.

### Aritmetik operatörler (Arithmetic Operators)

| Operatör | Görevi | Örnek |
|---|---|---|
| `+` | Toplama | `5 + 3` |
| `-` | Çıkarma | `5 - 3` |
| `*` | Çarpma | `5 * 3` |
| `/` | Bölme | `10 / 2` |
| `%` | Mod alma | `10 % 3` |
| `**` | Üs alma | `2 ** 3` |

### Artırma ve azaltma operatörleri

```javascript
let sayi = 5;

sayi++;

console.log(sayi); // 6
```

`++` sayıyı bir artırır. `--` sayıyı bir azaltır.

Önce ve sonra artırma arasındaki fark:

```javascript
let sayi = 5;

console.log(sayi++); // 5
console.log(sayi);   // 6
```

```javascript
let sayi = 5;

console.log(++sayi); // 6
console.log(sayi);   // 6
```

- `sayi++`: Önce mevcut değeri kullanır, sonra artırır.
- `++sayi`: Önce artırır, sonra yeni değeri kullanır.

### Atama operatörleri (Assignment Operators)

Bir değişkene değer atamak veya mevcut değerini güncellemek için kullanılır.

```javascript
let sayi = 10;

sayi += 5; // sayi = sayi + 5
sayi -= 2; // sayi = sayi - 2
sayi *= 3; // sayi = sayi * 3
sayi /= 2; // sayi = sayi / 2

console.log(sayi);
```

### String ve Number dönüşümü

JavaScript'te `+` operatörü string ile kullanıldığında birleştirme yapabilir.

```javascript
console.log("5" + 2); // "52"
console.log(5 + "2"); // "52"
console.log("5" - 2); // 3
console.log("5" * 2); // 10
```

**Neden?**

- `+` operatörü string birleştirme yapabilir.
- `-`, `*` ve `/` gibi matematiksel operatörler genellikle sayısal dönüşüm yapar.

### Karşılaştırma operatörleri (Comparison Operators)

| Operatör | Anlamı |
|---|---|
| `==` | Eşit mi? |
| `===` | Tür ve değer eşit mi? |
| `!=` | Eşit değil mi? |
| `!==` | Tür veya değer farklı mı? |
| `>` | Büyük mü? |
| `<` | Küçük mü? |
| `>=` | Büyük veya eşit mi? |
| `<=` | Küçük veya eşit mi? |

`==` veri türlerini dönüştürerek karşılaştırabilir.

```javascript
console.log(5 == "5");  // true
console.log(5 === "5"); // false
```

**Önemli:** Genel olarak `===` ve `!==` kullanmak daha güvenlidir. Çünkü tür dönüşümünden kaynaklanan beklenmedik sonuçları önler.

### Mantıksal operatörler (Logical Operators)

| Operatör | Anlamı |
|---|---|
| `&&` | VE (AND) |
| `||` | VEYA (OR) |
| `!` | DEĞİL (NOT) |

```javascript
let yas = 24;
let ehliyetVarMi = true;

console.log(yas >= 18 && ehliyetVarMi); // true
console.log(yas < 18 || ehliyetVarMi);  // true
console.log(!ehliyetVarMi);             // false
```

### Üçlü operatör (Ternary Operator)

Basit koşulları tek satırda yazmamızı sağlar.

Yapısı:

```javascript
koşul ? doğruysa : yanlışsa;
```

Örnek:

```javascript
let yas = 20;

let sonuc = yas >= 18 ? "Yetişkin" : "Çocuk";

console.log(sonuc);
```

Çıktı:

```text
Yetişkin
```

---

## 7. Döngüler (Loops)

Döngüler, belirli bir kod bloğunu birden fazla kez çalıştırmamızı sağlar.

### while döngüsü

Koşul doğru olduğu sürece çalışır.

```javascript
let sayi = 1;

while (sayi <= 3) {
    console.log(sayi);
    sayi++;
}
```

Çıktı:

```text
1
2
3
```

### do...while döngüsü

Önce kod bloğunu çalıştırır, sonra koşulu kontrol eder. Bu nedenle en az bir kez çalışır.

```javascript
let sayi = 5;

do {
    console.log(sayi);
    sayi++;
} while (sayi < 5);
```

Çıktı:

```text
5
```

### for döngüsü

Başlangıç, koşul ve artış/azalış bölümlerini tek satırda tanımlamamızı sağlar.

```javascript
for (let i = 1; i <= 3; i++) {
    console.log(i);
}
```

Çıktı:

```text
1
2
3
```

`for` döngüsünün üç bölümü:

```javascript
for (başlangıç; koşul; artış/azalış) {
    // çalışacak kod
}
```

### break

Döngüyü tamamen sonlandırır.

```javascript
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        break;
    }

    console.log(i);
}
```

Çıktı:

```text
1
2
```

### continue

Mevcut turu atlar ve döngünün sonraki turuna geçer.

```javascript
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }

    console.log(i);
}
```

Çıktı:

```text
1
2
4
5
```

**break ve continue farkı:**
- `break`: Döngüyü bitirir.
- `continue`: Sadece o turu atlar.

---

## 8. Switch Yapısı (Switch Statement)

Birden fazla koşulu kontrol etmek için `switch` kullanılır. Bazı durumlarda uzun `if / else if` bloklarına alternatif olabilir.

```javascript
let gun = 2;

switch (gun) {
    case 1:
        alert("Pazartesi");
        break;

    case 2:
        alert("Salı");
        break;

    case 3:
        alert("Çarşamba");
        break;

    default:
        alert("Geçersiz gün");
}
```

Çıktı:

```text
Salı
```

### switch nasıl çalışır?

- `case`: Kontrol edilecek değeri belirtir.
- `break`: Eşleşen durum çalıştıktan sonra switch bloğundan çıkar.
- `default`: Hiçbir case eşleşmezse çalışır.

**Önemli:** `switch` karşılaştırma yaparken `===` kullanır.

Örneğin:

```javascript
let yas = "18";

switch (yas) {
    case 18:
        alert("Sayı olarak 18");
        break;

    case "18":
        alert("String olarak 18");
        break;
}
```

Çıktı:

```text
String olarak 18
```

Çünkü `"18"` string, `18` ise number veri türündedir.

---

## 9. Fonksiyonlar (Functions)

JavaScript'te fonksiyon oluşturmanın üç temel yolu vardır.

### 1. Function Declaration

```javascript
function topla(a, b) {
    return a + b;
}

console.log(topla(5, 10));
```

Çıktı:

```text
15
```

### 2. Function Expression

```javascript
let topla = function(a, b) {
    return a + b;
};

console.log(topla(5, 10));
```

### 3. Arrow Function

```javascript
let topla = (a, b) => a + b;

console.log(topla(5, 10));
```

### Fonksiyonlarda önemli noktalar

**Yerel değişken (Local Variable):**

Fonksiyon içerisinde tanımlanan değişkene yalnızca fonksiyonun içerisinden erişilebilir.

```javascript
function selamla() {
    let mesaj = "Merhaba";
    alert(mesaj);
}

selamla();
```

**Varsayılan parametre (Default Parameter):**

Fonksiyona değer gönderilmediğinde kullanılacak varsayılan değeri belirler.

```javascript
function selamla(isim = "Misafir") {
    return "Merhaba " + isim;
}

console.log(selamla());
console.log(selamla("Kübra"));
```

Çıktı:

```text
Merhaba Misafir
Merhaba Kübra
```

**Return:**

Fonksiyonun sonucunu çağrıldığı yere döndürür ve fonksiyonun çalışmasını sonlandırır.

```javascript
function kareAl(sayi) {
    return sayi * sayi;
}

console.log(kareAl(5));
```

Çıktı:

```text
25
```

Bir fonksiyonda açıkça `return` kullanılmazsa fonksiyon `undefined` döndürür.

```javascript
function mesajGoster() {
    console.log("Merhaba");
}

let sonuc = mesajGoster();

console.log(sonuc);
```

Çıktı:

```text
Merhaba
undefined
```

**Unutma:** `console.log()` ekrana yazdırır, `return` ise fonksiyondan değer döndürür.

---

## 10. Genel Tekrar – Önemli Noktalar

- JavaScript'te komutları noktalı virgülle ayırmak iyi bir alışkanlıktır.
- `"use strict"` daha sıkı kurallar uygulanmasını sağlar.
- `let`, `const` ve `var` değişken tanımlamak için kullanılır.
- JavaScript dinamik türlendirmeye sahiptir.
- `typeof` veri türünü kontrol eder.
- `prompt()` kullanıcıdan string değer alır.
- `confirm()` true veya false döndürür.
- `===` tür ve değer karşılaştırması yapar.
- `+` operatörü string birleştirebilir.
- `break` döngüyü bitirir, `continue` mevcut turu atlar.
- `switch` sıkı karşılaştırma yapar.
- Fonksiyonlar değer döndürmek için `return` kullanır.
- Açıkça return kullanılmayan fonksiyonlar `undefined` döndürür.

---

## 11. Teknik Sözlük (English – Türkçe)

| English Term | Türkçe Anlamı | Açıklama |
|---|---|---|
| Code Structure | Kod Yapısı | Kodun düzenlenme ve yazılma biçimi. |
| Strict Mode | Sıkı Mod | JavaScript'in daha katı kurallarla çalışmasını sağlar. |
| Variable | Değişken | Veri saklamak için kullanılan isimlendirilmiş alan. |
| Declaration | Tanımlama | Bir değişken veya fonksiyon oluşturma işlemi. |
| Assignment | Atama | Bir değişkene değer verme işlemi. |
| Data Type | Veri Türü | Bir değerin hangi türde olduğunu belirtir. |
| Number | Sayı | Sayısal verileri temsil eder. |
| String | Karakter Dizisi | Metin verilerini temsil eder. |
| Boolean | Mantıksal | `true` veya `false` değerlerini temsil eder. |
| Undefined | Tanımsız | Henüz değer atanmamış değeri ifade eder. |
| Null | Boş Değer | Bilerek boş bırakılan değeri ifade eder. |
| Object | Nesne | Birden fazla özellik ve değeri bir arada tutan veri yapısı. |
| Symbol | Sembol | Benzersiz tanımlayıcı oluşturmak için kullanılan veri türü. |
| Operator | Operatör | Değerler üzerinde işlem yapan sembol veya anahtar kelime. |
| Arithmetic | Aritmetik | Matematiksel işlemlerle ilgili. |
| Comparison | Karşılaştırma | Değerlerin birbirine eşit veya farklı olup olmadığını kontrol etme. |
| Strict Equality | Sıkı Eşitlik | Hem veri türünü hem değeri karşılaştırma (`===`). |
| Logical | Mantıksal | Koşullar arasında mantıksal işlem yapma. |
| Interaction | Etkileşim | Kullanıcı ile program arasındaki iletişim. |
| Prompt | Bilgi İsteme | Kullanıcıdan veri girişi isteyen tarayıcı fonksiyonu. |
| Confirm | Onaylama | Kullanıcıdan onay veya ret isteyen tarayıcı fonksiyonu. |
| Alert | Uyarı | Kullanıcıya mesaj gösteren tarayıcı fonksiyonu. |
| Loop | Döngü | Kodun tekrar tekrar çalışmasını sağlayan yapı. |
| Iteration | Yineleme | Döngünün her bir çalışma turu. |
| Break | Sonlandırma | Döngüyü tamamen bitirme komutu. |
| Continue | Devam Etme | Mevcut döngü turunu atlayıp sonraki tura geçme komutu. |
| Switch Statement | Switch Yapısı | Bir değeri birden fazla olası durumla karşılaştıran yapı. |
| Case | Durum | Switch içerisinde kontrol edilen seçenek. |
| Default | Varsayılan | Hiçbir durum eşleşmediğinde çalışan bölüm. |
| Function Declaration | Fonksiyon Tanımlama | `function` anahtar kelimesiyle fonksiyon oluşturma. |
| Function Expression | Fonksiyon İfadesi | Fonksiyonu bir ifade olarak tanımlama. |
| Arrow Function | Ok Fonksiyonu | `=>` işaretiyle oluşturulan kısa fonksiyon yazımı. |
| Parameter | Parametre | Fonksiyon tanımında kullanılan değişken. |
| Argument | Argüman | Fonksiyon çağrılırken gönderilen gerçek değer. |
| Return | Geri Döndürme | Fonksiyondan değer döndürme ve fonksiyonu sonlandırma. |
| Callback | Geri Çağırım | Başka bir fonksiyona argüman olarak gönderilen fonksiyon. |
| Local Variable | Yerel Değişken | Yalnızca tanımlandığı fonksiyon veya kapsam içerisinde erişilebilen değişken. |
| Default Parameter | Varsayılan Parametre | Değer gönderilmediğinde kullanılan parametre değeri. |
| Automatic Semicolon Insertion (ASI) | Otomatik Noktalı Virgül Ekleme | JavaScript'in bazı durumlarda noktalı virgülü otomatik eklemesi. |
| Type Coercion | Tür Dönüşümü | Bir değerin başka bir veri türüne otomatik dönüştürülmesi. |
| Truthy | Doğru Kabul Edilen | Boolean dönüşümünde `true` olarak değerlendirilen değer. |
| Falsy | Yanlış Kabul Edilen | Boolean dönüşümünde `false` olarak değerlendirilen değer. |
| Increment | Artırma | Bir değeri artırma işlemi (`++`). |
| Decrement | Azaltma | Bir değeri azaltma işlemi (`--`). |
| Ternary Operator | Üçlü Operatör | Koşula göre iki sonuçtan birini seçen operatör (`? :`). |
