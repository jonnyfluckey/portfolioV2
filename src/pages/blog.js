import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
// import { Image } from 'material-ui-image';
// import SEO from '../components/seo';

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allButterPost.edges;

    return (
      <Layout location={this.props.location} title={siteTitle} fullMenu>
        {/* <SEO title="Blog Home" /> */}
        <article id="main">
          <header>
            <h2>&#123;...&#125; the Word</h2>
            <p>A Blog Powered By ButterCMS</p>
          </header>
          <section className="wrapper style5">
            <div className="inner">
              {posts.map(({ node }) => {
                const title = node.seo_title || node.slug;
                return (
                  <div key={node.slug}>
                    {/* <Image src={node.featured_image} /> */}
                    <img src={node.featured_image} height="200" width="250" />
                    <h3 style={{ margin: '0' }}>
                      <Link to={`/blog/${node.slug}`}>{title}</Link>
                    </h3>
                    <small>Posted: {node.date}</small>
                    <br />
                    <br />
                    <p>{node.meta_description}</p>
                    <hr />
                  </div>
                );
              })}
            </div>
          </section>
        </article>
      </Layout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allButterPost {
      edges {
        node {
          id
          seo_title
          meta_description
          slug
          categories {
            name
            slug
          }
          author {
            first_name
            last_name
            email
            slug
            bio
            title
            linkedin_url
            facebook_url
            instagram_url
            pinterest_url
            twitter_handle
            profile_image
          }
          body
          featured_image
          date
          summary
        }
      }
    }
  }
`;
