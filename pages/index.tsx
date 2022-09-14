import { GetStaticProps } from 'next';
import { axios } from '../libs/axios';
import dynamic from 'next/dynamic';
const NavBar = dynamic(() => import('components/NavBar'));
const SearchHints = dynamic(() => import('components/SearchHints'));
const Loading = dynamic(() => import('components/Loading'));

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

export const getStaticProps: GetStaticProps = async () => {
  const data = await axios.get(`/search?page=1&per_page=5&company_name= `);
  return {
    props: {
      companies: data.data.total_results,
    },
  };
};
