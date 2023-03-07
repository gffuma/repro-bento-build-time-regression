import { createBentoProvider } from '@buildo/bento-design-system';

import '@buildo/bento-design-system/lib/index.css';
import './theme.css';

import { sprinkles } from './sprinkles.css';

export const BentoProvider = createBentoProvider(
  {
    button: {
      radius: 8,
      uppercaseLabel: false,
    },
    input: {
      radius: 8,
    },
    searchBar: {
      radius: 8,
    },
  },
  sprinkles
);

declare module '@buildo/bento-design-system' {
  interface TypeOverrides {
    SprinklesFn: typeof sprinkles;
  }
}

// Export the Bento components you want to use in your app
export {
  Body,
  Box,
  Button,
  Columns,
  Column,
  ContentBlock,
  Display,
  Divider,
  Headline,
  IconButton,
  IconCheck,
  IconChevronRight,
  IconPositive,
  Inline,
  Inset,
  Label,
  Modal,
  Navigation,
  Placeholder,
  Stack,
  Tiles,
  Title,
} from '@buildo/bento-design-system';

export * from './components'