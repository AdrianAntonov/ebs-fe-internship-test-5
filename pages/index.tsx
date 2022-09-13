import { GetStaticProps } from 'next';
// import { Container } from '@mui/material';
import NavBar from '../components/NavBar';
// import axios from 'axios';
import { axios } from '../libs/axios';
import SearchHints from '../components/SearchHints';
import Loading from '../components/Loading';

// axios.defaults.baseURL = 'https://app.informer.md/api/public';

interface iHomeProps {
  companies: number;
}

const Home = ({ companies }: iHomeProps) => {
  if (!companies) {
    return <Loading />;
  }

  return (
    <div>
      <NavBar />
      <section className="mx-auto w-10/12 flex-row flex-wrap space-y-6 px-4 sm:space-y-8 md:space-y-10">
        <h1 className="mt-24 text-justify text-2xl font-[700]  tracking-wide md:text-left md:text-3xl lg:text-4xl lg:leading-[56px] ">
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
