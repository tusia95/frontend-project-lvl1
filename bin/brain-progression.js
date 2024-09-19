#!/usr/bin/env node

import sayHelloWithName from '../src/cli.js';
import playProgressionGame from '../src/games/progression-game.js';

const name = sayHelloWithName();
playProgressionGame(name);
