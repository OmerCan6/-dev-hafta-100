//? Değişkenler ve Veri Tipleri//
let a="ömer";
console.log(a);
let b=21;
console.log(b);
let world="Hello World!"
console.log(world.length);

let sayi=25;
console.log(sayi+5);

//!Operatörler//

let sayi1=20;
let sayi2=10;
console.log(sayi1+sayi2);
console.log(sayi1-sayi2);
console.log(sayi1*sayi2);
console.log(sayi1/sayi2);

let q="Aybu"
let t="Gridea"
console.log(q+t);

let v=10
let y=15
console.log(a==b);

//* If-Else Koşullu İfadeler//
let sayi3=15

if(sayi3>10){
    console.log("Sayi 10 dan büyüktür")
}
else{
   console.log("sayi 10 dan küçüktür")
}

let kelime="Kodlama"

let harf="kodlama";
console.log(harf.length);
if(harf>=5){
    console.log("String 5 karakterden oluşuyor")
}else{
    console.log("String 5 harften farklıdır")
}

//?Swtich-Case Yapısı//

let degerler=prompt("Lütfen Sayiyi Giriniz");

switch(degerler){
    case"1":
    console.log("Girilen Sayı 1"); 
 break;
 case"2":
 console.log("Girilen Sayı 2"); 
break;
case"3":
console.log("Girilen Sayı 3"); 
break;
case"4":
console.log("Girilen Sayı 4"); 
break;
case"5":
console.log("Girilen Sayı 5"); 
break;
default:
    console.log("Böyle bir değer bulunmamaktadır!")

break;
}

