import React, { Component } from 'react'

export default (DecoratedComp, styles) => {
  return class NewComp extends Component {
    componentWillMount() {
      const { staticContext } = this.props
      // staticContext && (staticContext.css = styles._getCss())
      staticContext && (staticContext.css.push(styles._getCss()))
    }

    render() {
      return <DecoratedComp {...this.props} />
    }
  }
}