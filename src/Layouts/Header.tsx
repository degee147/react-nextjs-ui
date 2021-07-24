import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled, { DefaultTheme } from 'styled-components';
import Select from '@paljs/ui/Select';
import { Card, CardBody } from '@paljs/ui/Card';
import { LayoutHeader } from '@paljs/ui/Layout';
import { EvaIcon } from '@paljs/ui/Icon';
import { Actions, ActionType } from '@paljs/ui/Actions';
import { Button } from '@paljs/ui/Button';
import Row from '@paljs/ui/Row';
import Col from '@paljs/ui/Col';
import ContextMenu from '@paljs/ui/ContextMenu';
import User from '@paljs/ui/User';
import { breakpointDown } from '@paljs/ui/breakpoints';
import Image from 'next/image'

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
`;

const Label = styled.span`
  display: flex;
  align-items: center;
`;

const SelectStyled = styled(Select)`
  min-width: 150px;
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
  const themeOptions = () => [
    {
      value: 'default',
      label: (
        <Label>
          <EvaIcon name="droplet" options={{ fill: '#a6c1ff' }} />
          Default
        </Label>
      ),
    },
    {
      value: 'dark',
      label: (
        <Label>
          <EvaIcon name="droplet" options={{ fill: '#192038' }} />
          Dark
        </Label>
      ),
    },
    {
      value: 'cosmic',
      label: (
        <Label>
          <EvaIcon name="droplet" options={{ fill: '#5a37b8' }} />
          Cosmic
        </Label>
      ),
    },
    {
      value: 'corporate',
      label: (
        <Label>
          <EvaIcon name="droplet" options={{ fill: '#3366ff' }} />
          Corporate
        </Label>
      ),
      selected: true,
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
                      <Image src='/logo.png' layout="fill" alt="Logo" />
                    </Link>
                    <style jsx>{`
                      .logo_container {
                        width: 150px;
                      }
                    `}</style>
                  </div>
                </>
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
                <span className="">GEMS Modern Academy School</span>
              ),
            },
            // {
            //   content: (
            //     <SelectStyled
            //       instanceId="react-select-input"
            //       isSearchable={false}
            //       shape="SemiRound"
            //       placeholder="Themes"
            //       value={themeOptions().find((item) => item.value === props.theme.value)}
            //       options={themeOptions()}
            //       onChange={({ value }: { value: DefaultTheme['name'] }) => props.theme.set(value)}
            //     />
            //   ),
            // },
            // {
            //   content: (
            //     <Button size="Small" onClick={() => props.changeDir()}>
            //       {props.dir}
            //     </Button>
            //   ),
            // },
          ]}
        />
        <Actions
          size="Small"
          className="right"
          actions={[
            // {
            //   content: (
            //     <a href="https://discord.gg/NRmdvDxsT8" target="_blank" rel="noreferrer">
            //       <img height="20" src="/discord.svg" alt="slack" />
            //     </a>
            //   ),
            // },
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
                    <div>
                      <img height="45" src="/header_img1.png" alt="slack" />
                    </div>
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
                    // className="with-margin inline-block"
                    placement="bottom"
                    items={[
                      { title: 'Item 1', link: { href: '/item' } },
                      { title: 'Item 2', link: { href: '/item' } },
                    ]}
                    Link={Link}
                  >
                    <div>
                      <img height="50" src="/header_img2.png" alt="slack" />
                    </div>
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
            // {
            //   icon: 'twitter',
            //   url: {href: 'https://twitter.com/AhmedElywh', target: '_blank' },
            // },
            // {
            //   content: (
            //     <ContextMenu
            //       nextJs
            //       style={{ cursor: 'pointer' }}
            //       placement="bottom"
            //       currentPath={router.pathname}
            //       items={[
            //         { title: 'Profile', link: { href: '/modal-overlays/tooltip' } },
            //         { title: 'Log out', link: { href: '/logout' } },
            //       ]}
            //       Link={Link}
            //     >
            //       <User image="url('/icons/icon-72x72.png')" name="Ahmed Elywa" title="Manger" size="Medium" />
            //     </ContextMenu>
            //   ),
            // },
          ]}
        />
      </HeaderStyle>
    </LayoutHeader>
  );
};
export default Header;
