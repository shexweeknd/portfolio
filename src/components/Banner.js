import React from 'react';
// link
import { Link } from 'react-scroll';
// images
import Image from '../assets/avatar.svg';
// icons
import { FaGithub, FaHackerrank, FaFacebook } from 'react-icons/fa';
// type animation
import { TypeAnimation } from 'react-type-animation';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';

const Banner = () => {
  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>

      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>

          {/* text */}
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>
              Shex <span>Weeknd</span>
            </motion.h1>
            <motion.div
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-6 text-[36px] lg:text-[50px] font-secondary 
            font-semibold leading-[1]'>
              <TypeAnimation sequence={
                [
                  "Developpement d'applications.",
                  2000,
                  "Intelligence Artificielle.",
                  2000,
                  "Technique des Réseaux.",
                  2000,
                  "Administration Linux.",
                  2000
                ]
              }
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>

            <motion.p
              variants={fadeIn('up', 0.5)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-8 max-w-lg mx-auto lg:mx-0'>
              BIENVENU sur mon Portfolio.<br/>
              Bonne visite à vous.
            </motion.p>

            <motion.div
              variants={fadeIn('up', 0.6)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <Link 
                to='contact'
                activeClass='active'
                smooth={true}
                spy={true}
                >
                <button className='btn btn-lg'>
                  Me contacter
                </button>
              </Link>
              <a href='#' className='text-gradient btn-link'>
                Télécharger mon CV
              </a>
            </motion.div>

            {/* socials */}
            <motion.div
              variants={fadeIn('up', 0.7)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex mx-auto items-center sm:justify-center text-[20px] gap-x-6 max-w-max lg:mx-0 lg:ml-5'>
              <a href='https://www.facebook.com/NRA303'>
                <FaFacebook />
              </a>
              <a href='https://www.github.com/shexweeknd'>
                <FaGithub />
              </a>
              <a href='#'>
                <FaHackerrank />
              </a>
            </motion.div>
          </div>

          {/* image */}
          <motion.div
            variants={fadeIn('down', 0.5)}
            initial='hidden'
            whileInView={'show'}
           className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
            <img src={Image} alt="" />
          </motion.div>
        </div>
      </div>
    </section >)
};

export default Banner;
