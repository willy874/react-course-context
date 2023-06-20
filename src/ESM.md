# ESM

## default export

```js
const utils = {
  sum
}

export default utils;
// ******************************
import utils from "./utils";

utils.sum()
```

## default export 2

```js
export default {
  sum,
  uuid
};
// ******************************
import utils from "./utils";

utils.sum()
```

## export

```js
export {
  sum,
  uuid
};
// ******************************
import { sum } from "./utils";

sum()
```

## export 2

```js
export {
  sum
};
// ******************************
import * as utils from "./utils";

utils.sum()
```
