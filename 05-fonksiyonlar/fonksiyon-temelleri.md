# JavaScript Fonksiyonlarının Temelleri

## 1. Fonksiyon Nedir?

Fonksiyonlar, belirli bir görevi yerine getiren ve ihtiyaç duyulduğunda tekrar çalıştırılabilen kod bloklarıdır.

Fonksiyonlar sayesinde aynı kodu defalarca yazmak yerine bir kez tanımlar ve gerektiğinde çağırırız.

### Fonksiyon tanımlama

```js
function mesajGoster() {
  console.log("Merhaba!");
}
```

Bu kod fonksiyonu **tanımlar**, ancak henüz çalıştırmaz.

### Fonksiyonu çağırma

```js
mesajGoster();
```

Fonksiyonun adının ardından parantez kullanarak fonksiyonu çağırırız.

### Bir fonksiyonu birden fazla kez çağırma

```js
function mesajGoster() {
  console.log("Merhaba!");
}

mesajGoster();
mesajGoster();
mesajGoster();
```

Çıktı:

```text
Merhaba!
Merhaba!
Merhaba!
```

Fonksiyon, her çağrıldığında içindeki kodu yeniden çalıştırır.

## 2. Fonksiyonun Yapısı

```js
function topla(a, b) {
  return a + b;
}
```

Bu yapının parçaları:

- `function`: Fonksiyon tanımlamak için kullanılan anahtar kelime.
- `topla`: Fonksiyonun adı.
- `a, b`: Parametreler.
- `{ }`: Fonksiyonun gövdesini belirtir.
- `return`: Hesaplanan değeri fonksiyonun çağrıldığı yere döndürür.

Fonksiyon tanımlamak ile fonksiyonu çağırmak farklı işlemlerdir.

```js
function topla(a, b) {
  return a + b;
}

console.log(topla(3, 5));
```

Çıktı:

```text
8
```

## 3. Parametreler ve Argümanlar

**Parametre**, fonksiyon tanımlanırken parantez içine yazılan değişkendir.

**Argüman**, fonksiyon çağrılırken parametrelere gönderilen gerçek değerdir.

```js
function selamla(isim) {
  console.log("Merhaba " + isim);
}

selamla("Kübra");
selamla("Ayşe");
```

Çıktı:

```text
Merhaba Kübra
Merhaba Ayşe
```

Bu örnekte `isim` parametre, `"Kübra"` ve `"Ayşe"` ise argümandır.

### Birden fazla parametre

```js
function mesajGoster(gonderen, mesaj) {
  console.log(gonderen + ": " + mesaj);
}

mesajGoster("Ece", "Merhaba!");
```

Çıktı:

```text
Ece: Merhaba!
```

Argümanlar, parametrelere yazılış sırasına göre atanır.

## 4. Yerel Değişkenler (Local Variables)

Fonksiyonun içinde tanımlanan değişkenlere yerel değişken denir. Bu değişkenlere normalde yalnızca tanımlandıkları fonksiyonun içinden erişilebilir.

```js
function mesajGoster() {
  let mesaj = "Merhaba!";
  console.log(mesaj);
}

mesajGoster();
```

Çıktı:

```text
Merhaba!
```

Fonksiyonun dışında `mesaj` değişkenini kullanmaya çalışırsak erişim hatası alırız:

```js
function mesajGoster() {
  let mesaj = "Merhaba!";
}

console.log(mesaj); // ReferenceError
```

Çünkü `mesaj`, fonksiyonun dışında tanımlanmamıştır.

## 5. Dış Değişkenler (Outer Variables)

Fonksiyonlar, kendi kapsamları içinde aynı isimli bir değişken tanımlanmamışsa dışarıda tanımlanmış değişkenlere erişebilir.

```js
let kullaniciAdi = "Kübra";

function mesajGoster() {
  console.log("Merhaba " + kullaniciAdi);
}

mesajGoster();
```

Çıktı:

```text
Merhaba Kübra
```

### Dış değişkeni değiştirmek

```js
let puan = 5;

function arttir() {
  puan = puan + 2;
}

arttir();
console.log(puan);

arttir();
console.log(puan);
```

Çıktı:

```text
7
9
```

Her `arttir()` çağrısında aynı dış değişkenin mevcut değerine 2 eklenir.

### Aynı isimli yerel değişken

```js
let isim = "Kübra";

function goster() {
  let isim = "Ayşe";
  console.log(isim);
}

goster();
console.log(isim);
```

Çıktı:

```text
Ayşe
Kübra
```

Fonksiyonun içindeki `isim` ayrı bir yerel değişkendir. Dışarıdaki `isim` değişkenini değiştirmez.

## 6. Varsayılan Parametreler (Default Parameters)

Bir fonksiyona argüman gönderilmediğinde parametrenin varsayılan bir değer almasını sağlayabiliriz.

```js
function selamla(isim = "Misafir") {
  console.log("Merhaba " + isim);
}

selamla("Kübra");
selamla();
```

Çıktı:

```text
Merhaba Kübra
Merhaba Misafir
```

`isim` parametresine değer verilmediği için `"Misafir"` kullanılır.

