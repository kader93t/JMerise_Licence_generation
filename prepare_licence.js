const moment = require('moment');
const cle = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
];
function getKey(date) {
  let returnValue = {};
  let key = '';
  let begin = Math.floor(Math.random() * 99);

  let end = 99 - begin;
  if (begin < 10) {
    begin = '0'.concat(begin);
  }
  if (end < 10) {
    end = '0' + end;
  }
  key = key.concat(begin);
  let i = 1;
  let jd, jf, mf;
  while (i < 24) {
    i = i + 1;
    if (i === 8) {
      returnValue.dateDebut = moment(date).format('YYYY/MM/DD');
      let year = date.year() - 2018 - 1;

      let day = date.format('DD');
      let month = date.format('MM');
      key = key.concat(cle[year].toLowerCase());
      key = key.concat(month);
      key = key.concat(day);
      jd = parseInt(day);
      date.add(2, 'years');
      date.subtract(1, 'day');
      year = date.year() - 2018;
      day = date.format('DD');
      month = date.format('MM');
      key = key.concat(cle[year].toLowerCase());
      key = key.concat(month);
      key = key.concat(day);
      jf = parseInt(day);
      mf = parseInt(month);
      i = 19;
      returnValue.dateFin = moment(date).format('YYYY/MM/DD');
    }
    if (i == 22) {
      key = key.concat(((jd + jf) % mf) % 9);
      i++;
    }
    key = key.concat(Math.floor(Math.random() * 9));
  }
  key = key.concat(end);
  returnValue.key = key;
  return returnValue;
}

module.exports = getKey;
