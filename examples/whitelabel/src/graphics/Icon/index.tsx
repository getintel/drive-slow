import React from 'react'

const css = `
  .graphic-icon {
    width: 50px;
    height: 50px;
    border-radius: 6px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--theme-elevation-50);
    border: 1px solid var(--theme-elevation-100);
  }

  .icon-image {
    width: 40px;
    height: 40px;
    object-fit: contain;
  }
`

export const Icon = () => {
  return (
    <div className="graphic-icon">
      <img src="/825-logo.png" alt="Local 825 Bulldozer Intel Icon" className="icon-image" />
    </div>
  )
}
