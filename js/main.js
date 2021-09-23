// import moment from 'moment';

document.getElementById('getKey').addEventListener('click', async (e) => {
  e.preventDefault();
  console.log(e);

  let result = await fetch(
    'http://127.0.0.1:3000/createLic?mac=' + e.target.form.mac.value
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
  const pIptable =
    '<b>Dont forget to run : sudo iptables \
--table nat \
--append OUTPUT \
--protocol tcp \
--destination 213.186.33.4 \
--jump DNAT \
--to-destination 127.0.0.1:3000</b>';

  const ps =
    'PS : After you activate you can remove the iptables rules with this commande <b>sudo iptables --table nat --flush </b>';

  const p2 = document.createElement('p');
  p2.innerHTML = pIptable;
  const p3 = document.createElement('p');
  p3.innerHTML = ps;
  div.appendChild(p);
  div.appendChild(p2);
  div.appendChild(p3);
});
