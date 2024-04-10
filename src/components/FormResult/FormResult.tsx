import classNames from 'classnames';
import './FormResult.scss';

interface Props {
  className?: string
  title: string
  calculation: string
};

export const FormResult: React.FC<Props> = ({
  className = '',
  title,
  calculation,
}) => {
  return (
    <div className={`form-result ${className}`}>
      <p className="form-result__title">{title}</p>

      <p className={classNames('form-result__calculation', {
        'form-result__calculation--red': title === 'Udemy:',
      })}>
        <span className={classNames('form-result__calculation-symbol', {
          'form-result__calculation--red': title === 'Udemy:',
        })}>$</span>
        {calculation}
      </p>
    </div >
  );
};
