import Image from "next/image";

export default function Contacts() {
  return (
    // <section id="contacts" className="h-screen">
    //   <h2>Contacts</h2>
    //   <div></div>
    // </section>

    <section id="contacts" className="text-gray-600 body-font">
      <div className="container lg:w-4/5 px-5 py-6 sm:pb-24 pb-12 mx-auto">
        <div className="flex flex-col text-center w-full mb-8">
          <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">
            Contacts
          </h2>
        </div>
        <div className="flex flex-wrap -m-4 text-center items-center">
          <div className="p-4 w-1/3">
            <a href="https://github.com/hwan2272" target="_blank">
              <Image
                src="/icons/github.svg"
                alt="Github Logo"
                className="w-full sm:h-16 h-8 transform transition duration-500 hover:scale-110"
                width={100}
                height={100}
                priority
              />
            </a>
            <p className="hidden sm:inline leading-relaxed">
              <a href="https://github.com/hwan2272" target="_blank">
                https://github.com/hwan2272
              </a>
            </p>
          </div>
          <div className="p-4 w-1/3">
            <a href="mailto:hwan2272@gmail.com" target="_blank">
              <Image
                src="/icons/gmail.svg"
                alt="Gmail Logo"
                className="w-full sm:h-16 h-8 transform transition duration-500 hover:scale-110"
                width={100}
                height={100}
                priority
              />
            </a>
            <p className="hidden sm:inline leading-relaxed">
              <a href="mailto:hwan2272@gmail.com" target="_blank">
                hwan2272@gmail.com
              </a>
            </p>
          </div>
          <div className="p-4 w-1/3">
            <a href="mailto:hwan2230@naver.com" target="_blank">
              <Image
                src="/icons/naver.svg"
                alt="Naver Logo"
                className="w-full sm:h-16 h-8 transform transition duration-500 hover:scale-110"
                width={100}
                height={100}
                priority
              />
            </a>
            <p className="hidden sm:inline leading-relaxed">
              <a href="mailto:hwan2230@naver.com" target="_blank">
                hwan2230@naver.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
