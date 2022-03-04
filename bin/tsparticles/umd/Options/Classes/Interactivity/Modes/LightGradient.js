(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../OptionsColor"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LightGradient = void 0;
    const OptionsColor_1 = require("../../OptionsColor");
    class LightGradient {
        constructor() {
            this.start = new OptionsColor_1.OptionsColor();
            this.stop = new OptionsColor_1.OptionsColor();
            this.start.value = "#ffffff";
            this.stop.value = "#000000";
        }
        load(data) {
            if (data === undefined) {
                return;
            }
            this.start = OptionsColor_1.OptionsColor.create(this.start, data.start);
            this.stop = OptionsColor_1.OptionsColor.create(this.stop, data.stop);
        }
    }
    exports.LightGradient = LightGradient;
});
