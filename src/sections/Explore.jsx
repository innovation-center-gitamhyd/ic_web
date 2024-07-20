'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import { exploreWorlds } from '@/utils/constants';
import { staggerContainer } from '../utils/motion';
import { TitleText, TypingText } from '@/components/CustomTexts';
import ExploreCard from '@/components/ExploreCard';
import { styles } from '@/utils/style';

const Explore = () => {
  const [active, setActive] = useState('world-2');

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="Teams" textStyles="text-center" />
        <TitleText
          title={<>Explore The Teams <br className="md:block hidden" /> of Innovation Center</>}
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;