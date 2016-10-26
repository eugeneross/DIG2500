import fs          from 'fs';
import onlyScripts from './util/filter';

const TASKS = fs.readdirSync('./gulp/tasks/').filter(onlyScripts);

TASKS.forEach((task) => {
  require('./tasks/' + task);
});
