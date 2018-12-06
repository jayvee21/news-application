import React, { Component } from 'react';
import Header from './components/Header'
import Category from './components/Category'
import News from './components/News'
import axios from 'axios'
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      category : 'technology',
      country: 'ph',
      page: '1',
      apiKey: '6bd894df85364a80b2e9aaa65cdc3f7c',
      articles: []
    }
    
  }

  componentDidMount(){
    this.getFeeds()
  }

  componentWillUpdate(){
    this.getFeeds()
  }


  changeCategory = (categoryName) => {
    this.setState({category: categoryName} )
  }

  getFeeds = () => {
    axios.get(`https://newsapi.org/v2/top-headlines?country=ph&category=${this.state.category}&page=${this.state.page}&apiKey=${this.state.apiKey}`)
      .then(resp => {
        this.setState({ articles : resp.data.articles })
      })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="main-wrapper">
          <Category category={this.state.category} onChangeCategory={this.changeCategory} />
          <News articles={this.state.articles}/>
        </div>
      </div>
    );
  }
}

export default App;
