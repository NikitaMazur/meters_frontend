import React, { Component } from 'react';
import styled from 'styled-components';
import { Provider } from 'react-redux'
import { createStore , applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter } from 'react-router-dom'

import reducer from '../reducers';
import Content from '../containers/Content';

export const Container = styled.div`
    max-width: 1200px;
    padding: 0 15px;
    width: 100%;
`;

export const FullHeightWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    box-sizing: border-box;

    @media (max-width: 767px) {
      padding: 30px 0;
    }
`;

export const MainTitle = styled.h2`
    margin: 0 0 30px 0;
`;

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Content />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
