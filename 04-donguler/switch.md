# JavaScript — switch 2.13

## 1. switch Nedir?

`switch`, bir ifadenin değerine göre farklı kod bloklarından birini çalıştırmamızı sağlayan koşul yapısıdır.

Bir değişkenin alabileceği birden fazla sabit değeri kontrol etmek istediğimizde kullanılabilir.

`switch`, bazı durumlarda `if...else if...else` yapısına alternatif olarak tercih edilir.

### Örnek

```js
"use strict";

let gun = 2;

switch (gun) {
    case 1:
        console.log("Pazartesi");
        break;

    case 2:
        console.log("Sali");
        break;

    case 3:
        console.log("Carsamba");
        break;

    default:
        console.log("Bilinmeyen gun");
}
```

**Çıktı:**

```text
Sali
```

**Açıklama:**

- `gun` değişkeninin değeri `2` olduğu için `case 2` çalışır.
- `console.log("Sali")` komutu ekrana mesajı yazdırır.
- `break`, `switch` yapısından çıkılmasını sağlar.
- `default`, hiçbir `case` eşleşmediğinde çalışır.

## 2. switch Yapısının Söz Dizimi

```js
switch (ifade) {
    case deger1:
        // deger1 ile eşleşirse çalışır
        break;

    case deger2:
        // deger2 ile eşleşirse çalışır
        break;

    default:
        // Hiçbir değer eşleşmezse çalışır
}
```

### switch yapısının parçaları

**`switch`**

Kontrol edilecek ifadeyi belirtir.

**`case`**

Kontrol edilen ifadenin hangi değere eşit olduğunu belirler.

**`break`**

Çalışan `case` bloğundan sonra `switch` yapısından çıkılmasını sağlar.

**`default`**

Hiçbir `case` eşleşmediğinde çalışır. Kullanılması zorunlu değildir.

## 3. switch Nasıl Çalışır?

JavaScript, `switch` ifadesini değerlendirir ve değerini `case` seçenekleriyle karşılaştırır.

Eşleşen `case` bulunursa o bölümden itibaren kod çalıştırılır.

Örneğin:

```js
"use strict";

let renk = "mavi";

switch (renk) {
    case "kirmizi":
        console.log("Kirmizi renk secildi.");
        break;

    case "mavi":
        console.log("Mavi renk secildi.");
        break;

    case "yesil":
        console.log("Yesil renk secildi.");
        break;

    default:
        console.log("Gecersiz renk.");
}
```

**Çıktı:**

```text
Mavi renk secildi.
```

Çünkü `renk` değişkeninin değeri `"mavi"` olduğu için `case "mavi"` bloğu çalışır.

## 4. break Neden Kullanılır?

`break`, `switch` yapısından çıkmak için kullanılır.

Bir `case` bloğunda `break` kullanılmazsa JavaScript sonraki bölümlerin kodlarını da çalıştırabilir. Bu davranışa **fall-through** denir.

### Örnek

```js
"use strict";

let sayi = 1;

switch (sayi) {
    case 1:
        console.log("Bir");

    case 2:
        console.log("Iki");
        break;

    default:
        console.log("Diger");
}
```

**Çıktı:**

```text
Bir
Iki
```

**Neden?**

`case 1` bloğunda `break` olmadığı için JavaScript bir sonraki `case` bloğuna da geçer. Bu nedenle hem `"Bir"` hem de `"Iki"` yazdırılır.

İstenmeyen devam etmeleri önlemek için genellikle her `case` bloğunun sonunda `break` kullanılır.

## 5. Birden Fazla case Aynı Kod Bloğunu Çalıştırabilir

Birden fazla değerde aynı işlemi gerçekleştirmek istediğimizde `case` seçeneklerini art arda yazabiliriz.

### Örnek: Hafta sonu kontrolü

```js
"use strict";

let gun = "Cumartesi";

switch (gun) {
    case "Cumartesi":
    case "Pazar":
        console.log("Hafta sonu!");
        break;

    default:
        console.log("Hafta ici.");
}
```

