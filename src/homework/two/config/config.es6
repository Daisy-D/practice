import path from 'path';
const CONFIG = new Map();
CONFIG.set('port', 8011);
CONFIG.set('staticDir', path.join(__dirname, '..', 'public'));
CONFIG.set('viewDir', path.join(__dirname, '..', 'views'));

export default CONFIG