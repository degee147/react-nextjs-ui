import { createGlobalStyle, css } from 'styled-components';
import GlobalStyle from '@paljs/ui/GlobalStyle';
import { breakpointDown, breakpointUp } from '@paljs/ui/breakpoints';

const SimpleLayout = createGlobalStyle`
${({ theme }) => css`
  ${GlobalStyle}
  html {
    font-size: 16px;
  }
  .column.small {
    flex: 0.15 !important;
  }
  
  header > nav {
    border-bottom: 4px solid #81CCE5;
  }

  .auth-layout {
    .main-content {
      padding: 2.5rem;
      ${breakpointDown('sm')`
        padding: 0;
      `}
    }
  }

  aside.settings-sidebar {
    transition: transform 0.3s ease;
    width: 19rem;
    overflow: hidden;
    transform: translateX(${theme.dir === 'rtl' && '-'}100%);
    &.start {
      transform: translateX(${theme.dir === 'ltr' && '-'}100%);
    }

    &.expanded,
    &.expanded.start {
      transform: translateX(0);
    }

    .scrollable {
      width: 19rem;
      padding: 3.4rem 0.25rem;
    }

    .main-container {
      width: 19rem;
      transition: width 0.3s ease;
      overflow: hidden;

      .scrollable {
        width: 19rem;
      }
    }
  }

  .badgeheader{
    position: relative !important;
    padding: 0 !important;

  }

  .badgeheader span{
    margin-top: 10px; 
    margin-right: 10px;
    font-size: 22px;
  }
  
  ${breakpointUp('sm')`
    .hideondesktop{
      display:none;
    }

    .subjectimage{
      height:100px;
    }
  `}
  ${breakpointDown('xs')`
      .main-content {
        padding: 0.75rem !important;
      }
      
      .badgeheader span{
        font-size: 12px;
      }
      .subjectcard{
        min-height: 250px;
      }
      .hideonmobile{
        display:none;
      }

      #oah-layout > div.scrollable-container > div > header > nav > div > div:nth-child(1) > div:nth-child(2){
        padding: 0;
        margin-bottom: 10px;
      }
  `}

  .with-margin {
    margin: 0 0.75rem 2rem 0;
  }
  .inline-block {
    display: inline-block;
  }
  .popover-card {
    margin-bottom: 0;
    width: 300px;
    box-shadow: none;
  }
  .btn {
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 0.4px;
    font-weight: 500;
    border: 2px solid transparent;
    &:focus {
      outline: 0;
      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }
  }
  .ck-content {
    min-height: 20rem;
  }

  .scrollable{
    background-color: #001B4A;
  }
  .scrollable .menu-title{
    color:white;
  }
  .menu-item a.active{
    background-color: #20A6D2 !important;
    width: 270px !important;
    z-index:9999999999 !important;
  }
`}
`;
export default SimpleLayout;
