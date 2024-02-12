'use client';

import Image from 'next/image';
import litLogo from '@/public/mentor-logo-kansai.png';
import bgImage from '@/public/lit-card-bg.png';

export default function CardFront({
  bgColor, name, imgUrl, region,
}: {
  bgColor: string, name: string, imgUrl: string | null, region: string,
}) {
  return (
    <div className=' w-full h-full relative ' style={{ backgroundColor: `#${bgColor}` }}>
      <Image src={bgImage} alt='bg' width={500} height={800} className=' w-full h-full object-cover ' />
      <Image src={litLogo} alt='logo' width={300} height={300} className=' w-[55%] h-auto absolute top-0 left-2 ' />
      <div className=' absolute left-0 bottom-2 [write-mode:vertical-rl] text-name font-extrabold opacity-40 '>
        <p className='name-text'>{name}</p>
      </div>
      {imgUrl && (
        <img src={imgUrl} alt={name} className=' w-3/4 h-2/3 object-cover absolute bottom-0 right-0 z-10 ' />
      )}
    </div>
  );
}
