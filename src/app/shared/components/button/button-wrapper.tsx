import React from 'react';

import AddIcon from '@atlaskit/icon/glyph/add';
import FileIcon from '@atlaskit/icon/glyph/file';
import BulletList from '@atlaskit/icon/glyph/bullet-list';
import ArrowDown from '@atlaskit/icon/glyph/arrow-down';
import ChevronDown from '@atlaskit/icon/glyph/chevron-down';
import { LoadingButton } from '@atlaskit/button';
import BitbucketForksIcon from '@atlaskit/icon/glyph/bitbucket/forks';
import LocationIcon from '@atlaskit/icon/glyph/location';
import ListIcon from '@atlaskit/icon/glyph/list'
import EditorMediaCenterIcon from '@atlaskit/icon/glyph/editor/media-center'
import RefreshIcon from '@atlaskit/icon/glyph/refresh'

const ButtonIconBeforeExample = ({ appearance, iconName, label, isFullwidth, className, disabled, color, isLoading, isSelected, width }: any) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'AddIcon':
        return <AddIcon label="Star icon" size="small" />

      case 'Bullet':
        return <BulletList label="Star icon" size="small" />

      case 'ArrowDown':
        return <ArrowDown label="Star icon" size="small" />


      case 'ChevronDown':
        return <ChevronDown label="Star icon" size="small" />
        
      case 'FileIcon':
        return <FileIcon label="Star icon" size="small" />

      case 'Forks':
        return <BitbucketForksIcon label="Star icon" size="small" />

      case 'LocationIcon':
        return <LocationIcon label="Star icon" size="small" />

      case 'ListIcon':
        return <ListIcon label="Star icon" size="small" />

      case 'EditorMediaCenterIcon':
        return <EditorMediaCenterIcon label="Star icon" size="small" />

      case 'RefreshIcon':
        return <RefreshIcon label="Star icon" size="small" />

      default:
        return
    }
  }
  return (
    <LoadingButton
      className={className}
      shouldFitContainer={
        isFullwidth
      }
      iconBefore={getIcon(iconName)}
      appearance={appearance}
      isDisabled={disabled ? true : false}
      style={{ background: color, width: width }}
      isLoading={isLoading}
      isSelected={isSelected}
    >
      {label}
    </LoadingButton>
  );
};

export default ButtonIconBeforeExample;