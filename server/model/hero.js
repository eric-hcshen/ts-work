"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const hero_1 = require("../schema/hero");
exports.Hero = mongoose.model("Hero", hero_1.heroSchema);
