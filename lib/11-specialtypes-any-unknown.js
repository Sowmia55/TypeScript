"use strict";
let exampleAny;
let exampleUnknown;
//any
exampleAny = "string";
exampleAny = 1;
//Unknown
exampleUnknown = "string";
exampleUnknown = 1;
//any
exampleAny.allows.anything.you.can.imagine();
let anySetboolean = exampleAny;
//unknown
if (typeof exampleUnknown == 'string') {
    exampleUnknown.trim();
}
if (typeof exampleUnknown == 'boolean') {
    let unknownSetboolean = exampleUnknown;
}
