import React from 'react';

import Lozenge from '@atlaskit/lozenge';

export default ({appearance, isBold = true, label, backgroundColor, color}: any) => (
  <>
    <div>
      <Lozenge
        style={{ backgroundColor, color: color ? color : '' }}
        isBold={isBold}
        appearance={appearance} 
        maxWidth={300}>
        {label}
      </Lozenge>
    </div>
  </>
);