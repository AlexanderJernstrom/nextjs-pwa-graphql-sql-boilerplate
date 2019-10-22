import React from 'react'

import { config } from '../config/config'
import { Link } from '../server/routes'

const AppIcon = () => <Link route='/'>
  <a className='app-icon' title={config.appName}>
    <img src='/public/icon.png' alt={config.appName} />
    <style jsx>{`
      img {
        position: absolute;
        left: 10px;
        top: 10px;
        width: 30px;
        height: 30px;
        border-radius: 50%;
      }
    `}</style>
  </a>
</Link>

export default ({ title = config.appName, children }) => <nav
  className='color-header-bg color-header-fg'
>
  <AppIcon />
  {title}
  {children}
  <style jsx>{`
    nav {
      position: fixed;
      z-index: 1000;
      width: 100%;
      left: 0;
      top: 0;
      height: 50px;
      line-height: 50px;
      font-weight: normal;
      text-align: center;
    }
  `}</style>
</nav>
