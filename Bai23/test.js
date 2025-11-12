const a = 5;
{
    let a = 10;
    console.log(a);

}
console.log(a);


let fullName = 'Nguyen Van Teo';
let string = fullName.split(' ');
let ho = string[0];
let tenLot = string[1];
let ten = string[2];

console.log(`ho = ${ho} tenLot = ${tenLot} ten = ${ten}`);


let input = prompt("Nhap gmail cua ban: ");
if(input.includes('_'))
{
let split = input.split('_');
let mask = '...';

let gmail = `${split[0]}${mask}@gmail.com`;
console.log(gmail);    

}
let split = input.split('@');
let mask = '...';

let gmail = `${split[0]}${mask}@gmail.com`;
console.log(gmail);