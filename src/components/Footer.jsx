/* eslint-disable @next/next/no-img-element */
'use client';

import { motion } from 'framer-motion';

import { footerVariants } from '@/utils/motion';
import { styles } from '@/utils/style';
import { socials } from '@/utils/constants';

const Footer = () => {
  const handleClick = () => {
    window.location.href = 'https://forms.gle/EKt6LaZPfEyqn9W4A';
  };

  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="footer-gradient" />
      <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
        <div className="flex items-center justify-between flex-wrap gap-5">
          <h4 className="font-bold md:text-[64px] text-[44px] text-white">
            Think Outside The Box.
          </h4>
          <button
            type="button"
            onClick={handleClick}
            className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]"
          >
            <span className="font-normal text-[16px] text-white">
              Join Us
            </span>
          </button>
        </div>

        <div className="flex flex-col">
          <div className="mb-[50px] h-[2px] bg-white opacity-10" />

          <div className="flex items-center justify-between flex-wrap gap-4">
            <h4 className="font-extrabold text-[24px] text-white">
              Innovation Center
            </h4>
            <p className="font-normal text-[14px] text-white opacity-50">
              Copyright © 2024 - 2025 Innovation Center. All rights reserved.
            </p>

            <div className="flex gap-4">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.profileUrl} // Use profileUrl for the link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[24px] h-[24px] flex items-center justify-center"
                >
                  <img
                    src={social.iconUrl} // Use iconUrl for the image source
                    alt={social.name}
                    className="w-[24px] h-[24px] object-contain"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;