### Argüman verilmezse ne olur?

```js
function mesajGoster(gonderen, mesaj) {
  console.log(gonderen + ": " + mesaj);
}

mesajGoster("Kübra");
```

Çıktı:

```text
Kübra: undefined
```

`mesaj` parametresine bir değer gönderilmediği ve varsayılan değer tanımlanmadığı için değeri `undefined` olur.

### `undefined` gönderilmesi

```js
function selamla(isim = "Misafir") {
  console.log(isim);
}

selamla(undefined);
```

Çıktı:

```text
Misafir
```

Bir parametreye `undefined` gönderilirse varsayılan değer kullanılır.

## 7. Değer Döndürme: `return`

`return`, fonksiyonun sonucunu çağrıldığı yere döndürür.

```js
function topla(a, b) {
  return a + b;
}

let sonuc = topla(3, 5);

console.log(sonuc);
```

Çıktı:

```text
8
```

Burada:

1. `topla(3, 5)` çağrılır.
2. `a + b` hesaplanır ve 8 bulunur.
3. `return`, 8 değerini fonksiyonun çağrıldığı yere döndürür.
4. Dönen değer `sonuc` değişkenine atanır.
5. `console.log(sonuc)` ekrana 8 yazdırır.

### `return` olmadan ne olur?

```js
function topla(a, b) {
  a + b;
}

let sonuc = topla(3, 5);
console.log(sonuc);
```

Çıktı:

```text
undefined
```

`a + b` işlemi yazılmış olsa da sonucu döndüren bir `return` yoktur. Fonksiyon açıkça bir değer döndürmediği için sonucu `undefined` olur.

**Önemli:** Bir işlemi yapmak ile o işlemin sonucunu fonksiyon dışına döndürmek aynı şey değildir.

## 8. `return` ile `console.log()` Arasındaki Fark

Bu iki komut farklı amaçlarla kullanılır.

- `console.log()`: Değeri konsola yazdırır.
- `return`: Değeri fonksiyonun çağrıldığı yere döndürür.

### Örnek 1: Yalnızca `console.log()`

```js
function hesapla(x) {
  console.log(x * 2);
}

let sonuc = hesapla(4);
console.log(sonuc);
```

Çıktı:

```text
8
undefined
```

İlk satırdaki `8`, fonksiyonun içindeki `console.log()` tarafından yazdırılır.

Fonksiyon `return` kullanmadığı için `sonuc` değişkenine `undefined` atanır.

### Örnek 2: Yalnızca `return`

```js
function hesapla(x) {
  return x * 2;
}

let sonuc = hesapla(4);
console.log(sonuc);
```

Çıktı:

```text
8
```

Fonksiyon 8 değerini döndürür. Dışarıdaki `console.log()` bu değeri ekrana yazdırır.

### Örnek 3: Hem `console.log()` hem `return`

```js
function carp(a, b) {
  console.log(a * b);
  return a * b;
}

let sonuc = carp(2, 4);
console.log(sonuc);
```

Çıktı:

```text
8
8
```

İlk 8, fonksiyonun içindeki `console.log()` tarafından yazdırılır.

İkinci 8, `return` ile döndürülen değerin `sonuc` değişkenine atanması ve sonrasında konsola yazdırılmasıyla oluşur.

### Dönen değeri başka bir işlemde kullanmak

```js
function hesapla(x) {
  return x * 2;
}

console.log(hesapla(4) + 1);
```

Çıktı:

```text
9
```

Çünkü `hesapla(4)` sonucu 8'dir. Bu değer, dışarıdaki toplama işleminde kullanılır: `8 + 1 = 9`.

## 9. `return` Fonksiyonu Durdurur

Fonksiyon, `return` satırına ulaştığında çalışmayı sonlandırır.

```js
function kontrolEt() {
  console.log("A");
  return;
  console.log("B");
}

kontrolEt();
```

Çıktı:

```text
A
```

`return` satırından sonraki `console.log("B")` çalışmaz.

`return` tek başına kullanıldığında bir değer döndürmez; fonksiyonun sonucu `undefined` olur.

## 10. `undefined` Nedir?

`undefined`, bir değerin tanımlı olmadığını veya mevcut olmadığını gösteren JavaScript değeridir.

Bir fonksiyon açıkça bir değer döndürmüyorsa sonucu `undefined` olur.

```js
function birSeyYap() {
  console.log("İşlem yapıldı");
}

let sonuc = birSeyYap();

console.log(sonuc);
```

Çıktı:

```text
İşlem yapıldı
undefined
```

İlk satır, fonksiyonun içindeki `console.log()` tarafından yazdırılır. İkinci satırda ise fonksiyonun döndürdüğü değer gösterilir.

`undefined` ile `NaN` aynı değildir:

- `undefined`: Tanımlanmamış veya mevcut olmayan değer.
- `NaN`: Geçerli bir sayısal sonuç elde edilemediğini gösteren değer.

Örneğin:

```js
function hesapla() {
  return;
}

console.log(hesapla()); // undefined
console.log(undefined + 1); // NaN
```

