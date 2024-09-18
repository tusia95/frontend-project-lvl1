#!/usr/bin/env node

import sayHelloWithName from "../src/cli.js";
import playCalcGame from "../src/games/calculator-game.js";

const name = sayHelloWithName();
playCalcGame(name);