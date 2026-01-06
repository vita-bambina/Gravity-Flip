function flip(d,a){
    if (d === 'R'){
        return a.sort((x,y)=> x-y); // ascending order
    }else{
        return a.sort ((x,y)=> y-x); // descending order
    }
}

console.log (flip ( 'R',[1,2,6,7,8],))
console.log (flip( 'L',[1,2,6,7,8],))
console.log (flip( 'X',[1,8,3,2,9,4,10],))
console.log (flip( 'R',[1,8,3,2,9,4,10],))