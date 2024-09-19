#!/usr/bin/env node

import sayHelloWithName from "../src/cli.js";
import playPrimeGame from "../src/games/prime-game.js";

const name = sayHelloWithName();
playPrimeGame(name);