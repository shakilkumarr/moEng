import data from '../data/data.json';

export const getDataByIndex = (index = 0, size = 10, arrVal) => {
    arrVal = arrVal || data; 
    const resultArr = arrVal.slice(index, index+size);
    return resultArr;
}

export const getFullData = () =>{
    return data;
}

export const getSearchData = (searchStr = '', arrVal, size = 10) => {
    arrVal = arrVal || data;
    const resultArr = [];
    searchStr = searchStr.toLowerCase();
    arrVal.some(obj => {
        if (resultArr.length >= 10){
            return true;
        }
        else if (obj.name.toLowerCase().indexOf(searchStr) >= 0) {
            resultArr.push(obj);
            return false;
        } 
    });
    return resultArr;
}
