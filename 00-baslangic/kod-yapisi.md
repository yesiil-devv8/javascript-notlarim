# JavaScript 2.2 — Kod Yapısı (Code Structure)

## 1. İfadeler (Statements)

JavaScript'te ifadeler (statements), bilgisayara bir işlem yaptırmak için yazdığımız komutlardır.

Örnek:

```javascript
alert('Merhaba');
alert('Dünya');
```

**Sonuç:**
- İlk olarak `Merhaba` yazan bir uyarı penceresi açılır.
- Pencere kapatıldıktan sonra `Dünya` yazan ikinci bir uyarı penceresi açılır.

Her komutu ayrı bir satıra yazmak kodun okunmasını kolaylaştırır.

Birden fazla ifadeyi aynı satırda da yazabiliriz:

```javascript
alert('Merhaba'); alert('Dünya');
```

Bu kod da iki uyarı penceresi açar. Ancak kodları ayrı satırlara yazmak daha düzenlidir.

**Unutma:** JavaScript kodlarını okunabilir ve düzenli yazmak, hataları fark etmemizi kolaylaştırır.

---

## 2. Noktalı Virgül (;)

JavaScript'te noktalı virgül (`;`), ifadelerin nerede bittiğini belirtmek için kullanılır.

Örnek:

```javascript
alert('Merhaba');
alert('Nasılsın?');
```

Burada iki ayrı ifade vardır. Her birinin sonunda noktalı virgül kullanılmıştır.

### Noktalı virgül kullanmak zorunlu mu?

JavaScript bazı durumlarda satır sonlarında noktalı virgülü otomatik olarak ekleyebilir. Bu nedenle aşağıdaki kod da çalışır:

```javascript
alert('Merhaba')
alert('Nasılsın?')
```

Ancak her satır sonu ifadenin bittiği anlamına gelmez.

Örnek:

```javascript
alert(3 +
    1
    + 2);
```

**Sonuç:** Uyarı penceresinde `6` görünür.

Çünkü `3 + 1 + 2` tek bir matematiksel işlemdir. Satırlara bölünmüş olsa da ifade devam eder.

### Noktalı virgül neden önemlidir?

- Kodun nerede bittiğini açıkça belirtir.
- Kodun okunmasını kolaylaştırır.
- Bazı satır sonu kaynaklı hatalardan kaçınmaya yardımcı olur.

**Kuralım:** JavaScript öğrenirken ifadelerin sonuna noktalı virgül koymayı alışkanlık haline getireceğim.

---

## 3. Yorum Satırları (Comments)

Yorum satırları, kodun ne yaptığını açıklamak veya bir kod parçasını geçici olarak devre dışı bırakmak için kullanılır.

JavaScript yorumları çalıştırmaz.

### 3.1. Tek satırlık yorum: `//`

```javascript
// Kullanıcıya merhaba mesajı göster
alert('Merhaba');
```

**Sonuç:** `Merhaba` yazan bir uyarı penceresi açılır.

`//` işaretinden sonraki metin yorumdur. JavaScript bu metni çalıştırmaz.

Satırın sonunda da yorum yazabiliriz:

```javascript
alert('Merhaba'); // Uyarı penceresi açar
```

Burada `alert('Merhaba')` çalışır, açıklama kısmı çalıştırılmaz.

### 3.2. Çok satırlı yorum: `/* */`

Birden fazla satırdan oluşan açıklamalar için kullanılır.

```javascript
/*
Bu bir yorumdur.
Birden fazla satıra yazılabilir.
JavaScript bu açıklamaları çalıştırmaz.
*/

alert('Dünya');
```

**Sonuç:** `Dünya` yazan bir uyarı penceresi açılır.

Yorum `/*` ile başlar ve `*/` ile biter.

### 3.3. Kodu yorum haline getirmek

Bir kodu geçici olarak çalıştırmak istemiyorsak yorum haline getirebiliriz.

```javascript
// alert('Merhaba');
alert('Dünya');
```

**Sonuç:** Yalnızca `Dünya` yazan uyarı penceresi açılır.

Çünkü ilk satır yorum haline getirilmiştir.

### HTML ve JavaScript yorumları arasındaki fark

HTML'de:

```html
<!-- Bu bir HTML yorumudur. -->
```

JavaScript'te:

```javascript
// Bu bir JavaScript yorumudur.

/*
Bu da bir JavaScript yorumudur.
*/
```

**Önemli:** HTML yorumları ile JavaScript yorumları farklıdır. JavaScript dosyasında HTML yorum sözdizimini kullanmamalıyım.

---

## 4. Birlikte İnceleyelim

### Örnek 1 — Kaç uyarı penceresi açılır?

```javascript
alert('A');
alert('B');
alert('C');
```

**Cevap:** Üç uyarı penceresi açılır. Her `alert()` çağrısı ayrı bir uyarı penceresi oluşturur. Bir pencere kapatılmadan sonraki pencereye geçilmez.

### Örnek 2 — Hangisi çalıştırılmaz?

```javascript
// alert('Merhaba');
alert('Nasılsın?');
```

**Cevap:** İlk satır yorumdur ve çalıştırılmaz. Yalnızca `Nasılsın?` uyarısı açılır.

### Örnek 3 — Sonuç kaçtır?

```javascript
alert(10 +
    5);
```

**Cevap:** Uyarı penceresinde `15` görünür. Satır değişmiş olsa da matematiksel ifade devam eder.

### Örnek 4 — Aşağıdaki kodda kaç ifade vardır?

```javascript
alert('Bir');
alert('İki');
```

