import type { StaticUtility } from '../../interfaces';

// https://tailwindcss.com/docs/font-variant-numeric
// This feature uses var+comment hacks to get around property stripping:
// https://github.com/tailwindlabs/tailwindcss.com/issues/522#issuecomment-687667238
const fontVariants = {
  '--tw-ordinal': 'var(--tw-empty,/*!*/ /*!*/)',
  '--tw-slashed-zero': 'var(--tw-empty,/*!*/ /*!*/)',
  '--tw-numeric-figure': 'var(--tw-empty,/*!*/ /*!*/)',
  '--tw-numeric-spacing': 'var(--tw-empty,/*!*/ /*!*/)',
  '--tw-numeric-fraction': 'var(--tw-empty,/*!*/ /*!*/)',
  'font-variant-numeric': 'var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)',
};

export const staticUtilities: StaticUtility = {
  /**
   * ===========================================
   * Layout
   */

  // https://tailwindcss.com/docs/container
  // See dynamic.ts

  // https://tailwindcss.com/docs/box-sizing
  'box-border': {
    'utility': {
      '-webkit-box-sizing': 'border-box',
      'box-sizing': 'border-box',
    },
    'meta': {
      'group': 'boxSizing',
      'order': 1,
    },
  },
  'box-content': {
    'utility': {
      '-webkit-box-sizing': 'content-box',
      'box-sizing': 'content-box',
    },
    'meta': {
      'group': 'boxSizing',
      'order': 2,
    },
  },

  // https://tailwindcss.com/docs/display
  'block': {
    'utility': {
      'display': 'block',
    },
    'meta': {
      'group': 'display',
      'order': 1,
    },
  },
  'inline-block': {
    'utility': {
      'display': 'inline-block',
    },
    'meta': {
      'group': 'display',
      'order': 2,
    },
  },
  'inline': {
    'utility': {
      'display': 'inline',
    },
    'meta': {
      'group': 'display',
      'order': 3,
    },
  },
  'flex': {
    'utility': {
      'display': [
        '-webkit-box',
        '-ms-flexbox',
        '-webkit-flex',
        'flex',
      ],
    },
    'meta': {
      'group': 'display',
      'order': 4,
    },
  },
  'inline-flex': {
    'utility': {
      'display': [
        '-webkit-inline-box',
        '-ms-inline-flexbox',
        '-webkit-inline-flex',
        'inline-flex',
      ],
    },
    'meta': {
      'group': 'display',
      'order': 5,
    },
  },
  'table': {
    'utility': {
      'display': 'table',
    },
    'meta': {
      'group': 'display',
      'order': 6,
    },
  },
  'table-caption': {
    'utility': {
      'display': 'table-caption',
    },
    'meta': {
      'group': 'display',
      'order': 7,
    },
  },
  'table-cell': {
    'utility': {
      'display': 'table-cell',
    },
    'meta': {
      'group': 'display',
      'order': 8,
    },
  },
  'table-column': {
    'utility': {
      'display': 'table-column',
    },
    'meta': {
      'group': 'display',
      'order': 9,
    },
  },
  'table-column-group': {
    'utility': {
      'display': 'table-column-group',
    },
    'meta': {
      'group': 'display',
      'order': 10,
    },
  },
  'table-footer-group': {
    'utility': {
      'display': 'table-footer-group',
    },
    'meta': {
      'group': 'display',
      'order': 11,
    },
  },
  'table-header-group': {
    'utility': {
      'display': 'table-header-group',
    },
    'meta': {
      'group': 'display',
      'order': 12,
    },
  },
  'table-row-group': {
    'utility': {
      'display': 'table-row-group',
    },
    'meta': {
      'group': 'display',
      'order': 13,
    },
  },
  'table-row': {
    'utility': {
      'display': 'table-row',
    },
    'meta': {
      'group': 'display',
      'order': 14,
    },
  },
  'flow-root': {
    'utility': {
      'display': 'flow-root',
    },
    'meta': {
      'group': 'display',
      'order': 15,
    },
  },
  'grid': {
    'utility': {
      'display': [
        '-ms-grid',
        'grid',
      ],
    },
    'meta': {
      'group': 'display',
      'order': 16,
    },
  },
  'inline-grid': {
    'utility': {
      'display': [
        '-ms-inline-grid',
        'inline-grid',
      ],
    },
    'meta': {
      'group': 'display',
      'order': 17,
    },
  },
  'contents': {
    'utility': {
      'display': 'contents',
    },
    'meta': {
      'group': 'display',
      'order': 18,
    },
  },
  'hidden': {
    'utility': {
      'display': 'none',
    },
    'meta': {
      'group': 'display',
      'order': 19,
    },
  },

  // https://tailwindcss.com/docs/float
  'float-right': {
    'utility': {
      'float': 'right',
    },
    'meta': {
      'group': 'float',
      'order': 1,
    },
  },
  'float-left': {
    'utility': {
      'float': 'left',
    },
    'meta': {
      'group': 'float',
      'order': 2,
    },
  },
  'float-none': {
    'utility': {
      'float': 'none',
    },
    'meta': {
      'group': 'float',
      'order': 3,
    },
  },

  // https://tailwindcss.com/docs/clear
  'clear-left': {
    'utility': {
      'clear': 'left',
    },
    'meta': {
      'group': 'clear',
      'order': 1,
    },
  },
  'clear-right': {
    'utility': {
      'clear': 'right',
    },
    'meta': {
      'group': 'clear',
      'order': 2,
    },
  },
  'clear-both': {
    'utility': {
      'clear': 'both',
    },
    'meta': {
      'group': 'clear',
      'order': 3,
    },
  },
  'clear-none': {
    'utility': {
      'clear': 'none',
    },
    'meta': {
      'group': 'clear',
      'order': 4,
    },
  },

  // https://tailwindcss.com/docs/object-fit
  'object-contain': {
    'utility': {
      '-o-object-fit': 'contain',
      'object-fit': 'contain',
    },
    'meta': {
      'group': 'objectFit',
      'order': 1,
    },
  },
  'object-cover': {
    'utility': {
      '-o-object-fit': 'cover',
      'object-fit': 'cover',
    },
    'meta': {
      'group': 'objectFit',
      'order': 2,
    },
  },
  'object-fill': {
    'utility': {
      '-o-object-fit': 'fill',
      'object-fit': 'fill',
    },
    'meta': {
      'group': 'objectFit',
      'order': 3,
    },
  },
  'object-none': {
    'utility': {
      '-o-object-fit': 'none',
      'object-fit': 'none',
    },
    'meta': {
      'group': 'objectFit',
      'order': 4,
    },
  },
  'object-scale-down': {
    'utility': {
      '-o-object-fit': 'scale-down',
      'object-fit': 'scale-down',
    },
    'meta': {
      'group': 'objectFit',
      'order': 5,
    },
  },

  // https://tailwindcss.com/docs/object-position
  // dynamic

  // https://tailwindcss.com/docs/overflow
  'overflow-auto': {
    'utility': {
      'overflow': 'auto',
    },
    'meta': {
      'group': 'overflow',
      'order': 1,
    },
  },
  'overflow-hidden': {
    'utility': {
      'overflow': 'hidden',
    },
    'meta': {
      'group': 'overflow',
      'order': 2,
    },
  },
  'overflow-visible': {
    'utility': {
      'overflow': 'visible',
    },
    'meta': {
      'group': 'overflow',
      'order': 3,
    },
  },
  'overflow-scroll': {
    'utility': {
      'overflow': 'scroll',
    },
    'meta': {
      'group': 'overflow',
      'order': 4,
    },
  },
  'overflow-x-auto': {
    'utility': {
      'overflow-x': 'auto',
    },
    'meta': {
      'group': 'overflow',
      'order': 5,
    },
  },
  'overflow-y-auto': {
    'utility': {
      'overflow-y': 'auto',
    },
    'meta': {
      'group': 'overflow',
      'order': 6,
    },
  },
  'overflow-x-hidden': {
    'utility': {
      'overflow-x': 'hidden',
    },
    'meta': {
      'group': 'overflow',
      'order': 7,
    },
  },
  'overflow-y-hidden': {
    'utility': {
      'overflow-y': 'hidden',
    },
    'meta': {
      'group': 'overflow',
      'order': 8,
    },
  },
  'overflow-x-visible': {
    'utility': {
      'overflow-x': 'visible',
    },
    'meta': {
      'group': 'overflow',
      'order': 9,
    },
  },
  'overflow-y-visible': {
    'utility': {
      'overflow-y': 'visible',
    },
    'meta': {
      'group': 'overflow',
      'order': 10,
    },
  },
  'overflow-x-scroll': {
    'utility': {
      'overflow-x': 'scroll',
    },
    'meta': {
      'group': 'overflow',
      'order': 11,
    },
  },
  'overflow-y-scroll': {
    'utility': {
      'overflow-y': 'scroll',
    },
    'meta': {
      'group': 'overflow',
      'order': 12,
    },
  },

  // https://tailwindcss.com/docs/overscroll-behavior
  'overscroll-auto': {
    'utility': {
      'overscroll-behavior': 'auto',
      '-ms-scroll-chaining': 'chained',
    },
    'meta': {
      'group': 'overscrollBehavior',
      'order': 1,
    },
  },
  'overscroll-contain': {
    'utility': {
      'overscroll-behavior': 'contain',
      '-ms-scroll-chaining': 'none',
    },
    'meta': {
      'group': 'overscrollBehavior',
      'order': 2,
    },
  },
  'overscroll-none': {
    'utility': {
      'overscroll-behavior': 'none',
      '-ms-scroll-chaining': 'none',
    },
    'meta': {
      'group': 'overscrollBehavior',
      'order': 3,
    },
  },
  'overscroll-y-auto': {
    'utility': {
      'overscroll-behavior-y': 'auto',
    },
    'meta': {
      'group': 'overscrollBehavior',
      'order': 4,
    },
  },
  'overscroll-y-contain': {
    'utility': {
      'overscroll-behavior-y': 'contain',
    },
    'meta': {
      'group': 'overscrollBehavior',
      'order': 5,
    },
  },
  'overscroll-y-none': {
    'utility': {
      'overscroll-behavior-y': 'none',
    },
    'meta': {
      'group': 'overscrollBehavior',
      'order': 6,
    },
  },
  'overscroll-x-auto': {
    'utility': {
      'overscroll-behavior-x': 'auto',
    },
    'meta': {
      'group': 'overscrollBehavior',
      'order': 7,
    },
  },
  'overscroll-x-contain': {
    'utility': {
      'overscroll-behavior-x': 'contain',
    },
    'meta': {
      'group': 'overscrollBehavior',
      'order': 8,
    },
  },
  'overscroll-x-none': {
    'utility': {
      'overscroll-behavior-x': 'none',
    },
    'meta': {
      'group': 'overscrollBehavior',
      'order': 9,
    },
  },

  // https://tailwindcss.com/docs/position
  'static': {
    'utility': {
      'position': 'static',
    },
    'meta': {
      'group': 'position',
      'order': 1,
    },
  },
  'fixed': {
    'utility': {
      'position': 'fixed',
    },
    'meta': {
      'group': 'position',
      'order': 2,
    },
  },
  'absolute': {
    'utility': {
      'position': 'absolute',
    },
    'meta': {
      'group': 'position',
      'order': 3,
    },
  },
  'relative': {
    'utility': {
      'position': 'relative',
    },
    'meta': {
      'group': 'position',
      'order': 4,
    },
  },
  'sticky': {
    'utility': {
      'position': [
        'sticky',
        '-webkit-sticky',
      ],
    },
    'meta': {
      'group': 'position',
      'order': 5,
    },
  },

  // https://tailwindcss.com/docs/top-right-bottom-left
  // See dynamic.ts

  // https://tailwindcss.com/docs/visibility
  'visible': {
    'utility': {
      'visibility': 'visible',
    },
    'meta': {
      'group': 'visibility',
      'order': 1,
    },
  },
  'invisible': {
    'utility': {
      'visibility': 'hidden',
    },
    'meta': {
      'group': 'visibility',
      'order': 2,
    },
  },

  // https://tailwindcss.com/docs/z-index
  // See dynamic.ts

  /**
   * ===========================================
   * Flexbox
   */

  // https://tailwindcss.com/docs/flex-direction
  'flex-row': {
    'utility': {
      '-webkit-box-orient': 'horizontal',
      '-webkit-box-direction': 'normal',
      '-ms-flex-direction': 'row',
      '-webkit-flex-direction': 'row',
      'flex-direction': 'row',
    },
    'meta': {
      'group': 'flexDirection',
      'order': 1,
    },
  },
  'flex-row-reverse': {
    'utility': {
      '-webkit-box-orient': 'horizontal',
      '-webkit-box-direction': 'reverse',
      '-ms-flex-direction': 'row-reverse',
      '-webkit-flex-direction': 'row-reverse',
      'flex-direction': 'row-reverse',
    },
    'meta': {
      'group': 'flexDirection',
      'order': 2,
    },
  },
  'flex-col': {
    'utility': {
      '-webkit-box-orient': 'vertical',
      '-webkit-box-direction': 'normal',
      '-ms-flex-direction': 'column',
      '-webkit-flex-direction': 'column',
      'flex-direction': 'column',
    },
    'meta': {
      'group': 'flexDirection',
      'order': 3,
    },
  },
  'flex-col-reverse': {
    'utility': {
      '-webkit-box-orient': 'vertical',
      '-webkit-box-direction': 'reverse',
      '-ms-flex-direction': 'column-reverse',
      '-webkit-flex-direction': 'column-reverse',
      'flex-direction': 'column-reverse',
    },
    'meta': {
      'group': 'flexDirection',
      'order': 4,
    },
  },

  // https://tailwindcss.com/docs/flex-wrap
  'flex-wrap': {
    'utility': {
      '-ms-flex-wrap': 'wrap',
      '-webkit-flex-wrap': 'wrap',
      'flex-wrap': 'wrap',
    },
    'meta': {
      'group': 'flexWrap',
      'order': 1,
    },
  },
  'flex-wrap-reverse': {
    'utility': {
      '-ms-flex-wrap': 'wrap-reverse',
      '-webkit-flex-wrap': 'wrap-reverse',
      'flex-wrap': 'wrap-reverse',
    },
    'meta': {
      'group': 'flexWrap',
      'order': 2,
    },
  },
  'flex-nowrap': {
    'utility': {
      '-ms-flex-wrap': 'nowrap',
      '-webkit-flex-wrap': 'nowrap',
      'flex-wrap': 'nowrap',
    },
    'meta': {
      'group': 'flexWrap',
      'order': 3,
    },
  },

  // https://tailwindcss.com/docs/flex
  // https://tailwindcss.com/docs/flex-grow
  // https://tailwindcss.com/docs/flex-shrink
  // https://tailwindcss.com/docs/order
  // See dynamic.ts

  /**
   * ===========================================
   * Grid
   */

  // https://tailwindcss.com/docs/grid-template-columns
  // https://tailwindcss.com/docs/grid-column
  'col-auto': {
    'utility': {
      'grid-column': 'auto',
    },
    'meta': {
      'group': 'gridColumn',
      'order': 1,
    },
  },

  // https://tailwindcss.com/docs/grid-template-rows
  // https://tailwindcss.com/docs/grid-row
  'row-auto': {
    'utility': {
      'grid-row': 'auto',
    },
    'meta': {
      'group': 'gridRow',
      'order': 1,
    },
  },

  // https://tailwindcss.com/docs/grid-auto-flow
  'grid-flow-row': {
    'utility': {
      'grid-auto-flow': 'row',
    },
    'meta': {
      'group': 'gridAutoFlow',
      'order': 1,
    },
  },
  'grid-flow-col': {
    'utility': {
      'grid-auto-flow': 'column',
    },
    'meta': {
      'group': 'gridAutoFlow',
      'order': 2,
    },
  },
  'grid-flow-row-dense': {
    'utility': {
      'grid-auto-flow': 'row dense',
    },
    'meta': {
      'group': 'gridAutoFlow',
      'order': 3,
    },
  },
  'grid-flow-col-dense': {
    'utility': {
      'grid-auto-flow': 'col dense',
    },
    'meta': {
      'group': 'gridAutoFlow',
      'order': 4,
    },
  },

  // https://tailwindcss.com/docs/grid-auto-columns
  // https://tailwindcss.com/docs/grid-auto-rows
  // https://tailwindcss.com/docs/gap
  // See dynamic.ts

  // https://tailwindcss.com/docs/justify-content
  'justify-start': {
    'utility': {
      '-webkit-box-pack': 'start',
      '-ms-flex-pack': 'start',
      '-webkit-justify-content': 'flex-start',
      'justify-content': 'flex-start',
    },
    'meta': {
      'group': 'justifyContent',
      'order': 1,
    },
  },
  'justify-end': {
    'utility': {
      '-webkit-box-pack': 'end',
      '-ms-flex-pack': 'end',
      '-webkit-justify-content': 'flex-end',
      'justify-content': 'flex-end',
    },
    'meta': {
      'group': 'justifyContent',
      'order': 2,
    },
  },
  'justify-center': {
    'utility': {
      '-webkit-box-pack': 'center',
      '-ms-flex-pack': 'center',
      '-webkit-justify-content': 'center',
      'justify-content': 'center',
    },
    'meta': {
      'group': 'justifyContent',
      'order': 3,
    },
  },
  'justify-between': {
    'utility': {
      '-webkit-box-pack': 'justify',
      '-ms-flex-pack': 'justify',
      '-webkit-justify-content': 'space-between',
      'justify-content': 'space-between',
    },
    'meta': {
      'group': 'justifyContent',
      'order': 4,
    },
  },
  'justify-around': {
    'utility': {
      '-ms-flex-pack': 'distribute',
      '-webkit-justify-content': 'space-around',
      'justify-content': 'space-around',
    },
    'meta': {
      'group': 'justifyContent',
      'order': 5,
    },
  },
  'justify-evenly': {
    'utility': {
      '-webkit-box-pack': 'space-evenly',
      '-ms-flex-pack': 'space-evenly',
      '-webkit-justify-content': 'space-evenly',
      'justify-content': 'space-evenly',
    },
    'meta': {
      'group': 'justifyContent',
      'order': 6,
    },
  },

  // https://tailwindcss.com/docs/justify-items
  'justify-items-auto': {
    'utility': {
      'justify-items': 'auto',
    },
    'meta': {
      'group': 'justifyItems',
      'order': 1,
    },
  },
  'justify-items-start': {
    'utility': {
      'justify-items': 'start',
    },
    'meta': {
      'group': 'justifyItems',
      'order': 2,
    },
  },
  'justify-items-end': {
    'utility': {
      'justify-items': 'end',
    },
    'meta': {
      'group': 'justifyItems',
      'order': 3,
    },
  },
  'justify-items-center': {
    'utility': {
      'justify-items': 'center',
    },
    'meta': {
      'group': 'justifyItems',
      'order': 4,
    },
  },
  'justify-items-stretch': {
    'utility': {
      'justify-items': 'stretch',
    },
    'meta': {
      'group': 'justifyItems',
      'order': 5,
    },
  },

  // https://tailwindcss.com/docs/justify-self
  'justify-self-auto': {
    'utility': {
      '-ms-grid-column-align': 'auto',
      'justify-self': 'auto',
    },
    'meta': {
      'group': 'justifySelf',
      'order': 1,
    },
  },
  'justify-self-start': {
    'utility': {
      '-ms-grid-column-align': 'start',
      'justify-self': 'start',
    },
    'meta': {
      'group': 'justifySelf',
      'order': 2,
    },
  },
  'justify-self-end': {
    'utility': {
      '-ms-grid-column-align': 'end',
      'justify-self': 'end',
    },
    'meta': {
      'group': 'justifySelf',
      'order': 3,
    },
  },
  'justify-self-center': {
    'utility': {
      '-ms-grid-column-align': 'center',
      'justify-self': 'center',
    },
    'meta': {
      'group': 'justifySelf',
      'order': 4,
    },
  },
  'justify-self-stretch': {
    'utility': {
      '-ms-grid-column-align': 'stretch',
      'justify-self': 'stretch',
    },
    'meta': {
      'group': 'justifySelf',
      'order': 5,
    },
  },

  // https://tailwindcss.com/docs/align-content
  'content-center': {
    'utility': {
      '-ms-flex-line-pack': 'center',
      '-webkit-align-content': 'center',
      'align-content': 'center',
    },
    'meta': {
      'group': 'alignContent',
      'order': 1,
    },
  },
  'content-start': {
    'utility': {
      '-ms-flex-line-pack': 'start',
      '-webkit-align-content': 'flex-start',
      'align-content': 'flex-start',
    },
    'meta': {
      'group': 'alignContent',
      'order': 2,
    },
  },
  'content-end': {
    'utility': {
      '-ms-flex-line-pack': 'end',
      '-webkit-align-content': 'flex-end',
      'align-content': 'flex-end',
    },
    'meta': {
      'group': 'alignContent',
      'order': 3,
    },
  },
  'content-between': {
    'utility': {
      '-ms-flex-line-pack': 'justify',
      '-webkit-align-content': 'space-between',
      'align-content': 'space-between',
    },
    'meta': {
      'group': 'alignContent',
      'order': 4,
    },
  },
  'content-around': {
    'utility': {
      '-ms-flex-line-pack': 'distribute',
      '-webkit-align-content': 'space-around',
      'align-content': 'space-around',
    },
    'meta': {
      'group': 'alignContent',
      'order': 5,
    },
  },
  'content-evenly': {
    'utility': {
      '-ms-flex-line-pack': 'space-evenly',
      '-webkit-align-content': 'space-evenly',
      'align-content': 'space-evenly',
    },
    'meta': {
      'group': 'alignContent',
      'order': 6,
    },
  },

  // https://tailwindcss.com/docs/align-items
  'items-start': {
    'utility': {
      '-webkit-box-align': 'start',
      '-ms-flex-align': 'start',
      '-webkit-align-items': 'flex-start',
      'align-items': 'flex-start',
    },
    'meta': {
      'group': 'alignItems',
      'order': 1,
    },
  },
  'items-end': {
    'utility': {
      '-webkit-box-align': 'end',
      '-ms-flex-align': 'end',
      '-webkit-align-items': 'flex-end',
      'align-items': 'flex-end',
    },
    'meta': {
      'group': 'alignItems',
      'order': 2,
    },
  },
  'items-center': {
    'utility': {
      '-webkit-box-align': 'center',
      '-ms-flex-align': 'center',
      '-webkit-align-items': 'center',
      'align-items': 'center',
    },
    'meta': {
      'group': 'alignItems',
      'order': 3,
    },
  },
  'items-baseline': {
    'utility': {
      '-webkit-box-align': 'baseline',
      '-ms-flex-align': 'baseline',
      '-webkit-align-items': 'baseline',
      'align-items': 'baseline',
    },
    'meta': {
      'group': 'alignItems',
      'order': 4,
    },
  },
  'items-stretch': {
    'utility': {
      '-webkit-box-align': 'stretch',
      '-ms-flex-align': 'stretch',
      '-webkit-align-items': 'stretch',
      'align-items': 'stretch',
    },
    'meta': {
      'group': 'alignItems',
      'order': 5,
    },
  },

  // https://tailwindcss.com/docs/align-self
  'self-auto': {
    'utility': {
      '-ms-flex-item-align': 'auto',
      '-ms-grid-row-align': 'auto',
      '-webkit-align-self': 'auto',
      'align-self': 'auto',
    },
    'meta': {
      'group': 'alignSelf',
      'order': 1,
    },
  },
  'self-start': {
    'utility': {
      '-ms-flex-item-align': 'start',
      '-webkit-align-self': 'flex-start',
      'align-self': 'flex-start',
    },
    'meta': {
      'group': 'alignSelf',
      'order': 2,
    },
  },
  'self-end': {
    'utility': {
      '-ms-flex-item-align': 'end',
      '-webkit-align-self': 'flex-end',
      'align-self': 'flex-end',
    },
    'meta': {
      'group': 'alignSelf',
      'order': 3,
    },
  },
  'self-center': {
    'utility': {
      '-ms-flex-item-align': 'center',
      '-ms-grid-row-align': 'center',
      '-webkit-align-self': 'center',
      'align-self': 'center',
    },
    'meta': {
      'group': 'alignSelf',
      'order': 4,
    },
  },
  'self-stretch': {
    'utility': {
      '-ms-flex-item-align': 'stretch',
      '-ms-grid-row-align': 'stretch',
      '-webkit-align-self': 'stretch',
      'align-self': 'stretch',
    },
    'meta': {
      'group': 'alignSelf',
      'order': 5,
    },
  },

  // https://tailwindcss.com/docs/place-content
  'place-content-center': {
    'utility': {
      'place-content': 'center',
    },
    'meta': {
      'group': 'placeContent',
      'order': 1,
    },
  },
  'place-content-start': {
    'utility': {
      'place-content': 'start',
    },
    'meta': {
      'group': 'placeContent',
      'order': 2,
    },
  },
  'place-content-end': {
    'utility': {
      'place-content': 'end',
    },
    'meta': {
      'group': 'placeContent',
      'order': 3,
    },
  },
  'place-content-between': {
    'utility': {
      'place-content': 'space-between',
    },
    'meta': {
      'group': 'placeContent',
      'order': 4,
    },
  },
  'place-content-around': {
    'utility': {
      'place-content': 'space-around',
    },
    'meta': {
      'group': 'placeContent',
      'order': 5,
    },
  },
  'place-content-evenly': {
    'utility': {
      'place-content': 'space-evenly',
    },
    'meta': {
      'group': 'placeContent',
      'order': 6,
    },
  },
  'place-content-stretch': {
    'utility': {
      'place-content': 'stretch',
    },
    'meta': {
      'group': 'placeContent',
      'order': 7,
    },
  },

  // https://tailwindcss.com/docs/place-items
  'place-items-auto': {
    'utility': {
      'place-items': 'auto',
    },
    'meta': {
      'group': 'placeItems',
      'order': 1,
    },
  },
  'place-items-start': {
    'utility': {
      'place-items': 'start',
    },
    'meta': {
      'group': 'placeItems',
      'order': 2,
    },
  },
  'place-items-end': {
    'utility': {
      'place-items': 'end',
    },
    'meta': {
      'group': 'placeItems',
      'order': 3,
    },
  },
  'place-items-center': {
    'utility': {
      'place-items': 'center',
    },
    'meta': {
      'group': 'placeItems',
      'order': 4,
    },
  },
  'place-items-stretch': {
    'utility': {
      'place-items': 'stretch',
    },
    'meta': {
      'group': 'placeItems',
      'order': 5,
    },
  },
  'place-self-auto': {
    'utility': {
      '-ms-grid-row-align': 'auto',
      '-ms-grid-column-align': 'auto',
      'place-self': 'auto',
    },
    'meta': {
      'group': 'placeSelf',
      'order': 1,
    },
  },
  'place-self-start': {
    'utility': {
      '-ms-grid-row-align': 'start',
      '-ms-grid-column-align': 'start',
      'place-self': 'start',
    },
    'meta': {
      'group': 'placeSelf',
      'order': 2,
    },
  },
  'place-self-end': {
    'utility': {
      '-ms-grid-row-align': 'end',
      '-ms-grid-column-align': 'end',
      'place-self': 'end',
    },
    'meta': {
      'group': 'placeSelf',
      'order': 3,
    },
  },
  'place-self-center': {
    'utility': {
      '-ms-grid-row-align': 'center',
      '-ms-grid-column-align': 'center',
      'place-self': 'center',
    },
    'meta': {
      'group': 'placeSelf',
      'order': 4,
    },
  },
  'place-self-stretch': {
    'utility': {
      '-ms-grid-row-align': 'stretch',
      '-ms-grid-column-align': 'stretch',
      'place-self': 'stretch',
    },
    'meta': {
      'group': 'placeSelf',
      'order': 5,
    },
  },

  /**
   * ===========================================
   * Spacing
   */

  // https://tailwindcss.com/docs/padding
  // https://tailwindcss.com/docs/margin
  // https://tailwindcss.com/docs/space
  // See dynamic.ts

  /**
   * ===========================================
   * Sizing
   */

  // https://tailwindcss.com/docs/width
  // https://tailwindcss.com/docs/min-width
  // https://tailwindcss.com/docs/max-width
  // https://tailwindcss.com/docs/height
  // https://tailwindcss.com/docs/min-height
  // https://tailwindcss.com/docs/max-height
  // See dynamic.ts

  /**
   * ===========================================
   * Typography
   */

  // https://tailwindcss.com/docs/font-family
  // https://tailwindcss.com/docs/font-size
  // See dynamic.ts

  // https://tailwindcss.com/docs/font-smoothing
  'antialiased': {
    'utility': {
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',
    },
    'meta': {
      'group': 'fontSmoothing',
      'order': 1,
    },
  },
  'subpixel-antialiased': {
    'utility': {
      '-webkit-font-smoothing': 'auto',
      '-moz-osx-font-smoothing': 'auto',
    },
    'meta': {
      'group': 'fontSmoothing',
      'order': 2,
    },
  },

  // https://tailwindcss.com/docs/font-style
  'italic': {
    'utility': {
      'font-style': 'italic',
    },
    'meta': {
      'group': 'fontStyle',
      'order': 1,
    },
  },
  'not-italic': {
    'utility': {
      'font-style': 'normal',
    },
    'meta': {
      'group': 'fontStyle',
      'order': 2,
    },
  },

  // https://tailwindcss.com/docs/font-weight
  // See dynamic.ts

  // https://tailwindcss.com/docs/font-variant-numeric
  'normal-nums': {
    'utility': {
      'font-variant-numeric': 'normal',
    },
    'meta': {
      'group': 'fontVariantNumeric',
      'order': 1,
    },
  },
  'ordinal': {
    'utility': {
      ...fontVariants,
      '--tw-ordinal': 'ordinal',
    },
    'meta': {
      'group': 'fontVariantNumeric',
      'order': 2,
    },
  },
  'slashed-zero': {
    'utility': {
      ...fontVariants,
      '--tw-slashed-zero': 'slashed-zero',
    },
    'meta': {
      'group': 'fontVariantNumeric',
      'order': 3,
    },
  },
  'lining-nums': {
    'utility': {
      ...fontVariants,
      '--tw-numeric-figure': 'lining-nums',
    },
    'meta': {
      'group': 'fontVariantNumeric',
      'order': 4,
    },
  },
  'oldstyle-nums': {
    'utility': {
      ...fontVariants,
      '--tw-numeric-figure': 'oldstyle-nums',
    },
    'meta': {
      'group': 'fontVariantNumeric',
      'order': 5,
    },
  },
  'proportional-nums': {
    'utility': {
      ...fontVariants,
      '--tw-numeric-spacing': 'proportional-nums',
    },
    'meta': {
      'group': 'fontVariantNumeric',
      'order': 6,
    },
  },
  'tabular-nums': {
    'utility': {
      ...fontVariants,
      '--tw-numeric-spacing': 'tabular-nums',
    },
    'meta': {
      'group': 'fontVariantNumeric',
      'order': 7,
    },
  },
  'diagonal-fractions': {
    'utility': {
      ...fontVariants,
      '--tw-numeric-fraction': 'diagonal-fractions',
    },
    'meta': {
      'group': 'fontVariantNumeric',
      'order': 8,
    },
  },
  'stacked-fractions': {
    'utility': {
      ...fontVariants,
      '--tw-numeric-fraction': 'stacked-fractions',
    },
    'meta': {
      'group': 'fontVariantNumeric',
      'order': 9,
    },
  },

  // https://tailwindcss.com/docs/letter-spacing
  // https://tailwindcss.com/docs/line-height
  // https://tailwindcss.com/docs/list-style-type
  // See dynamic.ts

  // https://tailwindcss.com/docs/list-style-position
  'list-inside': {
    'utility': {
      'list-style-position': 'inside',
    },
    'meta': {
      'group': 'listStylePosition',
      'order': 1,
    },
  },
  'list-outside': {
    'utility': {
      'list-style-position': 'outside',
    },
    'meta': {
      'group': 'listStylePosition',
      'order': 2,
    },
  },

  // https://tailwindcss.com/docs/placeholder-color
  // https://tailwindcss.com/docs/placeholder-opacity
  // See dynamic.ts

  // https://tailwindcss.com/docs/text-align
  'text-left': {
    'utility': {
      'text-align': 'left',
    },
    'meta': {
      'group': 'textAlign',
      'order': 1,
    },
  },
  'text-center': {
    'utility': {
      'text-align': 'center',
    },
    'meta': {
      'group': 'textAlign',
      'order': 2,
    },
  },
  'text-right': {
    'utility': {
      'text-align': 'right',
    },
    'meta': {
      'group': 'textAlign',
      'order': 3,
    },
  },
  'text-justify': {
    'utility': {
      'text-align': 'justify',
    },
    'meta': {
      'group': 'textAlign',
      'order': 4,
    },
  },

  // https://tailwindcss.com/docs/text-color
  // https://tailwindcss.com/docs/text-opacity
  // See dynamic.ts

  // https://tailwindcss.com/docs/text-decoration
  'underline': {
    'utility': {
      'text-decoration': 'underline',
    },
    'meta': {
      'group': 'textDecoration',
      'order': 1,
    },
  },
  'line-through': {
    'utility': {
      'text-decoration': 'line-through',
    },
    'meta': {
      'group': 'textDecoration',
      'order': 2,
    },
  },
  'no-underline': {
    'utility': {
      'text-decoration': 'none',
    },
    'meta': {
      'group': 'textDecoration',
      'order': 3,
    },
  },

  // https://tailwindcss.com/docs/text-transform
  'uppercase': {
    'utility': {
      'text-transform': 'uppercase',
    },
    'meta': {
      'group': 'textTransform',
      'order': 1,
    },
  },
  'lowercase': {
    'utility': {
      'text-transform': 'lowercase',
    },
    'meta': {
      'group': 'textTransform',
      'order': 2,
    },
  },
  'capitalize': {
    'utility': {
      'text-transform': 'capitalize',
    },
    'meta': {
      'group': 'textTransform',
      'order': 3,
    },
  },
  'normal-case': {
    'utility': {
      'text-transform': 'none',
    },
    'meta': {
      'group': 'textTransform',
      'order': 4,
    },
  },

  // https://tailwindcss.com/docs/text-overflow
  'truncate': {
    'utility': {
      'overflow': 'hidden',
      '-o-text-overflow': 'ellipsis',
      'text-overflow': 'ellipsis',
      'white-space': 'nowrap',
    },
    'meta': {
      'group': 'textOverflow',
      'order': 1,
    },
  },
  'overflow-ellipsis': {
    'utility': {
      '-o-text-overflow': 'ellipsis',
      'text-overflow': 'ellipsis',
    },
    'meta': {
      'group': 'textOverflow',
      'order': 2,
    },
  },
  'overflow-clip': {
    'utility': {
      '-o-text-overflow': 'clip',
      'text-overflow': 'clip',
    },
    'meta': {
      'group': 'textOverflow',
      'order': 3,
    },
  },

  // https://tailwindcss.com/docs/vertical-align
  'align-baseline': {
    'utility': {
      'vertical-align': 'baseline',
    },
    'meta': {
      'group': 'verticalAlign',
      'order': 1,
    },
  },
  'align-top': {
    'utility': {
      'vertical-align': 'top',
    },
    'meta': {
      'group': 'verticalAlign',
      'order': 2,
    },
  },
  'align-middle': {
    'utility': {
      'vertical-align': 'middle',
    },
    'meta': {
      'group': 'verticalAlign',
      'order': 3,
    },
  },
  'align-bottom': {
    'utility': {
      'vertical-align': 'bottom',
    },
    'meta': {
      'group': 'verticalAlign',
      'order': 4,
    },
  },
  'align-text-top': {
    'utility': {
      'vertical-align': 'text-top',
    },
    'meta': {
      'group': 'verticalAlign',
      'order': 5,
    },
  },
  'align-text-bottom': {
    'utility': {
      'vertical-align': 'text-bottom',
    },
    'meta': {
      'group': 'verticalAlign',
      'order': 6,
    },
  },

  // https://tailwindcss.com/docs/whitespace
  'whitespace-normal': {
    'utility': {
      'white-space': 'normal',
    },
    'meta': {
      'group': 'whitespace',
      'order': 1,
    },
  },
  'whitespace-nowrap': {
    'utility': {
      'white-space': 'nowrap',
    },
    'meta': {
      'group': 'whitespace',
      'order': 2,
    },
  },
  'whitespace-pre': {
    'utility': {
      'white-space': 'pre',
    },
    'meta': {
      'group': 'whitespace',
      'order': 3,
    },
  },
  'whitespace-pre-line': {
    'utility': {
      'white-space': 'pre-line',
    },
    'meta': {
      'group': 'whitespace',
      'order': 4,
    },
  },
  'whitespace-pre-wrap': {
    'utility': {
      'white-space': 'pre-wrap',
    },
    'meta': {
      'group': 'whitespace',
      'order': 5,
    },
  },

  // https://tailwindcss.com/docs/word-break
  'break-normal': {
    'utility': {
      'word-break': 'normal',
      'overflow-wrap': 'normal',
    },
    'meta': {
      'group': 'wordBreak',
      'order': 1,
    },
  },
  'break-words': {
    'utility': {
      'overflow-wrap': 'break-word',
    },
    'meta': {
      'group': 'wordBreak',
      'order': 2,
    },
  },
  'break-all': {
    'utility': {
      'word-break': 'break-all',
    },
    'meta': {
      'group': 'wordBreak',
      'order': 3,
    },
  },

  /**
   * ===========================================
   * Backgrounds
   */

  // https://tailwindcss.com/docs/background-attachment
  'bg-fixed': {
    'utility': {
      'background-attachment': 'fixed',
    },
    'meta': {
      'group': 'backgroundAttachment',
      'order': 1,
    },
  },
  'bg-local': {
    'utility': {
      'background-attachment': 'local',
    },
    'meta': {
      'group': 'backgroundAttachment',
      'order': 2,
    },
  },
  'bg-scroll': {
    'utility': {
      'background-attachment': 'scroll',
    },
    'meta': {
      'group': 'backgroundAttachment',
      'order': 3,
    },
  },

  // https://tailwindcss.com/docs/background-clip
  'bg-clip-border': {
    'utility': {
      '-webkit-background-clip': 'border-box',
      'background-clip': 'border-box',
    },
    'meta': {
      'group': 'backgroundClip',
      'order': 1,
    },
  },
  'bg-clip-padding': {
    'utility': {
      '-webkit-background-clip': 'padding-box',
      'background-clip': 'padding-box',
    },
    'meta': {
      'group': 'backgroundClip',
      'order': 2,
    },
  },
  'bg-clip-content': {
    'utility': {
      '-webkit-background-clip': 'content-box',
      'background-clip': 'content-box',
    },
    'meta': {
      'group': 'backgroundClip',
      'order': 3,
    },
  },
  'bg-clip-text': {
    'utility': {
      '-webkit-background-clip': 'text',
      'background-clip': 'text',
    },
    'meta': {
      'group': 'backgroundClip',
      'order': 4,
    },
  },

  // https://tailwindcss.com/docs/background-color
  // https://tailwindcss.com/docs/background-opacity
  // https://tailwindcss.com/docs/background-position
  // See dynamic.ts

  // https://tailwindcss.com/docs/background-repeat
  'bg-repeat': {
    'utility': {
      'background-repeat': 'repeat',
    },
    'meta': {
      'group': 'backgroundRepeat',
      'order': 1,
    },
  },
  'bg-no-repeat': {
    'utility': {
      'background-repeat': 'no-repeat',
    },
    'meta': {
      'group': 'backgroundRepeat',
      'order': 2,
    },
  },
  'bg-repeat-x': {
    'utility': {
      'background-repeat': 'repeat-x',
    },
    'meta': {
      'group': 'backgroundRepeat',
      'order': 3,
    },
  },
  'bg-repeat-y': {
    'utility': {
      'background-repeat': 'repeat-y',
    },
    'meta': {
      'group': 'backgroundRepeat',
      'order': 4,
    },
  },
  'bg-repeat-round': {
    'utility': {
      'background-repeat': 'round',
    },
    'meta': {
      'group': 'backgroundRepeat',
      'order': 5,
    },
  },
  'bg-repeat-space': {
    'utility': {
      'background-repeat': 'space',
    },
    'meta': {
      'group': 'backgroundRepeat',
      'order': 6,
    },
  },

  // https://tailwindcss.com/docs/background-image
  // https://tailwindcss.com/docs/gradient-color-stops
  // See dynamic.ts

  /**
   * ===========================================
   * Borders
   */

  // https://tailwindcss.com/docs/border-radius
  // See dynamic.ts

  // https://tailwindcss.com/docs/border-width
  // See dynamic.ts

  // https://tailwindcss.com/docs/border-color
  // https://tailwindcss.com/docs/border-opacity
  // See dynamic.ts

  // https://tailwindcss.com/docs/border-style
  'border-solid': {
    'utility': {
      'border-style': 'solid',
    },
    'meta': {
      'group': 'borderStyle',
      'order': 1,
    },
  },
  'border-dashed': {
    'utility': {
      'border-style': 'dashed',
    },
    'meta': {
      'group': 'borderStyle',
      'order': 2,
    },
  },
  'border-dotted': {
    'utility': {
      'border-style': 'dotted',
    },
    'meta': {
      'group': 'borderStyle',
      'order': 3,
    },
  },
  'border-double': {
    'utility': {
      'border-style': 'double',
    },
    'meta': {
      'group': 'borderStyle',
      'order': 4,
    },
  },
  'border-none': {
    'utility': {
      'border-style': 'none',
    },
    'meta': {
      'group': 'borderStyle',
      'order': 5,
    },
  },

  // https://tailwindcss.com/docs/divide-width
  // https://tailwindcss.com/docs/divide-color
  // https://tailwindcss.com/docs/divide-opacity
  // See dynamic.ts

  // https://tailwindcss.com/docs/ring-width
  // https://tailwindcss.com/docs/ring-color
  // https://tailwindcss.com/docs/ring-opacity
  // https://tailwindcss.com/docs/ring-offset-width
  // https://tailwindcss.com/docs/ring-offset-color
  // dynamic

  /**
   * ===========================================
   * Effects
   */

  // https://tailwindcss.com/docs/box-shadow/
  // https://tailwindcss.com/docs/opacity
  // See dynamic.ts

  /**
   * ===========================================
   * Tables
   */

  // https://tailwindcss.com/docs/border-collapse
  'border-collapse': {
    'utility': {
      'border-collapse': 'collapse',
    },
    'meta': {
      'group': 'borderCollapse',
      'order': 1,
    },
  },
  'border-separate': {
    'utility': {
      'border-collapse': 'separate',
    },
    'meta': {
      'group': 'borderCollapse',
      'order': 2,
    },
  },

  // https://tailwindcss.com/docs/table-layout
  'table-auto': {
    'utility': {
      'table-layout': 'auto',
    },
    'meta': {
      'group': 'tableLayout',
      'order': 1,
    },
  },
  'table-fixed': {
    'utility': {
      'table-layout': 'fixed',
    },
    'meta': {
      'group': 'tableLayout',
      'order': 2,
    },
  },

  /**
   * ===========================================
   * Transitions
   */

  // https://tailwindcss.com/docs/transition-property
  // https://tailwindcss.com/docs/transition-duration
  // https://tailwindcss.com/docs/transition-delay
  // https://tailwindcss.com/docs/transition-timing-function
  // See dynamic.ts

  /**
   * ===========================================
   * Transforms
   */
  // https://tailwindcss.com/docs/transform
  'transform': {
    'utility': {
      '--tw-translate-x': '0',
      '--tw-translate-y': '0',
      '--tw-rotate': '0',
      '--tw-skew-x': '0',
      '--tw-skew-y': '0',
      '--tw-scale-x': '1',
      '--tw-scale-y': '1',
      '-webkit-transform': 'translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))',
      '-ms-transform': 'translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))',
      'transform': 'translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))',
    },
    'meta': {
      'group': 'transform',
      'order': 1,
    },
  },
  'transform-gpu': {
    'utility': {
      '--tw-translate-x': '0',
      '--tw-translate-y': '0',
      '--tw-rotate': '0',
      '--tw-skew-x': '0',
      '--tw-skew-y': '0',
      '--tw-scale-x': '1',
      '--tw-scale-y': '1',
      '-webkit-transform': 'translate3d(var(--tw-translate-x), var(--tw-translate-y), 0) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))',
      '-ms-transform': 'translate3d(var(--tw-translate-x), var(--tw-translate-y), 0) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))',
      'transform': 'translate3d(var(--tw-translate-x), var(--tw-translate-y), 0) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))',
    },
    'meta': {
      'group': 'transform',
      'order': 2,
    },
  },
  'transform-none': {
    'utility': {
      '-webkit-transform': 'none',
      '-ms-transform': 'none',
      'transform': 'none',
    },
    'meta': {
      'group': 'transform',
      'order': 3,
    },
  },

  // https://tailwindcss.com/docs/transform-origin

  // https://tailwindcss.com/docs/scale
  // https://tailwindcss.com/docs/rotate
  // https://tailwindcss.com/docs/translate
  // https://tailwindcss.com/docs/skew
  // See dynamic.ts

  /**
   * ===========================================
   * Interactivity
   */

  // https://tailwindcss.com/docs/appearance
  'appearance-none': {
    'utility': {
      '-webkit-appearance': 'none',
      '-moz-appearance': 'none',
      'appearance': 'none',
    },
    'meta': {
      'group': 'appearance',
      'order': 1,
    },
  },

  // https://tailwindcss.com/docs/cursor
  // https://tailwindcss.com/docs/outline
  // See dynamic.ts

  // https://tailwindcss.com/docs/pointer-events
  'pointer-events-none': {
    'utility': {
      'pointer-events': 'none',
    },
    'meta': {
      'group': 'pointerEvents',
      'order': 1,
    },
  },
  'pointer-events-auto': {
    'utility': {
      'pointer-events': 'auto',
    },
    'meta': {
      'group': 'pointerEvents',
      'order': 2,
    },
  },

  // https://tailwindcss.com/docs/resize
  'resize-none': {
    'utility': {
      'resize': 'none',
    },
    'meta': {
      'group': 'resize',
      'order': 1,
    },
  },
  'resize-y': {
    'utility': {
      'resize': 'vertical',
    },
    'meta': {
      'group': 'resize',
      'order': 2,
    },
  },
  'resize-x': {
    'utility': {
      'resize': 'horizontal',
    },
    'meta': {
      'group': 'resize',
      'order': 3,
    },
  },
  'resize': {
    'utility': {
      'resize': 'both',
    },
    'meta': {
      'group': 'resize',
      'order': 4,
    },
  },

  // https://tailwindcss.com/docs/user-select
  'select-none': {
    'utility': {
      '-webkit-user-select': 'none',
      '-moz-user-select': 'none',
      '-ms-user-select': 'none',
      'user-select': 'none',
    },
    'meta': {
      'group': 'userSelect',
      'order': 1,
    },
  },
  'select-text': {
    'utility': {
      '-webkit-user-select': 'text',
      '-moz-user-select': 'text',
      '-ms-user-select': 'text',
      'user-select': 'text',
    },
    'meta': {
      'group': 'userSelect',
      'order': 2,
    },
  },
  'select-all': {
    'utility': {
      '-webkit-user-select': 'all',
      '-moz-user-select': 'all',
      '-ms-user-select': 'all',
      'user-select': 'all',
    },
    'meta': {
      'group': 'userSelect',
      'order': 3,
    },
  },
  'select-auto': {
    'utility': {
      '-webkit-user-select': 'auto',
      '-moz-user-select': 'auto',
      '-ms-user-select': 'auto',
      'user-select': 'auto',
    },
    'meta': {
      'group': 'userSelect',
      'order': 4,
    },
  },

  /**
   * ===========================================
   * Svg
   */

  // https://tailwindcss.com/docs/fill
  // https://tailwindcss.com/docs/stroke
  // https://tailwindcss.com/docs/stroke-width
  'fill-current': {
    'utility': {
      'fill': 'currentColor',
    },
    'meta': {
      'group': 'fill',
      'order': 1,
    },
  },
  'stroke-current': {
    'utility': {
      'stroke': 'currentColor',
    },
    'meta': {
      'group': 'stroke',
      'order': 1,
    },
  },
  // See dynamic.ts

  /**
   * ===========================================
   * Accessibility
   */

  // https://tailwindcss.com/docs/screen-readers
  'sr-only': {
    'utility': {
      'position': 'absolute',
      'width': '1px',
      'height': '1px',
      'padding': '0',
      'margin': '-1px',
      'overflow': 'hidden',
      'clip': 'rect(0, 0, 0, 0)',
      'white-space': 'nowrap',
      'border-width': '0',
    },
    'meta': {
      'group': 'accessibility',
      'order': 1,
    },
  },
  'not-sr-only': {
    'utility': {
      'position': 'static',
      'width': 'auto',
      'height': 'auto',
      'padding': '0',
      'margin': '0',
      'overflow': 'visible',
      'clip': 'auto',
      'white-space': 'normal',
    },
    'meta': {
      'group': 'accessibility',
      'order': 2,
    },
  },
};
