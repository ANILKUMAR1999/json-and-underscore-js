'use strict';
( function() {
	  const inputsElem = document.querySelector('#inputs');
    const outPutElem1 = document.querySelector('#u-js');
    const outPutElem2 = document.querySelector('#n-js');


  function stringify(data) {
    try {
        data = JSON.stringify(data);
    } catch(e){
         console.log(e)
    }
    return data;
   }

// Input Persons Age
const numbers = [5, 8, 4, 18, 20];
inputsElem.innerText = stringify(numbers);

function checkAdult(age) {
	return age >= 18;
}

// Using UnderScore JS reject Method
const result_U = _.reject(numbers, checkAdult);
outPutElem1.innerText = stringify(result_U);

function checkAdul(age,index) {
	return ((age >= 18) -1);
}

// Using JavaScript Filter Method
const result_N = stringify(numbers.filter(checkAdul));
outPutElem2.innerText = result_N;
} ());