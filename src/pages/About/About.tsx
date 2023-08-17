import { Helmet } from "react-helmet-async";
import Main from "../../components/Main/Main";
import {
  AboutMe,
  AboutGrid,
  AboutPhoto,
  AboutSocials,
} from "../../components/AboutBody/AboutBody";

const About = () => {
  return (
    <Main>
      <Helmet>
        <title>jmordze - about me</title>
        <meta name="description" content="learn more about me" />
      </Helmet>
      <AboutGrid>
        <AboutPhoto />
        <AboutMe />
        <AboutSocials />
      </AboutGrid>
    </Main>
  );
};

export default About;
