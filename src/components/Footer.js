/**
 * ZooBC Copyright (C) 2020 Quasisoft Limited - Hong Kong
 * This file is part of ZooBC <https://github.com/zoobc/zoobc-explorer-ui>

 * ZooBC is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.

 * ZooBC is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.

 * You should have received a copy of the GNU General Public License
 * along with ZooBC.  If not, see <http://www.gnu.org/licenses/>.

 * Additional Permission Under GNU GPL Version 3 section 7.
 * As the special exception permitted under Section 7b, c and e,
 * in respect with the Author’s copyright, please refer to this section:

 * 1. You are free to convey this Program according to GNU GPL Version 3,
 *     as long as you respect and comply with the Author’s copyright by
 *     showing in its user interface an Appropriate Notice that the derivate
 *     program and its source code are “powered by ZooBC”.
 *     This is an acknowledgement for the copyright holder, ZooBC,
 *     as the implementation of appreciation of the exclusive right of the
 *     creator and to avoid any circumvention on the rights under trademark
 *     law for use of some trade names, trademarks, or service marks.

 * 2. Complying to the GNU GPL Version 3, you may distribute
 *     the program without any permission from the Author.
 *     However a prior notification to the authors will be appreciated.

 * ZooBC is architected by Roberto Capodieci & Barton Johnston
 * contact us at roberto.capodieci[at]blockchainzoo.com
 * and barton.johnston[at]blockchainzoo.com

 * IMPORTANT: The above copyright notice and this permission notice
 * shall be included in all copies or substantial portions of the Software.
**/

/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { Switch, Menu, Dropdown, Avatar, Layout, Row, Col, Collapse } from 'antd'
import Container from './Container'
import languages from '../languages'

import iconGitHub from '../assets/images/github.svg'
import iconYoutube from '../assets/images/youtube.svg'
import iconTelegram from '../assets/images/telegram.svg'
import iconFacebook from '../assets/images/facebook.svg'
import iconInstagram from '../assets/images/instagram.svg'
import iconLinkedin from '../assets/images/linkedin.svg'
import iconTwitter from '../assets/images/twitter.svg'
import zoobcLogoFooter from '../assets/images/logo-zoobc-footer.svg'
import bczLogoFooter from '../assets/images/logo-bcz-footer.svg'
import FormFeedback from './FormFeedback'
import ComingSoon from './ComingSoon'
import { store } from '../utils'
import ThemeContext from '../context/ThemeContext'

