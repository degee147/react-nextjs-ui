import 'styled-components';
import { ThemeObject } from '@paljs/theme';
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeObject {
    name: 'default';
    dir: 'ltr' | 'rtl';
    sidebarHeaderGap: string;
    gridSize: number;
  }
}
