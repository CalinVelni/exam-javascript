const concatenate = (array) => {

    let concString = '';

    array  /* non ho definito una variabile siccome il forEach finale restituisce undefined */
    .filter( string => string.startsWith('A') || string.startsWith('a') )

    .forEach( string => concString += string );

    return concString.substring(0, 10);  /* usando substring verrà restituita la stringa accorciata se necessario, altrimenti mostrerà la stringa per intero se ha meno di 10 caratteri */
}
