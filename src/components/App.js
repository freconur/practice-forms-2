import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './Layout';
import BadgeNew from '../pages/BadgeNew';
import Badges from '../pages/Badges';
import NotFound from '../pages/NotFound'
class App extends React.Component {
    render () {
			return (
				<BrowserRouter>
				<Layout>
					<Switch>
						<Route exatc path='/badges/new' component={BadgeNew} />
						<Route exatc path='/badges' component={Badges} />
						<Route component={NotFound} />
					</Switch>
				</Layout>
				</BrowserRouter>
			)
		}
}

export default App;