'use client';

export default function CardBack({
  description, profileImgUrl, courses, bgColor, name,
}: {
  description: string | null, profileImgUrl: string | null, courses: string[] | null, bgColor: string, name: string,
}) {
  return (
    <div
      className=' w-full h-full flex items-center justify-center p-3 relative '
      style={{ transform: 'scale(-1, 1)', backgroundColor: `#${bgColor}`}}
    >
      <div className=' w-full h-full flex flex-col px-4 py-6 rounded-xl bg-white '>

      </div>
    </div>
  );
}
