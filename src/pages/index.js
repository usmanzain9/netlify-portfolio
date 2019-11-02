import React, { Component } from "react"
import Introduction from "../components/introduction"
import Projects from "../components/projects"
import { Container, MainPageContainer } from "../components/styled"
import { graphql } from "gatsby"

export default function Index({ data }) {
  return (
    <MainPageContainer>
      <Container>
        <Introduction />
        <Projects data={data} />
      </Container>
    </MainPageContainer>
  )
}

export const query = graphql`
  query MyQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            tags
            thumbnail
            live
            open
          }
          excerpt
        }
      }
    }
  }
`
