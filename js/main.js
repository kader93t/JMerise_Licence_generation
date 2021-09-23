// import moment from 'moment';

document.getElementById('getKey').addEventListener('click', async (e) => {
  e.preventDefault();
  console.log(e);

  let result = await fetch(
    'https://jmerise-by-kader93t.herokuapp.com/createLic?mac=' +
      e.target.form.mac.value
  );

  result = await result.json();
  const div = document.querySelector('div');
  const p = document.createElement('p');
  div.innerText = '';
  p.innerText =
    'key : ' +
    result.key +
    '\nDate Debut :' +
    result.dateDebut +
    '\nDate Fin :' +
    result.dateFin;
  div.appendChild(p);
});
