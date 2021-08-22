/* eslint-disable react/jsx-indent */
import React from 'react';
// import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Route, NavLink, Switch,
} from 'react-router-dom';
import Portfolio from './portfolio';
// import Controls from './controls';
// import About from './about';

const Welcome = (props) => {
  return (
    <div className="holder">
      <div className="outer-border decor">
        <div className="intro">
          <p>
            Hi! My name is Matt Schnell.
          </p>
          <p>
          I am currently a senior at Dartmouth College majoring in Quantitative Social Science and Computer Science, where I can combine my interests in math, programming, and economics.
          I am particularly fascinated by using data to answer questions, especially in sports.

          </p>
          <p>
            My proficiencies include R, SQL, and Python. I am familiar with Javascript, Java, Matlab, and Stata.
          </p>
          <p>
            On campus I am Captain of the Club Soccer team, President of Dartmouth Sports Analytics club, and Programming Chair of my fraternity.
          </p>
          <p>
            Outside of school, I enjoy spending my time playing soccer, skiing, and watching University of Michigan sports.
          </p>
        </div>
      </div>
      <div className="inner-border decor" />
      <div className="icons">
        <a href="https://www.linkedin.com/in/matt-schnell/" target="_blank" style={{ textDecoration: 'none' }} rel="noreferrer"> <i className="fab fa-linkedin" /></a>
        <a style={{ textDecoration: 'none' }} href="mailto: mattrschnell@gmail.com"> <i className="fas fa-envelope-square" /></a>
        <a href="https://github.com/mattschnell" target="_blank" style={{ textDecoration: 'none', color: 'black' }} rel="noreferrer"> <i className="fab fa-github" /></a>
      </div>
    </div>
  );
};

const FallBack = (props) => {
  return <div>URL Not Found</div>;
};

const Nav = (props) => {
  return (
    <nav>
      <ul className="nav-bar">
        <li><NavLink to="/portfolio" exact className="NavLink" id="portfolio" style={{ textDecoration: 'none', color: 'white' }}>analytics portfolio</NavLink></li>
        <li><NavLink to="/"
          exact
          className="NavLink"
          style={{
            textDecoration: 'none', color: '#4B0082', fontSize: 30, fontWeight: 'bold',
          }}
        >Matt Schnell
            </NavLink>
        </li>
        <div className="contact-me">
          <li><a style={{ textDecoration: 'none', color: 'white' }} target="_blank" href="./src/img/resume.pdf">resume</a></li>
          <li><a style={{ textDecoration: 'none', color: 'white' }} href="mailto: mattrschnell@gmail.com">email me</a></li>
        </div>

        {/* <li><NavLink to="/test/id1" className="NavLink" style={{ textDecoration: 'none', color: 'black' }}>test id1</NavLink></li>
        <li><NavLink to="/test/id2" className="NavLink" style={{ textDecoration: 'none', color: 'black' }}>test id2</NavLink></li>
        <li><NavLink to="/blog" className="NavLink" style={{ textDecoration: 'none', color: 'black' }}>My Newsletter!</NavLink></li> */}
      </ul>
    </nav>
  );
};

const App = (props) => {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/portfolio" component={Portfolio} />
          <Route component={FallBack} />
        </Switch>

      </div>
      {/* <Counter />
      <Controls /> */}
    </Router>

  );
};

export default App;
