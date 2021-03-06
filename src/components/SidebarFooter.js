// @flow
import React from 'react'
import cx from 'classnames'

import './SidebarFooter.scss'
import { 
  KLAYTN_SCOPE_URL,
  KLAYTN_HOMEPAGE_URL,
  KLAYTN_MAIL_URL,
  KLAYTN_MEDIUM_URL,
  KLAYTN_TWITTER_URL 
} from 'constants/url'

const externalLinks = [{
  type: 'klaytn',
  to: KLAYTN_HOMEPAGE_URL,
}, {
  type: 'twitter',
  to: KLAYTN_TWITTER_URL,
}, {
  type: 'medium',
  to: KLAYTN_MEDIUM_URL,
}]

const SidebarFooter = () => (
  <footer className="SidebarFooter">
    <div className="SidebarFooter__copyright showDesktopTablet">
      Copyright © 2019 Klaytn.
      <br />
      All Rights Reserved.
    </div>
    <ul className="SidebarFooter__externalLinks">
      {externalLinks.map(({ type, to }) => (
        <li
          key={type}
          className={cx('SidebarFooter__link', {
          })}
        >
          <a
            className={cx('SidebarFooter__anchor', `SidebarFooter__anchor--${type}`)}
            href={to}
            target={(type !== 'mail') ? '_blank' : '_self'}
            rel={(type !== 'mail') ? 'false' : 'noopener noreferrer'}
          >
            {type}
          </a>
        </li>
      ))}
    </ul>
  </footer>
)

export default SidebarFooter
