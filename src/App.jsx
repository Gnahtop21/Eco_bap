import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
// ... other imports

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Shop} />
                <Route path="/product/:id" component={ProductDetail} />
                {/* ... other routes */}
            </Switch>
        </Router>
    );
}

export default App;