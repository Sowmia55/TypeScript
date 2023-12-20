"use strict";
let hello = load();
if (typeof hello === 'string') { // normal way
    const trimmed = hello.trim();
}
function load() {
    return ("Function not implemented.");
}
const trimmed = hello.trim(); //type assertions (as string)
