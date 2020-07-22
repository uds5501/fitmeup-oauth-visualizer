export const extractElement = (data, element) => {
    return data.map((idx) => {
        return idx[element];
    })
}

export const extractDate = (data) => {
    return data.map((idx) => {
        console.log(idx.Date);
        var x = `${idx.Date.getDate()}-${idx.Date.getMonth()}-${idx.Date.getFullYear()}`;
        return x;
    })
}