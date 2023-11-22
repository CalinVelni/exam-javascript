const power = (base, exponent) => {

    try {
        
        if (typeof base === 'number' && typeof exponent === 'number') {

            return base ** exponent;
        }

        else {

            const baseCheck = typeof base === 'number' ? '' : ' base';
            
            const expCheck = typeof exponent === 'number' ? '' : ' exponent';

            const powError = `non-numeric values found:${baseCheck}${expCheck}.`;

            throw new Error(powError);
        }
    } 

    catch (error) {

        console.error(error);

        return null;
    }

    finally {

        console.log('Completed');
    }
}
