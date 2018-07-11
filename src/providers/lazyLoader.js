import lazy from './lazy';
export const Home = lazy(() =>
    import('../components/pages/home').then(module => module.Home)
)

export const Login = lazy(() =>
    import('../components/pages/login').then(module => module.Login)
)

export const NotFound = lazy(() =>
    import('../components/pages/not-found').then(module => module.default)
)