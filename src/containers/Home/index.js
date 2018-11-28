import React from 'react';
import Header from '../../components/Header'
import { connect } from 'react-redux'
import { getData } from '../../store/actions'

class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { getData } = this.props
    getData()
  }

  render() {
    return (
      <div>
        {/* <Header /> */}
        <p>this is Home</p>
        <p>{this.props.name}</p>
        <button onClick={() => alert(this.props.name)}>hi, click me</button>
      </div>
    )
  }
}

Home.loadData = (store) => {
  // return store.dispatch(getData())
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...state.home
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getData: () => {
      dispatch(getData())
    }
  }
}
export default connect(mapStateToProps, { getData })(Home);