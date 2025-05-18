import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";

export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({ src, title, description, isComingSoon }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>

        {isComingSoon && (
          <div
            ref={hoverButtonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white/20"
          >
            {/* Radial gradient hover effect */}
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
              style={{
                opacity: hoverOpacity,
                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
              }}
            />
            <TiLocationArrow className="relative z-20" />
            <p className="relative z-20">Дэлгэрэнгүй</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Features = () => (
  <section className="bg-black pb-52">
    <div className="container mx-auto px-3 md:px-10">
      <div className="px-5 py-32 flex flex-col-reverse md:flex-row items-center md:items-start gap-10">
  {/* Left: Text */}
  <div className="w-full md:w-1/2">
  <p className="font-circular-web text-4xl text-blue-50 mb-5">
    Танхимын сургалт
  </p>
  <div className="font-circular-web text-lg text-blue-50 opacity-50 space-y-4">

    <div>
      <p className="font-semibold text-blue-50">🔰 Нэгдүгээр шат – Вэб хөгжүүлэлтийн үндэс:</p>
      <p>
        Энэ шатанд та HTML, CSS, TailwindCSS, Bootstrap зэрэг технологийн тусламжтайгаар вэб хуудсыг хэрхэн бүтээхийг
        суралцана. Энгийн бүтэцтэй вэбсайт хийх, layout зохиох, өнгө загвар тааруулах зэрэг UI талын мэдлэгийг бодит жишээн дээр суурилж эзэмшинэ.
      </p>
    </div>

    <div>
      <p className="font-semibold text-blue-50">⚙️ Хоёрдугаар шат – Интерактив хөгжүүлэлт:</p>
      <p>
        JavaScript болон DOM (Document Object Model)-ийг ашиглан вэб хуудсыг хэрхэн динамик, хэрэглэгчтэй харилцдаг болгох талаар суралцана.
        Бодит амьдрал дээр хэрэглэгдэх жижиг төслүүд дээр ажиллаж, form validation, event handling зэрэг чухал ойлголтыг эзэмшинэ.
      </p>
    </div>

    <div>
      <p className="font-semibold text-blue-50">🚀 Гуравдугаар шат – Орчин үеийн вэб технологи:</p>
      <p>
        ReactJS ашиглан нэг хуудсан дээр олон component-оос бүрдэх дэвшилтэт вэб аппликейшн хөгжүүлэхийг сурна.
        API холболт хийх, хэрэглэгчийн мэдээлэл авах, бүртгэх зэрэг функцуудыг хэрэгжүүлэх бөгөөд эцэст нь өөрийн финал төсөл дээр ажиллана.
      </p>
    </div>

  </div>
</div>


  {/* Right: Image */}
  <div className="w-full md:w-1/2">
    <img
      src="/img/balance.jpg" // replace with your image path
      alt="Balance picture"
      className="rounded-lg shadow-lg w-full h-auto object-cover"
    />
  </div>
</div>


      <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
  <BentoCard
    src="videos/feature-1.mp4"
    title={
      <div className="relative z-10">
        <span className="bg-black/80 p-2 rounded-md text-white block mb-2">
          fro<b>n</b>t end
        </span>
      </div>
    }
    description={
      <div className="relative z-10">
        <span className="bg-black/80 p-2 rounded-md text-white block">
          Шаталсан сургалт тус бүрээр 1 сарын хугацаатайгаар нийт 3 сар үргэлжилнэ.
        </span>
      </div>
    }
    isComingSoon
  />
</BentoTilt>


      <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
        <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
  <BentoCard
    src="videos/feature-2.mp4"
    title={
      <div className="relative z-10">
        <span className="bg-black/80 p-2 rounded-md text-white block mb-2">
          Java<b>S</b>cript, DOM
        </span>
      </div>
    }
    description={
      <div className="relative z-10">
        <span className="bg-black/80 p-2 rounded-md text-white block">
          JavaScript-ийн үндсэн ойлголтууд
          <br/>DOM (Document Object Model)-той ажиллах
          <br/>Суралцагчдад вэб хуудсыг илүү амьд, хэрэглэгчидтэй харилцдаг болгох чадвар эзэмшинэ.
        </span>
      </div>
    }
    isComingSoon
  />
</BentoTilt>

        <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
          <BentoCard
            src="videos/feature-3.mp4"
            title={
              <>
                React<b>J</b>S, API
              </>
            }
            description="ReactJS-ийн үндсэн ойлголтууд,
            API-тай холбогдож мэдээлэл авах, илгээх, 
            өөрийн вэб апп хөгжүүлж, API ашиглан бодит өгөгдөлтэй ажиллах."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
          <BentoCard
            src="videos/feature-4.mp4"
            title={
              <>
                Des<b>i</b>gn
              </>
            }
            description="Вэбсайтыг бүх төрлийн төхөөрөмжид тохирох байдлаар зохион бүтээх аргачлал."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_2">
  <div className="relative flex size-full flex-col justify-between 
                  rounded-xl p-4 md:p-5 shadow-md overflow-hidden 
                  bg-gradient-to-br from-violet-400 via-indigo-400 to-blue-400 
                  transition-all duration-500 hover:from-pink-400 hover:via-yellow-300 hover:to-red-400">
                  
    {/* Animated glowing stars (optional) */}
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,white_0%,transparent_30%)] opacity-0 group-hover:opacity-10 transition-opacity duration-500" />

    <h1 className="special-font text-black leading-tight text-[clamp(1.25rem,2.5vw,2.5rem)] px-2 py-1 md:px-3 md:py-2 break-words whitespace-normal">
      <span className="inline-block">
        <b>X</b>иймэл оюун ухаан<br className="hidden sm:block" /> 
        хосолсон сургалт
      </span>
    </h1>

    <TiLocationArrow className="m-3 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 self-end text-black" />
  </div>
</BentoTilt>


        <BentoTilt className="bento-tilt_2">
          <video
            src="videos/feature-5.mp4"
            loop
            muted
            autoPlay
            className="size-full object-cover object-center"
          />
        </BentoTilt>
      </div>
    </div>
  </section>
);

export default Features;
