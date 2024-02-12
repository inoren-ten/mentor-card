'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import CardFront from './CardFront';
import CardBack from './CardBack';

export default function Card({
  bgColor, name, region, imgUrl, description, profileImgUrl, courses,
}: {
  bgColor: string, name: string, region: string, imgUrl: string | null, description: string | null, profileImgUrl: string | null, courses: string[] | null,
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => setIsFlipped(!isFlipped);

  return (
    <motion.div
      className=" w-11/12 cb:w-auto h-auto cb:h-[90%] aspect-5/8 rounded-sm shadow-card overflow-hidden relative cursor-pointer "
      onClick={handleClick}
      whileHover={{ scale: 1.05, transition: { duration: 0.1 }}}
      whileTap={{ scale: 1 }}
      animate={{ rotateY: isFlipped ? 180 : 0, transition: { duration: 0.5 }}}
    >
    {isFlipped ? (
      <CardBack description={description} profileImgUrl={null} courses={null} bgColor={bgColor} name={name} />
    ) : (
      <CardFront bgColor={bgColor} name={name} imgUrl={imgUrl} region={region} />
    )}
    </motion.div>
  );
}
