import React, {
  Component
} from 'react';
import './App.css';
import Header from './Header';
import NewsList from './NewsList';
import NewsDetail from './NewsDetail';
import Friends from './Friends';
import { Breadcrumbs } from 'react-breadcrumbs';
import CrumbRoute from './crumb-route.jsx'
import { Switch, Route, Redirect } from "react-router-dom";


const url = "https://jsonplaceholder.typicode.com/posts";
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      results: [],
    };

    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData(url);
  }

  getData(url) {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        const numberOfNews=5;
        const newarray=[];

        for (let i = 0; i < numberOfNews; i++) {
          newarray.push(data[i]);
        }

        this.setState({
          results: newarray
        },()=>console.log('alex',this.state.results));
      });
  }

  ///////////////ROUTE ////////////
  getNew(id) {
    const { results } = this.state;

    console.log('alexx',results.find(newFind => newFind.id === parseInt(id)));

    return results.find(newFind => newFind.id === parseInt(id));
  }

  getNew2(id){
    const { results } = this.state;
    console.log('caca',results[id])
    return (results[id-1]);
  }

  getTitle(id){
    const { results } = this.state;
    console.log('caca',results[id])
    return (results[id]);
  }

  render() {
    const { results } = this.state;

    return ( 
      <div>
        <Header />
        <Breadcrumbs className="demo__crumbs" />
        <Switch>
              <Route
                    exact
                    path='/'
                    render={props => (<Redirect to={`/articulos/`} />)}
                />
              <CrumbRoute
              title="articulos"
                exact
                path='/articulos/'
                render={({ match, history, location }) =>
                <div>
                  <NewsList
                    match={match}
                    location={location}
                    history={history}
                    articles={this.state.results}
                  />
                  </div>
                }
              />
               <CrumbRoute
                title="articulo"
                path='/articulos/:id'
                render={(props) =>
                  <NewsDetail {...props}
                  newsRoute={this.getNew(props.match.params.id)}
                  page={props.match.params.id}
                  />
                }
              />
              
              {/* <CrumbRoute
                title='articulo'
                page='1'
                exact path='/articulos/1'
                render={(props) =>
                  <NewsDetail {...props}
                  newsRoute={this.getNew2(1)}
                  page={props.match.params.id}
                  />
                }
              />
              <CrumbRoute
                title="articulo"
                exact path='/articulos/2'
                page='2'
                render={(props) =>
                  <NewsDetail {...props}
                  newsRoute={this.getNew2(2)}
                  page={props.match.params.id}
                  />
                }
              /> */}

                <CrumbRoute title="404 Not Found" render={ props => <span>Page not found...</span> } />


          </Switch>
      </div>
    );
  }
}

export default App;