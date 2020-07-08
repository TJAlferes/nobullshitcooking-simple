import React from 'react';
import { useLocation } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';

//import MobileHeader from './components/Header/mobile/MobileHeader';
import { Header } from './components/Header/desktop/Header';
import { Main } from './components/Main/Main';
import { Footer } from './components/Footer/Footer';
import { RoutesList } from './routing/Routes';
import { IContentType } from './store/data/types';
import './app.css';

export function App({
  dataContentTypes,
  headerTheme,
  footerTheme,
  mainTheme,
  shadow
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
  theme: {
    headerTheme: string;
    footerTheme: string;
    mainTheme: string;
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
  shadow: state.menu.shadow
});

const connector = connect(mapStateToProps, {});

export default connector(App);