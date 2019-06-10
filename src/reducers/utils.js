export const bindCreate = (objBase, submit) => {
    let obj = {};
    Object.keys(objBase).map((key, idx) => {
        if (submit[key] != undefined)
            obj[key] = submit[key].value;
    });
    return obj;
}

export const bind = (objBase, submit) => {
    Object.keys(objBase).map((key, idx) => {
        if (submit[key] != undefined)
            objBase[key] = submit[key].value;
    });
}

export const clear = (obj) => {
    Object.keys(obj).map((key, idx) => {
        obj[key] = '';
    });
}

export const clearSubmit = (submit) => {
    Object.getOwnPropertyNames(submit).map((key, idx) => {
        if (submit[key].value != undefined)
            submit[key].value = '';
    });
}