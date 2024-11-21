import { Reveal } from "./Reveal";
import { certs } from "../api/data";
const Certificates = () => {
  return (
    <section
      id="certificates"
      className="relative mt-20 px-3 xl:px-0 dark:text-slate-800"
    >
      <div className="max-w-7xl mx-auto pt-40">
        <h1 className="backtext">Certificates</h1>

        <Reveal className="grid marker: grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-40">
          {certs.map((cert) => (
            <div
              key={cert.title}
              className="ring-2 ring-offset-2 bg-sky-50 shadow-lg rounded-lg p-5 overflow-hidden shadow-sky-100 flex flex-col justify-between text-slate-800 "
            >
              <img
                src={cert.imageUrl}
                alt={cert.title}
                className=" object-contain max-h-72  m-auto pb-5 "
              />
              <div className="min-h-[12rem] flex flex-col justify-between">
                <h4 className="border-t-[1px] pt-5 text-center font-semibold text-lg ">
                  {cert.title}
                </h4>

                <div className="flex justify-center">
                  <a
                    href={cert.link}
                    target="_blank"
                    className="text-small font-semibold  text-white bg-sky-500 px-4 py-2 rounded-lg hover:ring-2 hover:bg-sky-50 hover:text-sky-500 duration-300 shadow-md hover:shadow-lg"
                  >
                    Certificate Link
                  </a>
                </div>
                <div>
                  <span className="text-xs">
                    Issued by{" "}
                    <strong className=" text-sm">{cert.issuedBy}</strong>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
};

export default Certificates;
