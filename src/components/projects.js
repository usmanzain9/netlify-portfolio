import React from "react"
import {
  Project,
  Card,
  SkillBox,
  CardData,
  CardImg,
  PrimaryHeading,
  SecondaryHeading,
  Link,
} from "./styled"

function tags(data) {
  let skillset = []
  const tags = data.map(edge => edge.node.frontmatter.tags)
  tags.forEach((item, i) => {
    skillset[i] = item.split(",")
  })
  return skillset
}

export default function Projects({
  data: {
    allMarkdownRemark: { edges },
  },
}) {
  const skillset = tags(edges)
  return (
    <Project>
      <PrimaryHeading style={styles.heading}>
        Projects
        <hr style={styles.underline} />
      </PrimaryHeading>
      {edges.map((edge, i) => (
        <Card key={i}>
          <CardImg>
            <img
              style={styles.ss}
              src={edge.node.frontmatter.thumbnail}
              alt=""
            />
          </CardImg>
          <CardData>
            <SecondaryHeading>{edge.node.frontmatter.title}</SecondaryHeading>
            <p style={styles.content}>{edge.node.excerpt}</p>
            <div>
              {skillset[i].map((skill, i) => (
                <SkillBox key={i}>{skill.trim()}</SkillBox>
              ))}
            </div>
            <div style={styles.linkContainer}>
              <Link href={edge.node.frontmatter.live}>Live</Link>
              {edge.node.frontmatter.open && (
                <Link href={edge.node.frontmatter.open}>Github</Link>
              )}
            </div>
          </CardData>
        </Card>
      ))}
    </Project>
  )
}

const styles = {
  heading: {
    textAlign: "center",
  },
  ss: {
    width: "100%",
  },
  underline: {
    height: "2px",
    backgroundColor: "#5a5959",
  },
  linkContainer: {
    marginTop: "20px",
  },
  content: {
    marginTop: "0px",
  },
}