**Çıktı:**

```text
Hafta sonu!
```

**Açıklama:**

`Cumartesi` ve `Pazar` seçenekleri aynı kod bloğunu çalıştırır. Bu iki `case` arasında kod bulunmadığı için akış ortak bloğa devam eder.

## 6. Veri Türleri ve Katı Eşitlik

`switch`, değerleri katı eşitlik (`===`) mantığıyla karşılaştırır. Bu nedenle hem değer hem de veri türü eşleşmelidir.

### Örnek

```js
"use strict";

let deger = "5";

switch (deger) {
    case 5:
        console.log("Sayi");
        break;

    case "5":
        console.log("Metin");
        break;

    default:
        console.log("Eslesme yok");
}
```

**Çıktı:**

```text
Metin
```

**Açıklama:**

- `5` bir `number` türüdür.
- `"5"` bir `string` türüdür.
- Değerleri benzer olsa da veri türleri farklıdır.
- `deger` değişkeni `"5"` olduğu için ikinci `case` çalışır.

## 7. switch ile if...else Arasındaki Fark

Her iki yapı da koşullara göre kod çalıştırmak için kullanılır; ancak farklı durumlarda daha kullanışlı olabilirler.

### switch ne zaman kullanılır?

Bir değişkenin belirli ve sabit seçeneklerini kontrol ederken kullanışlıdır.

Örnek: Kullanıcının rolünün `"admin"`, `"editor"` veya `"user"` olması.

### if...else ne zaman kullanılır?

Karşılaştırma, aralık ve mantıksal koşullar için daha esnektir.

Örnek:

```js
"use strict";

let yas = 20;

if (yas >= 18) {
    console.log("Resit.");
} else {
    console.log("Resit degil.");
}
```

**Çıktı:**

```text
Resit.
```

Yaşın 18'e eşit veya büyük olup olmadığını kontrol etmek için `if...else` daha uygundur.

## 8. Özet

- `switch`, bir ifadenin değerine göre farklı kod bloklarını çalıştırır.
- `case`, kontrol edilecek seçenekleri belirtir.
- `break`, `switch` yapısından çıkar.
- `default`, hiçbir `case` eşleşmediğinde çalışır.
- `break` kullanılmazsa sonraki `case` blokları da çalışabilir.
- Birden fazla `case` aynı kod bloğunu paylaşabilir.
- `switch`, karşılaştırmalarda katı eşitlik (`===`) mantığını kullanır.
- Sabit seçenekler için `switch`, karmaşık koşullar için çoğunlukla `if...else` tercih edilebilir.

## 9. İngilizce — Türkçe Teknik Terimler Sözlüğü

| İngilizce Terim | Türkçe Karşılığı | Açıklama |
|---|---|---|
| Switch statement | Seçim deyimi | Bir değere göre farklı kod bölümlerini çalıştırır. |
| Case | Durum / seçenek | `switch` içinde kontrol edilen değerlerden biridir. |
| Break | Sonlandırma / çıkış | `switch` veya döngüden çıkılmasını sağlar. |
| Default | Varsayılan | Hiçbir `case` eşleşmediğinde çalışabilen bölümdür. |
| Condition | Koşul | Bir durumun doğru veya yanlış olup olmadığını belirleyen ifade. |
| Expression | İfade | Değerlendirildiğinde bir değer üreten kod parçası. |
| Strict equality | Katı eşitlik | Değeri ve veri türünü birlikte karşılaştırır (`===`). |
| Data type | Veri türü | Bir değerin türü; örneğin `string` veya `number`. |
| String | Metin | Metin değerlerini temsil eden veri türü. |
| Number | Sayı | Sayısal değerleri temsil eden veri türü. |
| Fall-through | Sonraki duruma devam etme | `break` olmadığı için sonraki `case` kodlarının da çalışması. |
| Syntax | Söz dizimi | Kodun yazılması gereken kurallar bütünü. |
| Code block |