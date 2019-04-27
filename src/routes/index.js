import { asyncComponent } from '../components/AsyncComponent';

export default [
  {
    component: asyncComponent(() => import('../containers/Root')),
    routes: [
      {
        path: '/',
        exact: true,
        component: asyncComponent(() => import('../containers/Home')),
      },
      {
        path: '/about',
        component: asyncComponent(() => import('../containers/About')),
      },
      {
        path: '/counter',
        component: asyncComponent(() => import('../containers/Counter')),
      },
      {
        path: '/newfeatures',
        component: asyncComponent(() => import('../containers/NewFeatures')),
      },
      {
        path: '/iifecycle',
        component: asyncComponent(() => import('../containers/IifeCycle')),
      },
      {
        path: '/hooks',
        component: asyncComponent(() => import('../containers/Hooks')),
      },
      {
        path: '/context/:id',
        component: asyncComponent(() => import('../containers/Context')),
      },
      {
        path: '/pureComponent',
        component: asyncComponent(() => import('../containers/PureComponent')),
        routes: [
          {
            path: '/pureComponent/demo1',
            component: asyncComponent(() => import('../containers/PureComponent/Demo1')),
          },
          {
            path: '/pureComponent/demo2',
            component: asyncComponent(() => import('../containers/PureComponent/Demo2')),
          },
        ],
      },
      {
        path: '*',
        component: asyncComponent(() => import('../containers/NotFound')),
      },
    ],
  },
];
