let exampleAny: any;
let exampleUnknown: any;

//any
exampleAny = "string";
exampleAny = 1;
//Unknown
exampleUnknown = "string";
exampleUnknown = 1;
//any
exampleAny.allows.anything.you.can.imagine();
let anySetboolean: boolean = exampleAny;
//unknown
if (typeof exampleUnknown == 'string') {
    exampleUnknown.trim();
}
if (typeof exampleUnknown == 'boolean') {
    let unknownSetboolean: boolean = exampleUnknown;
}