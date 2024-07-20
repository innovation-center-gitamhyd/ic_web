/* eslint-disable @next/next/no-img-element */
'use client';

import { motion } from 'framer-motion';
import { styles } from '@/utils/style';
import { navVariants } from '@/utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-4 md:py-8 relative`}
  >
    <div className="absolute w-full md:w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8`}>
      <img
        src="./gitam_logo.png"
        alt="GITAM logo"
        className="w-[120px] h-[80px] md:w-[210px] md:h-[180px] object-contain"
      />
      <h2 className="font-extrabold text-[18px] leading-[22px] md:text-[24px] md:leading-[30.24px] text-white text-center">
        INNOVATION CENTER
      </h2>
      <img
        src="/ic_logo.png"
        alt="IC logo"
        className="w-[120px] h-[80px] md:w-[200px] md:h-[150px] object-contain"
      />
    </div>
  </motion.nav>
);

export default Navbar;
