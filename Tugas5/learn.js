// // membuat variabel
// let myNumber = 16;
// let myString = "Hello"
// let myBoolean = true
// const phi = 3.14
// // menampilkan informasi ke console
// console.log(myNumber)
// console.log(myString)
// console.log(myBoolean)
// console.log(phi)
// console.log('________________')

// //Latihan 5.2. Melakukan operasi sederhana dengan operator aritmatika

// var a = 3, b = 6;

// console.log('a =', a )
// console.log('b =', b )
// console.log('a + b =', a + b)
// console.log('a - b =', a - b)
// console.log('a * b =', a * b)
// console.log('a / b =', a / b)
// console.log('a % b =', a % b)
// console.log('a++ =', a++)
// console.log('++a =', ++a)
// console.log('a-- =', a--)
// console.log('--a =', --a)
// console.log('________________')

// // Latihan 5.3. Melakukan operasi sederhana dengan operator perbandingan


// console.log('a > b =', a > b)
// console.log('a < b =', a < b)
// console.log('a >= b =', a >= b)
// console.log('a <= b =', a <= b)
// console.log('a == b =', a == b)
// console.log('a != b =', a != b)
// console.log('a === b =', a === b)
// console.log('a !== b =', a !== b)
// console.log('________________')

// // Latihan 5.4. Melakukan operasi sederhana dengan operator logika

// console.log('a && a =', true && true)
// console.log('a && b =', true && false)
// console.log('b && a =', false && true)
// console.log('b && b =', false && false)
// console.log('a || a =', true || true)
// console.log('a || b =', true || false)
// console.log('b || a =', false || true)
// console.log('b || b =', false || false)
// console.log('!a =', !true)
// console.log('!b =', !false)
// console.log('________________')

// Latihan 5.5. Membuat Fungsi
function persegi() {
        var panjang = 5
        var lebar = 6
        var luas = panjang * lebar
        console.log(luas)
}
var hasil = persegi()
console.log('________________')

function luas(alas, tinggi){
        let luas_segitiga = 0.5 * alas * tinggi;
        return `luas segitiga yang mempunyai alas: ${alas} dan tinggi ${tinggi} adalah ${luas_segitiga}`
}
let alas = 5
let tinggi = 10
console.log(luas(alas, tinggi))
console.log('________________')

function volume(p, l, t){
        let V = p * l * t;
        return V;
}
let p = 10
let l = 5
let t = 2
let volumenya = volume(p, l, t)
console.log('mempunyai volume: '+ volumenya)

// // menampilkan informasi dalam bentuk alert pada window
// window.alert("Angka favorit saya adalah : " + myNumber)
// window.alert('Angka favorit saya adalah : ' + myNumber)
// window.alert(`Angka favorit saya adalah : ${myNumber}`)





