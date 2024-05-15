export default function Contacts() {
  return (
    // <section id="contacts" className="h-screen">
    //   <h2>Contacts</h2>
    //   <div></div>
    // </section>

    <section id="contacts" className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">
            Contacts
          </h2>
        </div>
        <div className="flex flex-wrap -m-4 text-center">
          <div className="p-4 sm:w-1/3 w-1/2">
            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
              Github
            </h2>
            <p className="leading-relaxed">
              <a href="https://github.com/hwan2272" target="_blank">
                https://github.com/hwan2272
              </a>
            </p>
          </div>
          <div className="p-4 sm:w-1/3 w-1/2">
            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
              Email (main)
            </h2>
            <p className="leading-relaxed">
              <a href="mailto:hwan2272@gmail.com" target="_blank">
                hwan2272@gmail.com
              </a>
            </p>
          </div>
          <div className="p-4 sm:w-1/3 w-1/2">
            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
              Email (sub)
            </h2>
            <p className="leading-relaxed">
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
