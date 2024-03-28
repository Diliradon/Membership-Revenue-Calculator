import './FormResult.scss';

interface Props {
  className?: string
  title: string
};

export const FormResult: React.FC<Props> = ({
  className = '',
  title = '',
}) => {
  return (
    <div className={`form-result ${className}`}>
      {title}
    </div>
  );
};
