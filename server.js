const expresse = require('express');
const moment = require('moment');
const path = require('path');
const writeVEnv = require('./create_env');
const address = require('macaddress');
const { isMAC } = require('getmac');
require('dotenv').config();

const getKey = require('./prepare_licence');
let mac = '';
// address.one().then((err, address) => {
//   mac = address;
//   console.log('mac : ' + address);
// });
address.all(function (err, all) {
  const adresses = JSON.parse(JSON.stringify(all, null, 2));
  for (const property in adresses) {
    if (isMAC(adresses[property].mac)) {
      mac = adresses[property].mac;
    }
  }
});
const app = expresse();
const port = process.env.PORT || 3000;

const viewsPath = path.join(__dirname, './templates/views');
app.use('/js', expresse.static(path.join(__dirname, '/js')));
app.set('view engine', 'hbs');
app.set('views', viewsPath);

app.get('/', (re1, res) => {
  res.render('index');
});
app.get('/createLic', (req, res) => {
  const date = moment();
  const result = getKey(date);
  mac = req.params.mac;
  console.log(req.query);
  writeVEnv(result.dateDebut, result.dateFin, result.key, (err, fd) => {
    console.log('success');
  });
  res.header('Access-Control-Allow-Origin', '*');
  res.send(result);
});

app.get('*', (req, res) => {
  console.log(req.query);
  res.render('response', {
    date: process.env.DATE_DEB,
    mac,
    responseServer: 'OK06',
    dateFin: process.env.DATE_FIN,
    key: process.env.KEY,
  });
});

app.listen(port, () => {
  console.log('Server is starting on Port : ', port);
});
