import { Helmet } from "react-helmet-async";
import Main from "../../components/Main/Main";
import {
  UsesIntro,
  UsesSection,
  UsesLayout,
  UsesColumn,
  UsesListItem,
} from "../../components/UsesBody/UsesBody";

const Uses = () => {
  return (
    <Main>
      <Helmet>
        <title>jmordze - uses</title>
        <meta name="description" content="the things I use" />
      </Helmet>
      <UsesIntro />
      <UsesLayout>
        <UsesSection>
          <UsesColumn title="Workstation">
            <UsesListItem
              title="Custom Windows 11 PC - intel i7 11700, 16gb RAM, MSI 3060TI, 1TB Samsung 980 SSD"
              text="I built this tower about a year ago to facilitate all of my daily dev work as well as a capable gaming rig. I'm still a Windows fan boy, change my mind!"
            />
            <UsesListItem
              title="Gigabyte G34WQC 34'' Ultrawide Monitor"
              text="My main productivity machine, this allows me to have multiple windows open to keep me on task without alt-tabbing through my main windows."
            />
            <UsesListItem
              title="Benq XL2420 24'' Monitor"
              text="I keep this monitor in a 'portrait' mode beside my ultra wide, typically I either have Slack, Spotify, notes, etc open on this for quick references."
            />
            <UsesListItem
              title="Ducky One-2 Keyboard"
              text="I'm a web developer and it's a mechanical keyboard, what did you expect? I've had this unit for a couple of years now and it's an absolute work horse."
            />
            <UsesListItem
              title="Autonomous Ergo Chair"
              text="I spend a lot of time sitting and this chair gives me the level of customization I need to keep me from being a complete slouch."
            />
            <UsesListItem
              title="TOPSKY Dual Motor standing Desk"
              text="See slouching above...sometimes you just need to move around!"
            />
          </UsesColumn>
        </UsesSection>
        <UsesSection>
          <UsesColumn title="Development Tools">
            <UsesListItem
              title="VS Code - Dracula Theme"
              text="Powerful, modern IDE that has all the extensions and theme's you could ever want."
            />
            <UsesListItem
              title="Insomnia"
              text="I've played around with a number of API query / development softwares and Insomnia's feature set and easy to use interface is hands down my favourite."
            />
          </UsesColumn>
        </UsesSection>
        <UsesSection>
          <UsesColumn title="Design">
            <UsesListItem
              title="Excalidraw"
              text="Break the problem into smaller, manageable pieces. This is what I use Excalidraw for. How many div's do I need to make this work? Paste a screen shot into Excalidraw and start drawing them out. Definitely one of the MVP tools in my kit."
            />
            <UsesListItem
              title="Figma"
              text="The collaborative features Figma offers is a game changer. The new addition of 'dev mode' gives me the warm fuzzies that they're thinking about us."
            />
          </UsesColumn>
        </UsesSection>
        <UsesSection>
          <UsesColumn title="Other Tech">
            <UsesListItem
              title="Sonos Roam & Apple AirPods Pro"
              text="Music. It's what brings people together. It's also what keeps me going through the day. Both of these are great options depending on where I am or what I'm trying to accomplish, the AirPods noise cancelling are great for full immersion, heads down work."
            />
          </UsesColumn>
        </UsesSection>
      </UsesLayout>
    </Main>
  );
};

export default Uses;
