import { packageSpec } from './packageSpec.js';
import type { FC } from 'react';
import type { DynamicModule } from '@npdm/module-federation';

export type WonderfulButtonProps = {
  label: string;
  onClick?: () => void;
};

export type WonderfulButtonType = FC<WonderfulButtonProps>;

export const wonderfulButtonModule: DynamicModule<WonderfulButtonType> = {
  exposedPath: '/Button',
  packageSpec,
};
