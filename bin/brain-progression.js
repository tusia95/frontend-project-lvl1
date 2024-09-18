#!/usr/bin/env node

import sayHelloWithName from "../src/cli.js";
import playGsdGame from "../src/games/gcd-game.js";
import playProgressionGame from "../src/games/progression-game.js";

const name = sayHelloWithName();
playProgressionGame(name);


