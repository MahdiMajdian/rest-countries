/// <reference types="react-scripts" />
/// <reference types="jest-extended" />

import { ReactNode } from 'react';
import '@emotion/react';

type FontWeight = 300 | 600 | 800;

declare global {
  type PropsWithMandatoryChildren<TProps> = TProps & { children: ReactNode };

  type StyledProps<TProps = Record<string, unknown>> = TProps & {
    className?: string;
  };

  type SVGType = React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
}

declare module '@emotion/react' {
  export interface Theme {
    palette: {
      primary: string;
      secondary: string;
    };
    background: {
      default: string;
      element: string;
    };
    shadow: {
      main: string;
    };
    fontWeight: {
      light: FontWeight;
      normal: FontWeight;
      bold: FontWeight;
    };
  }
}
