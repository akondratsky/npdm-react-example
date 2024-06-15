import { packageSpec } from './packageSpec.js';
import type { FC } from 'react';
import type { DynamicModule } from '@npdm/module-federation';

export type CheckboxProps = {
  onChange?: (isChecked: boolean) => void;
  label: string;
};

export type WonderfulCheckboxType = FC<CheckboxProps>;

export const checkboxModule: DynamicModule<WonderfulCheckboxType> = {
  exposedPath: '/Checkbox',
  packageSpec,
};
