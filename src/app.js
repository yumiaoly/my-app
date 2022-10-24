import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import routes from './routes';
import Layout from './layout/BaseLayout';
import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Layout>
                    {routes?.map((item, i) => {
                        return <Route key={i} {...item} />
                    })}
                </Layout>
            </Router>
        </Provider>
    )
}

export default App;