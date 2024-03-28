import { useState } from 'react';
import { FormResult } from '../FormResult';
import { FormInput } from '../FormInput';
import './CalculatorForm.scss';
import { data } from '../../data/data';
import { InitialData, InitialValues } from '../../types/form';

// const initialValues = {
//   MonthlyMembers: 0,
//   CostPerMonth: 0,
//   AnnualMembers: 0,
//   CostPerYear: 0,
//   MonthlyRetentionRate: 0,
// }

export const CalculatorForm = () => {
  const [formData, setFormData] = useState<InitialData[]>(data);
  // const [values, setValues] = useState(initialValues);

  const handleChangeValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '')
    
  }

  return (
    <form className="calculator-form">
      <div className="calculator-form-wrapper">
        <div className="calculator-form__header">
          <h1 className="calculator-form__title">
            Membership Revenue Calculator
          </h1>
          <p className="calculator-form__description">
            Use the sliders to see how much money you&#x27;ll make.
          </p>
        </div>

        <div className="calculator-form__main">
          {formData.map(item => (
              <FormInput
                item={item}
                onChangeValues={handleChangeValues}
              />
            ))}
        </div>

        <div className="calculator-form__footer">
          <h1 className="calculator-form__footer-title">
            How much money will you make?
          </h1>
          <div className="calculator-form__footer-block">
            <FormResult
              className="calculator-form__footer-result"
              title="AVERAGE MONTHLY REVENUE:"
            />

            <FormResult
              className="
                calculator-form__footer-result 
                calculator-form__footer-result--right
              "
              title="ANNUAL REVENUE:"
            />
          </div>
        </div>
      </div>
    </form>
  );
};
