/** @jsx jsx */

import { jsx } from '@emotion/core';
import { gridSize } from '@atlaskit/theme/constants';

import Spinner from '@atlaskit/spinner';

const grid: number = gridSize();

export default function Example({content}: any) {
  return (
    <span>
        <Spinner size="medium" /> 
        <span style={{
            fontSize: "12px",
            marginLeft: "11px"
        }}>{content}</span>
    </span>
  );
}