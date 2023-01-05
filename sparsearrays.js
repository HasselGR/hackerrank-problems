const strings = ['aba', 'baba', 'aba', 'xzxb'];
const queries = ['aba', 'xzxb', 'ab'];

function matchingStrings(strings, queries) {
    let results = [];


    queries.forEach(query => {
        let coincidences = 0;
        strings.forEach(string => {
            if (query === string){
                coincidences += 1;
            }
        })
        results.push(coincidences);
    })
    console.log(results);

}


matchingStrings(strings, queries);