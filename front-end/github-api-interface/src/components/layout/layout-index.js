import React from 'react';
import * as S from './layout-styled';

const Layout = (props) => {
  return (
    <S.WrapperLayout>
        <header>
            Header
        </header>
        {props.children}
    </S.WrapperLayout>
  );
}

export default Layout;