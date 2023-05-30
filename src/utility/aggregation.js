const count = (data, key) => {
    const result = {};

    data.forEach(record => {
        if(!result[record[key]]){
            result[record[key]] = 0;
        }

        result[record[key]]++;
    });

    return Object.values(result);
};

const sum = (data, key) => {
    const result = {};

    data.forEach(record => {
        if(!result[record[key]]){
            result[record[key]] = 0;
        }

        result[record[key]] += parseFloat(record[key]);
    });

    return Object.values(result);
}

const min = (data, key) => {
    const result = {};

    data.forEach(record => {
        if(!result[record[key]]){
            result[record[key]] = parseFloat(record[key]);
        }
        else if(result[record[key]] > parseFloat(record[key])) {
            result[record[key]] = parseFloat(record[key]);
        }
    });

    return Object.values(result);
}

const max = (data, key) => {
    const result = {};

    data.forEach(record => {
        if(!result[record[key]]){
            result[record[key]] = parseFloat(record[key]);
        }
        else if(result[record[key]] < parseFloat(record[key])) {
            result[record[key]] = parseFloat(record[key]);
        }
    });

    return Object.values(result);
}

const average = (data, key) => {
    const result = {};
    const counter = {};

    dataset.forEach(record => {
        if(!result[record[key]]){
            result[record[key]] = 0;
            counter[record[key]] = 0;
        }

        result[record[key]] += parseFloat(record[key]);
        counter[record[key]]++
    });

    for(const k in result){
        result[k] /= counter[k];
    }

    return Object.values(result);
}

export {
    count,
    sum,
    min,
    max,
    average
};