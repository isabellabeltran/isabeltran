import React from 'react'; 
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import Application from './components/index.jsx'; 
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faSearch, faPaw, faGithub, faVideo, faLinkedin, faEnvelope, faFileAlt } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faCheckSquare, faSearch, faPaw, faVideo, faEnvelope, faFileAlt);

function render(Component) {
  ReactDOM.render(
    <BrowserRouter> 
    <AppContainer>
      <Component />
    </AppContainer>
    </BrowserRouter>, 
  document.getElementById("root"));
}

render(Application);

if (module.hot) {
  module.hot.accept('./components/index.jsx', () => {
    const NewApplication = require('./components/index.jsx').default
    render(NewApplication); 
  }); 
}