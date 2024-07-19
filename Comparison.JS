//comparison operator
let akses;
let umur = prompt('Kamu umur berapa?') ;
if (umur > 18) {
akses = true;
} else {
akses = false;
}
alert(akses);

//comparison operator untuk membandingkan dua nilai operan.


if (hujan == true && bintanIkut == false){
console.log("Sabrina makan bakso dua porsi");
}

// Illustration of (==) operator

let val1 = x=4;
let val2 = x=6;
console.log(val1 <= val2);

// Checking of operands
console.log(val1 == 9);
console.log(val2 == 4);        
console.log(val1 == val2);

// Check against null and boolean value
console.log(0 == false);   
console.log(0 == null);


let hasil = true && 10;
console.log(hasil); // Output: 10

console.log(false && "Hello World");// Output: false 

console.log(null && "Hello World"); // Output: null

// || (OR) Jika salah satu argumennya true, 
// maka akan mengembalikan nilai true, 
// dan jika argumennya false, 
// maka akan mengembalikan nilai false.

let hasil = false || 10; 
console.log(hasil); // Output: 10;
console.log(true || 10); // Output: true
console.log(null || 5); // Output: 5
console.log(undefined || null) // Output: null
console.log(0 || "Hello World") // Output: Hello World


let hujan = false;
// ! akan merubah nilai hujan dari false, ke true
if (!hujan) console.log("Gausah pake payung");


var nilai= 92 
if (nilai > 80)
{ console.log('Excellent!');}

else if (nilai >= 60 && nilai <= 80)
{console.log('Good job!');
}else
{console.log('Don\'t give up!'); }


let umur = 8
let masukSd = umur >= 7 ? true :
false
console.log(masukSd)



function tagihanBingleTube (apakahLangganan) 	{ return (apakahLangganan ? 'Rp50.000' :
'Rp120.000');
}
console.log(tagihanBingleTube(true));
// expected output: 'Rp50.000'
console.log(tagihanBingleTube (false)); // expected output: 'Rp120.000'
console.log(tagihanBingleTube(null));
// expected output: 'Rp120.000' karena bernilai false


switch(x) {
	case 'nilail': // if (x === 'nilail')
	...
	[break]

case 'nilai2': // if (x === 'nilai2')
	...
	[break]

default:
	...
	[break]
}
let a = 2 + 2;

switch (a) {
	case 3:
	alert( 'Terlalu kecil' );
	break;
	case 4:
	alert('Benar sekali' );
	break;
	case 5:
	alert('Terlalu besar' );
	break;
	default:
	alert("Tidak tahu" );
}

let hari = 1;
switch (hari) {
case 1:
console.log('Senin');
break;
case 2:
console.log('Selasa');
break;
case 3:
console.log('Rabu');
break;
case 4:
console.log('Kamis');
case 5:
console.log('Jumat');
case 6:
console.log('Sabtu');
case 7:
console.log('Minggu');
break;
default:
console.log('Tidak tahu');
break;
}

let testScore = 90;
let letterGrade;

switch(true){
case testScore >= 90:
		letterGrade = "A";
		break;
case testScore >= 80:
		letterGrade = "B";
		break;
case testScore >= 70:
		letterGrade = "C";
		break;
case testScore >= 60:
		letterGrade = "D";
		break;
default:
letterGrade = "F"
}
console.log(letterGrade);

