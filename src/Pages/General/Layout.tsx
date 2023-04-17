import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router';
import { useHeader, useHistoryRoute, useWindowSize } from 'src/Hooks/General';

const Layout = () => {
  const Header = useHeader();
  const { height: windowHeight } = useWindowSize();
  useHistoryRoute();
  return (
    <LayoutWrapper style={{ minHeight: windowHeight }}>
      <HeaderLayout>{Header}</HeaderLayout>
      <OutletLayout>
        <Outlet />
      </OutletLayout>
    </LayoutWrapper>
  );
};
export default Layout;

const LayoutWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  overflow: hidden;

  margin: 0px auto;
`;
const HeaderLayout = styled.div`
  position: fixed;
  z-index: 10;
  top: 0px;
  left: 0px;
  width: 100%;
`;
const OutletLayout = styled.div`
  padding-top: 44px;
  width: 100%;
  height: 100%;
`;
