let hour = '06:40:03AM'


function timeConversion(s) {
    if (s.includes('AM')){
        if(s.slice(0,2) === '12'){
            s = s.replace ('12', '00');
        }
        s = s.replace ('AM', '')
    }
    if(s.includes('PM')){
        if(s.slice(0,2 ) !== '12'){
        const newHour = parseInt(s.slice(0,2)) + 12;
        s = s.replace(s.slice(0,2), newHour);
        }
        s = s.replace ('PM', '')
    }
    console.log(s);
}


timeConversion(hour);