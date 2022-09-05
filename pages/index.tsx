import { GetStaticProps } from 'next';
// import { Container } from '@mui/material';
import NavBar from '../components/NavBar';
import axios from 'axios';
import SearchHints from '../components/SearchHints';
import Loading from '../components/Loading';

axios.defaults.baseURL = 'https://app.informer.md/api/public';

interface iHomeProps {
  companies: number;
}

const Home = ({ companies }: iHomeProps) => {
  if (!companies) {
    return <Loading />;
  }

  return (
    <div >
      <NavBar />
      <section className="flex-row flex-wrap px-4 space-y-6 sm:space-y-8 w-10/12 mx-auto md:space-y-10">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-[700]  lg:leading-[56px] tracking-wide text-justify md:text-left mt-24 ">
          We help Republic of Moldova&#39;s companies upscale their business and
          minimize potential risks.
        </h1>
        <SearchHints totalResults={companies.toLocaleString()} />
      </section>
    </div>
  );
};
export default Home;
///////////////////    HOW GET name FROM name state???     ////////////////////

export const getStaticProps: GetStaticProps = async () => {
  const data = await axios.get(`/search?page=1&per_page=5&company_name= `);
  return {
    props: {
      companies: data.data.total_results,
    },
  };
};
