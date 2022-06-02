import React from 'react';
import { AppShell } from 'ui';

function App() {
  return (
    <AppShell
      title="Movies"
      routes={[
        { path: '/', element: () => <div>Hometest</div> },
        { path: '/playlist', element: () => <div>Playlist</div> },
      ]}
      navLinks={[
        { path: '/', label: 'Home' },
        { path: '/playlist', label: 'Playlist' },
      ]}
    />
  );
}

export default App;
