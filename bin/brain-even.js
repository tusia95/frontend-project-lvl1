#!/usr/bin/env node

import sayHelloWithName from "../src/cli.js";
import playEvenGame from "../src/brain-even-logic.js";

const name = sayHelloWithName();
playEvenGame(name);