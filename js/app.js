
var game0button = document.querySelector("#game0").addEventListener("click", openGame0);
var game1button = document.querySelector("#game1").addEventListener("click", openGame1);
var game2button = document.querySelector("#game2").addEventListener("click", openGame2);
var game3button = document.querySelector("#game3").addEventListener("click", openGame3);
var game4button = document.querySelector("#game4").addEventListener("click", openGame4);

// Choice the number game
import { openGame0 } from './games/guessthenumber.js';

// Wingman

import { openGame1 } from './games/wingman.js';


/// Math

import { openGame2 } from './games/mathgame.js';

// Answer it;

import { openGame3 } from "./games/answer.js";

// Snake;

import { openGame4 } from "./games/snake.js";