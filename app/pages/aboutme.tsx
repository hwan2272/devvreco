import Link from "next/link";
import LottieAnimatePane from "../components/lottieAnimatePane";

export default function AboutMe() {
  return (
    // <section id="aboutme" className="h-screen">
    //   <h2>About Me</h2>
    //   <div></div>
    // </section>

    <section className="text-gray-600 body-font h-screen">
      <div className="container lg:w-4/5 mx-auto flex px-5 pt-24 py-6 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            박정환
            <br className="hidden lg:inline-block" />
            Frontend Developer
          </h1>
          {/* <p className="mb-8 leading-relaxed"> */}
          <ul className="pl-4 mb-8 leading-relaxed list-disc">
            <li>
              다양한 도메인 지식을 가지고 있어 어떤 개발 환경에서든 적응을 잘할
              수 있습니다.
            </li>
            <li>
              개발자 커뮤니티에서 80여 분 이상의 질문자분들과 상호
              소통하였습니다.
            </li>
            <li>
              사용자의 피드백이 빠른 프론트엔드 영역에서 함께 일하기 좋은 사람이
              되고 싶습니다.
            </li>
          </ul>
          {/* </p> */}
          <div className="flex justify-center">
            <Link href="#projects" className="mr-5 hover:text-gray-900">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Projects 보기
              </button>
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <LottieAnimatePane />
        </div>
      </div>
    </section>
  );
}
