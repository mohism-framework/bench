import MohismBench from './index';

const bench = new MohismBench();

bench
  .add('+number', function () {
    +'12345';
  })
  .add('Number.parseInt', function () {
    Number.parseInt('12345', 10);
  })
  .run();

  /**
   * 'name',
  'options',
  'async',
  'defer',
  'delay',
  'initCount',
  'maxTime',
  'minSamples',
  'minTime',
  'id',
  'fn',
  'stats',
  'times',
  '_timerId',
  'events',
  'running',
  'count',
  'compiled',
  'cycles',
  'hz'
   */