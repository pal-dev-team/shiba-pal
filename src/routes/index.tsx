import { Suspense, lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

import DashboardLayout from '../layouts/dashboard';

// components
import LoadingScreen from '../components/LoadingScreen';

// ----------------------------------------------------------------------

const Loadable = (Component: any) => (props: any) => {
    return (
        <Suspense
            fallback={
                <LoadingScreen />
            }
        >
            <Component {...props} />
        </Suspense>
    );
};

export default function Router() {
    return useRoutes([

        // Dashboard Routes
        {
            path: '/',
            element: <DashboardLayout />,
            children: [
                { path: '/', element: <Navigate to="/home" replace /> },
                { path: '/home', element: <Home /> },
                { path: 'collections', element: <Collections /> },
                { path: 'stake', element: <Stake /> },
            ]
        },
        { path: '*', element: <Navigate to="/404" replace /> }
    ]);
}

const Home = Loadable(lazy(() => import('../pages/Home')));
const Collections = Loadable(lazy(() => import('../pages/Collections')));
const Stake = Loadable(lazy(() => import('../pages/Stake')));

