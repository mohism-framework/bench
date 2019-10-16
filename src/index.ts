import { Suite } from 'benchmark';
import Benchmark from 'benchmark';

export class MohismBench {
  private suite: Suite;
  private fastestName: string;
  private fastestScore: number;
  constructor() {
    this.suite = new Suite();
    this.fastestName = '';
    this.fastestScore = 0;
  }

  add(name: string, fn: Function): this {
    this.suite.add(name, fn);
    return this;
  }

  run(): void {
    this.suite
      .on('cycle', (event: Event) => {
        const mark: Benchmark = event.target as unknown as Benchmark;
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

export default MohismBench;