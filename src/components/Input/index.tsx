import classes from './index.module.css'
import { HTMLInputTypeAttribute, PropsWithChildren, useId } from 'react'

interface Props<T = any> extends PropsWithChildren {
  type: HTMLInputTypeAttribute;
  label: string;
  pattern?: string;
  placeholder?: string;
  id?: string;
  disabled?: boolean;
  inputMode?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search';
  value: T;
  valueChange: (value: T) => void;
}

export const Input = <T extends any>(
  {
    type,
    label,
    pattern,
    placeholder,
    id,
    disabled,
    inputMode,
    value,
    valueChange,
  }: Props<T>) => {
  const uniqueId = useId()
  const inputId = id || uniqueId

  return (
    <div className={classes.inputGroup}>
      <label htmlFor={inputId}>{label}</label>
      <input id={inputId} type={type} inputMode={inputMode} autoComplete='off' autoCorrect='off' pattern={pattern}
             placeholder={placeholder} disabled={disabled} value={value}
             onChange={({ target: { value } }) => valueChange(value)} />
    </div>
  )
}

