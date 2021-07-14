import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function AppRouting({ component: Component, path, isPrivate, ...props }) {
	const { token } = useSelector(state => state.persistedReducer.auth);
	return (
		<Route path={path} render={props => isPrivate && token === "" ? (<Redirect to="/" />) : (<Component {...props} />)} {...props} />
	)
}