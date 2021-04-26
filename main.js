// let n=prompt('Bu yerga kiritadigan soningiz Max sonidan katta bulishi kerak'), sana=0;
// let mi=prompt('oraliqni kititing Min');
// let ma=prompt('Max');
// let n1=0, n2=1,n3;
// for(let i=0;i<=n-1;i++){
//     n3=n1+n2;
//      sana++;
//     n1=n2;
//     n2=n3;
//     if(sana>mi&&sana<ma){
//         document.write('  ' + i + ' soni = ' + n3 +'  ');

//     }
// }


let n=50;
let mi=prompt('Minimum sonni kiriting');
let ma=prompt('Maxsimum sonni kiriting');
let n1=0, n2=1,n3;
 document.write('Minimum '+mi+'  va  Maximum  '+ ma+ ' sonlari orasidagi fibonachi sonlar: ');
for(let i=0;i<n;i++){
    n3=n1+n2;
    n1=n2;
    n2=n3;
    if(mi<n3&&n3<ma){
        document.write('   '+ n3+ '  ');

    }
}

