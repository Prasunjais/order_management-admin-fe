import { Fragment, useState, useEffect } from 'react';
import { getItem } from "../utils/storageUtil";
import { STORAGE_KEYS } from "../constants/storageKeys";
import { BrowserRouter as Router, Route, Link, Routes, Navigate, useParams, useLocation, useMatch } from "react-router-dom";
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Login from '../pages/Login';
import Order from '../pages/Order';
import { ProvideAuth, useAuth } from '../utils/auth';

const BaseRoute = () => {
	const isUserLoggedIn = () => {
		let accessToken = getItem(STORAGE_KEYS.ACCESS_TOKEN);
		return accessToken ? true : false;	
	}

	const PrivateRoute = ({ children }: {
		children: JSX.Element
	}) => {
		let accessToken = getItem(STORAGE_KEYS.ACCESS_TOKEN);
		const { projectId } = useParams();
		const isProjectEditUrl = useMatch({
			path: "/project/:projectId/edit/view"
		});
		const isProjectAddUrl = useMatch({
			path: "/add-project"
		});
		
		const search = useLocation().search;

		// check for project view 
		if (isProjectEditUrl) {
			const isLoginRequired = new URLSearchParams(search).get('login');
			const ProjectName = new URLSearchParams(search).get('projectName');
			if (isLoginRequired == 'true' && projectId) {
				return accessToken ? children : <Navigate to={`/login?projectId=${projectId}&projectName=${ProjectName}`} />;	
			} else return children;
		} else if (isProjectAddUrl) {
			return accessToken ? children : <Navigate to={`/login?addProject=true`} />;
		} else return accessToken ? children : <Navigate to={`/login`} />;
	}

	return (
		<Fragment>
			<ProvideAuth>
				<Routes>
					<Route
						path="/"
						element={<Home />}
					/>
					<Route
						path="/login"
						element={
							<Login />
						}
					/>
					<Route
						path="/order/*"
						element={
							<PrivateRoute>
								<Order />
							</PrivateRoute>
						}
					/>
					<Route
						path="*"
						element={<NotFound />}
					/>
				</Routes>
			</ProvideAuth>
		</Fragment>
	);
}

export default BaseRoute;
