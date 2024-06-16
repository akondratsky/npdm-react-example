import { packageSpec } from './packageSpec.js';
import type { FC } from 'react';
import type { DynamicModule } from '@npdm/module-federation';

export type WonderfulButtonProps = {
  label: string;
  onClick?: () => void;
};

export type WonderfulButtonType = FC<WonderfulButtonProps>;

/**
 * Module exports one default component, WonderfulButton
 */
export const wonderfulButtonModule: DynamicModule<{ default: WonderfulButtonType }> = {
  exposedPath: '/Button',
  packageSpec,
};
