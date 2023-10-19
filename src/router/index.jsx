import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../pages/Root';
import EndlessMode from '../pages/EndlessMode';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
  {
    path: '/endless',
    element: <EndlessMode />,
  },
]);

export default router;
