import { Component } from 'react'
import { connect } from 'react-redux'

import NextSeo from 'next-seo';

import IndexLanding from './../src/js/modules/landings/index'

class Index extends Component {
  static getInitialProps ( /* { reduxStore, req } */ ) {
    // const isServer = !!req
    return {}
  }

  render () {
    return (
      <div>
        <NextSeo
          config={{
            title: 'Design as a Service | Belka & Strelka',
            description: 'Easiest way for startups and enterpises to upgrade digital products and focus on building great companies.',
          }}
        />
        
        <IndexLanding />
      </div>
    )
  }
}

export default connect()(Index)
