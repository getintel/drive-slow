import React from 'react'

const css = `
  .graphic-logo {
    display: flex;
    align-items: center;
    gap: 12px;
    height: 43.5px;
    max-width: 300px;
  }

  .logo-image {
    height: 40px;
    width: auto;
    border-radius: 6px;
  }

  .logo-text {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    font-weight: 600;
    font-size: 16px;
    color: var(--theme-elevation-1000);
    line-height: 1.2;
  }

  .brand-name {
    font-weight: 700;
    color: #2563eb;
  }

  html[data-theme="dark"] .brand-name {
    color: #60a5fa;
  }

  .subtitle {
    font-size: 12px;
    font-weight: 400;
    color: var(--theme-elevation-500);
  }
`

export const Logo = () => {
  return (
    <div className="graphic-logo">
      <img src="/825-logo.png" alt="Local 825 Logo" className="logo-image" />
      <div className="logo-text">
        <span className="brand-name">Bulldozer Intel™</span>
        <br />
        <span className="subtitle">Local 825 AI Platform</span>
      </div>
    </div>
  )
}
