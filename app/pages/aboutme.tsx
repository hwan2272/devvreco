import Link from "next/link";
import LottieAnimatePane from "../components/lottieAnimatePane";
import { Suspense } from "react";

export default function AboutMe() {
  return (
    // <section id="aboutme" className="h-screen">
    //   <h2>About Me</h2>
    //   <div></div>
    // </section>

    <section className="text-gray-600 body-font">
      <div className="container lg:w-4/5 mx-auto flex px-5 pt-16 py-6 md:flex-row flex-col items-center h-screen">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left sm:mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            박정환
            <br className="lg:inline-block" />
            Software Engineer, AI Lab Leader
          </h1>
          <ul className="pl-4 mb-8 leading-relaxed list-disc text-left">
            <li>
              AI 스타트업에서 회사의 첫 제품을 구체화하였습니다. 이는 불모의 땅에서 문명을 건설한 것과 같습니다.
            </li>
            <li>
              이전에는 시니어 개발자 Role을 수행하며 개발팀 리딩과 협업 등의 성과로
              2024년말 한국 클라우드 인증제 인증을 획득하였습니다.
              <a
                href="https://github.com/user-attachments/files/18271431/CSA-23-2024-11.-.pdf"
                className="text-indigo-500 underline hover:text-indigo-600 hover:font-bold"
                target="_blank"
              >
                (CSA-23-2024-11)
              </a>
            </li>
            <li>
              개발자 커뮤니티에서 100여 분 이상의 질문자분들과 상호 소통하는 등
              생각을 나누며 트렌드를 받아들이고 보다 나은 서비스를 만들어 배포,
              제공하는데 관심이 있습니다.
            </li>
            <li>
              개인 프로젝트 및 학습 등을 하며 기술 스택의 범위와 이해를 넓히고
              있습니다.
            </li>
          </ul>
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
