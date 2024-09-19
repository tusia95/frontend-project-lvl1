#!/usr/bin/env node

import sayHelloWithName from '../src/cli.js';
import playGsdGame from '../src/games/gcd-game.js';

const name = sayHelloWithName();
playGsdGame(name);
