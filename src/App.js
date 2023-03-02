import './App.css';
import React from 'react'
// import WebParent from './WebWithReducer/WebParent';
import WebParent from './Website/WebParent';

// import Router from './Websitedummy/Router';
// import { Provider } from 'react-redux';
// import store from './redux/store';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';





function App() {

  return (
    <>

      <WebParent />

      {/* <Provider store={store}>
        <Router />
      </Provider> */}
    </>
  );
}

export default App;


// For new project new api want to check https://api.publicapis.org/entries