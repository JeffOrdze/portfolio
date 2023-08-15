import Main from "../../components/Main/Main";
import { AboutMe, AboutGrid, AboutPhoto, AboutSocials } from "../../components/AboutBody/AboutBody";

const About = () => {
    return (
      <Main>
        <AboutGrid>
        <AboutPhoto/>
        <AboutMe/>
        <AboutSocials/>
        </AboutGrid>
      </Main>
    );
};

export default About;