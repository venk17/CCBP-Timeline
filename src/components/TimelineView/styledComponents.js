// styledComponents.js
import styled from 'styled-components/macro'

export const TimelineContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  padding: 40px 20px;
  background-color: #f5f5f5;

  @media screen and (min-width: 768px) {
    padding: 60px 40px;
    align-items: center;
  }
`

export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  min-height: 100%;

  @media screen and (min-width: 768px) {
    justify-content: center;
  }

  .react-chrono-timeline {
    width: 100% !important;
  }

  .react-chrono-vertical {
    padding: 0 20px;

    @media screen and (min-width: 768px) {
      padding: 0 40px;
    }
  }
`

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  text-align: center;
  width: 100%;

  @media screen and (min-width: 768px) {
    margin-bottom: 50px;
  }
`

export const Heading = styled.h1`
  color: #171f46;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.5;
  margin: 0;
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    font-size: 22px;
    line-height: 1.8;
  }

  @media screen and (min-width: 992px) {
    font-size: 24px;
  }
`

export const CCBPHeading = styled.span`
  color: #2b237c;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 28px;
  margin: 0;
  display: inline-block;
  background: linear-gradient(90deg, #2b237c, #4a3fbf);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (min-width: 768px) {
    font-size: 36px;
  }

  @media screen and (min-width: 992px) {
    font-size: 42px;
  }
`
