import React, { useEffect } from 'react'
import { Switch } from 'react-router-dom';
import { verificarToken } from './dashboard';
import AppRouting from '../../routes/AppRouting';
import routingHome from '../../routes/routingHome';
import { useSelector, useDispatch } from 'react-redux';
import SidebarHome from '../../components/dashboard/SidebarHome';

export default function dashboardView({ history }) {

    const { token } = useSelector(state => state.persistedReducer.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        verificarToken(token, dispatch);
        const timeVerificado = setInterval(() => {
            verificarToken(token, dispatch);
            if (token == "") return clearInterval(timeVerificado)
        }, 50000);
        return () => clearInterval(timeVerificado);
    }, [])

    return (
        <section className="bg-white min-h-screen h-full w-full">

            <SidebarHome history={history} />

            <article className="sm:ml-52 mb-10 ">
                <div className="p-5">
                    <Switch>
                        {
                            routingHome.map(route => (
                                <AppRouting
                                    exact={route.path === "/home" ? true : false}
                                    key={route.path}
                                    path={route.path}
                                    component={route.component}
                                    isPrivate={route.isPrivate}
                                />
                            ))
                        }
                    </Switch>
                </div>
            </article>

        </section>
    )
}