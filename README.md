### USAGE:

```javascript

import MohismBench from '@mohism/bench';
// or const MohismBench = require('@mohism/bench')

const bench = new MohismBench();

bench
  .add('+number', function () {
    +'12345';
  })
  .add('Number.parseInt', function () {
    Number.parseInt('12345', 10);
  })
  .run();

```