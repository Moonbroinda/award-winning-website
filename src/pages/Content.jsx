
import { useState } from "react";


const Content = () => {
  const [loading, setLoading] = useState(true);

  const handleVideoLoad = () => {
    setLoading(false);
  };

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      {loading && (
        <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      )}

      <div className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75">
        <video
          src="videos/feature-7.mp4"  // ✅ ONLY this video
          autoPlay
          loop
          muted
          className="absolute left-0 top-0 size-full object-cover object-center"
          onLoadedData={handleVideoLoad}
        />

        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
          БҮТЭЭГЧ 
        </h1>

        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-blue-100">
              КОНТЕНТ 
            </h1>

            <p className="mb-5 max-w-64 font-robert-regular text-blue-100 mt-5">
              
              Бүтээ, хөгжүүл, ухаалаг шийд <br /> Цахим ирээдүйг AI-тэй хамт нээ
            </p>

            {/* <Button
              id="watch-trailer"
              title="Дэлгэрэнгүй мэдээлэл"
              leftIcon={<TiLocationArrow />}
              containerClass="bg-yellow-300 flex-center gap-1"
            /> */}
          </div>
        </div>
      </div>

      <h1 className="special-font hero-heading absolute bottom-5 right-5 text-black">
        БҮТЭЭГЧ 
      </h1>
    </div>
  );
};

export default Content;
