import { useEffect, useRef, useState } from 'react';
import { InitialData, InitialValues } from '../../types/form';
import './FormInput.scss';

interface Props {
  className?: string
  item: InitialData
  onChangeValues: (e: React.ChangeEvent<HTMLInputElement>) => void
};

export const FormInput: React.FC<Props> = ({
  className = '',
  item,
  onChangeValues = () => { },
}) => {
  const [content, setContent] = useState('');
  const [width, setWidth] = useState(10);
  const span = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (span.current) {
      setWidth(span.current.offsetWidth);
    }
  }, [content]);

  const changeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setContent(evt.target.value);
  };

  const {
    id,
    title,
    modalText,
    symbolNumber,
    symbolModal,
    maxLength,
    value,
  } = item;

  return (
    <div className={`form-input ${className}`} key={id}>
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
          <p className="form-input__header-symbol">
            {symbolNumber}
          </p>

          <span 
            id="hide" 
            ref={span}
            className="form-input__header-span"
          >
            {content}
          </span>
          <input
            type='text'
            value={content}
            className="form-input__header-input"
            maxLength={maxLength}
            onChange={e => changeHandler(e)}
            style={{ width }}
            autoFocus
          />
        </label>
      </div>

      <input className="form-input__field" type="range" />
    </div>
  );
};

