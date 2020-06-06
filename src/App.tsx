import React from 'react';
import { useLocation } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';

//import MobileHeaderRed from './components/HeaderRed/mobile/MobileHeaderRed';
import { HeaderRed } from './components/HeaderRed/desktop/HeaderRed';
import { MainWhite } from './components/MainWhite/MainWhite';
import { FooterGray } from './components/FooterGray/FooterGray';
import { RoutesList } from './routing/Routes';
import { IContentType } from './store/data/types';
import './app.css';

export function App({
  dataContentTypes,
  headerTheme,
  footerTheme,
  mainTheme,
  breadCrumbsTheme,
  shadow
}: Props): JSX.Element {
  const location = useLocation();

  const atAuthPage = location.pathname &&
  location.pathname == ("/register" || "/verify" || "/login");

  return atAuthPage
  ? (
    <div>
      <RoutesList contentTypes={dataContentTypes} />
    </div>
  ) : (
    <div id="app">
      <div>
        {/*<div className="mobile_display">
          <MobileHeaderRed theme={headerTheme} />
        </div>*/}
        <div className="desktop_display">
          <HeaderRed theme={headerTheme} />
        </div>
      </div>
      <MainWhite
        theme={mainTheme}
        breadCrumbsTheme={breadCrumbsTheme}
        shadow={shadow}
      >
        <RoutesList contentTypes={dataContentTypes}  />
      </MainWhite>
      <FooterGray theme={footerTheme} />
    </div>
  );
}

interface RootState {
  data: {
    contentTypes: IContentType[];
  };
  theme: {
    headerTheme: string;
    footerTheme: string;
    mainTheme: string;
    breadCrumbsTheme: string;
  };
  menu: {
    shadow: boolean;
  }
}

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux;

const mapStateToProps = (state: RootState) => ({
  dataContentTypes: state.data.contentTypes,
  headerTheme: state.theme.headerTheme,
  footerTheme: state.theme.footerTheme,
  mainTheme: state.theme.mainTheme,
  breadCrumbsTheme: state.theme.breadCrumbsTheme,
  shadow: state.menu.shadow
});

const connector = connect(mapStateToProps, {});

export default connector(App);