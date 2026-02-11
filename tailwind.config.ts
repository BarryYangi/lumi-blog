import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        lumi: {
          css: {
            fontFamily: 'var(--font-serif)',
            color: theme('colors.black'),
            lineHeight: '1.75',
            fontSize: '1rem',
            maxWidth: 'none',
            h1: {
              fontFamily: 'var(--font-serif)',
              fontWeight: '500',
              letterSpacing: '-0.01em',
              color: theme('colors.black'),
            },
            h2: {
              fontFamily: 'var(--font-serif)',
              fontWeight: '500',
              letterSpacing: '-0.01em',
              color: theme('colors.black'),
            },
            h3: {
              fontFamily: 'var(--font-serif)',
              fontWeight: '500',
              letterSpacing: '-0.005em',
              color: theme('colors.black'),
            },
            p: {
              color: theme('colors.black'),
            },
            a: {
              color: theme('colors.black'),
              textDecoration: 'underline',
              textUnderlineOffset: '4px',
              textDecorationThickness: '1px',
            },
            code: {
              color: theme('colors.black'),
              backgroundColor: theme('colors.black / 8%'),
              padding: '0.1em 0.3em',
              borderRadius: '0.2em',
              fontWeight: '500',
            },
            'pre code': {
              backgroundColor: 'transparent',
              padding: '0',
              borderRadius: '0',
            },
            pre: {
              backgroundColor: theme('colors.black / 8%'),
              padding: '1rem',
              borderRadius: '0.5rem',
              border: `1px solid ${theme('colors.black / 10%')}`,
            },
            blockquote: {
              borderLeftColor: theme('colors.black / 60%'),
              color: theme('colors.black / 75%'),
              fontStyle: 'italic',
            },
            strong: {
              fontWeight: '600',
            },
            ul: {
              paddingLeft: '1.25rem',
            },
            ol: {
              paddingLeft: '1.25rem',
            },
            hr: {
              borderColor: theme('colors.black / 15%'),
            },
          },
        },
      }),
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require('@tailwindcss/typography')],
};

export default config;
