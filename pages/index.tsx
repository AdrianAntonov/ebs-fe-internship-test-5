import { GetStaticProps } from 'next';
import { Container } from '@mui/material';
import axios from 'axios';
import SearchHints from '../components/SearchHints';

axios.defaults.baseURL = 'https://app.informer.md/api/public';

interface iHomeProps {
  companies: number;
}

const Home = ({ companies }: iHomeProps) => {
  return (
    <Container>
      <h1>
        We help Republic of Moldova&#39;s companies upscale their business and
        minimize potential risks.
      </h1>
      <div style={{ display: 'flex' }}>
        <SearchHints totalResults={companies.toLocaleString()} />
      </div>
    </Container>
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
