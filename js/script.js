
/* 
    COSA FARE:
1. Contare fino a 100 e stampare il risultato in console;
2. Stampare elementi diversi a seconda del numero;
3. Appendere gli elementi nel DOM tramite JS;
4. Applicare stili particolari quando si verificano i casi del punto 2;
*/

// console.log('hi, i\'m steive');

// Definisco il numero di cicli
let rounds = 100;

// Definisco il contenitore all'interno del quale andare ad inserire gli elementi creati
const container = document.querySelector('.container');

// Inizio il ciclo
for(let i = 1; i <= rounds; i++){

    // Creo l'elemento da appendere
    const boxDiv = document.createElement('div');

    // Assegno la classe all'elemento
    boxDiv.className = 'box';

    // Definisco i casi di esecuzione

    // ALTERNATIVA: Per accorciare il primo if potevi calcolare i minimo comune multilo tra i due numeri e inserire quello nel modulo. 
    // if(!(i % 15))
    
    if((!(i % 3)) && (!(i % 5))) {

        boxDiv.append('FizzBuzz');
        boxDiv.classList.add('multiplo-15');
        console.log('FizzBuzz');

    } else if(!(i % 3)) {

        boxDiv.append('Fizz');
        boxDiv.classList.add('multiplo-3');
        console.log('Fizz');        

    } else if(!(i % 5)) {

        boxDiv.append('Buzz');
        boxDiv.classList.add('multiplo-5');
        console.log('Buzz');

    } else {
        boxDiv.append(i);
        console.log(i);
    }


    // Appendo gli elementi all'interno del contenitore presente in HTML
    container.append(boxDiv);
}












