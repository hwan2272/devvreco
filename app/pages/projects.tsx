import Link from "next/link";

export default function Projects() {
  return (
    // <section id="projects" className="h-screen">
    //   <h2>Projects</h2>
    //   <div></div>
    // </section>

    <section id="projects" className="text-gray-600 body-font">
      <div className="container lg:w-4/5 px-5 py-6 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">
            Projects
          </h2>
        </div>
        <div className="flex flex-wrap -m-4 mb-8">
          <div className="p-4">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img
                alt="team"
                className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src="https://github.com/hwan2272/hwan2272/assets/65170244/046b1bf2-4f34-4c6f-be26-58dbb0408a35"
              />
              <div className="flex-grow sm:pl-8">
                <h2 className="title-font font-medium text-lg text-gray-900">
                  Next_Pofol : 개인 포트폴리오 사이트 (v.2)
                </h2>
                <h3 className="text-gray-500 mb-3">2024.01 ~ ING</h3>
                <ul className="pl-4 mb-4 leading-relaxed list-disc">
                  <li>기여도 : 100%</li>
                  <li>
                    HTML5 시맨틱 태그 (header, nav, section, footer) 사용한 문단
                    구분
                  </li>
                  <li>Next.js 사용하여 SSR 및 SEO처리</li>
                  <li>TailwindCSS 사용하여 클래스 형태의 CSS 적용</li>
                  <li>Git과 Vercel을 연동하여 배포</li>
                </ul>
                <div className="flex space-x-2">
                  <Link href="#projects">
                    <button className="text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                      Web Link (현재 사이트)
                    </button>
                  </Link>
                  <Link
                    href="https://github.com/hwan2272/next_pofol"
                    target="_blank"
                  >
                    <button className="text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                      Github Link
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap -m-4 mb-8">
          <div className="p-4">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img
                alt="team"
                className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src="https://github.com/hwan2272/hwan2272/assets/65170244/eb9acb67-9892-40d6-84c5-ea050e7fb034"
              />
              <div className="flex-grow sm:pl-8">
                <h2 className="title-font font-medium text-lg text-gray-900">
                  HistoryBook : 개인 포트폴리오 사이트 (v.1)
                </h2>
                <h3 className="text-gray-500 mb-3">2024.01 ~ ING</h3>
                <ul className="pl-4 mb-4 leading-relaxed list-disc">
                  <li>기여도 : 100%</li>
                  <li>
                    HTML5 시맨틱 태그 (header, nav, section, footer) 사용한 문단
                    구분
                  </li>
                  <li>
                    App.css와 Section별 css(stacks.css 등..) 사용하여 각 항목별
                    디자인
                  </li>
                  <li>Material-UI를 사용한 제목(Typography), 영역(Box) 처리</li>
                  <li>
                    React-markdown을 사용하여 내부 MD파일 내용으로 PROJECTS 단의
                    화면 구성
                  </li>
                  <li>
                    Vite build로 인한 빠른 build, Vitest 라이브러리를 사용한
                    테스트코드 작성 시도
                  </li>
                  <li>
                    Github Action 적용을 통한, 소스 push에 따른 자동 CI/CD
                  </li>
                </ul>
                <div className="flex space-x-2">
                  <Link href="https://hwan2272.github.io" target="_blank">
                    <button className="text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                      Web Link
                    </button>
                  </Link>
                  <Link
                    href="https://github.com/hwan2272/hwan2272.github.io"
                    target="_blank"
                  >
                    <button className="text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                      Github Link
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap -m-4 mb-8">
          <div className="p-4">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img
                alt="projects"
                className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src="https://github.com/hwan2272/hwan2272/assets/65170244/605cc251-5362-403c-a5a1-e918c41ea5ad"
              />
              <div className="flex-grow sm:pl-8">
                <h2 className="title-font font-medium text-lg text-gray-900">
                  Hdms Camel : 임상연구사업 관리 통합플랫폼 HDMS 서비스
                  Camel버전
                </h2>
                <h3 className="text-gray-500 mb-3">2023.04 ~ 2024.01</h3>
                <ul className="pl-4 mb-4 leading-relaxed list-disc">
                  <li>기여도 : 70%</li>
                  <li>
                    React.js 18 + Material-ui 및 React-hookform, yup validation,
                    React-query 라이브러리의 각종 케이스 경험
                  </li>
                  <li>
                    임상연구 도메인의 이해와 eCrf, PRO, Imaging, Safebox 구현
                  </li>
                  <li>TinyMCE - SunEditor로 WebEditor 교체</li>
                </ul>
                <div className="flex space-x-2">
                  <Link href="https://camel.dataservice.kr" target="_blank">
                    <button className="text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                      Web Link
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap -m-4 mb-8">
          <div className="p-4">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img
                alt="projects"
                className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src="https://github.com/hwan2272/hwan2272/assets/65170244/74cff92a-8f4d-405f-8854-fbfb1026a45b"
              />
              <div className="flex-grow sm:pl-8">
                <h2 className="title-font font-medium text-lg text-gray-900">
                  설힐공-서울의 힐링공원 : 공원정보 사이트
                </h2>
                <h3 className="text-gray-500 mb-3">2023.01 ~ 2023.02</h3>
                <ul className="pl-4 mb-4 leading-relaxed list-disc">
                  <li>기여도 : 100%</li>
                  <li>공공데이터 서울시 공원정보 API 사용 적용</li>
                  <li>Naver, Kakao 지도 API 사용 설정</li>
                  <li>
                    상세화면에서 Panorama(실사진 거리뷰) 를 적용키 위한 설정
                  </li>
                </ul>
                <div className="flex space-x-2">
                  <Link href="#">
                    <button
                      className="text-white bg-gray-400 border-0 py-2 px-4 focus:outline-none rounded text-lg"
                      disabled
                    >
                      Web Link (Close)
                    </button>
                  </Link>
                  <Link
                    href="https://github.com/hwan2272/react_seoulparks"
                    target="_blank"
                  >
                    <button className="text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                      Github Link
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap -m-4 mb-8">
          <div className="p-4">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img
                alt="projects"
                className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src="https://github.com/hwan2272/hwan2272/assets/65170244/4c7ce9e4-9fc8-49e3-885e-c21a18a8aacd"
              />
              <div className="flex-grow sm:pl-8">
                <h2 className="title-font font-medium text-lg text-gray-900">
                  아파트청약케어 : 아파트관련 이통사 부가서비스
                </h2>
                <h3 className="text-gray-500 mb-3">2020.11 ~ 2022.04</h3>
                <ul className="pl-4 mb-4 leading-relaxed list-disc">
                  <li>기여도 : 70%</li>
                  <li>Kakao 지도 API 사용 설정</li>
                  <li>
                    공공데이터 건축물대장, 실거래가 API 동작에 따른 DB 확인
                  </li>
                  <li>
                    기획, 디자인UI/UX 개발회의로 인한 서비스 개발 방향 결정 및
                    UI내 사용 그래프 모듈에 대한 결정(rMateChart 도입, 도입을
                    위한 타사 컨택)
                  </li>
                </ul>
                <div className="flex space-x-2">
                  <Link href="https://aptcare.kr" target="_blank">
                    <button className="text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                      Web Link
                    </button>
                  </Link>
                  <Link href="https://app.aptcare.kr" target="_blank">
                    <button className="text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                      Mobile Link
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap -m-4 mb-8">
          <div className="p-4">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img
                alt="projects"
                className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src="https://user-images.githubusercontent.com/65170244/222355228-eaad6405-554f-40ba-a45e-876a0f1f6c5d.png"
              />
              <div className="flex-grow sm:pl-8">
                <h2 className="title-font font-medium text-lg text-gray-900">
                  이통사 부가서비스 6종 : LOP / SPM / 주투 / 슈퍼 / 알파 / PNS
                </h2>
                <h3 className="text-gray-500 mb-3">2019.09 ~ 2021.08</h3>
                <ul className="pl-4 mb-4 leading-relaxed list-disc">
                  <li>
                    회사 주력 부가서비스 유지보수 : LOP, SPM, 주투, 슈퍼, 알파,
                    PNS{" "}
                  </li>
                  <li>
                    2021년 이전 : LOP, SPM, 주투, 슈퍼, 알파, PNS - [부]담당자
                  </li>
                  <li>
                    2021년 : 주투, 슈퍼 - [정]담당자 / LOP, SPM, 알파 -
                    [부]담당자
                  </li>
                  <li>기획문의 대응, Admin 백오피스 개선 대응, 유지보수</li>
                  <li>
                    CS문의 대응, 보안 대응, 예상 매출 산출 등 기획 외 타부서
                    협업
                  </li>
                </ul>
                <div className="flex space-x-2">
                  <Link href="#">
                    <button
                      className="text-white bg-gray-400 border-0 py-2 px-4 focus:outline-none rounded text-lg"
                      disabled
                    >
                      Web Link (각 서비스 링크는 헥토이노베이션(민앤지) 홈페이지
                      참조)
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap -m-4 mb-8">
          <div className="p-4">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img
                alt="projects"
                className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src="https://user-images.githubusercontent.com/65170244/222340616-fae8665d-f989-46e1-9609-92bcb45394ba.png"
              />
              <div className="flex-grow sm:pl-8">
                <h2 className="title-font font-medium text-lg text-gray-900">
                  각종 파견 SI/SM : G2R/KTDS/삼성증권/씨스퀘어
                </h2>
                <h3 className="text-gray-500 mb-3">2013.09 ~ 2016.12</h3>
                <ul className="pl-4 mb-4 leading-relaxed list-disc">
                  <li>G2R 그룹웨어 운영, 유지보수</li>
                  <li>KTDS New Neoss시스템 개발</li>
                  <li>삼성증권 ITAM 개발</li>
                  <li>씨스퀘어 TAAP, CAAP 개발</li>
                </ul>
                <div className="flex space-x-2">
                  <Link href="#">
                    <button
                      className="text-white bg-gray-400 border-0 py-2 px-4 focus:outline-none rounded text-lg"
                      disabled
                    >
                      Web Link (고객사 내부 서비스여서 링크 불가)
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
