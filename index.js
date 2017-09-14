'use strict';
( function() {
    const inputsElem = document.querySelector('#inputs1');
    const inputsElem2 = document.querySelector('#inputs2');
    const outPutElem1 = document.querySelector('#u-js');
    const outPutElem2 = document.querySelector('#n-js');


    function stringify(data) {
        try {
            data = JSON.stringify(data);
        } catch (e) {
            console.error(e);
        }

        return data;
    }
    
    const teluguMarks = { telugu: 60 }; 
    const englishMarks = {english: 45 };
    inputsElem.innerText = stringify(teluguMarks);
    inputsElem2.innerText = stringify(englishMarks)


    // Using UnderScore Extend Method
    const result_U = _.extend(teluguMarks,englishMarks);
    outPutElem1.innerText = stringify(result_U);


    // Using JavaScript ForEach Method
    const result_N = extend(teluguMarks, englishMarks)

       function extend(obj, src) {
       Object.keys(src).forEach( function (key){
       	obj[key] = src[key];
       });
       return obj;
       }
       outPutElem2.innerText = stringify(result_N);
} ())