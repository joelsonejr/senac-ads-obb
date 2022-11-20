import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import HomePage from './pages/Home'
// import BusinessLoansPage from './pages/BusinessLoans'
// import PersonalLoansPage from './pages/PersonalLoans'
// import PersonalAccountsPage from './pages/PersonalAccounts'
// import BusinessAccountsPage from './pages/BusinessAccounts'
// import PersonalFinancingsPage from './pages/PersonalFinancings'
// import BusinessFinancingsPage from './pages/BusinessFinancing'
import PersonalCreditCardsPage from './pages/PersonalCreditCards'
// import BusinessCreditCardsPage from './pages/BusinessCreditCards'

import {
	HOME,
	// PERSONAL_LOANS,
	// BUSINESS_LOANS,
	// PERSONAL_ACCOUNTS,
	// BUSINESS_ACCOUNTS,
	// PERSONAL_FINANCINGS,
	// BUSINESS_FINANCINGS,
	PERSONAL_CREDIT_CARDS,
	// BUSINESS_CREDIT_CARDS,
} from './routes'
import AppStyled from './styles/App'

function App() {
	return (
		<AppStyled>
			<Router>
				<Switch>
					{/* <Route exact component={BusinessLoansPage} path={BUSINESS_LOANS} />
					<Route exact component={PersonalLoansPage} path={PERSONAL_LOANS} />
					<Route exact component={PersonalAccountsPage} path={PERSONAL_ACCOUNTS} />
					<Route exact component={BusinessAccountsPage} path={BUSINESS_ACCOUNTS} />
					<Route exact component={PersonalFinancingsPage} path={PERSONAL_FINANCINGS} />
					<Route exact component={BusinessFinancingsPage} path={BUSINESS_FINANCINGS} /> */}
					<Route exact component={PersonalCreditCardsPage} path={PERSONAL_CREDIT_CARDS} />
					{/* <Route exact component={BusinessCreditCardsPage} path={BUSINESS_CREDIT_CARDS} /> */}
					<Route component={HomePage} path={HOME} />
				</Switch>
			</Router>
		</AppStyled>
	)
}

export default App
