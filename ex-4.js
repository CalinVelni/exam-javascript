window.addEventListener ('load', () => {

    const inp = document.querySelector('input');

    const btn = document.querySelector('button');

    const p = document.getElementById('errorMessage');

    const ul = document.getElementById('tasks');

    btn.addEventListener ('click', () => {

        p.innerHTML = inp.value === '' ? 'Please, insert valid text.' : '' ; /* in questo modo il p viene riempito o svuotato ad ogni click, senza bisogno di svuotarlo in seguito */

        if (inp.value !== '') {

            const li = document.createElement('li');

            li.innerText = inp.value;

            ul.appendChild(li);
        }

        inp.value = '';
    })
})
