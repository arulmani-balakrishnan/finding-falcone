const BASE_ENDPOINT_URL = 'https://findfalcone.herokuapp.com/';

/**
 * Validates objects. Object keys & values count should match with the given size
 *  @function {function} isValidObject
 *
 * @param {Object} object
 * @param {Number} length
 *
 * @return {Boolean}
 */
function isValidObject(object, length) {
    const isValidArray  = (arr) => size(filterByValue(arr)) === 0 && size(arr) === length;
    return (!object || !length || (isValidArray(Object.keys(object)) && isValidArray(Object.values(object))) );
}

/**
 * Returns the object with name attribute matches the given name
 * @function {function} findByName
 *
 * @param {Array<Object>} objectArray
 * @param {String} name
 *
 * @return {Object}
 */
function findByName(objectArray, name) {
    return (objectArray || []).find(obj=>obj.name === name);
}

/**
 * Returns the object's value for the given key
 * @function {function} getPlanetDistance
 *
 * @param {Object} object
 * @param {String} key
 * @param {Any} [defaultValue=0]
 *
 * @return {Any}
 */
function getValueByKey(object, key, defaultValue) {
    return object && key && object[key] ? object[key] : defaultValue;
}

/**
 * Filters array for the given value
 * @function {function} filterByValue
 *
 * @param {Array<String>} valueArray
 * @param {String} value
 *
 * @return {Array<String>}
 */
function filterByValue(valueArray, value) {
    if(!valueArray) return [];
    return valueArray.filter(v => v === value);
}

/**
 * Returns the size of input array
 * @function {function} size
 * @param {Array<>} arrayObject
 *
 * @return {Number}
 */
function size(arrayObject) {
    return !arrayObject ? 0 : arrayObject.length;
}

/**
 * Returns an array of given size with values from 0,1,2,..
 * @function {function} range
 * @param {Number} times
 *
 * @return {Array<Number>}
 */
function range(times) {
    const array = [];
    for(let i=0;i<times;i++) {
        array.push(i);
    }
    return array;
}

/**
 * Returns the required request headers to fetch json content
 * @function {function} requestHeadersForJsonContent
 *
 * @return {Object<Request-Headers>}
 */
function requestHeadersForJsonContent() {
    return {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };
}

/**
 * To get the distance of a planet from planets list
 * @function {function} getPlanetDistance
 *
 * @param {Array<Planet>} planetsArray
 * @param {Object<Planet>} planet
 * @param {Number} [defaultValue=0]
 *
 * @return {Number}
 */
function getPlanetDistance(planetsArray, planet, defaultValue=0) {
    return getValueByKey(findByName(planetsArray, planet), 'distance', defaultValue);
}

/**
 * To get the speed of a vehicle from vehicles list
 * @function {function} getVehicleSpeed
 *
 * @param {Array<Vehicles>} vehiclesArray
 * @param {Object<vehicle>} vehicle
 * @param {Number} [defaultValue=0]
 *
 * @return {Number}
 */
function getVehicleSpeed(vehiclesArray, vehicle, defaultValue=0) {
    return getValueByKey(findByName(vehiclesArray, vehicle), 'speed', defaultValue);
}

export default {
    BASE_ENDPOINT_URL,
    isValidObject,
    findByName,
    filterByValue,
    getValueByKey,
    size,
    range,
    requestHeadersForJsonContent,
    getPlanetDistance,
    getVehicleSpeed
}