import React from 'react';

import { HelperMessage, ErrorMessage, ValidMessage } from '@atlaskit/form';

export default function FormFieldMessageReactComponent({ type, children }: any) {

  return (
    <div>
      {type === 'error' && (
        <ErrorMessage>
          {children}
        </ErrorMessage>
      )}
      {type === 'valid' && (
        <ValidMessage>
          {children}
        </ValidMessage>
      )}
      {type === 'helper' && (
        <HelperMessage>
          {children}
        </HelperMessage>
      )}
    </div>
  );
}