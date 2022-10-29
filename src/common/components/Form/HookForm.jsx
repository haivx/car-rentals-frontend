import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const HookForm = ({ onSubmit, config = {}, children, schema, id = '', loading = false, className }) => {
  const methods = useForm({
    ...config,
    resolver: schema && yupResolver(schema),
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className={className} id={id}>
        {React.Children.map(children, (Child) => {
          return Child;
        })}
        {loading && (
          <div style={{ position: 'absolute' }} className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
      </form>
    </FormProvider>
  );
};
export default HookForm;
