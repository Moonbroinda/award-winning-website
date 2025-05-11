import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} />
  </div>
);

const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen  px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox
            src="/img/contact-1.jpg"
            clipClass="contact-clip-path-1"
          />
          <ImageClipBox
            src="/img/contact-2.jpg"
            clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
          />
        </div>

        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          {/* <ImageClipBox
            src="/img/swordman-partial.webp"
            clipClass="absolute md:scale-125"
          /> */}
          <ImageClipBox
            src="/img/swordman.jpg"
            clipClass="sword-man-clip-path md:scale-125"
          />
        </div>

        <div className="flex flex-col items-center text-center w-full max-w-[90%] sm:max-w-[600px] mx-auto px-4">
  <p className="mb-10 font-general text-[10px] uppercase">
    Видеограф, График дизайн, Дижитал маркетинг
  </p>

  <AnimatedTitle
    title="Дүрслэл,<br /> Дизайн, <br /> Дижитал маркетинг"
    className="special-font w-full font-zentry font-black leading-tight text-2xl sm:text-4xl md:text-5xl lg:text-[5rem]"
  />

  <Button title="Холбоо барих" containerClass="mt-10 cursor-pointer" />
</div>

      </div>
    </div>
  );
};

export default Contact;
