import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import LayoutHelper from "../../components/LayoutHelper/LayoutHelper";
import Introduction from "../../components/Introduction/Introduction";
import {
  HomePhotosContainer,
  HomePhoto,
} from "../../components/HomePhotos/HomePhotos";
import { photoArray } from "../../types";

const Home = () => {
  const photos = useLoaderData() as photoArray;
  return (
    <main>
      <Helmet>
        <title>jmordze - home</title>
        <meta
          name="description"
          content="Software engineer, skier, dog guy, coffee nut."
        />
      </Helmet>
      <LayoutHelper>
        <Introduction />
      </LayoutHelper>
      <HomePhotosContainer>
        {photos.map((photo, index) => (
          <HomePhoto
            key={index}
            image={photo}
            rotation={index % 2 === 0 ? "rotate-2" : "-rotate-2"}
          />
        ))}
      </HomePhotosContainer>
    </main>
  );
};

export default Home;
