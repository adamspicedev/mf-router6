import React from 'react';
import { AppShell } from 'ui';
import { Playlist } from 'playlist-content';
import { MoviesContent } from 'movies-content';

function App() {
  return (
    <AppShell
      title="Playlist"
      colorScheme="dark"
      routes={[
        { path: '/', element: MoviesContent },
        { path: '/playlist', element: Playlist },
      ]}
      navLinks={[
        { path: '/', label: 'Home' },
        { path: '/playlist', label: 'Playlist' },
      ]}
    />
  );
}

export default App;
