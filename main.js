// Masala:n ta elementdan iborat massivni indexlari juftlari orasidan eng kichigini toping

let N=9;
const a=[];
for(i=0; i<N; i++){
    if(i%2==0){
        a.push(i);
    }
}

console.log(Math.min(...a));