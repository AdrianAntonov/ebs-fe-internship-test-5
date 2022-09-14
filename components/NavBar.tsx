import Image from 'next/image';
import informerLogo from '../public/informerLogo.png';
import { usePopper } from 'react-popper';
import { useRef, useState, useEffect } from 'react';
import cn from 'classnames';
import { Chevron } from 'images/svgImages';

function NavBar() {
  const [openAbout, setOpenAbout] = useState(false);
  const [openSolutions, setOpenSolutions] = useState(false);
  const refBox = useRef();
  const popBox = useRef();
  const refBoxSolutions = useRef();
  const popBoxSolutions = useRef();

  useEffect(() => {
    setOpenAbout(false);
    setOpenSolutions(false);
  }, []);

  const { styles, attributes } = usePopper(refBox.current, popBox.current, {
    placement: 'bottom-start',
  });
  const { styles: stylesSolutions, attributes: attributesSolutions } =
    usePopper(refBoxSolutions.current, popBoxSolutions.current, {
      placement: 'bottom-start',
    });

  const handleClick = (e) => {
    e.preventDefault();
    if (e.target.dataset.name === 'about') {
      setOpenAbout(true);
      setOpenSolutions(false);
    } else if (e.target.dataset.name === 'solutions') {
      setOpenSolutions(true);
      setOpenAbout(false);
    }
    console.log(e.target.dataset.name === 'about');
  };

  return (
    <nav className="relative border-b-[1px] border-b-[#ecececd9] py-4 ">
      <div className="mx-8 flex items-center justify-between text-gray-700 md:text-[16px] lg:mx-8 lg:font-bold lg:tracking-wider">
        <div>
          <Image src={informerLogo} width={125} height={60} alt="logo" />
        </div>
        <div className="flex items-center justify-between">
          <div className="hidden items-center text-[16px] font-bold tracking-wider  text-gray-700 lg:flex xl:justify-between">
            <div
              ref={refBox}
              className="mr-4 cursor-pointer flex"
              onClick={handleClick}
            >
              <span data-name="about"  className="hover:text-[#047cc0]">
                All about informer
              </span>
              <Chevron />
            </div>
            <div
              onMouseLeave={() => setOpenAbout(false)}
              ref={popBox}
              style={styles.popper}
              {...attributes.popper}
              className={cn('absolute w-[256px] border bg-white', {
                hidden: !openAbout,
              })}
            >
              <a
                className="block p-2 text-[12px] hover:cursor-pointer hover:bg-[#f3fbff]"
                href="#"
              >
                What is Informer?
              </a>
              <a
                className="block p-2 text-[12px] hover:cursor-pointer hover:bg-[#f3fbff]"
                href="#"
              >
                Mission
              </a>
              <a
                className="block p-2 text-[12px] hover:cursor-pointer hover:bg-[#f3fbff]"
                href="#"
              >
                Frequent questions
              </a>
              <a
                className="block p-2 text-[12px] hover:cursor-pointer hover:bg-[#f3fbff]"
                href="#"
              >
                Contacts
              </a>
            </div>
            <div
              ref={refBoxSolutions}
              className="mr-4 cursor-pointer flex"
              onClick={handleClick}
            >
              <span data-name="solutions" className="hover:text-[#047cc0]">
                Solutions
              </span>
              <Chevron />
            </div>
            <div
              onMouseLeave={() => setOpenSolutions(false)}
              ref={popBoxSolutions}
              style={stylesSolutions.popper}
              {...attributesSolutions.popper}
              className={cn('absolute w-[256px] border bg-white', {
                hidden: !openSolutions,
              })}
            >
              <a
                className="block p-2 text-[12px] hover:cursor-pointer hover:bg-[#f3fbff]"
                href="#"
              >
                Discovery
              </a>
              <a
                className="block p-2 text-[12px] hover:cursor-pointer hover:bg-[#f3fbff]"
                href="#"
              >
                Monitoring
              </a>
              <a
                className="block p-2 text-[12px] hover:cursor-pointer hover:bg-[#f3fbff]"
                href="#"
              >
                Alerts
              </a>
              <a
                className="block p-2 text-[12px] hover:cursor-pointer hover:bg-[#f3fbff]"
                href="#"
              >
                Legal
              </a>
              <a
                className="block p-2 text-[12px] hover:cursor-pointer hover:bg-[#f3fbff]"
                href="#"
              >
                Bulletin
              </a>
            </div>
            <div>
              <a href="#" className="mr-4 hover:text-[#047cc0] flex ">
                Subscriptions
                <Chevron />
              </a>
            </div>
          </div>
          <div>
            <a href="tel:022 022 097">022 022 097</a>
          </div>
          <div className="hidden md:block">
            <button className="mx-4 h-12 w-24 rounded-lg hover:bg-[#5f5f5fd9] hover:text-white">
              Login
            </button>
            <button className="h-12 w-32 rounded-lg bg-[#047cc0] font-bold leading-normal text-white hover:bg-[#5f5f5fd9] ">
              Try
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
