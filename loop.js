//for loop:
// for(let i=0; i<=10; i++){
//     console.log(i);
// }

// //WAP to print all no either divisible by 7 or 11 from 1 to 100
// //for(let i=1; i<=100; i++)
// {
//     //if(i%7==0 || i%13==0)
//     {
//         console.log(i);
//     }
// }

// let [a,b]=[0,1]//declaration of variable in one line
// console.log(a);
// console.log(b);
// for(let i=0; i<10; i++){
//     let c=a+b;
//     console.log(c);
//     [a,b]=[b,c];
    
// }
// let fact=1
// let num=5
// for(let i=2; i<=num; i++)
// {
//     fact=fact*i
//     console.log(fact)
// }
// let mynum=45;
// let prime=true;
// for(let i=2; i<mynum/2; i++)
// {
//     if(mynum%i==0){
//         prime=false;
//         console.log('not prime')
//         break;
//     }
// }
// if(prime) console.log('prime');

//WAP to reverse a no
let n1=56789;
let reverse=0;
while(n1>0)
{   
    console.log(reverse);
    let r=n1%10;
    reverse=reverse*10 + r;
    n1=parseInt(n1/10);
}
console.log(reverse);
