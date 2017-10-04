# semver-compare-multi

Compare two semver version strings, returning -1, 0, or 1

They don't need to be strict x.y.z formated strings, the size is automaticaly checked. As the size is dynamic, comparing `cmp("1.0.0", "1.0.0.1")`returns -1, that is, the longer version is considered greater.

The return value of **cmp** can be fed straight into `[].sort`.

You can pass **newComparer**, which returns an `cmp(a,b)`, an array of characters to match as split points, mind to escape regex special symbols with `\\`, as of: `newComparer(["\\.", "-"])`

[![build status](https://travis-ci.org/zenithpolar/semver-compare.svg?branch=master)](https://travis-ci.org/zenithpolar/semver-compare)

# example

``` js
import { cmp } from "semver-compare-multi";
var versions = [
    '1.2.3',
    '4.11.6',
    '4.2.0',
    '1.5.19',
    '1.5.5',
    '4.1.3',
    '2.3.1',
    '10.5.5',
    '11.3.0'
];
console.log(versions.sort(cmp).join('\n'));
```

*Or*

``` js
import { newComparer } from "semver-compare-multi";
var versions = [
    '1.2-3',
    '4.11_6',
    '4.2_0',
    '1.5-19',
    '1.5-5',
    '4.1-3',
    '2.3_1',
    '10.5_5',
    '11.3_0'
];
console.log(versions.sort(newComparer(["\\.", "-", "_"])).join('\n'));
```

prints:

```
1.2-3
1.5-5
1.5-19
2.3_1
4.1-3
4.2_0
4.11_6
10.5_5
11.3_0
```

whereas the default lexicographic sort (`versions.sort()`) would be:

```
1.2-3
1.5-19
1.5-5
10.5_5
11.3_0
2.3_1
4.1-3
4.11_6
4.2_0
```

# methods

```
import { cmp, newComparer } from "semver-compare-multi";
```

## cmp(a, b)

If the semver string `a` is greater than `b`, return `1`.
If the semver string `b` is greater than `a`, return `-1`.
If `a` equals `b`, return 0;

*It is the same as newComparer(), which returns an cmp(a, b) with "." and "-" default separators.*

# install

With [npm](https://npmjs.org) do:

```
npm install semver-compare-multi
```

# license

MIT
