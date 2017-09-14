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
   
   const input = 'Range U Given Automatically Numbers Generated';
   inputsElem.innerText = stringify(input);


   // Using UnderScore Range Method
   const result_U = _.range(10);
   outPutElem1.innerText = stringify(result_U);

   // Using JavaScirpt For Loop
       const result_N = []
      for (i=0; i<10; i++) {
      	result_N.push(i)
      }
      outPutElem2.innerText = stringify(result_N);

} ());