/* eslint-disable no-console */
/* eslint-disable no-lone-blocks */
console.groupCollapsed('2.2. Sukurkite funkciją "refactorBmwCar" kurti perkuria mašiną.  Pašalina mašinos savybė brand, o model savybę pakeičia taip, kad joje būtų markė ir modelis atskirta tarpu. Visos kitos savybės paliekamos tokios pat'); {
  {
    interface BMWCar {
      brand: 'BMW',
      model: 'X1' | 'X2' | 'X3' | 'X4' | 'X5',
      make: number,
      color?: string,
    }

    const Car: BMWCar = {
      brand: 'BMW',
      model: 'X1',
      make: 5,
    };

    const CAR_MAP: BMWCar[] = [
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

    interface RefactorCar extends Omit<BMWCar, 'brand' | 'model'> {
      model: `${BMWCar['brand']} ${BMWCar['model']}`
    }

    const refactorBmwCarWithOneOBJ = ({ brand, model, ...ObjsVal }: BMWCar): RefactorCar => ({
      model: `${brand} ${model}`,
      ...ObjsVal,
    });

    const refactorBmwCarARR = CAR_MAP.map(({ brand, model, ...ObjsVal }: BMWCar): RefactorCar => ({
      model: `${brand} ${model}`,
      ...ObjsVal,
    }));

    console.log(refactorBmwCarWithOneOBJ(Car));
    console.table(refactorBmwCarARR);
  }
  console.groupEnd();
}
console.groupEnd();
