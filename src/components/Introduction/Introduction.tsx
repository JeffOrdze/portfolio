import { Heading } from "../Heading/Heading";
import Socials from "../Socials/Socials";
import MaxWContainer from "../MaxWContainer/MaxWContainer";
import {
  CodeBlock,
  CodeIndentation,
  Type,
  Array,
  String,
} from "../CodeBlock/CodeBlock";

const Introduction = () => {
  const languages = ["TypeScript", "JavaScript"];
  const frontend = ["HTML", "CSS", "React", "SASS", "Tailwind"];
  const backend = ["NodeJS", "ExpressJS"];
  const database = ["MongoDB", "MySQL"];

  return (
    <section className="flex-auto md:w-3/4 md:mx-auto">
      <MaxWContainer>
        <Heading text="Software engineer, skier, dog guy, coffee nut." />
        <Socials />
      </MaxWContainer>
      <CodeBlock>
        <CodeIndentation>
          <Type category="nickname">
            <String text="Heffe"></String>
          </Type>
          <Type category="languages">
            <Array text={languages}></Array>
          </Type>
          <Type category="frontend">
            <Array text={frontend}></Array>
          </Type>
          <Type category="backend">
            <Array text={backend}></Array>
          </Type>
          <Type category="database">
            <Array text={database}></Array>
          </Type>
          <Type category="projects">
            <String
              text="I am currently working on my personal project snowDREAM. A one
                stop shop for all things backcountry skiing."
            ></String>
          </Type>
        </CodeIndentation>
      </CodeBlock>
    </section>
  );
};

export default Introduction;
