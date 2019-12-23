import moment from 'moment';
var pt = require('moment/locale/pt-br')

const mDate = (date) => {

    let now = moment();
    let dateRecive = moment(date);

    dateRecive.locale('pt-br', pt);

    if(now.diff(dateRecive, 'days') < 1) {
      
      return dateRecive.fromNow();

    }else if( now.diff(dateRecive, 'days' ) === 1 ) {

      return dateRecive.subtract(1, 'days').calendar();

    } else if( now.diff(dateRecive, 'days' ) > 1) {

      return dateRecive.format('lll');

    }else {

      return dateRecive;

    }

  }
  
export default mDate;