import * as React from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import {
  AppShell as MantineAppShell,
  Header,
  MantineProvider,
  Navbar,
  Title,
} from '@mantine/core';
import { MainLink } from './MainLink';

export type Route = {
  element: React.FunctionComponent;
  path: string;
};

export type NavLink = {
  path: string;
  label: string;
};

export const AppShell: React.FunctionComponent<{
  title: string;
  colorScheme?: 'light' | 'dark';
  routes: Route[];
  navLinks: NavLink[];
}> = ({ title, colorScheme, routes, navLinks }) => (
  <BrowserRouter>
    <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme }}>
      <MantineAppShell
        padding="md"
        navbar={
          <Navbar width={{ base: 300 }} height={500} p="xs">
            {navLinks.map((link) => (
              <MainLink {...link} key={link.path} />
            ))}
          </Navbar>
        }
        header={
          <Header
            height={60}
            p="xs"
            sx={{ display: 'flex' }}
            styles={(theme) => ({
              backgroundColor:
                theme.colorScheme === 'dark'
                  ? theme.colors.dark[8]
                  : theme.colors.gray[0],
            })}
          >
            <Title>{title}</Title>
          </Header>
        }
      >
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.element />}
            />
          ))}
        </Routes>
        <Outlet />
      </MantineAppShell>
    </MantineProvider>
  </BrowserRouter>
);
