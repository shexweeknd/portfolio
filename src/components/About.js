import React from 'react';
// CountUp
import CountUp from 'react-countup';
// intersection observer hook
import { useInView } from 'react-intersection-observer';
//motion
import { motion } from 'framer-motion';
//variant 
import { fadeIn } from '../variants';

const About = () => {
  const [ref, inView] = useInView(
    {
      threshold: 0.5
    }
  )
  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>

          {/* img */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'></motion.div>

          {/* text */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'>
            <h2 className='h2 text-accent'>A mon propos.</h2>
            <h3 className='h3 mb-4'>
              Je suis Technicien sortant de l'Ecole Supérieure Polytechnique
              d'Antsiranana.
            </h3>
            <p className='mb-3 mr-6'>
              J'ai intégré l'ESP Antsiranana depuis 2020. 
              Mon parcours se base sur l'Electronique Informatique et la Technologie des réseaux (EIT).
              Mon point fort réside dans l'informatique des réseaux, systèmes d'exploitation, et developpement d'applications multiplateforme.
              J'ai actuelement 22 ans et suis à la recherche d'une occasion pour investir mes talents dans le monde evolutif de l'IT.
            </p>

            {/* stats */}
            <div className='flex gap-x-6 lg:gap-x-10 mb-8'>
              {/* années */}
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={4} duration={6} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Années d' <br />
                  Experience
                </div>
              </div>
              {/* projets */}
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView ? <CountUp start={0} end={9} duration={6} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Projets <br />
                  Effectués
                </div>
              </div>

              {/* certifications */}
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView ? <CountUp start={0} end={3} duration={6} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Certifications <br />
                  de grandes entreprises
                </div>
              </div>
            </div>

            {/* m'engager */}
            <div className='flex gap-x-8 items-center'>
              <button className='btn btn-lg'>me contacter</button>
              <a href='#' className='text-gradient btn-link'>
                Télécharger mon CV
              </a>
            </div>

            
          </motion.div>
        </div>
      </div>
    </section>)
};

export default About;
