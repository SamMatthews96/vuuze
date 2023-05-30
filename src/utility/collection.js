import { map, zipObject } from 'lodash';

const fromCollection = (data, key, value) => {
    const keys = map(data, key);
    const values = map(data, value);

    return zipObject(keys, values);
};

export {
    fromCollection
}