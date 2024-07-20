/* eslint-disable @next/next/no-img-element */
'use client';

import { motion } from 'framer-motion';
import {styles} from '@/utils/style';
import { navVariants } from '@/utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div
      className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
    >
      <img
        src="./gitam_logo.png"
        alt="GITAM logo"
        className="w-[210px] h-[180px] object-contain"
      />
      <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
        Innovation Center
      </h2>
      <img
        src="/ic_logo.png"
        alt="IC logo"
        className="w-[200px] h-[150px] object-contain"
      />
    </div>
  </motion.nav>
);

export default Navbar;