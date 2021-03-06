---
title: Level up your testing with Finite State Machines (part 1)
date: "2019-09-26T09:34:12.432Z"
description: "<p>
Using Finite State Machines (FSM) to model parts of your software
can help you write better tests, and help you raise the bar for quality.
</p><p>
This blog series will talk to some of the benefits of using finite state machines
through all stages of the software development lifecycle.
</p>"
draft: true
---

You may have heard that `async`/`await` code is actually using a state machine under the hood.
We can show examples of what that looks like when converting modern code to older syntax.
For example,
when [compiling TypeScript](https://www.typescriptlang.org/play/?target=1#code/IYZwngdgxgBAZgV2gFwJYHsL3egFAShgG8AoGGAJwFNkEKsAFC9AW1RCoDpqR0AbAG5VcAcgBGwCiPwBuEgF8gA)
or [transpiling JavaScript using Babel](https://babeljs.io/en/repl#?babili=false&browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=IYZwngdgxgBAZgV2gFwJYHsL3egFAShgG8AoGGAJwFNkEKsAFC9AW1RCoDpqR0AbAG5VcAcgBGwCiPwBuEgF8gA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env&prettier=false&targets=&version=7.6.2&externalPlugins=):

So we start with something relatively simple:

```javascript
async function foo() {
  return Promise.resolve("bar")
}
```

And after transpilation/compilation, we end up with:

```javascript
"use strict"
var __awaiter =
  (this && this.__awaiter) ||
  function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function(resolve) {
            resolve(value)
          })
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value))
        } catch (e) {
          reject(e)
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value))
        } catch (e) {
          reject(e)
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected)
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next())
    })
  }
var __generator =
  (this && this.__generator) ||
  function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
          if (t[0] & 1) throw t[1]
          return t[1]
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === "function" &&
        (g[Symbol.iterator] = function() {
          return this
        }),
      g
    )
    function verb(n) {
      return function(v) {
        return step([n, v])
      }
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.")
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y["return"]
                  : op[0]
                  ? y["throw"] || ((t = y["return"]) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t
          if (((y = 0), t)) op = [op[0] & 2, t.value]
          switch (op[0]) {
            case 0:
            case 1:
              t = op
              break
            case 4:
              _.label++
              return { value: op[1], done: false }
            case 5:
              _.label++
              y = op[1]
              op = [0]
              continue
            case 7:
              op = _.ops.pop()
              _.trys.pop()
              continue
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0
                continue
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1]
                break
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1]
                t = op
                break
              }
              if (t && _.label < t[2]) {
                _.label = t[2]
                _.ops.push(op)
                break
              }
              if (t[2]) _.ops.pop()
              _.trys.pop()
              continue
          }
          op = body.call(thisArg, _)
        } catch (e) {
          op = [6, e]
          y = 0
        } finally {
          f = t = 0
        }
      if (op[0] & 5) throw op[1]
      return { value: op[0] ? op[1] : void 0, done: true }
    }
  }
function foo() {
  return __awaiter(this, void 0, void 0, function() {
    return __generator(this, function(_a) {
      return [2 /*return*/, Promise.resolve("bar")]
    })
  })
}
```

I'm sure if I stepped through it, I could figure out what's going on ...
but rest assured, we won't be doing anything remotely as complicated as that.
