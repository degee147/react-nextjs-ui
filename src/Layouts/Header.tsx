import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled, { DefaultTheme } from 'styled-components';
import { LayoutHeader } from '@paljs/ui/Layout';
import { Actions, ActionType } from '@paljs/ui/Actions';
import Row from '@paljs/ui/Row';
import Col from '@paljs/ui/Col';
import ContextMenu from '@paljs/ui/ContextMenu';
import { breakpointDown } from '@paljs/ui/breakpoints';
// import Image from 'next/image'

const HeaderStyle = styled.div`
  display: flex;
  width: 100%;  
  justify-content: space-between;
  ${breakpointDown('sm')`
    .right{
      display: none;
    }
  `}
  .right > div {
    height: auto;
    display: flex;
    align-content: center;
  }
  .logo {
    font-size: 1.25rem;
    white-space: nowrap;
    text-decoration: none;
  }
  .left {
    display: flex;
    align-items: center;
    .github {
      font-size: 18px;
      margin-right: 5px;
    }
  }
  .topmenu1:after{
    content: '▼';
    float: right;
    display: inline-block;
    vertical-align: bottom;
  }
  .topmenu1{
    min-width: 140px;
  }

`;


interface HeaderProps {
  toggleSidebar: () => void;
  theme: {
    set: (value: DefaultTheme['name']) => void;
    value: DefaultTheme['name'];
  };
  changeDir: () => void;
  dir: 'rtl' | 'ltr';
}

const Header: React.FC<HeaderProps> = (props) => {
  const router = useRouter();
  const items: ActionType[] = [
    {
      icon: 'browser-outline',
      link: { href: '/' },
      badge: {
        status: 'Primary',
        title: '34',
        position: 'topRight',
      },
    },
  ];
  return (
    <LayoutHeader fixed>
      <HeaderStyle>
        <Actions
          size="Medium"
          actions={[
            {
              content: (
                <>
                  <div className="logo_container">
                    <Link href="/">
                      {/* <Image src='/logo.png' layout="fill" alt="Logo" /> */}
                      <img height="45" src="/logo.png" alt="slack" style={{ marginLeft: 0 }} />
                    </Link>
                    <style jsx>{`
                      .logo_container {
                        width: 170px;
                      }
                    `}</style>
                  </div>
                </>
              ),
            },
            {
              content: (
                <div className="messagemobile hideondesktop">
                  <Actions Link={Link} size="Large" actions={items} />
                </div>
              ),
            },
            {
              icon: { name: 'menu-2-outline' },
              url: {
                onClick: props.toggleSidebar,
              },
            },
            {
              content: (
                <span className="hideonmobile">GEMS Modern Academy School</span>
              ),
            },
          ]}
        />
        <Actions
          size="Small"
          className="right"
          actions={[
            {
              content: (
                <Actions Link={Link} size="Large" actions={items} />
              ),
            },
            {
              content: (
                <>
                  <ContextMenu
                    nextJs
                    currentPath={router.pathname}
                    // className="with-margin inline-block"
                    placement="bottom"
                    items={[
                      { title: 'Item 1', link: { href: '/item' } },
                      { title: 'Item 2', link: { href: '/item' } },
                    ]}
                    Link={Link}
                  >

                    <Row style={{ cursor: 'pointer', minWidth: 110 }} className="topmenu1">
                      <Col breakPoint={{ xs: 6, md: 5 }}>
                        <span className="align-middle" style={{
                          fontSize: 28,
                          color: "#2053AC",
                          justifyContent: "center",
                          float: "right",
                          display: "flex",
                          alignItems: "center",
                        }}>6,286</span>
                      </Col>
                      <Col breakPoint={{ xs: 6, md: 6 }}>
                        <div>
                          <div>
                            <span style={{ backgroundColor: "green", color: "white", alignItems: "center", padding: 3, borderRadius: 5 }}>BEGINNER</span>
                          </div>
                          <div>
                            <span className="">PLE CREDITS</span>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </ContextMenu>
                </>

              ),
            },
            {
              content: (
                <>
                  <ContextMenu
                    nextJs
                    currentPath={router.pathname}
                    placement="bottom"
                    items={[
                      { title: 'Item 1', link: { href: '/item' } },
                      { title: 'Item 2', link: { href: '/item' } },
                    ]}
                    Link={Link}
                  >
                    <Row style={{ cursor: 'pointer' }} className="topmenu1">
                      <Col breakPoint={{ xs: 11, md: 11 }}>
                        <div>
                          <span>Edutech - Trainee</span>
                        </div>
                        <div>
                          <span>2020 - 2021</span>
                        </div>
                      </Col>
                    </Row>
                  </ContextMenu>
                </>
              ),
            },
            {
              content: (
                <div>
                  <img height="45" src="/header_img3.png" alt="slack" />
                </div>
              ),
            },

          ]}
        />
      </HeaderStyle>
    </LayoutHeader>
  );
};
export default Header;
