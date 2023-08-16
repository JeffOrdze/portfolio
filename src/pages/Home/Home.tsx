import LayoutHelper from "../../components/LayoutHelper/LayoutHelper";
import Introduction from "../../components/Introduction/Introduction";
import {
  HomePhotosContainer,
  HomePhoto,
} from "../../components/HomePhotos/HomePhotos";
import loki from "../../assets/images/loki.jpeg";

const Home = () => {
  const photos = [loki, loki, loki, loki, loki];
  return (
    <main>
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
