import theme from 'mdx-deck/themes';

export default {
  ...theme,
  img: {
    maxWidth: '100%'
  },
  colors: {
    text: '#F8F8F2',
    background: '#282A36',
    link: 'rgb(189, 147, 249)',
    pre: '#fff',
    preBackground: '#282A36',
    code: '#fff'
  },
  css: {
    ...theme.css,
    a: {
      'text-decoration': 'none',
      color: 'rgb(189, 147, 249)'
    },
    ul: {
      'text-align': 'left'
    },
    li: {
      padding: '1em 0.2em'
    },
    '[hidden]': {
      display: 'inherit',
      visibility: 'hidden'
    },
    '.hack': {
      'font-size': '2.5vmin',
      'background-color': 'transparent !important'
    },
    '.small': {
      'font-size': '2vmin'
    },
    '.small code': {
      color: 'rgb(189, 147, 249)'
    },
    '.small em': {
      color: 'lightgreen'
    },
    'figure h4': {
      'margin-bottom': '0'
    },
    'figure a': {
      'font-size': '0.6em'
    },
    '.profile img': {
      'border-radius': '50%'
    },
    '.tight li': {
      padding: '0.2em',
      'max-width': '60vw'
    },
    '.icon': {
      display: 'block',
      'font-size': '4em',
      margin: '0.2em auto'
    },
    code: {
      color: 'rgb(80, 250, 123)'
    }
  }
};
