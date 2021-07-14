import React from 'react'
import LinkPreload from '../LinkPreload';
import { useDispatch } from 'react-redux';
import { DELETE_TOKEN } from '../../redux/actions/auth';

export default function SidebarHome({ history }) {

    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(DELETE_TOKEN());
        history.push('/');
    }

    return (
        <nav className="fixed bg-yellow-600 w-full text-white bottom-0 sm:min-h-screen sm:w-52 flex sm:block z-50">
            <div className="hidden sm:flex sm:p-5 justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-auto w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" />
                </svg>
                <span className="hidden sm:inline font-bold text-2xl"> Finx</span>
            </div>
            <LinkPreload to="/home" clases="flex p-3 sm:p-5 border-0 hover:bg-yellow-700 hover:text-white flex justify-center w-full sm:justify-start" props2="Inicio">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span className="hidden sm:inline font-bold text-xl"> Home</span>
            </LinkPreload>
            <LinkPreload to="/home/Productos" clases="flex p-3 sm:p-5 border-0 hover:bg-yellow-700 hover:text-white flex justify-center w-full sm:justify-start" props2="Productos">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
                <span className="hidden sm:inline font-bold text-xl"> Productos</span>
            </LinkPreload>
            <LinkPreload to="/home/Chart" clases="flex p-3 sm:p-5 border-0 hover:bg-yellow-700 hover:text-white flex justify-center w-full sm:justify-start" props2="Graficos">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
                <span className="hidden sm:inline font-bold text-xl"> Chart</span>
            </LinkPreload>
            <div className="sm:bottom-0 sm:absolute w-full">
                <button className="p-3 sm:p-5 border-0 hover:bg-yellow-700 hover:text-white flex justify-center w-full" aria-label="logout" onClick={() => handleLogout()}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    <span className="hidden sm:inline font-bold text-xl"> logout </span>
                </button>
            </div>
        </nav>
    )
}