#!/usr/bin/env node

import sayHelloWithName from '../src/cli.js';
import playEvenGame from '../src/games/brain-even-game.js';

const name = sayHelloWithName();
playEvenGame(name);
