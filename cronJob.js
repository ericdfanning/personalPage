const axios = require('axios');
const CronJob = require('cron').CronJob;

(function() {
  // **** This will run to find any stored category results that are older than 2 weeks and remove it
  const scan = () => {
    axios.get('http://ericdfanning.com/refresh')
      .then( res => console.log('fetcehed'))
      .catch( err => console.log('couldnt GET', err))
  }

  let job = new CronJob({
    cronTime: '*/30 9-22 * * *',
    onTick: scan,
    start: true,
    timeZone: 'America/Chicago'
  });

})();