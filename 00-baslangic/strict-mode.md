# JavaScript 2.3 — Sıkı Mod (Strict Mode)

## 1. Strict mode nedir?

`"use strict";`, JavaScript'in daha katı kurallarla çalışmasını sağlar. Bazı hataların daha erken fark edilmesine yardımcı olur.

```javascript
"use strict";

let yas = 23;
console.log(yas);
```

**Hatırlatma:** `"use strict";` bir JavaScript yönergesidir (directive).

## 2. Nasıl kullanılır?

Dosyanın en başına yazılır:

```javascript
"use strict";

// Kodlarımız buradan devam eder.
```

Tek veya çift tırnak kullanılabilir. Noktalı virgül zorunlu değildir.

```javascript
'use strict';
"use strict"
```

İkisi de geçerlidir.

## 3. Neden önemlidir?

Sıkı modda, tanımlanmamış bir değişkene değer atamak hata verir.

```javascript
"use strict";

yas = 23; // Hata!
```

Çünkü `yas` önceden tanımlanmamıştır. Doğru kullanım:

```javascript
"use strict";

let yas = 23;
```

## 4. Sık yapılan hatalar

```javascript
use strict;              // Yanlış: Tırnak yok.
```

```javascript
// "use strict";         // Etkinleştirmez: Yorum satırı.
```

```javascript
alert("use strict");     // Etkinleştirmez: Uyarı penceresi açar.
```

```javascript
alert("Merhaba!");
"use strict";            // Sıkı modu etkinleştirmez:
                         // Öncesinde çalışan kod var.
```

**Önemli:** `"use strict";` dosyanın başında olmalıdır. Başında yalnızca yorumlar bulunabilir.

## 5. Tarayıcı Konsolu ve Strict Mode

Tarayıcı geliştirici konsolu, JavaScript kodlarını denemek için kullanılır. Ancak konsolda `use strict` otomatik olarak etkin olmayabilir.

Strict mode'u konsolda denemek için kodu bir fonksiyonun içinde de çalıştırabiliriz:

```javascript
(function() {
  'use strict';

  let yas = 23;
  console.log(yas);
})();
```

Burada `'use strict'` fonksiyonun başında olduğu için fonksiyonun içindeki kod sıkı modda çalışır.

**Hatırlatma:**
- Normal JavaScript dosyalarında `"use strict";` yönergesini dosyanın en başına yazabiliriz.
- Modern JavaScript'te **ES modülleri ve sınıf gövdeleri** zaten otomatik olarak strict mode kullanır.
- Şimdilik öğrendiğimiz temel örneklerde dosyanın başına `"use strict";` yazma alışkanlığı edinebiliriz.



## 6. Mini tekrar

1. Strict mode ne işe yarar?
2. `"use strict";` yerine `'use strict';` yazılabilir mi?
3. Noktalı virgül olmazsa sıkı mod çalışır mı?
4. `// "use strict";` sıkı modu etkinleştirir mi?
5. Strict mode açıkken `yas = 23;` neden hata verir?

### Cevaplar

1. JavaScript'in daha katı kurallarla çalışmasını sağlar.
2. Evet, ikisi de geçerlidir.
3. Evet, noktalı virgül zorunlu değildir.
4. Hayır, bu bir yorum satırıdır.
5. Çünkü `yas` tanımlanmamıştır.

## 7. İngilizce terimler

| English | Türkçe | Açıklama |
|---|---|---|
| Strict mode | Sıkı mod | JavaScript'in daha katı kurallarla çalışması |
| Directive | Yönerge | Belirli bir davranışı etkinleştiren talimat |
| Variable | Değişken | Veri saklamak için kullanılan yapı |
| Declare | Tanımlamak | Bir değişkeni bildirmek |
| Assign | Atamak | Bir değişkene değer vermek |
| Error | Hata | Kodda ortaya çıkan sorun |
| Browser | Tarayıcı | Web sayfalarını görüntüleyen uygulama |
| Console | Konsol | Kod çıktılarının ve hata mesajlarının görülebildiği alan |
| Enable | Etkinleştirmek | Bir özelliği aktif hâle getirmek |
| Default | Varsayılan | Özel bir değişiklik yapılmadığında kullanılan ayar |