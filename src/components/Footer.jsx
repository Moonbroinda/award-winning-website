import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaChevronDown,
} from "react-icons/fa";

const faqs = [
  {
    question: "Хөгжлийн цахим галт жигүүрийн сургалтын онцлог нь юу вэ?",
    answer:
      "Бид сургалтаа хоёр үндсэн чиглэлд төвлөрүүлсэн: вэб хөгжүүлэлт болон контент бүтээгч. Хиймэл оюун ухааны эрин үед эдгээр ур чадваруудын хэрэглээ хурдацтай өөрчлөгдөж байгаа тул бид суралцагчдад бодит төслүүд дээр тулгуурласан, чанартай хөтөлбөрөөр заахыг зорьдог.",
  },
  {
    question: "Суралцагч нар өөрсдөө компьютертойгоо байх хэрэгтэй юу?",
    answer:
      "Үгүй, бид орчин үеийн шаардлагыг хангасан компьютерууд, анги танхимуудыг бүрэн бэлдсэн. Манай ангиуд 15-аас дээш сурагч багтаах багтаамжтай бөгөөд өөрийн компьютертэй суралцагчдад зориулсан нэмэлт сургалтын өрөө ч бий.",
  },
  {
    question:
      "Программын хэлний анхан шатны мэдлэгтэй эсвэл компьютерийн тухай сайн мэдлэгтэй хэрэглэж сурсан байх  хэрэгтэй юу?",
    answer:
      "Үгүй, Бид сургалтын хөтөлбөрөө анхан шатнаас нь суралцагчийн түвшинд тохируулан заадаг. Компьютерийн гүнзгий мэдлэг шаардлагагүй ба хэрэглээний болон мэргэжлийн англи хэлийг мөн хамтад нь заадаг нь бидний давуу тал юм.",
  },
  {
    question:
      "Танайх хөдөө орон нутагт сургалтаа орох эсвэл онлайн анги байдаг уу ?",
    answer:
      "Тийм, бид хөдөө орон нутагт зориулсан тусгай хөтөлбөр боловсруулсан. Хангалттай сурагч бүртгэгдсэн тохиолдолд тухайн нутагт хичээл орж, онлайнаар материал үзэх боломж ч бас байдаг.",
  },
  {
    question:
      "Танай сургалтын төлбөр бусад ижил төстэй сургалтын газруудаас яагаад ийм хямд бөгөөд хөдөө орон нутагт хүртэл зориулсан сургалтын хөтөлбөртэй байдаг вэ ?",
    answer:
      "Бид ашгийн төлөө бус, залуусын мөрөөдлийг дэмжих, тэднийг хөгжүүлэх зорилготой. Тиймээс сургалтын төлбөрөө хөдөө орон нутгийн боловсролыг дэмжих чиглэлд нийцүүлэн тогтоосон. Манай хамт олон ч мөн адил энэхүү зорилгын төлөө ажилладаг.",
  },
];

const Footer = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* FAQ Section */}
      <section className="bg-white px-4 py-10">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-6 border-b pb-2 text-center text-2xl font-semibold text-[#1f2a37] uppercase">
            Асуулт & Хариулт
          </h2>
          <div className="space-y-4">
            {faqs.map((item, index) => (
              <div
                key={index}
                className="border-b pb-4 transition-all duration-300 ease-in-out"
              >
                <button
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between text-left text-base font-medium text-black hover:text-[#5542ff] focus:outline-none"
                >
                  <span>{item.question}</span>
                  <FaChevronDown
                    className={`ml-2 h-4 w-4 transform transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="mt-3 text-sm text-gray-500 leading-relaxed">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="w-screen bg-[#f9f9f9] py-8 text-black">
        <div className="container mx-auto flex flex-col items-center justify-center px-4 md:flex-row md:justify-center md:gap-12">
          {/* Contact Info */}
          <div className="flex flex-col gap-3 text-sm md:text-left">
            <div className="flex items-start gap-2">
              <FaMapMarkerAlt className="mt-1 text-[#5542ff]" />
              <span>
                Youth Street Building 5, BZD - 7 khoroo,<br />
                Ulaanbaatar 13381, Mongolia
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-[#5542ff]" />
              <span>94992204</span>
            </div>
            <div className="flex items-center gap-2">
              <FaInstagram className="text-[#5542ff]" />
              <span>Галт жигүүр</span>
            </div>
            <div className="flex items-center gap-2">
              <FaFacebookF className="text-[#5542ff]" />
              <span>Галт жигүүр</span>
            </div>
          </div>

          {/* Map Image */}
          <div className="mt-6 md:mt-0">
            <a
              href="https://www.google.com/maps/place/Zasagt+Khan+University/@47.9244522,106.9407379,18z/data=!4m14!1m7!3m6!1s0x5d9693019fae9c87:0x122cf1b902a5fe72!2sSansar+Tunnel+Sidewalk+A!8m2!3d47.9235704!4d106.9366335!16s%2Fg%2F11l2m53tvz!3m5!1s0x5d969324f51b1d85:0xed48882df4ea0e4f!8m2!3d47.9248025!4d106.9418798!16s%2Fg%2F11nnwbgjvw?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/img/footer.png"
                alt="Map to location"
                className="max-w-xs rounded-lg border border-gray-300 shadow-md"
              />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 border-t pt-4 text-center text-xs text-gray-600">
          © Хөгжлийн Цахим Галт Жигүүр 2025. All rights reserved
        </div>
      </footer>
    </>
  );
};

export default Footer;
