"use strict";
console.groupCollapsed('2.2. Sukurkite funkciją "refactorBmwCar" kurti perkuria mašiną.  Pašalina mašinos savybė brand, o model savybę pakeičia taip, kad joje būtų markė ir modelis atskirta tarpu. Visos kitos savybės paliekamos tokios pat');
{
    {
        const Car = {
            brand: 'BMW',
            model: 'X1',
            make: 5,
        };
        const CAR_MAP = [
            {
                brand: 'BMW',
                model: 'X1',
                make: 2,
            }, {
                brand: 'BMW',
                model: 'X2',
                make: 6,
            }, {
                brand: 'BMW',
                model: 'X3',
                make: 9,
            },
        ];
        const refactorBmwCarWithOneOBJ = ({ brand, model, ...ObjsVal }) => ({
            model: `${brand} ${model}`,
            ...ObjsVal,
        });
        const refactorBmwCarARR = CAR_MAP.map(({ brand, model, ...ObjsVal }) => ({
            model: `${brand} ${model}`,
            ...ObjsVal,
        }));
        console.log(refactorBmwCarWithOneOBJ(Car));
        console.table(refactorBmwCarARR);
    }
    console.groupEnd();
}
console.groupEnd();
//# sourceMappingURL=TS-Lesson68Tasks.js.map