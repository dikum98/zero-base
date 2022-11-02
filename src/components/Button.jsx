import { Icon } from './Icon.js';

export const Button = ({ disabled, children }) => {
  return (
    <button disabled={disabled}>
      <span>{children}</span>
      <Icon path={children} disabled={disabled} />
    </button>
  );
};
