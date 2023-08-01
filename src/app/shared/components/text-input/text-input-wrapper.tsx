import React, { Fragment, useState, useEffect } from 'react';

import {Field} from '@atlaskit/form';

import Textfield from '@atlaskit/textfield';

export default function TextFieldReactComponent(config: any) {
  const [value, setValue] = useState('');
  useEffect(() => {
    setValue(config.value)
  }, [config])
  const handleChange = (event: any) => {
    setValue(event.target.value);
    config.onChange(event);
  }
  const onKeyUp = (event:any) => {
    if (event.charCode === 13) {
      config.onChange(event);
    }
  }
  let content = (<div dangerouslySetInnerHTML={{ __html: config.elemBeforeInput }}></div>);
  return (
    <Field label={config.label} name={config.id}>
      {({ fieldProps, error, meta: { valid } }: any) => (
        <Fragment>
          <Textfield
            {...fieldProps}
            {...config}
            value={value}
            onChange={handleChange}
            onKeyPress={onKeyUp}
            isDisabled={config.disabled}
            elemBeforeInput={content}
          />
        </Fragment>
      )}
    </Field>
  );
}