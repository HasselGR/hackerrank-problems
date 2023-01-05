const entry = [0, 0, 1, 2, 1];
//puedes ahcer otro arreglo donde estan los nbumeros que si estan repetidos, si es asi, saltarlo, o comenzar ambos desde 0

function lonelyinteger(a) {
    let unrepeated = 0;
    console.log(a.length);
    for (let i = 0; i < a.length; i= i + 1) {
        unrepeated = a[i]
        for (let j = 0; j < a.length; j++) {
            // console.log(`j is on number ${j}`)
            if(i !== j){
                if(a[i] === a[j]){
                    // console.log (`equal numbers on indexes ${i} and ${j} referring to number ${unrepeated}`)
                    break;
                }
                if(j === a.length-1){
    
                    // console.log(unrepeated)
                    return unrepeated;
                }
            }
        }
        
    }
    // console.log(unrepeated)
    return unrepeated;
}

lonelyinteger(entry);