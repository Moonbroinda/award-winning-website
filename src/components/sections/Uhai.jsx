import { RevealOnScroll } from "../RevealOnScroll";

export const Uhai = () => {
  const frontendSkills = ["FrontEnd", "BackEnd", "JavaScript", "TailwindCSS", "MongoDB", "React", "Nodejs", "Express", "Nextjs", "TypeScript", "HTML", "CSS", "Git", "Figma",];
  const backendSkills = ["Видеографи", "Синематографи", "Видео Засвар", "Маркетинг", "Контент бүтээлэгч", "Сошиал медиа", "График дизайн"];

  return (
    <section id="about" className="flex min-h-screen items-center justify-center py-20">
      <RevealOnScroll>
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-center text-3xl font-bold text-transparent">
            БИДНИЙ ТУХАЙ 
          </h2>

          <div className="rounded-xl border border-white/10 p-8 transition-all hover:-translate-y-1">
            <p className="mb-6 text-gray-300">
              
“Хөгжлийн цахим галт жигүүр” бол дижитал эрин үеийн боловсролыг шинэ түвшинд хүргэх зорилготой, 
ирээдүйг чиглэсэн сургалтын төв юм. Бид вэб хөгжүүлэлт, контент бүтээл, дрон технологи, 
хиймэл оюун ухааны чиглэлээр онолын мэдлэгийг практик ур чадвартай хослуулсан сургалтуудыг санал болгодог.
<strong>Бидний онцлог:</strong><br />
Вэб хөгжүүлэлт: HTML, CSS, JavaScript, Frameworks зэрэг орчин үеийн технологиор вэб бүтээх чадварыг эзэмшүүлнэ.
Контент бүтээгч: Визуал дизайн, бичвэрийн ур чадвар, сошиал медиа стратеги зэрэг контент бүтээх бүх шатны мэдлэгийг олгоно.
Дрон технологи: Дрон жолоодлого, зураглал, 3D моделчлол, хяналтын системийн сургалтууд.
Хиймэл оюун ухаан: AI, машин сургалт, өгөгдлийн шинжилгээ зэрэг ирээдүйн технологийн суурь мэдлэгийг эзэмшүүлнэ.
 Хэнд зориулагдсан бэ? Технологид дуртай, бүтээлч сэтгэлгээтэй, өөрийгөө хөгжүүлэх хэн бүхэнд нээлттэй.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">ВЕБ ХӨГЖҮҮЛЭГЧ</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">КОНТЕНТ БҮТЭЭГЧ</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-2xl font-bold mb-4">🏫 Манай мэргэшил</h3>
              <ul className="list-disc list-inside text-gray-500 space-y-4 mb-5 ">
                <li className="mb-10"><strong className="text-2xl text-white">Контент бүтээгчийн ур чадварууд</strong> <br/>
                Бид танд мэргэжлийн түвшний видео зураг авалт (видеографи, кино зураг авалт) 
                болон контент бүтээх урлагийг заана. Мөн маркетингийн үндсэн ойлголтууд, 
                видео засвар, зураг засварын Adobe Photoshop, Premiere Pro 
                зэрэг салбарын тэргүүлэх хэрэгслүүдийг ашиглахыг зааж сургана.</li>
                <li><strong className="text-2xl text-white">Вэб хөгжүүлэлт</strong> <br/>
                Динамик вэбсайт, өргөтгөх боломжтой вэб програм бүтээхээс эхлээд 
                орчин үеийн frontend болон backend технологиор хэрхэн санаагаа 
                хэрэгжүүлэхийг заана.
                </li>
                 <li><strong className="text-2xl text-white">Хиймэл оюун ухаан ба шинэ технологи</strong> <br/>
                Бид хиймэл оюун ухааны (AI) практик хэрэглээг танилцуулж, 
                бүтээлч болон техникийн ажилд хэрхэн AI ашиглахыг заадаг.
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">💼 Бидний заадаг сургалт</h3>
              <div className="space-y-4 text-gray-500">
                <div>
                  <h4 className="font-semibold text-white text-2xl mb-5">Бүтээлч ур чадварууд</h4>
                  <p> - Видеографи ба кино зураг авалт.</p>
                  <p> - Видео засвар ба пост-продакшн</p>
                  <p> - Зураг засвар (Photoshop, Lightroom)</p>
                  <p> - Контент стратеги ба дижитал маркетингийн үндэс</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white text-2xl mb-5">Техникийн ур чадварууд</h4>
                  <p> - Вэб хөгжүүлэлт (Frontend ба Backend)</p>
                  <p> - JavaScript программчлал</p>
                  <p> - Орчин үеийн фрэймворк ашиглах (React, Vue, Node.js)</p>
                  <p> - AI хэрэгслүүд ба хэрэглээ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
