"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Format = void 0;
class Format {
}
exports.Format = Format;
_a = Format;
Format.toDatetimeFormat = (date) => {
    const dateArray = date.split(' ')[0].split('/').map(d => Number(d));
    const timeArray = date.split(' ')[1].split(':').map(t => Number(t));
    return new Date(dateArray[2], dateArray[1] - 1, dateArray[0], timeArray[0], timeArray[1], timeArray[2], 0);
};
Format.setDate = () => {
    const date = new Date();
    return _a.toDatetimeFormat(`${date.toLocaleDateString()} ${date.toLocaleTimeString()}`);
};
