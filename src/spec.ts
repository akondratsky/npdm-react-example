import type { DynamicModule, DynamicPackageSpec } from '@npdm/module-federation';
import type { WonderfulButtonType } from './components/WonderfulButton';
import type { WonderfulCheckboxType } from './components/WonderfulCheckbox';

export const packageSpec: DynamicPackageSpec = {
  packageName: 'npdmjs-react-example',
  packageVersion: '1.0.0',
  remoteEntryRelativePath: '/npdm/entry.js',
  remoteName: 'npdmjs_react_example',
};

export const wonderfulButtonModule: DynamicModule<WonderfulButtonType> = {
  exposedPath: '/Button',
  packageSpec,
};

export const checkboxModule: DynamicModule<WonderfulCheckboxType> = {
  exposedPath: '/Checkbox',
  packageSpec,
};
