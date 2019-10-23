"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const PetSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    owner: { type: mongoose_1.Schema.Types.ObjectId, required: true }
});
exports.default = mongoose_1.default.model('Pet', PetSchema);
