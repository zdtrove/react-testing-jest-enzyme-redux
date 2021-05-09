import Header from "./components/header/Header";
import Headline from "./components/headline/Headline";
import Button from './components/button/Button'
import ListItem from './components/listItem/ListItem'
import { connect } from 'react-redux'
import { fetchPosts } from './actions/actions'
import './_app.scss'
import { Component } from "react";

const tempArr = [{
  fName: 'Joe',
  lName: 'Bloggs',
  email: 'joebloggs@gmail.com',
  age: 24,
  onlineStatus: true,
}]

const initialState = {
  hideBtn: false
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ...initialState
    }
    this.fetch = this.fetch.bind(this)
  }

  fetch() {
    this.props.fetchPosts()
    this.exampleMethod_updatesState()
  }

  exampleMethod_updatesState() {
    const { hideBtn } = this.state
    this.setState({
      hideBtn: !hideBtn
    })
  }

  exampleMethod_returnsAValue(number) {
    return number + 1
  }

  render() {
    console.log('test')
    const { posts } = this.props
    const { hideBtn } = this.state
    const configButton = {
      buttonText: 'Get posts',
      emitEvent: this.fetch
    }
    return (
      <div className="App" data-test="app-component">
        <Header />
        <section className="main">
          <Headline header="Posts" desc="Click the button to render posts!" tempArr={tempArr} />
          {!hideBtn && (
            <Button {...configButton} />
          )}
          {posts.length > 0 && (
            <div>
              {posts.map((post, index) => {
                const { title, body } = post
                const configListItem = {
                  title,
                  desc: body
                }
                return (
                  <ListItem key={index} {...configListItem} />
                )
              })}
            </div>
          )}
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, { fetchPosts })(App);
