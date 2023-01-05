

const string = "Hello_World!";
const k = 4;

function caesarCipher(s, k) {
    let caesarArray = [] //arreglo en donde coloco cada letra transformada
    const stringArray = s.toLowerCase().split("");  //arreglo del string en general
    let counter = 0 
    while (counter < stringArray.length){
        const asCode = s.charCodeAt(counter) //localizo del codigo ascii del caracter
        if ((asCode >= 65 && asCode <= 90) || (asCode >= 97 && asCode <= 122)){ //Si es una letra del alfabeto..
            
            if((asCode + k) < 90 || (asCode + k) < 122 ){ //si la suma es menor del limite del abecedario (aca surge el problema)
                console.log('entered first condition',asCode+k);
                caesarArray.push(String.fromCharCode(asCode+k)) //añado al arreglo la posicion con el trasladado cesar.
            }else{//si la suma es mayor al limite del abecedario
                console.log(asCode+k);
                caesarArray.push(String.fromCharCode(asCode-26+k)) //añado al arreglo la posicion con la diferencia de la longitud del abecedario
            }
        }else{ //si es un simbolo o numero, no se traslada.
            caesarArray.push(s[counter])
        }
        counter++;
    }
    console.log(caesarArray.join("")) //junto el arreglo en una cadena.
    return caesarArray.join("");
}


caesarCipher(string, k);