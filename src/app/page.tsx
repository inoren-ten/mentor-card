'use client';

import Card from "@/components/Card";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name');
  const bgColor = searchParams.get('color');
  const region = searchParams.get('region');
  const img = searchParams.get('img');
  const description = searchParams.get('description');
  const profileImg = searchParams.get('profile_img');
  const courses = searchParams.get('courses');
  const cardData = { bgColor: 'f0864b', name: 'INOREN', imgUrl: '', region: 'kansai', description: 'ああああああああああああああああああああああ' };

  return (
    <div className=' w-full h-screen flex items-center justify-center bg-slate-400 '>
      <Card
        name={name ? name : 'MENTOR'}
        bgColor={bgColor ? bgColor : 'f0864b'}
        region={region ? region : 'kansai'}
        imgUrl={img}
        description={description}
        profileImgUrl={profileImg}
        courses={courses ? courses.split(',') : null}
      />
    </div>
  )
}
