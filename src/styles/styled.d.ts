import { ColorsTypes, textStyleTypes } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorsTypes;
    textStyles: textStyleTypes;
  }
}
