module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--ant-primary-color)',
        fafafa: '#fafafa',
        e5e5e5: '#E5E5E5',
        f5f5f5: '#f5f5f5',
        f0f0f0: '#f0f0f0',
        d9d9d9: '#d9d9d9',
        bfbfbf: '#bfbfbf',
        '8c8c8c': '#8c8c8c',
        595959: '#595959',
        434343: '#434343',
        262626: '#262626',
        '1f1f1f': '#1f1f1f',
        141414: '#141414',
        error: '#ff4d4f',
        warning: '#faad14',
        success: '#52c41a',
        999: '#999'
      },
      boxShadow: {
        Topshadow: '0px -8px 4px -9px #888888;'
      },
      fontSize: {
        xxs: [
          '0.625rem',
          {
            lineHeight: '0.75rem'
          }
        ],
        tes: ['1rem', '2.5rem']
      },
      padding: {
        tumg: ['0', '1.5rem', '0', '1.2rem'],
      }
    }
  },
  corePlugins: {
    preflight: false
  }
}
