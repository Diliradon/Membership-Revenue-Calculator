import { useState } from 'react';
import { FormResult } from '../FormResult';
import { FormInput } from '../FormInput';
import './CalculatorForm.scss';
import { getTotalSales, getTotalTaxSales } from '../../helpers/functions';

const percentLearnersHQ = 0.89;
const percentUdemy = 0.63;

const initialValues = {
  monthlySales: {
    id: 1,
    title: 'Monthly Sales',
    modalText: 'This is how many sales you are looking to do per month. Try realistic, then dare to dream.',
    symbolNumber: 'q',
    symbolModal: '!',
    maxLength: 5,
    maxValue: 10000,
    value: 0,
  },
  averageCost: {
    id: 2,
    title: 'Average Cost',
    modalText: 'You may only have 1 course so put this in, but if you have more just put a rough figure in.',
    symbolNumber: '$',
    symbolModal: '$',
    maxLength: 4,
    maxValue: 1000,
    value: 0,
  },
}

export const CalculatorForm = () => {
  const [values, setValues] = useState(initialValues);

  const { monthlySales, averageCost } = values;

  const handleChangeValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = +e.target.value.replace(/[^0-9]/g, '');

    if (value >= monthlySales.maxValue && e.target.name === 'monthlySales') {
      value = monthlySales.maxValue;
    };

    if (value >= averageCost.maxValue && e.target.name === 'averageCost') {
      value = averageCost.maxValue;
    };

    setValues(c => ({
      ...c,
      [e.target.name]: {
        ...c[e.target.name as keyof typeof values],
        value,
      },
    }))
  };

  const totalSales = getTotalSales(monthlySales.value, averageCost.value);

  const totalSalesLearnersHQ 
    = getTotalTaxSales(monthlySales.value, averageCost.value, percentLearnersHQ);
  const totalSalesUdemy 
    = getTotalTaxSales(monthlySales.value, averageCost.value, percentUdemy);

  return (
    <form className="calculator-form">
      <div className="calculator-form-wrapper">
        <div className="calculator-form__header">
          <h1 className="calculator-form__title">
            Earnings Calculator
          </h1>
          <p className="calculator-form__description">
            Use the sliders to see how much money you&#x27;ll make.
          </p>
        </div>

        <div className="calculator-form__main">
          <FormInput
            name="monthlySales"
            filedValue={monthlySales}
            onChangeValues={handleChangeValues}
          />

          <FormInput
            name="averageCost"
            filedValue={averageCost}
            onChangeValues={handleChangeValues}
          />

          <p className="calculator-form__description">
            This is what you could be selling per month.
          </p>

          <FormResult
            className="calculator-form__footer-result"
            title="Total Sales:"
            calculation={totalSales}
          />
        </div>

        <div className="calculator-form__footer">
          <h1 className="calculator-form__footer-title">
            How much money will you make?
          </h1>
          <div className="calculator-form__footer-block">
            <FormResult
              calculation={totalSalesLearnersHQ}
              className="calculator-form__footer-result"
              title="LearnersHQ:"
            />

            <FormResult
              calculation={totalSalesUdemy}
              className="
                calculator-form__footer-result
                calculator-form__footer-result--right
              "
              title="Udemy:"
            />
          </div>
        </div>
      </div>
    </form>
  );
};
