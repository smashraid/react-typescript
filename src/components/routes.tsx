import {TopicParameter, TopicsParameter, ChildParameter} from "../interfaces/properties";

import * as React from "react";
import { BrowserRouter as Router, Route, Link, RouteComponentProps } from 'react-router-dom';

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
        <li><Link to="/accounts">Accounts</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
      <Route path="/accounts" component={ParamsExample}/>
    </div>
  </Router>
)

const ParamsExample = () => (
  <Router>
    <div>
      <h2>Accounts</h2>
      <ul>
        <li><Link to="/accounts/netflix">Netflix</Link></li>
        <li><Link to="/accounts/zillow-group">Zillow Group</Link></li>
        <li><Link to="/accounts/yahoo">Yahoo</Link></li>
        <li><Link to="/accounts/modus-create">Modus Create</Link></li>
      </ul>

      <Route path="/accounts/:id" component={Child}/>
    </div>
  </Router>
)

const Child = ( props:RouteComponentProps<ChildParameter> ) => (
  <div>
    <h3>ID: {props.match.params.id}</h3>
  </div>
)


const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Topics = (props: RouteComponentProps<TopicsParameter> ) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${props.match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${props.match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${props.match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${props.match.url}/:topicId`} component={Topic}/>
    <Route exact path={props.match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const Topic = ( props: RouteComponentProps<TopicParameter> ) => (
  <div>
    <h3>{props.match.params.topicId}</h3>
  </div>
)

export default BasicExample