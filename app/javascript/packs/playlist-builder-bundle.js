import ReactOnRails from 'react-on-rails';

import PlaylistBuilderApp from '../bundles/PlaylistBuilder/startup/PlaylistBuilderApp';

// This is how react_on_rails can see the PlaylistBuilder in the browser.
ReactOnRails.register({
  PlaylistBuilderApp,
});
