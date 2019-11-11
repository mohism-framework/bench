import Benchmark, { Suite } from 'benchmark';

type Dict<T> = {
  [index: string]: T;
}

const rightpad = (str: string, count: number, char: string = ' '): string => {
  if (str.length > count) {
    return str.substr(0, count);
  }
  return `${str}${char.repeat(count - str.length)}`;
};


export = class MohismBench {
  private suite: Suite;
  private fastestName: string;
  private fastestScore: number;
  private scores: Dict<number>;
  private nameLength: number;
  constructor() {
    this.suite = new Suite();
    this.fastestName = '';
    this.fastestScore = 0;
    this.nameLength = 0;
    this.scores = {};
  }

  add(name: string, fn: Function): this {
    this.suite.add(name, fn);
    this.nameLength = name.length > this.nameLength ? name.length : this.nameLength;
    return this;
  }

  run(): void {
    console.log(`Node version: ${process.version}`);
    this.suite
      .on('cycle', (event: Event) => {
        const mark: Benchmark = event.target as unknown as Benchmark;
        const name = String(mark).split('x')[0];
        this.scores[name] = mark.hz;
        if (this.fastestScore < mark.hz) {
          this.fastestScore = mark.hz;
          this.fastestName = name;
        }
      })
      .on('complete', () => {
        // console.log(`Fastest is ${this.fastestName}`);
        Object.keys(this.scores).forEach(name => {
          const r = Math.floor(20 * (this.scores[name] / this.fastestScore)) || 1;

          console.log(`${rightpad(name, this.nameLength + 4)} ${rightpad(`${Math.floor(this.scores[name])}`, 12)} ${'🐌 '.repeat(r)}`);
        });
      })
      .run({ 'async': true });
  }
}


