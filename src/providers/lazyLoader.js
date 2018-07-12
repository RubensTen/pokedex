import lazy from './lazy';
export const Home = lazy(() =>
    import('../components/pages/home').then(module => module.Home)
)

export const Shop = lazy(() =>
    import('../components/pages/shop').then(module => module.default)
)

export const About = lazy(() =>
    import('../components/pages/about').then(module => module.default)
)

export const Contact = lazy(() =>
    import('../components/pages/contact').then(module => module.default)
)

export const Login = lazy(() =>
    import('../components/pages/login').then(module => module.Login)
)

export const NotFound = lazy(() =>
    import('../components/pages/not-found').then(module => module.default)
)