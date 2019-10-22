import mongoose = require("mongoose");
import { Document, Model } from "mongoose";
import { Hero as HeroInterface } from "../interface/hero";
import { heroSchema } from "../schema/hero";

export interface HeroModel extends HeroInterface, Document {}

export interface HeroModelStatic extends Model<HeroModel> {}

export const Hero = mongoose.model<HeroModel, HeroModelStatic>("Hero", heroSchema);