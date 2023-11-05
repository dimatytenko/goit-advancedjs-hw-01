import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

import refs from './refs.js';
import { timeUpdateHandler, getLocalStorageTime } from './functions.js';

const player = new Player(refs.playerRef);

const currentTime = getLocalStorageTime();
player.setCurrentTime(currentTime || 0);

player.on('timeupdate', throttle(timeUpdateHandler, 1000));
