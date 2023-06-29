import { createGlobalStyle } from 'styled-components'

import { COLORS } from './color'

export default createGlobalStyle`
    @font-face {
      font-family: 'Pretendard-Regular';
      src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
      font-weight: 400;
      font-style: normal;
    }
    html,body {
      height: 100%;
      font-family: 'Pretendard-Regular';
    }
    #root{
      height: 100%;
    }

`
