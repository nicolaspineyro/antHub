import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import RootNavigator from 'navigation/RootNavigator';

const client = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={client}>
      <RootNavigator />
    </QueryClientProvider>
  );
};

export default App;
