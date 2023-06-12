"use strict";
function getPropertyP(obj, key) {
    return obj[key];
}
const propertyP = getPropertyP({ name: "Mr.X", age: 10 }, "age");
