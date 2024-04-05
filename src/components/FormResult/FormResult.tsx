import './FormResult.scss';

interface Props {
  className?: string
  title: string
  calculation: number
};

export const FormResult: React.FC<Props> = ({
  className = '',
  title,
  calculation,
}) => {
  return (
    <div className={`form-result ${className}`}>
      <p className="form-result__title">{title}</p>
     
      <p className="form-result__calculation">
        {calculation}
        <span className="form-result__calculation-symbol">$</span>
      </p>
    </div>
  );
};
