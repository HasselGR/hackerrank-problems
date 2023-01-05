const stringCheck = 'We promptly judged antique ivory buckles for the prize';

function pangrams(s) {
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let pangramFlag = true;
    alphabet.forEach(element => {
        if (s.toLowerCase().includes(element) === false){
            pangramFlag = false;
            return;
        }
    });
    if (pangramFlag === true){
        return 'pangram';
    } else {
        return 'not pangram'
    }

}

pangrams(stringCheck);