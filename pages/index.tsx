import { GetStaticProps } from 'next';
import { Container } from '@mui/material';
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
    <section className="flex-row flex-wrap pt-8 pl-4 space-y-6 sm:space-y-10 sm:w-10/12 sm:mx-auto">
      <h1 className="sm:text-2xl lg:text-5xl font-bold tracking-wide ">
        We help Republic of Moldova&#39;s companies upscale their business and
        minimize potential risks.
      </h1>
      <SearchHints totalResults={companies.toLocaleString()} />
    </section>
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
