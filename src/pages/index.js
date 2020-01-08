import React from 'react';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

import { Link } from 'gatsby';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/home.jpg';
// import pic3 from '../assets/images/pic03.jpg';
import pic4 from '../assets/images/cocktail_db_mockup.jpg';
import pic5 from '../assets/images/code.jpg';

import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
        <ul className="actions special">
          <li>
            <Scroll type="id" element="one">
              <a href="/#" className="button primary">
                Explore
              </a>
            </Scroll>
          </li>
        </ul>
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          Learn More
        </a>
      </Scroll>
    </section>

    <section id="one" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <h2>Who am I?</h2>
          <div>
            <p>
              Hey now! I'm Jonny Fluckey. I love to develop web applications
              that help people organize their data and gain insights to take
              action
            </p>
          </div>
          <div>
            <p>
              I'm also not a complete bore, so I also like to make apps that are
              fun!
            </p>
          </div>
        </header>
        <ul className="icons major">
          <li>
            <span className="icon brands fa-react major style2">
              <span className="label">React</span>
            </span>
          </li>
          <li>
            <span className="icon fa-gem major style1">
              <span className="label">Ruby</span>
            </span>
          </li>
          <li>
            <span className="icon brands fa-git-alt major style3">
              <span className="label">Git</span>
            </span>
          </li>
        </ul>
      </div>
    </section>

    <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
          <img src={pic1} alt="" />
        </div>
        <div className="content">
          <h2>Projects I've Produced</h2>
          <p>
            Check out my{' '}
            <a
              href="https://www.github.com/jonnyfluckey"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>{' '}
            for more examples
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic4} alt="" />
        </div>
        <div className="content">
          <h2>Cocktail_DB</h2>
          <p>
            An application for searching cocktail recipes. The application has
            the ability to search for cocktails, have users save their
            favorites, or pull a random cocktail recipe
          </p>
          <h5>Technology</h5>
          <ul>
            <li>Front-End: React</li>
            <li>Back-End: Ruby on Rails</li>
            <li>Database: PostgreSQL</li>
            <li>Authentication: Auth0</li>
            <li>REST API: TheCocktailDB</li>
            <li>Styling: Semantic-UI</li>
            <li>Cloud Platform: Heroku</li>
          </ul>
          <div>
            <a
              href="https://fluckey-cocktail-db.herokuapp.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
          <div>
            <a
              href="https://github.com/jonnyfluckey/cocktail_db"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source Code
            </a>
          </div>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic2} alt="" />
        </div>
        <div className="content">
          <h2>Real Estate Deal Analyzer</h2>
          <p>
            An application component I designed for a pro-bono project that
            calculates and analyzes the profit and profit margin for a house
            flip. This component incorporates data from multiple API's, as well
            as demonstrates integration with Firebase to provide a simple
            back-end
          </p>
          <h5>Technology</h5>
          <ul>
            <li>Front-End: React</li>
            <li>Database: Cloud Firestore</li>
            <li>REST API: Zillow</li>
            <li>REST API: Google Places Autocomplete</li>
            <li>Styling: Material-UI</li>
            <li>Cloud Provider: Firebase</li>
          </ul>
          <div>
            <a
              href="https://deal-analyzer-deb8d.firebaseapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
          <div>
            <a
              href="https://github.com/jonnyfluckey/deal-analyzer"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source Code
            </a>
          </div>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic5} alt="" />
        </div>
        <div className="content">
          <h2>Open Source Contributions</h2>
          <p>
            I have contributed to a number of projects helping them develop
            their code base.
          </p>
          <ul>
            <li>
              <a
                href="https://github.com/legesher/legesher-translations/pull/55"
                target="_blank"
                rel="noopener noreferrer"
              >
                Legesher Translations
              </a>
              : An open source project dedicated to translating spoken languages
              into programming languages
            </li>
            <li>
              <a
                href="https://github.com/codebuddies/react-concept/pull/19"
                target="_blank"
                rel="noopener noreferrer"
              >
                Codebuddies
              </a>
              : Community-organized hangouts for learning programming together
            </li>
            <li>
              <a
                href="https://github.com/NikhilNamal17/popular-movie-quotes/pull/307"
                target="_blank"
                rel="noopener noreferrer"
              >
                Popular-Movie-Quotes
              </a>
              : an NPM package that returns popular movie quotes
            </li>
          </ul>
        </div>
      </section>
    </section>

    <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>I got Mad Skills as well</h2>
          <blockquote style={{ borderLeft: 'hidden' }}>
            <div>The whole is greater than the sum of its parts</div>
            <div>-Aristotle</div>
          </blockquote>
        </header>
        <ul className="features">
          <li className="icon brands fa-react">
            <h3>Front-End</h3>
            <p>
              HTML5
              <br />
              CSS
              <br />
              Javascript (ES6)
              <br />
              JSX
              <br />
              <br />
              <strong>Framework:</strong>
              <br />
              React.js
              <br />
              Gatsby.js
              <br />
              <br />
              <strong>Styling Libraries:</strong>
              <br />
              Material-UI
              <br />
              Semantic-UI
            </p>
          </li>
          <li className="icon solid fa-gem">
            <h3>Back-End</h3>
            <p>
              Ruby
              <br />
              Node.js
              <br />
              <br />
              <strong>Framework:</strong>
              <br />
              Ruby on Rails
            </p>
          </li>
          <li className="icon solid fa-database">
            <h3>Database</h3>
            <p>
              SQL:
              <br />
              PostgreSQL
              <br />
              <br />
              NoSQL:
              <br />
              Cloud Firestore (Firebase)
            </p>
          </li>
          <li className="icon solid fa-cloud">
            <h3>Cloud</h3>
            <p>
              Netlify
              <br />
              Heroku
              <br />
              Firebase
              <br />
              Glitch
            </p>
          </li>
          <li className="icon solid fa-tools">
            <h3>Tools</h3>
            <p>
              VSCode
              <br />
              Postman
              <br />
              Github
              <br />
              Bitbucket
            </p>
          </li>
          <li className="icon solid fa-comments">
            <h3>Soft Skills</h3>
            <p>
              Problem Solving
              <br />
              Communcation
              <br />
              Teamwork
              <br />
              Accountability
              <br />
              Patience
            </p>
          </li>
        </ul>
      </div>
    </section>

    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>Wanna Know More?</h2>
          <p>Please reach out!</p>
        </header>
        <ul className="actions stacked" style={{ marginTop: '6%' }}>
          <li>
            <Link to="/contact" className="button fit primary">
              Contact Me
            </Link>
          </li>
          <li>
            <Link to="/blog" className="button fit">
              Blog Posts
            </Link>
          </li>
        </ul>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
