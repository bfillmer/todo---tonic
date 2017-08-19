
import React from 'react'
import Link from 'redux-first-router-link'

import {routeAbout} from 'actions'

import {Section} from 'view/Shared/Section'
import {H1, P} from 'view/Shared/Typography'

export const Home = () => (
  <Section>
    <H1>Home</H1>
    <P>Head to the <Link to={routeAbout()}>About Page</Link>.</P>
  </Section>
)
