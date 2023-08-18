import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { ThemeContext } from "../../contexts";
import { ThemeContextInterface } from "../../types";
import Main from "../../components/Main/Main";
import {
  CaseStudiesIntro,
  CaseStudy,
  CaseStudyContainer,
} from "../../components/CaseStudiesBody/CaseStudiesBody";
import snowDREAM from "../../assets/images/snowDREAM.png";
import resourceful from "../../assets/images/resourceful.svg";
import resourcefulGreen from "../../assets/images/resourcefulGreen.svg";

const CaseStudies = () => {
  const { darkTheme } = useContext(ThemeContext) as ThemeContextInterface;
  return (
    <Main>
      <Helmet>
        <title>jmordze - case studies</title>
        <meta name="description" content="Things I've made to learn and make the world a little easier to navigate." />
      </Helmet>
      <CaseStudiesIntro />
      <CaseStudyContainer>
        <CaseStudy
          image={snowDREAM}
          title="snowDREAM"
          description="A curated list of backcountry locations &amp; their conditions. Built with React, SASS, MySQL, Node/Express. Google OAuth &amp; a traditional login flow for personalized choices. I also used Tan Stack's useQuery &amp; useMutate to facilitate data caching. The backend is deployed through Heroku and a JawsDB instance for the MySQL DB. The front end is deployed through Vercel with a custom domain."
          learned="This whole project was built group up and I tried to use as few frameworks as possible so that I could see how things were working under the hood. The one exception would be useQuery - I used this for data caching and state management and helped me use far fewer instances of useState than I normally would have."
          link="https://snowdream.ca"
          linkName="https://snowdream.ca/"
        ></CaseStudy>
        <CaseStudy
          image={darkTheme ? resourcefulGreen : resourceful}
          title="Resourceful - Under Construction 🚧"
          description="A resources directory for new developers that is divided into key concepts. Built with React (Vite), SASS, MongoDB, Node/Express &amp; a custom login flow. The back-end of this application is hosted via AWS on an EC2 instance"
          learned="Resourceful is a collaborative project shared between myself and 2 other developer friends. A good chunk of my time was spent in the back-end where we created an authorization middleware that I'm quite fond of. On the front end I was able to leverage this middleware in conjunction with react-router's new loader functionality to create awesome data persistance, as well as getting rid of the troublesome UI flashes that can happen when conditionally rendering elements."
          link="https://resourceful.tips"
          linkName="https://resourceful.tips/"
        ></CaseStudy>
      </CaseStudyContainer>
    </Main>
  );
};

export default CaseStudies;
