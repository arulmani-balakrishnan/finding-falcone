import Utils from "../src/utils";
const { isValidObject, findByName, filterByValue, getValueByKey, size, range} = Utils;
import data from './data';
const {selectedDatas , planets, vehicles} = data;
const EMPTY_ARRAY = [];

describe('Utils Test cases', ()=> {

    //creates array of expressions to use in expect function
    const getExpressionsArray = (func, funcParams) => funcParams.map(f=>func(f));

    //executes expressions[0] equals values[0] ...
    const equals = ([expressions, values]) => {
        for(let i=0;i<expressions.length;i++) {
            expect(expressions[i]).toEqual(values[i]);
        }
    };
    //executes function with params
    const func = (functionName, [params]) => functionName(...params);
    //Test wrapper
    const executeTest = (func, inputs, outputs)=>equals([getExpressionsArray(func, inputs), outputs]);

    it('isValidObject', ()=>{
       const OBJECT_SIZE = 4;
       let { selectedDatas } = data;
       expect(isValidObject(selectedDatas, OBJECT_SIZE)).toBe(true);
       expect(isValidObject(selectedDatas, 3)).toBe(false);
       selectedDatas = {};
       expect(isValidObject(selectedDatas, OBJECT_SIZE)).toBe(false);
       selectedDatas = {Enchai: undefined, Sapir: undefined, Donlon: undefined, Jebing: undefined};
       expect(isValidObject(selectedDatas, OBJECT_SIZE)).toBe(false);
    });

    it('findByName', ()=>{
        const planetName = 'Donlon';
        let filteredPlanet = findByName(planets, planetName);
        expect(filteredPlanet).toBeDefined();
        expect(filteredPlanet.name).toBe(planetName);

        filteredPlanet = findByName(planets, planetName+'test');
        expect(filteredPlanet).toBeUndefined();

        filteredPlanet = findByName(planets);
        expect(filteredPlanet).toBeUndefined();
    });

    it('getValueByKey', ()=>{
        const filteredVehicle = findByName(vehicles, 'Space pod');
        expect(getValueByKey(filteredVehicle, 'total_no')).toBe(2);
        expect(getValueByKey(filteredVehicle, 'max_distance')).toBe(200);

        expect(getValueByKey(filteredVehicle, '')).toBeUndefined();
        expect(getValueByKey(filteredVehicle)).toBeUndefined();

    });

    it('filterByValue', ()=>{
        const values = Object.keys(selectedDatas);
        expect(filterByValue(values, 'Jebing')).toEqual(['Jebing']);
        expect(filterByValue(values, '')).toEqual(EMPTY_ARRAY);
        expect(filterByValue(values, 'Test')).toEqual(EMPTY_ARRAY);
        expect(filterByValue(values)).toEqual(EMPTY_ARRAY);
    });

    it('size', ()=>{
        executeTest(size,
            [EMPTY_ARRAY, Object.keys(selectedDatas)],
            [0, 4]
        );
    });

    it('range', ()=>{
        executeTest(range,
            [0, 1, undefined, 5],
            [EMPTY_ARRAY, [0], EMPTY_ARRAY, [0,1,2,3,4]]
        );
    });
});