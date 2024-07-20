/* eslint-disable react/no-unescaped-entities */
'use client';

import { motion } from 'framer-motion';

import { staggerContainer } from '@/utils/motion';
import { styles } from '@/utils/style';
import { TitleText, TypingText } from '@/components/CustomTexts';
import InsightCard from '@/components/InsightCard';
import { insights } from '@/utils/constants';

const Insights = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="" textStyles="text-center" />
      <TitleText title={<>FAQ's</>} textStyles="text-center" />
      <div className="mt-[50px] flex flex-col gap-[30px]">
        {insights.map((item, index) => (
          <InsightCard key={`insight-${index}`} {...item} index={index + 1} />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Insights;