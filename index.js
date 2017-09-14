'use sttict';
( function() {
	const inputsElem = document.querySelector('#inputs');
    const outPutElem1 = document.querySelector('#u-js');
    const outPutElem2 = document.querySelector('#n-js');



	const employees = ['anil', 'ravi', 'raju', 'magesh', 'ramesh'];
	const name = 'magesh';
   
   function stringify(data) {
   	try {
   		data = JSON.stringify(data);
   	} catch(e){
         console.log(e)
   	}
   	return data;
   }
   
	inputsElem.innerText = stringify(employees);

	// Using UnderScore JS Contains Method

	const result_U = _.contains(employees, name);
	outPutElem1.innerText =  stringify(result_U);

	// Using JavaScript filter And Indexof Method

	const result_N = (employees.indexOf(name) != -1);
	outPutElem2.innerText = stringify(result_N);
} ());