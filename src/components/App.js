import React from 'react';
import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import Badges from '../pages/Badges';
import BadgeNew from '../pages/BadgeNew'
import NotFound from '../pages/NotFound';
import Layout from './Layout';
import Home from '../pages/Home';
import BadgeEdit from '../pages/BadgeEdit';
import BadgesDetails from '../pages/BadgesDetails'
function  App() {
	return (
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/badges" component={Badges}  />
					<Route exact path="/badges/new" component={BadgeNew}  />
					<Route exact path="/badges/:badgeId/edit" component={BadgeEdit}  />
					<Route exact path="/badges/:badgeId" component={BadgesDetails}  />
					<Route component={NotFound} />
				</Switch>
			</Layout>
		</BrowserRouter>
	)
}
export default App;