## 11. `return` Sonrası Satır Atlamamak

Döndürülecek değeri `return` ile aynı satırda yazmak güvenlidir.

Doğru kullanım:

```js
function topla(a, b) {
  return a + b;
}
```

Yanlış kullanım:

```js
function topla(a, b) {
  return
  a + b;
}

console.log(topla(3, 5));
```

Çıktı:

```text
undefined
```

JavaScript, `return` ifadesinden sonra satır sonu geldiğinde otomatik olarak noktalı virgül ekleyebilir. Böylece fonksiyon değeri döndürmeden sona erer.

## 12. Fonksiyonları İsimlendirme

Fonksiyon adları, fonksiyonun ne yaptığını açıklamalıdır.

Örnekler:

- `showMessage()` — mesaj gösterir.
- `getAge()` — yaş değerini alır veya döndürür.
- `calculateSum()` — toplamı hesaplar.
- `createForm()` — form oluşturur.
- `checkPermission()` — izni kontrol eder.

Genellikle bir fonksiyonun tek ve belirgin bir sorumluluğunun olması kodu daha anlaşılır hâle getirir.

Örneğin, `getAge()` isimli bir fonksiyonun yaş değerini döndürmesi beklenir; hem yaş değerini döndürüp hem de ekrana mesaj yazdırması görevlerin birbirine karışmasına neden olabilir.

## 13. Konunun Özeti

- Fonksiyonlar, tekrar kullanılabilen kod bloklarıdır.
- Fonksiyon tanımlamak, fonksiyonu çalıştırmak anlamına gelmez; çalıştırmak için çağırmak gerekir.
- Parametreler fonksiyonun tanımında, argümanlar çağrılırken yazılır.
- Yerel değişkenler yalnızca kendi kapsamlarında kullanılabilir.
- Fonksiyonlar dış değişkenlere erişebilir ve onları değiştirebilir.
- Varsayılan parametreler, argüman verilmediğinde kullanılacak değeri belirler.
- `return`, bir değeri fonksiyonun çağrıldığı yere döndürür.
- `console.log()`, değerleri konsola yazdırır; kendiliğinden değer döndürmez.
- Bir fonksiyon açıkça değer döndürmezse sonucu `undefined` olur.
- `return` çalıştığında fonksiyonun yürütülmesi sona erer.
- Anlamlı fonksiyon isimleri ve tek sorumluluk, kodun okunabilirliğini artırır.

---

## English Technical Vocabulary — İngilizce Teknik Terimler

| English term | Türkçe karşılığı | Açıklama |
|---|---|---|
| Function | Fonksiyon | Belirli bir işi yapan, çağrılarak çalıştırılabilen kod bloğu. |
| Function declaration | Fonksiyon tanımlama | `function` anahtar kelimesiyle fonksiyon oluşturma işlemi. |
| Function call | Fonksiyon çağrısı | Tanımlanmış fonksiyonu çalıştırma işlemi. |
| Parameter | Parametre | Fonksiyon tanımında parantez içinde belirtilen değişken. |
| Argument | Argüman | Fonksiyon çağrılırken parametrelere gönderilen değer. |
| Function body | Fonksiyon gövdesi | Fonksiyonun yapacağı işlemlerin yazıldığı `{ }` bloğu. |
| Local variable | Yerel değişken | Yalnızca tanımlandığı kapsamda kullanılabilen değişken. |
| Outer variable | Dış değişken | Fonksiyonun dışında tanımlanan ve fonksiyonun erişebildiği değişken. |
| Global variable | Global değişken | Geniş bir kapsamda erişilebilen değişken. |
| Default parameter | Varsayılan parametre | Argüman verilmediğinde kullanılacak önceden belirlenmiş değer. |
| Return | Geri döndürmek | Fonksiyonun sonucunu çağrıldığı yere iletmek. |
| Return value | Dönüş değeri | Fonksiyonun `return` ile döndürdüğü değer. |
| Console | Konsol | Kod çıktılarının ve hata mesajlarının incelenebildiği geliştirici aracı. |
| `console.log()` | Konsola yazdırmak | Bir değeri konsolda görüntülemek için kullanılan metot. |
| `undefined` | Tanımsız değer | Bir değişkene değer atanmamış veya bir fonksiyonun değer döndürmemiş olabileceğini gösteren JavaScript değeri. |
| `NaN` | Sayı değil | Geçerli bir sayısal sonuç olmadığını belirten değer; İngilizcesi *Not a Number*. |
| Scope | Kapsam | Bir değişkenin nereden erişilebilir olduğunu belirleyen alan. |
| Reusable code | Yeniden kullanılabilir kod | Tekrar yazmak yerine birden fazla kez kullanılabilen kod. |
| Readability | Okunabilirlik | Kodun insanlar tarafından ne kadar kolay anlaşılabildiği. |
| Naming convention | İsimlendirme kuralı | Değişken ve fonksiyonlara isim verirken izlenen ortak kurallar. |
| Strict | Sıkı | Katı; `strict mode` bağlamında JavaScript'in bazı hatalı kullanımlara karşı daha sıkı kurallar uygulaması. |
