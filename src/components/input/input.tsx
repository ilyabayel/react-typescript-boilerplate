import React, {ChangeEvent, FocusEvent, ReactElement} from 'react';

export type InputProps = {
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
};

export function Input({value, onChange, onBlur}: InputProps): ReactElement {
  return <input data-test="input-component" value={value} onChange={onChange} onBlur={onBlur} />;
}
