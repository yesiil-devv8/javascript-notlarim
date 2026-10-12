/*

Değişkenler ile çalışma

yonetici ve isim adında iki değişken tanımlayın.
"isim" değişkenine "Ahmet" atayın.
Değeri isim den yonetici kopyalayın.
yonetici değişkeninin içeriğini uyarı fonksiyonuyla gösterin.
( Çıktısı “Ahmet” olmalı)

*/

"use strict";

let yonetici;
let isim = "Kübra";

isim = "Ahmet";
yonetici = isim;

alert(yonetici);

/*

Bu kod çalışınca ne görünür?

let isim = "Kübra";
let yonetici = isim;
isim = "Ahmet";
alert(yonetici);


cevap Kübra olur. 

yonetici değişkenine atama yapıldığı anda 
isim'in mevcut değeri aktarılır. 
Sonraki atama yonetici'yi değiştirmez.

*/ 