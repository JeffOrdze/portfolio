import Main from "../../components/Main/Main";
import {
  CaseStudiesIntro,
  CaseStudy,
  CaseStudyContainer,
} from "../../components/CaseStudiesBody/CaseStudiesBody";
import snowDREAM from "../../assets/images/snowDREAM.png";
import resourceful from "../../assets/images/resourceful.svg";

const CaseStudies = () => {
  return (
    <Main>
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
          image={resourceful}
          title="Resourceful"
          description="A curated list of backcountry locations &amp; their conditions. Built with React, SASS, MySQL, Node/Express. Google OAuth &amp; a traditional login flow for personalized choices. I also used Tan Stack's useQuery &amp; useMutate to facilitate data caching. The backend is deployed through Heroku and a JawsDB instance for the MySQL DB. The front end is deployed through Vercel with a custom domain."
          learned="This whole project was built group up and I tried to use as few frameworks as possible so that I could see how things were working under the hood. The one exception would be useQuery - I used this for data caching and state management and helped me use far fewer instances of useState than I normally would have."
          link="https://resourceful.tips"
          linkName="https://resourceful.tips/"
        ></CaseStudy>
      </CaseStudyContainer>
    </Main>
  );
};

export default CaseStudies;
