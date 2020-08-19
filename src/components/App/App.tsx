import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { Footer } from './Footer/Footer';
//import MobileHeader from './Header/mobile/MobileHeader';
import { Header } from './Header/desktop/Header';
import { Main } from './Main/Main';
import { RoutesList } from '../../routing/Routes';
import { IContentType } from '../../store/data/types';
import './app.css';

export function App({
  dataContentTypes,
  shadow,
  headerTheme,
  footerTheme,
  mainTheme
}: Props): JSX.Element {
  const { pathname } = useLocation();

  const atAuthPage =
  pathname.match(/\/login/) ||
  pathname.match(/\/register/) ||
  pathname.match(/\/verify/);

  return atAuthPage
  ? (
    <div>
      <RoutesList contentTypes={dataContentTypes} />
    </div>
  ) : (
    <div id="app">
      <div>
        {/*<div className="mobile_display">
          <MobileHeader theme={headerTheme} />
        </div>*/}
        <div className="desktop_display">
          <Header theme={headerTheme} />
        </div>
      </div>
      <Main theme={mainTheme} shadow={shadow} >
        <RoutesList contentTypes={dataContentTypes}  />
      </Main>
      <Footer theme={footerTheme} />
    </div>
  );
}

interface RootState {
  data: {
    contentTypes: IContentType[];
  };
  menu: {
    shadow: boolean;
  };
  theme: {
    headerTheme: string;
    footerTheme: string;
    mainTheme: string;
  };
}

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux;

const mapStateToProps = (state: RootState) => ({
  dataContentTypes: state.data.contentTypes,
  shadow: state.menu.shadow,
  headerTheme: state.theme.headerTheme,
  footerTheme: state.theme.footerTheme,
  mainTheme: state.theme.mainTheme
});

const connector = connect(mapStateToProps, {});

export default connector(App);