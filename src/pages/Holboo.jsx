import { useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";
import Footer from "../components/Footer";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        "service_7uun256",
        "template_s8stvm6",
        {
          from_name: formData.name,
          to_name: "Moonbro",
          from_email: formData.email,
          to_email: "msurvey394@gmail.com",
          message: formData.message,
        },
        "ImceCiG4GhXp7IEfb"
      );
      setIsLoading(false);
      setFormData({ name: "", email: "", message: "" });
      showAlertMessage("success", "Таны мэдээлэл амжилттай илгээгдлээ!");
    } catch  {
      setIsLoading(false);
      showAlertMessage("danger", "Дахин оролдож үзнэ үү!");
    }
  };

  return (
  <>
    <section className="relative flex items-center justify-center py-12 bg-gray-800 text-white">
      <Particles className="absolute inset-0 -z-50" quantity={100} ease={80} color={"#ffffff"} refresh />
      {showAlert && <Alert type={alertType} text={alertMessage} />}
      <div className="flex flex-col items-center justify-center max-w-lg p-8 mx-auto border border-white/10 rounded-2xl bg-primary">
        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <h2 className="text-3xl font-bold">Бидэнтэй холбоо барих</h2>
          <p className="text-lg text-neutral-400">
            Та ажлын цагаар е-майл хаягаар бидэнтэй холбоо барих, <br />
            Эсвэл та 94992204, 80110727 зэрэг утсаар мэдээллийн ажилтантай шууд холбогдож болно.
          </p>
        </div>
        <form className="w-full space-y-5" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Нэр
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="w-full p-3 border border-neutral-600 bg-transparent text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Таны нэр"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Е-майл хаяг
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full p-3 border border-neutral-600 bg-transparent text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="е-майл нэр@gmail.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Мессеж
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full p-3 border border-neutral-600 bg-transparent text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Таны мессеж"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 px-6 text-lg font-semibold rounded-md bg-gradient-to-r from-indigo-500 to-indigo-700 text-white hover:bg-indigo-600 transition duration-300"
          >
            {!isLoading ? "Илгээх" : "Илгээж байна..."}
          </button>
        </form>
      </div>
    </section>

    {/* ✅ Footer comes right after the contact section */}
    <Footer />
  </>
);

};

export default Contact;
