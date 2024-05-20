import Link from "next/link";

export default function Projects() {
  return (
    // <section id="projects" className="h-screen">
    //   <h2>Projects</h2>
    //   <div></div>
    // </section>

    <section id="projects" className="text-gray-600 body-font">
      <div className="container lg:w-4/5 px-5 py-6 mx-auto">
        <div className="flex flex-col text-center w-full mb-8">
          <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">
            Projects
          </h2>
        </div>
        <div className="flex flex-wrap -m-4 mb-8">
          <div className="p-4">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <a
                className="flex-shrink-0 w-48 h-48 sm:mb-0 mb-4"
                href="https://github.com/hwan2272/hwan2272/assets/65170244/046b1bf2-4f34-4c6f-be26-58dbb0408a35"
                target="_blank"
              >
                <img
                  alt="projects"
                  className="rounded-lg w-full h-full object-cover object-center"
                  src="https://github.com/hwan2272/hwan2272/assets/65170244/046b1bf2-4f34-4c6f-be26-58dbb0408a35"
                />
              </a>
              <div className="flex-grow sm:pl-8">
                <h3 className="title-font font-medium text-lg text-gray-900">
                  Devvreco : 개인 포트폴리오 사이트 (v.2)
                </h3>
                <h4 className="text-gray-500">2024.04 ~ ING</h4>
                <h4 className="text-gray-500 mb-3">개인 프로젝트</h4>
                <ul className="pl-4 mb-4 leading-relaxed list-disc text-left">
                  <li>기여도 : 100%</li>
                  <li>Next.js + Typescript + Tailwind CSS</li>
                  <li>
                    HTML5 시맨틱 태그 (header, nav, section, footer) 사용한 문단
                    구분
                  </li>
                  <li>Next.js 사용하여 SSR 처리</li>
                  <li>Tailwind CSS 사용하여 클래스 형태의 CSS 적용</li>
                  <li>Git과 Vercel을 연동하여 배포</li>
                  <li>
                    개인 기술 블로그 작성글 -
                    <a
                      href="https://hwan2272.notion.site/62fffe933b334186bf1c2b6b90c59740"
                      className="text-indigo-800 font-bold underline"
                      target="_blank"
                    >
                      [미해결]포트폴리오 사이트 피드백 분석과 리뉴얼 개발과정
                    </a>
                  </li>
                  <li>
                    개인 기술 블로그 작성글 -
                    <a
                      href="https://hwan2272.notion.site/UI-CSS-media-856b2b4fa7314ba2abe25ad25a8fd465"
                      className="text-indigo-800 font-bold underline"
                      target="_blank"
                    >
                      [분석]반응형 UI - CSS 미디어쿼리(@media) 분기점 기준
                    </a>
                  </li>
                </ul>
                <div className="flex space-x-2 justify-center sm:justify-start">
                  <Link href="#projects">
                    <button className="text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded sm:text-lg text-sm">
                      Web Link (현재 사이트)
                    </button>
                  </Link>
                  <Link
                    href="https://github.com/hwan2272/devvreco"
                    target="_blank"
                  >
                    <button className="text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded sm:text-lg text-sm">
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
              <a
                className="flex-shrink-0 w-48 h-48 sm:mb-0 mb-4"
                href="https://github.com/hwan2272/hwan2272/assets/65170244/eb9acb67-9892-40d6-84c5-ea050e7fb034"
                target="_blank"
              >
                <img
                  alt="projects"
                  className="rounded-lg w-full h-full object-cover object-center"
                  src="https://github.com/hwan2272/hwan2272/assets/65170244/eb9acb67-9892-40d6-84c5-ea050e7fb034"
                />
              </a>
              <div className="flex-grow sm:pl-8">
                <h3 className="title-font font-medium text-lg text-gray-900">
                  HistoryBook : 개인 포트폴리오 사이트 (v.1)
                </h3>
                <h4 className="text-gray-500">2024.01 ~ 2024.04</h4>
                <h4 className="text-gray-500 mb-3">개인 프로젝트</h4>
                <ul className="pl-4 mb-4 leading-relaxed list-disc text-left">
                  <li>기여도 : 100%</li>
                  <li>React + Typescript + Vite</li>
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
                  <li>
                    개인 기술 블로그 작성글 -
                    <a
                      href="https://hwan2272.notion.site/2-cf6ab4961393407fb3701d3cf990e63c?pvs=74"
                      className="text-indigo-800 font-bold underline"
                      target="_blank"
                    >
                      [해결]포트폴리오 테마 변경하기 (부제: 컬러감 찾기, 부제2:
                      스타일 찾기)
                    </a>
                  </li>
                  <li>
                    개인 기술 블로그 작성글 -
                    <a
                      href="https://hwan2272.notion.site/React-Test-Code-fetch-65a5212d34644ee5b03d317b5041ed1d"
                      className="text-indigo-800 font-bold underline"
                      target="_blank"
                    >
                      [미해결][트러블슈팅] React - Test Code에서 fetch 사용하기
                      이슈
                    </a>
                  </li>
                </ul>
                <div className="flex space-x-2 justify-center sm:justify-start">
                  <Link href="https://hwan2272.github.io" target="_blank">
                    <button className="text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded sm:text-lg text-sm">
                      Web Link
                    </button>
                  </Link>
                  <Link
                    href="https://github.com/hwan2272/hwan2272.github.io"
                    target="_blank"
                  >
                    <button className="text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded sm:text-lg text-sm">
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
              <a
                className="flex-shrink-0 w-48 h-48 sm:mb-0 mb-4"
                href="https://github.com/hwan2272/hwan2272/assets/65170244/605cc251-5362-403c-a5a1-e918c41ea5ad"
                target="_blank"
              >
                <img
                  alt="projects"
                  className="rounded-lg w-full h-full object-cover object-center"
                  src="https://github.com/hwan2272/hwan2272/assets/65170244/605cc251-5362-403c-a5a1-e918c41ea5ad"
                />
              </a>
              <div className="flex-grow sm:pl-8">
                <h3 className="title-font font-medium text-lg text-gray-900">
                  Hdms Camel : 임상연구사업 관리 통합플랫폼 HDMS 서비스
                  Camel버전
                </h3>
                <h4 className="text-gray-500">2023.04 ~ 2024.01</h4>
                <h4 className="text-gray-500 mb-3">현업 프로젝트</h4>
                <ul className="pl-4 mb-4 leading-relaxed list-disc text-left">
                  <li>기여도 : 70%</li>
                  <li>
                    React.js 18 + Material-ui 및 React-hookform, yup validation,
                    React-query
                  </li>
                  <li>
                    임상연구 도메인의 이해와 Admin, eCrf, PRO, Imaging, Safebox,
                    Community 구현
                  </li>
                  <li>ES6, ES8 문법 (Spread 연산자, Object.entries) 사용</li>
                  <li>
                    Input, Select 등 HTML 구성 요소들에 대한 공통 컴포넌트화.
                    이들의 조합 배치로 UI 구성
                  </li>
                  <li>
                    React-query를 사용한 CRUD 적용, Zustand를 이용한 상태 관리
                  </li>
                  <li>
                    React-Hookform과 yup resolver를 활용한 입력성 화면의
                    validation 체크
                  </li>
                  <li>TinyMCE → SunEditor로 WebEditor 교체</li>
                </ul>
                <div className="flex space-x-2 justify-center sm:justify-start">
                  <Link href="https://camel.dataservice.kr" target="_blank">
                    <button className="text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded sm:text-lg text-sm">
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
              <a
                className="flex-shrink-0 w-48 h-48 sm:mb-0 mb-4"
                href="https://github.com/hwan2272/hwan2272/assets/65170244/74cff92a-8f4d-405f-8854-fbfb1026a45b"
                target="_blank"
              >
                <img
                  alt="projects"
                  className="rounded-lg w-full h-full object-cover object-center"
                  src="https://github.com/hwan2272/hwan2272/assets/65170244/74cff92a-8f4d-405f-8854-fbfb1026a45b"
                />
              </a>
              <div className="flex-grow sm:pl-8">
                <h3 className="title-font font-medium text-lg text-gray-900">
                  설힐공-서울의 힐링공원 : 공원정보 사이트
                </h3>
                <h4 className="text-gray-500">2023.01 ~ 2023.02</h4>
                <h4 className="text-gray-500 mb-3">개인 프로젝트</h4>
                <ul className="pl-4 mb-4 leading-relaxed list-disc text-left">
                  <li>기여도 : 100%</li>
                  <li>React + Redux + TypsScript + JavaScript</li>
                  <li>redux store를 활용한 상태저장 관리</li>
                  <li>list및 상세View - 서울시api 활용</li>
                  <li>상세View내 지도, 파노라마 - 네이버api 활용</li>
                  <li>상세View내 주변 음식점,카페 지도 - 카카오api 활용</li>
                </ul>
                <div className="flex space-x-2 justify-center sm:justify-start">
                  <Link href="#">
                    <button
                      className="text-white bg-gray-400 border-0 py-2 px-4 focus:outline-none rounded sm:text-lg text-sm"
                      disabled
                    >
                      Web Link (Close)
                    </button>
                  </Link>
                  <Link
                    href="https://github.com/hwan2272/react_seoulparks"
                    target="_blank"
                  >
                    <button className="text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded sm:text-lg text-sm">
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
              <a
                className="flex-shrink-0 w-48 h-48 sm:mb-0 mb-4"
                href="https://github.com/hwan2272/hwan2272/assets/65170244/4c7ce9e4-9fc8-49e3-885e-c21a18a8aacd"
                target="_blank"
              >
                <img
                  alt="projects"
                  className="rounded-lg w-full h-full object-cover object-center"
                  src="https://github.com/hwan2272/hwan2272/assets/65170244/4c7ce9e4-9fc8-49e3-885e-c21a18a8aacd"
                />
              </a>
              <div className="flex-grow sm:pl-8">
                <h3 className="title-font font-medium text-lg text-gray-900">
                  아파트청약케어 : 아파트관련 이통사 부가서비스
                </h3>
                <h4 className="text-gray-500">2020.11 ~ 2022.04</h4>
                <h4 className="text-gray-500 mb-3">현업 프로젝트</h4>
                <ul className="pl-4 mb-4 leading-relaxed list-disc text-left">
                  <li>기여도 : 70%</li>
                  <li>React.js + Kakao Map API</li>
                  <ul className="pl-4 mb-4 leading-relaxed list-disc text-left">
                    <li>
                      Kakao Map API (지도, 주변정보 등) 를 활용한 아파트 정보,
                      아파트 청약정보, 아파트 추천, 로그인, 회원가입 프론트엔드
                      (React.js) 개발
                    </li>
                    <li>
                      공공데이터 건축물대장, 실거래가 API 동작에 따른 DB 확인
                    </li>
                  </ul>
                  <li>Flutter (WebView)</li>
                  <ul className="pl-4 mb-4 leading-relaxed list-disc text-left">
                    <li>
                      Flutter 별도 APP의 WebView구현과 Flutter Native를 호출할
                      수 있는 인터페이스 정의
                    </li>
                  </ul>
                  <li>Java SpringBoot + MariaDB</li>
                  <ul className="pl-4 mb-4 leading-relaxed list-disc text-left">
                    <li>
                      Java SpringBoot (SpringBoot 4) 백엔드단 개발과 로그인 필수
                      메뉴의 접근을 제어하기 위해 JWT(Json Web Token) + Spring
                      Security 적용
                    </li>
                  </ul>
                  <li>
                    Linux CentOS의 기업 내 자체 인프라 - 온 프레미스 (On
                    Premise)
                  </li>
                  <li>
                    WEB 서버 2대, WAS 서버 2대, DB 서버 1대 형상의 L4를 통한
                    Round-robin. WEB-WAS 간 Apache ajp (mod_jk) 설정을 통한 서버
                    간 연동
                  </li>
                  <li>
                    기획, 디자인UI/UX 개발회의로 인한 서비스 개발 방향 결정 및
                    UI내 사용 그래프 모듈에 대한 결정(rMateChart 도입, 도입을
                    위한 타사 컨택)
                  </li>
                </ul>
                <div className="flex space-x-2 justify-center sm:justify-start">
                  <Link href="https://aptcare.kr" target="_blank">
                    <button className="text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded sm:text-lg text-sm">
                      Web Link
                    </button>
                  </Link>
                  <Link href="https://app.aptcare.kr" target="_blank">
                    <button className="text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded sm:text-lg text-sm">
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
              <a
                className="flex-shrink-0 w-48 h-48 sm:mb-0 mb-4"
                href="https://user-images.githubusercontent.com/65170244/222355228-eaad6405-554f-40ba-a45e-876a0f1f6c5d.png"
                target="_blank"
              >
                <img
                  alt="projects"
                  className="rounded-lg w-full h-full object-cover object-center"
                  src="https://user-images.githubusercontent.com/65170244/222355228-eaad6405-554f-40ba-a45e-876a0f1f6c5d.png"
                />
              </a>
              <div className="flex-grow sm:pl-8">
                <h3 className="title-font font-medium text-lg text-gray-900">
                  이통사 부가서비스 6종 : LOP / SPM / 주투 / 슈퍼 / 알파 / PNS
                </h3>
                <h4 className="text-gray-500">2019.09 ~ 2021.08</h4>
                <h4 className="text-gray-500 mb-3">현업 프로젝트</h4>
                <ul className="pl-4 mb-4 leading-relaxed list-disc text-left">
                  <li>Java SpringFramework (Jdk1.8) + JSP, Apache Tomcat</li>
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
                <div className="flex space-x-2 justify-center sm:justify-start">
                  <Link href="#">
                    <button
                      className="text-white bg-gray-400 border-0 py-2 px-4 focus:outline-none rounded sm:text-lg text-sm"
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
              <a
                className="flex-shrink-0 w-48 h-48 sm:mb-0 mb-4"
                href="https://user-images.githubusercontent.com/65170244/222340616-fae8665d-f989-46e1-9609-92bcb45394ba.png"
                target="_blank"
              >
                <img
                  alt="projects"
                  className="rounded-lg w-full h-full object-cover object-center"
                  src="https://user-images.githubusercontent.com/65170244/222340616-fae8665d-f989-46e1-9609-92bcb45394ba.png"
                />
              </a>
              <div className="flex-grow sm:pl-8">
                <h3 className="title-font font-medium text-lg text-gray-900">
                  정부위원회 양성평등 관리 시스템 개발 및 파견 SI / SM
                </h3>
                <h4 className="text-gray-500">2013.09 ~ 2016.12</h4>
                <h4 className="text-gray-500 mb-3">현업 프로젝트</h4>
                <ul className="pl-4 mb-4 leading-relaxed list-disc text-left">
                  <li>Java SpringFramework (eGovFramework) + JSP, Sybase</li>
                  <ul className="pl-4 mb-4 leading-relaxed list-disc text-left">
                    <li>여성가족부 발주 정부위원회 관리 시스템 개발</li>
                  </ul>
                  <li>ASP.NET, C#, Mssql</li>
                  <ul className="pl-4 mb-4 leading-relaxed list-disc text-left">
                    <li>G2R 그룹웨어 운영, 유지보수</li>
                    <li>KTDS New Neoss시스템 개발</li>
                  </ul>
                  <li>
                    Java SpringFramework (eGovFramework) + JSP, Oracle, Mysql
                  </li>
                  <ul className="pl-4 mb-4 leading-relaxed list-disc text-left">
                    <li>삼성증권 ITAM 개발</li>
                    <li>씨스퀘어 TAAP, CAAP 개발</li>
                  </ul>
                </ul>
                <div className="flex space-x-2 justify-center sm:justify-start">
                  <Link href="#">
                    <button
                      className="text-white bg-gray-400 border-0 py-2 px-4 focus:outline-none rounded sm:text-lg text-sm"
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
