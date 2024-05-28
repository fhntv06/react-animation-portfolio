import clsx from "clsx";
import './button.scss';

const Button = ({ orange = false, small = false, white = false, round = false, children, ...props }) => {
  return (
    <button
      className={
        clsx(
          {
            'button--orange': orange,
            'button--round': round,
            'button--white': white,
            'button--small': small,
          }
        )
      }
      {...props}
    >{children}</button>
  );
}

export default Button;
