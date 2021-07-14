import React from 'react'
import { Link } from 'react-router-dom';
import { preloadRouteComponent } from '../routes/preloadLink';

export default function LinkPreload({ to, clases, texto, children, props2 }) {
    return (
        <Link className={clases} onMouseEnter={() => preloadRouteComponent(to)} to={to} aria-label={props2}>
            {
                texto || children
            }
        </Link>
    )
};