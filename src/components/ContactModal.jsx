import {
  FaFacebookMessenger,
  FaViber,
  FaTelegram,
  FaWhatsappSquare,
} from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const ContactModal = ({ openmodal }) => {
  const messenger = [
    {
      app: "Facebook",
      link: "https://m.me/shempot1601",
      icon: (
        <FaFacebookMessenger className="w-10 h-10 text-sky-400 mx-auto mb-2" />
      ),
    },
    {
      app: "WhatsApp",
      link: "https://wa.me/+639653458348",
      icon: (
        <FaWhatsappSquare className="w-10 h-10 text-green-500 mx-auto mb-2" />
      ),
    },
    {
      app: "Telegram",
      link: "https://t.me/+5tfgZm6rdoowYzFl",
      icon: <FaTelegram className="w-10 h-10 text-sky-500 mx-auto mb-2" />,
    },
  ];
  return (
    <>
      <div
        className={
          openmodal
            ? "w-full h-full duration-300 bg-black/90  fixed top-0 left-0 z-[600] opacity-100 translate-x-0 flex justify-center items-center text-black backdrop:blur-sm"
            : "w-full h-full duration-300 bg-black/90  fixed top-0 translate-x-full left-0 z-[600] opacity-0 flex justify-center items-center text-black backdrop:blur-sm"
        }
        onClick={openmodal}
      >
        <div className="max-w-5xl bg-white flex flex-col p-10 mx-5 rounded-md   border-sky-500 border-2  shadow shadow-sky-500 relative text">
          <AiOutlineClose
            onClick={openmodal}
            size={35}
            className="absolute top-5 right-5 cursor-pointer hover:text-sky-500 duration-300 hover:rotate-90"
          />
          <h2 className="font-semibold text-2xl text-center">
            Let's <span className="text-sky-500">Do this</span>
          </h2>
          <div>
            <div className="mx-auto w-32 h-[.5px] bg-sky-500 my-5 rounded-md"></div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-5  justify-center my-5">
              {messenger.map((m) => (
                <div key={m.app}>
                  <a
                    href={m.link}
                    target="_blank"
                  >
                    {m.icon}
                    <h3 className="text-center">{m.app}</h3>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactModal;
