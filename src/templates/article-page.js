import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import {HTMLContent} from '../components/Content'
import ArticleTemplate from '../components/ArticleTemplate'
import Share from '../components/Share'
import Layout from '../components/Layout'

const ArticlePage = ({data}) => {
  const {markdownRemark: post} = data
  return (
    <Layout>
      <section className='section'>
        <div className='container content'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <ArticleTemplate
                content={post.html}
                contentComponent={HTMLContent}
                cover={post.frontmatter.cover}
                meta_desc={post.frontmatter.meta_description}
                title={post.frontmatter.title}
                images={post.frontmatter.album ? post.frontmatter.album : null}
              />
              <Share
                title={post.frontmatter.title}
                slug={post.fields.slug}
                excerpt={post.frontmatter.meta_description}
              />
              <hr />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

ArticlePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default ArticlePage

export const pageQuery = graphql`
  query ArticleByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
            slug
          }
      frontmatter {
        date(formatString: "DD MMMM YYYY", locale: "pl")
        title
        cover
        meta_description
        album
      }
    }
  }
`
