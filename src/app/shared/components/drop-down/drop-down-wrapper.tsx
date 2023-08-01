/** @jsx jsx */
import { Fragment } from 'react';

import { jsx } from '@emotion/core';
import Button from '@atlaskit/button';

import { PopupSelect } from '@atlaskit/select';
import MoreIcon from '@atlaskit/icon/glyph/more-vertical';


const defaults = {
  placeholder: 'Select',
  'aria-label': 'select'
};

const css = {
  background: "transparent",
  color: "#253858 !important"
}

const PopupSelectExample = ({ onChange, items, buttonLabel }: any) => (
  <Fragment>
    <div css={{ display: 'flex', justifyContent: 'space-between' }}>
      <PopupSelect
        {...defaults}
        onChange={onChange}
        options={items}
        target={({ isOpen, ...triggerProps }) => (
          <div>
            {
              !buttonLabel && (
                <Button {...triggerProps} isSelected={isOpen} css={{
                  ...css,
                  ":hover": css,
                  ":active": css,
                  ":focus": css
                }}>
                  {/* <span {...triggerProps} className="aui-icon aui-icon-small aui-iconfont-more-vertical">Insert meaningful text here for accessibility</span> */}
                  <MoreIcon label="more" {...triggerProps} />
                </Button>
              )
            }
            {
              buttonLabel && (
                <Button {...triggerProps} isSelected={isOpen}>
                  {buttonLabel}
                </Button>
              )
            }
          </div>
        )}
        popperProps={{ placement: 'bottom', strategy: 'fixed' }}
        searchThreshold={10}
      />
    </div>
  </Fragment>
);

export default PopupSelectExample;