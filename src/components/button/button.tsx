import React, {ReactElement} from 'react';

export interface ButtonProps {
  label?: string;
  onClick?: (e) => void;
}

export function Button({label, onClick}: ButtonProps): ReactElement {
  return (
    <button className="button" data-test="button-component" onClick={onClick}>
      {label}
    </button>
  );
}
