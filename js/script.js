


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

    if((!(i % 3)) && (!(i % 5))) {

        boxDiv.append('FizzBuzz');
        console.log('FizzBuzz');

    } else if(!(i % 3)) {

        boxDiv.append('Fizz');
        console.log('Fizz');        

    } else if(!(i % 5)) {

        boxDiv.append('Buzz');
        console.log('Buzz');

    } else {
        boxDiv.append(i);
        console.log(i);
    }


    // Appendo gli elementi all'interno del contenitore presente in HTML
    container.append(boxDiv);
}












