import React from 'react';
// icon
import { BsArrowRight } from 'react-icons/bs';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';

// services data
const services = [
  {
    name: 'Developpement d\'applications',
    description: "Je developpe depuis 2021 des applications d'office, des applications web et des applications sous Android. Les Frameworks que j'utilise sont variés en fonction des projets à réaliser.",
    link: 'En savoir plus',
  },
  {
    name: 'Administration réseau',
    description: "J'ai administré des réseaux de locaux de moyenne et petite taille à l'Ecole Supérieure Polytechnique d'Antsiranana, j'ai également la maitrise des équipements Cisco et Huawei grâce à mes parcours de certification.",
    link: 'En savoir plus',
  },
  {
    name: 'Intégrateur d\'Intelligence Artificielle',
    description: "Grâce à mon projet de licence, j'ai eu l'occasion d'implémenter des modèles d'intelligence Artificielle dans les applications Mobiles, Web et Serveurs. J'ai également suivi plusieurs formations sur les CNNs.",
    link: 'En savoir plus',
  },
  {
    name: 'Maintenance des systèmes Linux',
    description: "Je travaille généralement depuis quelques années sur les systèmes d'exploitation Linux basés sur des dérivés de Debian tels que Ubuntu, Parrot, Deepin et Kali. Je travaille mes compétences sur l'administration des systèmes d'exploitation Linux depuis 2021.",
    link: 'En savoir plus',
  },
  {
    name: 'Hacking et Sécurité',
    description: "Je suis également un grand passionné de Hacking et Cybersécurité, je m'entraine régulièrement sur la plateforme HackTheBox depuis ma deuxième année.",
    link: 'En savoir plus',
  }
];


const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>

          {/* text & image */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>

            <h2 className='h2 text-accent mb-6'>Ce que je fais</h2>
            <h3 className='h3 max-w-[455px] mb-16'>
              Etant polyvalent, je travaille généralement sur
              les réseaux et le developpement d'application.
            </h3>
            <button className='btn btn-sm'>Voir mes projets</button>

          </motion.div>

          {/* services */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'
          >
            {/* service list */}
            <div>
              {services.map((service, index) => {
                // destructuration de service
                const { name, description, link } = service

                return (
                  <div className='border-b border-white/20 h-[146px] mb-[38px] flex'
                    key={index}>
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                      <p className='font-secondary leading-tight'>
                        {description}
                      </p>
                    </div>
                    <div className='flex flex-col flex-1 items-end'>
                      <a href={link} className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                        <BsArrowRight />
                      </a>
                      <p className='text-gradient text-sm'>
                        En savoir plus
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
};

export default Services;
