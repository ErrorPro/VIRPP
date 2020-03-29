import React from 'react';
import { Provider } from 'react-redux';

import ChartList from 'src/chart/components/ChartList';
import Layout from 'src/layout/components/Layout';
import { fetchLists } from 'src/chart/redux/actions';
import store from 'src/store';

// This should be done via saga but for now we leave it
store.dispatch(fetchLists(require('./mock').default));

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <ChartList />
      </Layout>
    </Provider>
  );
}

export default App;
