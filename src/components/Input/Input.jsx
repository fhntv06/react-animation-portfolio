import './input.scss';

const Input = ({isTextarea = false, ...props }) => {
  return (
    !isTextarea
      ? <input required {...props} />
      : <textarea required {...props} />
  );
}

export default Input;
