"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const benchmark_1 = require("benchmark");
class MohismBench {
    constructor() {
        this.suite = new benchmark_1.Suite();
        this.fastestName = '';
        this.fastestScore = 0;
    }
    add(name, fn) {
        this.suite.add(name, fn);
        return this;
    }
    run() {
        this.suite
            .on('cycle', (event) => {
            const mark = event.target;
            if (this.fastestScore < mark.hz) {
                this.fastestScore = mark.hz;
                this.fastestName = String(mark).split('x')[0];
            }
            console.log(String(mark));
        })
            .on('complete', () => {
            console.log(`Fastest is ${this.fastestName}`);
        })
            .run({ 'async': true });
    }
}
exports.default = MohismBench;
