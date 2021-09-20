console.log("in two.ts");

import {Add, Multiply} from './one.js';

function Compute(){
    Add(2,3);
    Multiply(2,3);
}

export default Compute;