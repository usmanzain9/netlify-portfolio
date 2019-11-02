import styled from "styled-components"

export const PrimaryHeading = styled.p`
  color: #5a5959;
  font-size: 40px;
`
export const SecondaryHeading = styled.p`
  color: #5a5959;
  font-size: 24px;
`
export const MainHeading = styled.p`
  font-family: "Consolas", monospace;
  font-size: 96px;
  color: mediumslateblue;
  margin-bottom: 0px;
`
export const MainPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Container = styled.div`
  font-family: "Segoe UI", serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1000px;
  max-width: 100%;
`
export const Intro = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 60px;
`
export const Project = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
`
export const Card = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 60px;
  box-shadow: 0 50px 100px rgba(50, 50, 93, 0.05),
    0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0px 10px 0px 10px;
  }
`
export const CardImg = styled.div`
  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
  overflow: hidden;
  z-index: 2;
  width: 500px;
  margin-top: 3%;
  margin-bottom: 3%;
  margin-left: -1.25rem;
  @media (max-width: 768px) {
    margin: 0px;
    width: 100%;
  }
`
export const CardData = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  padding: 0px 30px 10px;
  z-index: 1;
  width: 400px;
  @media (max-width: 768px) {
    width: 100%;
  }
`
export const SkillBox = styled.span`
  border: 2px solid mediumseagreen;
  border-radius: 0.3rem;
  padding: 2px 6px;
  text-align: center;
  color: mediumseagreen;
  &:not(:first-child) {
    margin-left: 10px;
  }
  font-size: 14px;
`
export const Link = styled.a`
  text-decoration: none;
  background: mediumslateblue;
  &:not(:first-child) {
    margin-left: 10px;
  }
  padding: 4px 10px;
  color: white;
  border-radius: 0.3rem;
  font-size: 18px;
  transition: 0.3s ease-in-out
  &:hover {
    opacity: 0.85;
  }
`