const Footer = () => {
  const { t, i18n } = useTranslation()
  const [isOpenFeedback, setIsOpenFeedback] = useState(false)
  const [isOpenComingSoon, setIsOpenCommingSoon] = useState(false)
  const [dialogTitle] = useState()

  const selectedLang = () => {
    const getLang = languages.filter(lang => lang.value === i18n.language)[0]
    return getLang
  }

  const onSelectLanguage = lang => {
    const selectedLang = store.set('language', lang.value)
    i18n.changeLanguage(selectedLang)
  }

  const languageOptions = () => {
    return (
      <Menu>
        {languages.map((lang, key) => (
          <Menu.Item key={key} onClick={() => onSelectLanguage(lang)}>
            <p className="my-0">
              <Avatar shape="square" size={18} src={lang.flag} alt={lang.alt} className="mr-1" />
              {lang.label}
            </p>
          </Menu.Item>
        ))}
      </Menu>
    )
  }

  const { theme, onChangeSelectedTheme } = useContext(ThemeContext)

  const onChangeTheme = data => {
    onChangeSelectedTheme(data === true ? '☾' : '☀')
  }

  const FooterMobile = () => (
    <div className="footer-mobile d-block d-md-none">
      <Collapse expandIconPosition="right">
        <Collapse.Panel header="ABOUT ZOOBC" key="1">
          <ul className="footer-list-group mb-0 list-unstyled">
            <li>
              <a
                className="footer-list-group-item"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.blockchainzoo.com/"
              >
                {t('company')}
              </a>
            </li>
            <li>
              <a
                className="footer-list-group-item"
                target="_blank"
                rel="noopener noreferrer"
                href="https://zoobc.com/team/"
              >
                {t('team')}
              </a>
            </li>
            <li>
              <a
                className="footer-list-group-item"
                target="_blank"
                rel="noopener noreferrer"
                href="https://blogchainzoo.com/"
              >
                {t('blog')}
              </a>
            </li>
            <li>
              <a
                className="footer-list-group-item"
                target="_blank"
                rel="noopener noreferrer"
                href="https://zoobc.com/learn-more/"
              >
                {t('about us')}
              </a>
            </li>
            <li>
              <a
                className="footer-list-group-item"
                target="_blank"
                rel="noopener noreferrer"
                href="https://blockchainzoo.com/press-media/"
              >
                {t('press & media')}
              </a>
            </li>
            <li>
              <a
                className="footer-list-group-item"
                target="_blank"
                rel="noopener noreferrer"
                href="https://zoobc.com/contact-us/"
              >
                {t('contact us')}
              </a>
            </li>
            <li>
              <a
                className="footer-list-group-item"
                target="_blank"
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/18TdPfxFzLUHdjCaGuG0k5RMSSs34HSzw/view?usp=drive_web"
              >
                {t('zoobc white paper')}
              </a>
            </li>
            <li>
              <a
                className="footer-list-group-item"
                target="_blank"
                rel="noopener noreferrer"
                href="https://docs.google.com/document/d/1RHbDHHH0JlAfU8bdgfawbnvlm-Ng_Tq-VA7P-n1p_80/edit#"
              >
                {t('zoobc white paper live')}
              </a>
            </li>
          </ul>
        </Collapse.Panel>
        <Collapse.Panel header="GET STARTED" key="2">
          <ul className="footer-list-group mb-0 list-unstyled">
            <li>
              <a
                className="footer-list-group-item"
                target="_blank"
                rel="noopener noreferrer"
                href="https://zoobc.com/"
              >
                ZooBC
              </a>
            </li>
            <li>
              <a
                className="footer-list-group-item"
                rel="noopener noreferrer"
                href="https://play.google.com/store/apps/details?id=com.zoobc.walletmobile"
              >
                ZooBC Wallet Mobile
              </a>
            </li>
            <li>
              <a
                className="footer-list-group-item"
                target="_blank"
                rel="noopener noreferrer"
                href="https://zoobc.one/login"
              >
                ZooBC Wallet Web
              </a>
            </li>
            <li>
              <a
                className="footer-list-group-item"
                target="_blank"
                rel="noopener noreferrer"
                href="https://zoobc.net"
              >
                ZooBC Explorer
              </a>
            </li>
            <li>
              <a
                className="footer-list-group-item"
                target="_blank"
                rel="noopener noreferrer"
                href="https://zoobc.io/"
              >
                ZooBC IO
              </a>
            </li>
          </ul>
        </Collapse.Panel>
        <Collapse.Panel header="COMMUNITY" key="3">
          <ul className="footer-list-group mb-0 list-unstyled">
            <li>
              <a
                className="footer-list-group-item"
                target="_blank"
                rel="noopener noreferrer"
                href="https://zoobc.org/"
              >
                {t('forum')}
              </a>
            </li>
            <li>
              <a
                className="footer-list-group-item"
                target="_blank"
                rel="noopener noreferrer"
                href="https://zoobc.how/"
              >
                {t('q & a')}
              </a>
            </li>
            <li>
              <a
                className="footer-list-group-item"
                target="_blank"
                rel="noopener noreferrer"
                href="https://zoobc.com/support-us/"
              >
                {t('support us')}
              </a>
            </li>
            <li>
              <a
                className="footer-list-group-item"
                target="_blank"
                rel="noopener noreferrer"
                href="https://blockchainzoo.com/blockchain-events/"
              >
                {t('events')}
              </a>
            </li>
            <li>
              <a
                className="footer-list-group-item"
                target="_blank"
                rel="noopener noreferrer"
                href="https://blogchainzoo.com/join-community/"
              >
                {t('join us')}
              </a>
            </li>
          </ul>
        </Collapse.Panel>
      </Collapse>
      <div className="footer-image-logo">
        <img src={zoobcLogoFooter} alt="zoobc-logo" />
      </div>
      <div className="footer-social-icons">
        <ul className="list-unstyled">
          <li>
            <a
              className="footer-social-icon"
              href="https://github.com/zoobc"
              target="_blank"
              rel="noopener norefferer"
              title="GitHub"
            >
              <img src={iconGitHub} alt="github-icon" />
            </a>
            <a
              className="footer-social-icon"
              href="https://www.facebook.com/TheZooBC"
              target="_blank"
              rel="noopener norefferer"
              title="Facebook"
            >
              <img src={iconFacebook} alt="facebook-icon" />
            </a>
            <a
              className="footer-social-icon"
              href="https://twitter.com/TheZooBC"
              target="_blank"
              rel="noopener norefferer"
              title="Twitter"
            >
              <img src={iconTwitter} alt="twitter-icon" />
            </a>
            <a
              className="footer-social-icon"
              href="https://www.linkedin.com/showcase/zoobc/"
              target="_blank"
              rel="noopener norefferer"
              title="Linkedin"
            >
              <img src={iconLinkedin} alt="linkedin-icon" />
            </a>
            <a
              className="footer-social-icon"
              href="https://www.instagram.com/TheZooBC/"
              target="_blank"
              rel="noopener norefferer"
              title="Instagram"
            >
              <img src={iconInstagram} alt="instagram-icon" />
            </a>
            <a
              className="footer-social-icon"
              href="https://t.me/ZooBlockchain"
              target="_blank"
              rel="noopener norefferer"
              title="Telegram"
            >
              <img src={iconTelegram} alt="telegram-icon" />
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-image-logo">
        <img src={bczLogoFooter} alt="zoobc-logo" />
      </div>
      <div className="footer-social-icons">
        <ul className="list-unstyled">
          <li>
            <a
              className="footer-social-icon"
              href="https://www.facebook.com/TheZooBC"
              target="_blank"
              rel="noopener norefferer"
              title="Facebook"
            >
              <img src={iconFacebook} alt="facebook-icon" />
            </a>
            <a
              className="footer-social-icon"
              href="https://twitter.com/blockchainzoo"
              target="_blank"
              rel="noopener norefferer"
              title="Twitter"
            >
              <img src={iconTwitter} alt="twitter-icon" />
            </a>
            <a
              className="footer-social-icon"
              href="https://www.linkedin.com/company/blockchainzoo/"
              target="_blank"
              rel="noopener norefferer"
              title="Linkedin"
            >
              <img src={iconLinkedin} alt="linkedin-icon" />
            </a>
            <a
              className="footer-social-icon"
              href="https://www.instagram.com/blockchainzoo/"
              target="_blank"
              rel="noopener norefferer"
              title="Instagram"
            >
              <img src={iconInstagram} alt="instagram-icon" />
            </a>
            <a
              className="footer-social-icon"
              href="https://t.me/bczoo"
              target="_blank"
              rel="noopener norefferer"
              title="Telegram"
            >
              <img src={iconTelegram} alt="telegram-icon" />
            </a>
            <a
              className="footer-social-icon"
              href="https://www.youtube.com/c/BlockchainZoo"
              target="_blank"
              rel="noopener norefferer"
              title="Youtube"
            >
              <img src={iconYoutube} alt="youtube-icon" />
            </a>
          </li>
        </ul>
      </div>
      <hr className="footer-horizontal-rule-dark" />
      <div className="py-2 text-center">
        <ul className="footer-mobile-copyright list-unstyled">
          <li>
            <p className="footer-company-text">
              &#169;2020 All rights reserved | ZooBC Explorer |&nbsp;
              <a target="_blank" rel="noopener noreferrer" href="https://zoobc.com/privacy-policy/">
                {t('privacy policy')}
              </a>
            </p>
          </li>
        </ul>
        <Switch
          checkedChildren="☀"
          checked={theme === '☾' ? true : false}
          unCheckedChildren="☾"
          onClick={e => onChangeTheme(e)}
          style={{ marginRight: 5 }}
        />

        <Dropdown overlay={languageOptions}>
          <p className="footer-language ">
            <Avatar
              className="mr-1"
              shape="square"
              size={18}
              src={selectedLang().flag}
              alt="selected-lang"
            />
            {selectedLang().label}
          </p>
        </Dropdown>
      </div>
    </div>
  )

  return (
    <>
      <Layout.Footer className="footer">
        <Container>
          <FooterMobile />
          <Row className="footer-row d-none d-md-block">
            <Col className="footer-col-info">
              <div className="footer-subtitle heading-border">{t('about zoobc')}</div>
              <ul className="footer-list-group mb-0 list-unstyled">
                <li>
                  <a
                    className="footer-list-group-item"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.blockchainzoo.com/"
                  >
                    {t('company')}
                  </a>
                </li>
                <li>
                  <a
                    className="footer-list-group-item"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://zoobc.com/team/"
                  >
                    {t('team')}
                  </a>
                </li>
                <li>
                  <a
                    className="footer-list-group-item"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://blogchainzoo.com/"
                  >
                    {t('blog')}
                  </a>
                </li>
                <li>
                  <a
                    className="footer-list-group-item"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://zoobc.com/learn-more/"
                  >
                    {t('about us')}
                  </a>
                </li>
                <li>
                  <a
                    className="footer-list-group-item"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://blockchainzoo.com/press-media/"
                  >
                    {t('press & media')}
                  </a>
                </li>
                <li>
                  <a
                    className="footer-list-group-item"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://zoobc.com/contact-us/"
                  >
                    {t('contact us')}
                  </a>
                </li>
                <li>
                  <a
                    className="footer-list-group-item"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://drive.google.com/file/d/18TdPfxFzLUHdjCaGuG0k5RMSSs34HSzw/view?usp=drive_web"
                  >
                    {t('zoobc white paper')}
                  </a>
                </li>
                <li>
                  <a
                    className="footer-list-group-item"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://docs.google.com/document/d/1RHbDHHH0JlAfU8bdgfawbnvlm-Ng_Tq-VA7P-n1p_80/edit#"
                  >
                    {t('zoobc white paper live')}
                  </a>
                </li>
              </ul>
            </Col>
            <Col className="footer-col-info">
              <div className="footer-subtitle heading-border">{t('get started')}</div>
              <ul className="footer-list-group mb-0 list-unstyled">
                <li>
                  <a
                    className="footer-list-group-item"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://zoobc.com/"
                  >
                    ZooBC
                  </a>
                </li>
                <li>
                  <a
                    className="footer-list-group-item"
                    rel="noopener noreferrer"
                    href="https://play.google.com/store/apps/details?id=com.zoobc.walletmobile"
                  >
                    ZooBC Wallet Mobile
                  </a>
                </li>
                <li>
                  <a
                    className="footer-list-group-item"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://zoobc.one/login"
                  >
                    ZooBC Wallet Web
                  </a>
                </li>
                <li>
                  <a
                    className="footer-list-group-item"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://zoobc.net"
                  >
                    ZooBC Explorer
                  </a>
                </li>
                <li>
                  <a
                    className="footer-list-group-item"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://zoobc.io/"
                  >
                    ZooBC IO
                  </a>
                </li>
              </ul>
            </Col>
            <Col className="footer-col-info">
              <div className="footer-subtitle heading-border">{t('community')}</div>
              <ul className="footer-list-group mb-0 list-unstyled">
                <li>
                  <a
                    className="footer-list-group-item"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://zoobc.org/"
                  >
                    {t('forum')}
                  </a>
                </li>
                <li>
                  <a
                    className="footer-list-group-item"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://zoobc.how/"
                  >
                    {t('q & a')}
                  </a>
                </li>
                <li>
                  <a
                    className="footer-list-group-item"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://zoobc.com/support-us/"
                  >
                    {t('support us')}
                  </a>
                </li>
                <li>
                  <a
                    className="footer-list-group-item"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://blockchainzoo.com/blockchain-events/"
                  >
                    {t('events')}
                  </a>
                </li>
                <li>
                  <a
                    className="footer-list-group-item"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://blogchainzoo.com/join-community/"
                  >
                    {t('join us')}
                  </a>
                </li>
              </ul>
            </Col>
            <Col className="footer-col-info">
              <div className="footer-image-logo">
                <img src={zoobcLogoFooter} alt="zoobc-logo" />
              </div>
              <div className="footer-social-icons">
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="footer-social-icon"
                      href="https://github.com/zoobc"
                      target="_blank"
                      rel="noopener norefferer"
                      title="GitHub"
                    >
                      <img src={iconGitHub} alt="github-icon" />
                    </a>
                    <a
                      className="footer-social-icon"
                      href="https://www.facebook.com/TheZooBC"
                      target="_blank"
                      rel="noopener norefferer"
                      title="Facebook"
                    >
                      <img src={iconFacebook} alt="facebook-icon" />
                    </a>
                    <a
                      className="footer-social-icon"
                      href="https://twitter.com/TheZooBC"
                      target="_blank"
                      rel="noopener norefferer"
                      title="Twitter"
                    >
                      <img src={iconTwitter} alt="twitter-icon" />
                    </a>
                    <a
                      className="footer-social-icon"
                      href="https://www.linkedin.com/showcase/zoobc/"
                      target="_blank"
                      rel="noopener norefferer"
                      title="Linkedin"
                    >
                      <img src={iconLinkedin} alt="linkedin-icon" />
                    </a>
                    <a
                      className="footer-social-icon"
                      href="https://www.instagram.com/TheZooBC/"
                      target="_blank"
                      rel="noopener norefferer"
                      title="Instagram"
                    >
                      <img src={iconInstagram} alt="instagram-icon" />
                    </a>
                    <a
                      className="footer-social-icon"
                      href="https://t.me/ZooBlockchain"
                      target="_blank"
                      rel="noopener norefferer"
                      title="Telegram"
                    >
                      <img src={iconTelegram} alt="telegram-icon" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-image-logo">
                <img src={bczLogoFooter} alt="zoobc-logo" />
              </div>
              <div className="footer-social-icons">
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="footer-social-icon"
                      href="https://www.facebook.com/TheZooBC"
                      target="_blank"
                      rel="noopener norefferer"
                      title="Facebook"
                    >
                      <img src={iconFacebook} alt="facebook-icon" />
                    </a>
                    <a
                      className="footer-social-icon"
                      href="https://twitter.com/blockchainzoo"
                      target="_blank"
                      rel="noopener norefferer"
                      title="Twitter"
                    >
                      <img src={iconTwitter} alt="twitter-icon" />
                    </a>
                    <a
                      className="footer-social-icon"
                      href="https://www.linkedin.com/company/blockchainzoo/"
                      target="_blank"
                      rel="noopener norefferer"
                      title="Linkedin"
                    >
                      <img src={iconLinkedin} alt="linkedin-icon" />
                    </a>
                    <a
                      className="footer-social-icon"
                      href="https://www.instagram.com/blockchainzoo/"
                      target="_blank"
                      rel="noopener norefferer"
                      title="Instagram"
                    >
                      <img src={iconInstagram} alt="instagram-icon" />
                    </a>
                    <a
                      className="footer-social-icon"
                      href="https://t.me/bczoo"
                      target="_blank"
                      rel="noopener norefferer"
                      title="Telegram"
                    >
                      <img src={iconTelegram} alt="telegram-icon" />
                    </a>
                    <a
                      className="footer-social-icon"
                      href="https://www.youtube.com/c/BlockchainZoo"
                      target="_blank"
                      rel="noopener norefferer"
                      title="Youtube"
                    >
                      <img src={iconYoutube} alt="youtube-icon" />
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <hr className="footer-horizontal-rule-dark d-none d-md-block" />
          <Row className="footer-ext d-none d-md-block">
            <ul className="footer-copyright list-unstyled">
              <li>
                <p className="footer-company-text">
                  &#169;2020 All rights reserved | ZooBC Explorer |&nbsp;
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://zoobc.com/privacy-policy/"
                  >
                    {t('privacy policy')}
                  </a>
                </p>
              </li>
            </ul>

            <Switch
              checkedChildren="☀"
              checked={theme === '☾' ? true : false}
              unCheckedChildren="☾"
              onClick={e => onChangeTheme(e)}
              style={{ marginRight: 5 }}
            />

            <Dropdown overlay={languageOptions}>
              <p className="footer-language">
                <Avatar
                  className="mr-1"
                  shape="square"
                  size={18}
                  src={selectedLang().flag}
                  alt="selected-lang"
                />
                {selectedLang().label}
              </p>
            </Dropdown>
          </Row>
        </Container>
      </Layout.Footer>
      <ComingSoon
        visible={isOpenComingSoon}
        title={dialogTitle}
        onClose={() => setIsOpenCommingSoon(false)}
      />
      <FormFeedback
        visible={isOpenFeedback}
        title="Feedback"
        onClose={() => setIsOpenFeedback(false)}
      />
    </>
  )
}

export default Footer
