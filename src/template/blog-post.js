import React from 'react';
import { Link, graphql } from 'gatsby';

// import Bio from '../components/Bio';
import Layout from '../components/Layout';
// import SEO from '../components/seo';
import Prism from 'prismjs';
import { Helmet } from 'react-helmet';

class BlogPostTemplate extends React.Component {
  componentDidMount() {
    Prism.highlightAll();
  }
  render() {
    const post = this.props.data.allButterPost.edges[0].node;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const { previous, next } = this.props.pageContext;

    return (
      <>
        <Helmet>
          <title>{post.seo_title}</title>
          <meta property="og:description" content={post.meta_description} />
          <meta property="og:image" content={post.featured_image} />
          <meta property="og:title" content={post.seo_title} />
        </Helmet>
        <Layout location={this.props.location} title={siteTitle} fullMenu>
          {/* <SEO title={post.seo_title} description={post.description} /> */}
          <article id="main">
            <header>
              <h2>{post.seo_title}</h2>
            </header>
            <section className="wrapper style5">
              <div className="inner">
                <div>
                  <span>
                    By: {post.author.first_name} {post.author.last_name}{' '}
                  </span>
                  |
                  <span>
                    {'  '}
                    {post.date}
                  </span>
                  <br />
                  <br />
                  <img
                    src={post.featured_image}
                    alt="Post"
                    height="350px"
                    width="450px"
                  />
                  <hr />
                  <div dangerouslySetInnerHTML={{ __html: post.body }} />
                  {/* <Bio /> */}
                  <ul>
                    <li>
                      {previous && (
                        <Link to={`/blog/${previous.slug}`} rel="prev">
                          ← {previous.seo_title}
                        </Link>
                      )}
                    </li>
                    <li>
                      {next && (
                        <Link to={`/blog/${next.slug}`} rel="next">
                          {next.seo_title} →
                        </Link>
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </article>
        </Layout>
      </>
    );
  }
}

export default BlogPostTemplate;

// Original Site Metadata
// siteMetadata {
//   title
//   author
// }

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allButterPost(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          id
          body
          seo_title
          date
          featured_image
          meta_description
          author {
            first_name
            last_name
          }
          categories {
            name
          }
        }
      }
    }
  }
`;
