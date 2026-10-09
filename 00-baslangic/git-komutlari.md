# Git Komutları — Başlangıç Rehberi

Bu dosya, Git öğrenirken sık kullanacağım komutları ve ne işe yaradıklarını hatırlamak için hazırlandı.

## 1. git status

```bash
git status
```

**Ne işe yarar?**

Projemin durumunu gösterir. Hangi dosyaların değiştiğini, yeni dosyaların olup olmadığını ve kaydedilmemiş değişiklikleri kontrol etmemi sağlar.

**Ne zaman kullanırım?**

Ne yaptığımı kontrol etmek istediğimde veya diğer Git komutlarından önce.

## 2. git add .

```bash
git add .
```

**Ne işe yarar?**

Dosyalardaki değişiklikleri bir sonraki kayıt işlemine hazırlar. Tek başına GitHub'a dosya göndermez.

**Ne zaman kullanırım?**

Yeni dosya eklediğimde veya mevcut dosyalarımda değişiklik yaptığımda.

## 3. git commit

```bash
git commit -m "Notlarimi guncelledim"
```

**Ne işe yarar?**

Hazırladığım değişikliklerin kaydını oluşturur. Bu kayıt bilgisayarımdaki Git geçmişine eklenir.

**Ne zaman kullanırım?**

Anlamlı bir değişiklik yaptığımda ve bunu kayıt altına almak istediğimde.

## 4. git push

```bash
git push
```

**Ne işe yarar?**

Bilgisayarımdaki kayıtları, bağlantısı kurulmuş GitHub deposuna gönderir.

**Ne zaman kullanırım?**

Commit oluşturduktan sonra değişikliklerimi GitHub'a yüklemek istediğimde.

## 5. Birlikte nasıl kullanılır?

Genellikle şu sırayla ilerlerim:

1. `git status` — Değişiklikleri kontrol et.
2. `git add .` — Değişiklikleri kayda hazırla.
3. `git commit -m "Aciklayici mesaj"` — Kaydı oluştur.
4. `git push` — GitHub'a gönder.

## Hatırlamam gerekenler

- Git, bilgisayarımdaki proje geçmişini takip eder.
- GitHub, kayıtlarımı çevrim içi depolamamı sağlar.
- Ctrl + S dosyayı kaydeder; GitHub'a göndermez.
- `git commit` ile `git push` farklı işlemlerdir.
- Komutları ezbere bilmek zorunda değilim. Ne işe yaradıklarını anlamam ve gerektiğinde notlarıma bakmam yeterli.