import React, { Suspense } from "react";
import { Switch } from "react-router-dom";
import routing from "./routes/routing";
import AppRouting from "./routes/AppRouting";
import Spinner from "./components/Spinner.jsx";

export default function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Switch>
        {
          routing.map(route => (
            <AppRouting
              exact={route.path === "/" ? true : false}
              key={route.path}
              path={route.path}
              component={route.component}
              isPrivate={route.isPrivate}
            />
          ))
        }
      </Switch>
    </Suspense>
  )
}