import { Style } from '../../utils/style';

export function generateThemes (
  darkMode?: 'media' | 'class' | false
): { [key: string]: () => Style } {
  if (!darkMode) return {};
  return {
    '@dark': () => new Style().atRule('@media (prefers-color-scheme: dark)'),
    '@light': () => new Style().atRule('@media (prefers-color-scheme: light)'),
    '.dark': () => new Style().parent('.dark'),
    '.light': () => new Style().parent('.light'),
    '~dark': () => new Style(),
    dark: () => darkMode === 'media'? new Style().atRule('@media (prefers-color-scheme: dark)'): new Style().parent('.dark'),
    light: () => darkMode === 'media'? new Style().atRule('@media (prefers-color-scheme: light)'): new Style().parent('.light'),
  } as { [key: string]: () => Style };
}
