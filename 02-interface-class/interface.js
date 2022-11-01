"use strict";
// 
var WeekDayEnum;
(function (WeekDayEnum) {
    WeekDayEnum[WeekDayEnum["Sun"] = 0] = "Sun";
    WeekDayEnum[WeekDayEnum["Mon"] = 1] = "Mon";
    WeekDayEnum[WeekDayEnum["Tue"] = 2] = "Tue";
    WeekDayEnum[WeekDayEnum["Wed"] = 3] = "Wed";
    WeekDayEnum[WeekDayEnum["Thu"] = 4] = "Thu";
    WeekDayEnum[WeekDayEnum["Fri"] = 5] = "Fri";
    WeekDayEnum[WeekDayEnum["Sat"] = 6] = "Sat";
})(WeekDayEnum || (WeekDayEnum = {}));
;
// Interface
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
    Gender[Gender["Other"] = 2] = "Other";
})(Gender || (Gender = {}));
;
const maxwell = {
    name: 'Maxwell',
    age: 20,
    hasPet: false,
};
function printPersonInfo(person) {
    console.log(`Name: ${person.name}`);
    console.log(`Age is:${person.age}`);
    console.log(`Owns a pet? ${person.hasPet}`);
}
// printPersonInfo({
//     name: 'Maxwell',
//     age: 20,
//     hasPet: false,
//     job: 'Front-End',
//     nothingSpecial: null,
// })
let infoMaxwell = {
    name: 'Maxwell',
    age: 20,
    hasPet: false,
    job: 'Front-End',
    nothingSpecial: null,
};
printPersonInfo(infoMaxwell);
