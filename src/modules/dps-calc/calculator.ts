import { Datum, DPSComponentProps } from './apitypes';

const dpsCalculator = ({ data, owner }: DPSComponentProps) => {
  var dps = 0;

  for (let index = 0; index < data.length; index++) {
    const element = data[index];

    if (element.owner === owner) {
      dps += Number(element.data.DPS);
    }
  }

  return dps;
};

// fix: item owners could be different?
const demon = ['Demon Queen', 'Demon Ace', 'Demon King'];
const mecha = ['Mecha Glitter', 'Mecha Apollo', 'Mecha Draco'];

const dpsItemsCalculator = (basis: Datum[], data: Datum[], owner: string) => {
  var dps = 0;

  for (let index = 0; index < data.length; index++) {
    const element = data[index];

    const exists = basis.filter((d) => {
      var _name = d.data.name.trim();

      // patch fixes for demon and mecha items
      if (demon.includes(_name)) {
        _name = 'Demon';
      } else if (mecha.includes(_name)) {
        _name = 'Mecha';
      }

      return _name === element.data['Item Owner']?.trim() && owner === element.owner;
    })[0];
    if (exists) {
      dps += Number(element.data.DPS);
    }
  }

  return dps;
};

export { dpsCalculator, dpsItemsCalculator };
