import React from 'react';
import Home from './pages/Home';
import Form from './pages/Form';
import DialogPage from './pages/DialogPage';
import Countdown from './pages/Countdown';
import Test from './test/template';
import Markdown from './pages/Markdown';

const routes = [
    {
        path: '/',
        exact: true,
        component: Home,
    },
    {
        path: '/form',
        exact: true,
        component: Form
    },
    {
        path: '/dialog',
        exact: true,
        component: DialogPage
    },
    {
        path: '/countdown',
        exact: true,
        component: Countdown
    },
    {
        path: '/test',
        exact: true,
        component: Test,
    },
    {
        path: '/markdownest',
        exact: true,
        component: Markdown,
    }
]
export default routes;