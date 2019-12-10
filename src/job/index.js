import CheckinInform from './schedules/CheckinInform';
import { CronJob } from 'cron';
const schedules = [CheckinInform];

function Schedules() {
  schedules.map(schedule => {
    const job = new CronJob('* */30 * * * *', schedule.handle, null, true, 'America/Los_Angeles');
  });
}

export default Schedules;
