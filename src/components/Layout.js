import React, { Fragment } from 'react';
import Nav from './Nav';
import Hero from './Hero';

export default function Layout() {
  return (
    <Fragment>
      <Nav />
      <Hero />
    </Fragment>
  );
}
