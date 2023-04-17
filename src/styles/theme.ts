import { DefaultTheme, css } from 'styled-components';

const colors = {
  charcoal_grey: '#464052',
  black: '#000000',
  battleship_grey: '#74747e',
  pale_lilac: '#e6e6eb',
  black_10: 'rgba(0, 0, 0, 0.1)',
  pale_grey: '#f9f9fb',
  cool_grey: '#a4a6b0',
  purple: '#5b36ac',
  white: '#ffffff',
  charcoal_grey_2: '#363a42',
  charcoal_grey_3: '#e5e5e7',
};

const textStyles = {
  style_1: css`
    font-family: 'AppleSDGothicNeo', 'Noto Sans KR', sans-serif;
    font-size: 0.875rem;
    font-weight: 600;
    letter-spacing: -0.1px;
    text-align: right;
    color: ${colors.white};
  `,
  style_2: css`
    font-family: 'AppleSDGothicNeo', 'Noto Sans KR', sans-serif;
    font-size: 0.875rem;
    font-weight: 600;
    letter-spacing: -0.1px;
    color: ${colors.charcoal_grey_2};
  `,
  style_3: css`
    font-family: 'AppleSDGothicNeo', 'Noto Sans KR', sans-serif;
    font-size: 1.063rem;
    font-weight: bold;
    letter-spacing: -0.12px;
    text-align: center;
    color: ${colors.white};
  `,
  style_4: css`
    font-family: 'AppleSDGothicNeo', 'Noto Sans KR', sans-serif;
    font-size: 1rem;
    font-weight: bold;
    letter-spacing: -0.2px;
    color: ${colors.charcoal_grey};
  `,
  style_5: css`
    font-family: 'AppleSDGothicNeo', 'Noto Sans KR', sans-serif;
    font-size: 0.813rem;
    font-weight: 500;
    letter-spacing: -0.1px;
    color: ${colors.cool_grey};
  `,
  style_6: css`
    font-family: 'AppleSDGothicNeo', 'Noto Sans KR', sans-serif;
    font-size: 0.688rem;
    font-weight: 500;
    letter-spacing: -0.1px;
    color: ${colors.charcoal_grey_2};
    opacity: 0.4;
  `,
  style_7: css`
    font-family: 'AppleSDGothicNeo', 'Noto Sans KR', sans-serif;
    font-size: 0.625rem;
    font-weight: bold;
    letter-spacing: -0.08px;
    text-align: center;
    color: ${colors.white};
  `,
  style_8: css`
    font-family: 'AppleSDGothicNeo', 'Noto Sans KR', sans-serif;
    font-size: 0.75rem;
    font-weight: 500;
    color: ${colors.charcoal_grey_2};
    opacity: 0.4;
  `,
  style_9: css`
    font-family: 'AppleSDGothicNeo', 'Noto Sans KR', sans-serif;
    font-size: 0.875rem;
    font-weight: 500;
    letter-spacing: -0.12px;
    color: ${colors.battleship_grey};
  `,
};

export type ColorsTypes = typeof colors;
export type textStyleTypes = typeof textStyles;

export const theme: DefaultTheme = { colors, textStyles };