**Cevap:** İki ifade vardır. Her satırda ayrı bir `alert()` çağrısı bulunur.

### Örnek 5 — Yorumun içindeki kod çalışır mı?

```javascript
/*
alert('Merhaba');
alert('Dünya');
*/

alert('Bitti');
```

**Cevap:** Yalnızca `Bitti` uyarısı açılır. İlk iki `alert()` çağrısı çok satırlı yorumun içinde kaldığı için çalıştırılmaz.

---

## 5. Kendimi Test Ediyorum

Önce soruları kendim çözmeye çalışacağım, ardından cevap anahtarını kontrol edeceğim.

### Soru 1

Aşağıdaki kodun sonucu nedir?

```javascript
alert('JavaScript');
alert('Öğreniyorum');
```

A) Tek uyarı penceresi açılır.
B) İki uyarı penceresi açılır.
C) Konsola iki mesaj yazılır.

**Cevap: B.** İki ayrı `alert()` çağrısı vardır. **NOT:** ; olmasa da olur alt alta iki adet alert yazıldı.

### Soru 2

Aşağıdaki kod ne gösterir?

```javascript
alert(4 +
    6);
```

A) 4
B) 6
C) 10

**Cevap: C.** JavaScript `4 + 6` işlemini hesaplar ve sonucu gösterir. 10

### Soru 3

Aşağıdakilerden hangisi tek satırlık JavaScript yorumudur?

A) `<!-- Açıklama -->`
B) `// Açıklama`
C) `** Açıklama **`

**Cevap: B.** JavaScript'te tek satırlık yorum `//` ile başlar.
İç içe yorum satırı yapılamaz.

### Soru 4

Bu kod çalıştırıldığında hangi mesaj görünür?

```javascript
// alert('A');
alert('B');
```

A) A
B) B
C) Hem A hem B

**Cevap: B.** İlk satır yorumdur. İkinci satır çalıştırılır.

### Soru 5

Aşağıdaki çok satırlı yorum nerede biter?

```javascript
/*
Bu bir yorumdur.
Bu da yorumdur.
*/
alert('Merhaba');
```

A) İlk satırın sonunda
B) `*/` işaretinde
C) `alert()` satırının sonunda

**Cevap: B.** Çok satırlı yorum `/*` ile başlar ve `*/` ile biter.

---

## 6. Kısa Özet

- **İfade (statement):** JavaScript'in gerçekleştirmesini istediğimiz komut.
- **Noktalı virgül (`;`):** İfadelerin sonunu belirtmek için kullanılır.
- **Tek satırlık yorum (`//`):** Satırın geri kalanını yorum yapar.
- **Çok satırlı yorum (`/* */`):** İki işaret arasındaki bölümü yorum yapar.
- **HTML yorumu (`<!-- -->`):** HTML içinde kullanılır; JavaScript yorumuyla aynı değildir.

### Konuyu öğrendiğimi nasıl anlarım?

- Bir kodun kaç ifade içerdiğini belirleyebiliyorum.
- Kodun sonucunu çalıştırmadan tahmin edebiliyorum.
- Noktalı virgülün görevini açıklayabiliyorum.
- Tek ve çok satırlı yorumları ayırt edebiliyorum.
- Yorum satırındaki kodun neden çalışmadığını açıklayabiliyorum.

---

## 7. İngilizce Terimler (English Vocabulary)

| English | Türkçe | Açıklama |
|---|---|---|
| Statement | Komut / ifade | JavaScript'in gerçekleştirmesini istediğimiz komut. |
| Semicolon | Noktalı virgül | `;` işareti. İfadelerin sonunu belirtmek için kullanılır. |
| Comment | Yorum | Kod hakkında açıklama yazmak veya kodu geçici olarak devre dışı bırakmak için kullanılır. |
| Single-line comment | Tek satırlık yorum | `//` ile oluşturulan yorum. |
| Multi-line comment | Çok satırlı yorum | `/* ... */` arasına yazılan yorum. |
| HTML comment | HTML yorumu | HTML içinde `<!-- ... -->` ile oluşturulan yorum. |
| Code | Kod | Bilgisayara ne yapacağını söyleyen talimatlar. |
| Execute | Çalıştırmak | Yazılan kodu işletmek. |
| Result | Sonuç | Kod çalıştırıldığında ortaya çıkan çıktı veya etki. |
| Example | Örnek | Bir konuyu açıklamak için kullanılan uygulama. |
| Alert | Uyarı | Tarayıcıda uyarı penceresi açan JavaScript fonksiyonu. |
| Function | Fonksiyon | Belirli bir işi gerçekleştiren kod bloğu veya yapı. |
| Syntax | Sözdizimi | Kodun hangi kurallara göre yazılması gerektiği. |
| Browser | Tarayıcı | Web sayfalarını görüntüleyen uygulama. |
| Console | Konsol | Kod çıktılarının ve hata mesajlarının görülebildiği alan. |
| Line | Satır | Kodun bir satırı. |
| Separate | Ayırmak | Birbirinden farklı veya bağımsız hâle getirmek. |
| Readable | Okunabilir | Kolayca okunup anlaşılabilen. |
| Error | Hata | Kodda veya kodun çalışması sırasında ortaya çıkan sorun. |
| Disable | Devre dışı bırakmak | Bir özelliğin çalışmasını engellemek. |
| Result | Sonuç | Bir işlemin sonunda elde edilen çıktı. |
| Test | Test / sınama | Öğrenilen bilgiyi kontrol etmek için yapılan deneme. |
| Summary | Özet | Konunun temel noktalarının kısa anlatımı. |