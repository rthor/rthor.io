import React from 'react';
import Home from './Home';
import About from './About';
import Layout from '../components/Layout';

export default [
  {
    path: '/',

    children: [Home, About],

    async action({ next, url }) {
      const el = await next();
      return (
        <Layout path={url}>
          {el}
        </Layout>
      );
    }
  }
];
