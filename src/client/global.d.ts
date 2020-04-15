import * as rebassStyledComponents from 'rebass/styled-components';

// extend lib definitions to fix errors with valid props
declare module 'rebass' {
  interface FlexProps {
    as?: React.ElementType;
    flexGrow?: number | (number | null)[];
  }
  interface BoxProps {
    as?: React.ElementType;
    flexGrow?: number | (number | null)[];
  }
}
