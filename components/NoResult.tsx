import Link from 'next/link';

function NoResult() {
  return (
    <div>
      <div className="w-60  text-center text-2xl font-semibold leading-relaxed tracking-wider text-[#096dd9] ">
        <Link href={`/`}>
          <a>Home</a>
        </Link>
      </div>
      <div className="flex w-screen justify-center pt-[10%] text-3xl  font-black text-red-600">
        <div>
          <h2>Sorry, no results</h2>
        </div>
      </div>
    </div>
  );
}

export default NoResult;
