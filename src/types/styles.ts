import type { CSSProperties } from 'react';

import type { Theme } from '@mui/material';
import type { SystemProps } from '@mui/system';

type ComponentStyles = Record<string, CSSProperties & SystemProps<Theme>>;

export type { ComponentStyles };
