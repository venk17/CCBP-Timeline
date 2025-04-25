// styledComponents.js
import styled from 'styled-components/macro'

export const ProjectCardContainer = styled.div`
  width: 100%;
  margin: 12px 0;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  @media screen and (min-width: 768px) {
    padding: 24px;
    margin: 16px 0;
  }
`

export const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 300px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    max-height: 400px;
    margin-bottom: 20px;
  }
`

export const ProjectTitleAndDurationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    margin-bottom: 16px;
  }
`

export const ProjectTitle = styled.h1`
  color: #171f46;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 700;
  line-height: 1.3;
  margin: 0 0 8px 0;

  @media screen and (min-width: 768px) {
    font-size: 22px;
    margin-bottom: 0;
  }

  @media screen and (min-width: 992px) {
    font-size: 24px;
  }
`

export const DurationContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const Duration = styled.p`
  color: #171f46;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 600;
  line-height: 1.2;
  margin-left: 6px;
  margin-top: 0;
  margin-bottom: 0;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    margin-left: 8px;
  }
`

export const ProjectDescription = styled.p`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 14px;
  line-height: 1.6;
  margin: 0 0 16px 0;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    margin-bottom: 20px;
  }
`

export const VisitLink = styled.a`
  display: inline-block;
  color: #0967d2;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 600;
  line-height: 1.2;
  text-decoration: none;
  padding: 8px 16px;
  border: 2px solid #0967d2;
  border-radius: 4px;
  transition: all 0.3s ease;
  margin-top: 8px;

  &:hover {
    background-color: #0967d2;
    color: white;
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
    padding: 10px 20px;
    margin-top: 12px;
  }
`
