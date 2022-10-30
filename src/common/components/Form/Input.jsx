import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';

const CustomInput = ({
  name = '',
  label,
  onChange,
  required,
  error,
  helperText,
  helperTextPosition = 'text-left',
  value,
  id,
  type,
  showValidationMsg,
  ...props
}) => {
  return (
    <>
      {label && (
        <label htmlFor={id} className="form-label">
          {!!required && <span className="required">* </span>}
          {label}
        </label>
      )}
      <input
        id={id}
        value={value}
        type={type}
        name={props.name}
        onChange={onChange}
        className={`form-control ${!!error ? 'is-invalid' : ''}`}
      />

      {!!error && showValidationMsg && <div className={`invalid-feedback ${helperTextPosition}`}>{helperText}</div>}
    </>
  );
};

const Input = ({ name = '', defaultValues = '', showValidationMsg = true, ...props }) => {
  const {
    setValue,
    control,
    formState: { errors },
  } = useFormContext();

  const onChange = (event) => {
    setValue(name, event.target.value, { shouldValidate: true, shouldDirty: true });
  };

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValues}
      render={({ field }) => {
        return (
          <CustomInput
            name={name}
            error={!!errors[name]}
            helperText={!!errors[name] && errors[name].message}
            onChange={onChange}
            value={field.value ?? ''}
            showValidationMsg={showValidationMsg}
            {...props}
          />
        );
      }}
    />
  );
};
export default Input;
