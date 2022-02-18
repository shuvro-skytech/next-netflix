import LandingBanner from "../../containers/LandingBanner";
import axios from "axios";

const Homepage = ({ data }) => {
  // console.log(data);
  return <LandingBanner />;
};

export default Homepage;

export async function getServerSideProps() {
  const data = await axios
    .get("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => {
      return response.data;
    });

  console.log("Heklk");

  return {
    props: {
      data,
    },
  };
}
