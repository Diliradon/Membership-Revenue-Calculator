import { useEffect, useRef, useState } from 'react';
import { InitialData } from '../../types/form';
import './FormInput.scss';

interface Props {
  name: string
  className?: string
  filedValue: InitialData
  onChangeValues: (e: React.ChangeEvent<HTMLInputElement>) => void
};

export const FormInput: React.FC<Props> = ({
  name,
  className = '',
  filedValue,
  onChangeValues = () => { },
}) => {
  const [width, setWidth] = useState(10);
  const span = useRef<HTMLSpanElement>(null);

  const {
    title,
    modalText,
    symbolNumber,
    symbolModal,
    maxLength,
    maxValue,
    value,
  } = filedValue;

  useEffect(() => {
    if (span.current) {
      setWidth(span.current.offsetWidth);
    }
  }, [value]);
  return (
    <div className={`form-input ${className}`}>
      <div className="form-input__header">
        <div className="form-input__header-left">
          <h2 className="form-input__header-title">{title}</h2>

          <div className="form-input__header-modal">
            {symbolModal}

            <span className="form-input__header-modal-wrapper">
              <small className="form-input__header-modal-text">
                {modalText}
              </small>
            </span>
          </div>
        </div>

        <label className="form-input__header-right">
          {symbolNumber && (
            <p className="form-input__header-symbol">
              {symbolNumber}
            </p>
          )}

          <span
            id="hide"
            ref={span}
            className="form-input__header-span"
          >
            {value}
          </span>
          <input
            type="text"
            name={name}
            value={value}
            className="form-input__header-input"
            maxLength={maxLength}
            onChange={onChangeValues}
            style={{ width }}
            autoFocus
          />
        </label>
      </div>

      <input
        name={name}
        value={value} 
        max={maxValue}
        className="form-input__field"
        type="range"
        onChange={onChangeValues}
      />
    </div>
  );
};

