/* eslint-disable react/prefer-stateless-function */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import {
  withRouter, // NavLink,
} from 'react-router-dom';

class Portfolio extends Component {
  render() {
    return (
      <div className="holder-portfolio">

        <div className="articles-holder">
          <div className="article">
            <h1 className="article-title">
              <a style={{ color: 'white' }}
                title="click to download me"
                target="_blank"

                href="./src/img/Final-Paper-Extra-Points.pdf"
              >An Analysis on Two Point Conversions
              </a>
            </h1>
            <p>
              Used a fixed-effect logit model to determine whether coaches preferred trying for a two-point conversion after the NFL moved the extra-point distance back
            </p>

          </div>
          <div className="article">
            <h1 className="article-title">
              <a style={{ color: 'white' }}
                title="click to download me"
                target="_blank"
                href="./src/img/fouls_paper.pdf"
              >The Fans Impact on the Whistle
              </a>
            </h1>
            <p>
              Determined fans effect on referees on the MLS by finding the probablity of consecutive foul calls on the home team
            </p>

          </div>
          <div className="article">
            <h1 className="article-title">
              <a style={{ color: 'white' }}
                title="click to download me"
                target="_blank"
                href="./src/img/Kickoffs FCS and Ivy 2019.pdf"
              >Is Returning a Kickoff Worth It?
              </a>

            </h1>
            <p>
              Worked with the Dartmouth Football staff to assess whether they should return kickoffs or take a touchback every time
            </p>
          </div>
          <div className="article">
            <h1 className="article-title">

              <a style={{ color: 'white' }}
                title="click to download me"
                target="_blank"
                href="./src/img/Covid Sentiment Twitter Writeup.pdf"
              >COVID-19 Vaccine Twitter Sentiment
              </a>
            </h1>
            <p>
              Used two RoBERTA models to examine how Americans view COVID-19 vaccines based on Twtter sentiment
            </p>
          </div>
          <div className="article">
            <h1 className="article-title">

              <a style={{ color: 'white' }}
                title="click to download me"
                target="_blank"
                href="https://tldr.surge.sh/"
                rel="noreferrer"
              >TL;DR
              </a>
            </h1>
            <p>
              Developed an application where users can upload audio recordings of themselves reading articles,
              and other users, particularly those with reading disabilites, can pay to listen to that audio in the car or on a walk.
            </p>
          </div>

        </div>
        <div className="icons2">
          <a href="https://www.linkedin.com/in/matt-schnell/" target="_blank" style={{ textDecoration: 'none' }} rel="noreferrer"> <i className="fab fa-linkedin" /></a>
          <a style={{ textDecoration: 'none' }} href="mailto: mattrschnell@gmail.com"> <i className="fas fa-envelope-square" /></a>
          <a href="https://github.com/mattschnell" target="_blank" style={{ textDecoration: 'none', color: 'black' }} rel="noreferrer"> <i className="fab fa-github" /></a>
        </div>
      </div>

    );
  }
}

export default withRouter((Portfolio));
