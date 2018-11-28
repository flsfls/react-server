import React from 'react';

export default class NotFound extends React.Component {
  componentWillMount() {
    const { staticContext } = this.props
    staticContext && (staticContext.Not_Found = true)
  }

  render() {

    return (
      <div>
        Not Found Page
      </div>
    )
  }
}