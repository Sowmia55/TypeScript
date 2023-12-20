

let hello = load();
if (typeof hello === 'string') {  // normal way
    const trimmed = hello.trim();
}

function load() {
    return ("Function not implemented.");
}


const trimmed = (hello as string).trim(); //type assertions (as string)
