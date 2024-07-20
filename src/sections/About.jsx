/* eslint-disable react/no-unescaped-entities */
'use client';

import { motion } from 'framer-motion';

import { fadeIn, staggerContainer } from '@/utils/motion';
import { TypingText } from '@/components/CustomTexts';
import { styles } from '@/utils/style';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="Innovation Center" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Innovation Center</span> is a dynamic and forward-thinking student tech club that fosters creativity, collaboration, and technological advancement among students.{' '}
        <span className="font-extrabold text-white">
        It's a hub where bright minds converge to explore and innovate.
        </span>{' '}
        {' '}
        It provides a nurturing environment where creativity meets technology, and students are inspired to push the boundaries of what is possible.{' '}
        
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;