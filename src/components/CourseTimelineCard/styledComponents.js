// styledComponents.js
import styled from 'styled-components/macro'

export const CourseTitleAndDurationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    margin-bottom: 12px;
  }
`

export const CourseTitle = styled.h1`
  color: #171f46;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 700;
  line-height: 1.3;
  margin: 0;
  margin-bottom: 4px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    margin-bottom: 0;
  }
`

export const DurationContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`

export const Duration = styled.p`
  color: #171f46;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 600;
  line-height: 1.2;
  margin-left: 4px;
  margin-top: 0;
  margin-bottom: 0;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`

export const CourseDescription = styled.p`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 12px;
  line-height: 1.5;
  margin-top: 0;
  margin-bottom: 12px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    margin-bottom: 16px;
  }
`

export const CourseTagsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style-type: none;
`

export const CourseTagItem = styled.li`
  margin-right: 8px;
  margin-bottom: 8px;
`

export const CourseTag = styled.span`
  display: inline-block;
  color: #25262c;
  background-color: #e2e8f0;
  font-family: 'Roboto';
  font-size: 10px;
  font-weight: 500;
  border-radius: 4px;
  line-height: 1.6;
  padding: 4px 8px;

  @media screen and (min-width: 768px) {
    font-size: 12px;
    font-weight: 600;
    padding: 6px 10px;
  }
`
