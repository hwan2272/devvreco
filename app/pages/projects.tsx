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
                className="flex-shrink-0 w-48 h-48 sm:mb-0 mb-4 transform transition duration-500 hover:scale-110"
                href="https://github.com/user-attachments/assets/7013f290-430d-4e2f-b1b7-3111321b2900"
                target="_blank"
              >
                <img
                  alt="projects"
                  className="rounded-lg w-full h-full object-cover object-center"
                  src="https://github.com/user-attachments/assets/7013f290-430d-4e2f-b1b7-3111321b2900"
                />
              </a>
              <div className="flex-grow sm:pl-8">
                <h3 className="title-font font-medium text-lg text-gray-900">
                  HFLOW MGP : 민원질의 대응 RAG + LLM Ops 서비스 (1차버전)
                </h3>
                <h4 className="text-gray-500">2025.06 ~ 2025.08</h4>
                <h4 className="text-gray-500 mb-3">현업 프로젝트</h4>
                <ul className="pl-4 mb-4 leading-relaxed list-disc text-left">
                  <li>
                    Python 3.11 + Uvicorn + FastAPI + Html5
                  </li>
                  <li>
                    vSphere VM 기반의 Ubuntu 서버 및 VPN망 접속 환경
                  </li>
                  <li>
                    실물 GPU와 이를 vLLM으로 서빙할 수 있는 하드웨어 환경
                  </li>
                  <li>
                    프로젝트 총괄
                  </li>
                  <ul className="pl-4 leading-relaxed text-left" style={{"listStyle":"circle"}}>
                    <li>
                      연구소장으로서 연구소 업무 병행하며 소규모 팀원 리딩
                    </li>
                    <li>
                      전체 서비스 아키텍쳐 고안과 구축
                    </li>
                    <li>
                      Demo UI 개발을 통한 외부 시연 제공
                    </li>
                  </ul>
                  <li>
                    Demo UI 개발
                  </li>
                  <ul className="pl-4 leading-relaxed text-left" style={{"listStyle":"circle"}}>
                    <li>
                        인터넷망 기반 HTML5와 Valnila Javascript를 사용한 질의와 결과 확인용 UI 구축
                    </li>
                  </ul>
                  <li>
                    게이트웨이 PC 환경 구축
                  </li>
                  <ul className="pl-4 leading-relaxed text-left" style={{"listStyle":"circle"}}>
                    <li>
                        인터넷망으로 들어온 질의를 VPN망의 인프라로 전달하기 위한 Nginx 리버스 프록시 고안과 구축
                    </li>
                  </ul>
                  <li>
                    WAF (Web Application Firewall) 구축
                  </li>
                  <ul className="pl-4 leading-relaxed text-left" style={{"listStyle":"circle"}}>
                    <li>
                      Nginx + ModSecurity 사용. ModSecurity Role 구성을 통한 부적절 및 트래픽 공격자 IP에 대한 차단 정책 적용
                    </li>
                    <li>1시간마다 개발팀에 Noti하는 프로세스 고안과 구축</li>
                  </ul>
                  <li>
                    모듈 공통
                  </li>
                  <ul className="pl-4 leading-relaxed text-left" style={{"listStyle":"circle"}}>
                    <li>
                      Github Actions의 Docker build 처리와 Docker Compose 적용을 통한 쉬운 구동 프로세스와 CI/CD 구축
                    </li>
                    <li>
                      공통 Health Checker 적용. 이상 모듈 개발팀 Noti
                    </li>
                  </ul>
                  <li>
                    Hflow API 구축
                  </li>
                  <ul className="pl-4 leading-relaxed text-left" style={{"listStyle":"circle"}}>
                    <li>
                      사용자 질의를 받아들여 RAG와 vLLM으로 전달하기 위한 Endpoint 구성
                    </li>
                    <li>
                      보안을 위한 질의 전처리 (XSS 방지, Length Check, Format Check)
                    </li>
                  </ul>
                  <li>
                    Hflow RAG 등에 대한 보완
                  </li>
                  <ul className="pl-4 leading-relaxed text-left" style={{"listStyle":"circle"}}>
                    <li>
                      질의 응답 파이프라인 내 Exception 시 공통 Exception Handler 적용
                    </li>
                    <li>
                      존재하지 않는 Endpoint에 대한 접근 404 차단 적용으로 외부 공격과 트래픽 과부하 방지
                    </li>
                  </ul>
                  <li>
                    vLLM 모델 선정과 전체 로그 모니터링 구축 
                  </li>
                  <ul className="pl-4 leading-relaxed text-left" style={{"listStyle":"circle"}}>
                    <li>
                      국내 대응을 위한 국산 모델 선정과 성능 확인
                    </li>
                    <li>
                      Loki + Promtail 적용을 통한 각 모듈간 로그 수집 중앙화와 모니터링 환경 구축
                    </li>
                  </ul>
                  <li>
                    기타
                  </li>
                  <ul className="pl-4 leading-relaxed text-left" style={{"listStyle":"circle"}}>
                    <li>
                      구축 인프라를 VM 1대로 서빙할 수 있는 Kubernetes 배포 환경 연구
                    </li>
                    <li>
                      Hflow 관련 각종 서브도메인 및 SSL 인증서 관리
                    </li>
                    <li>
                      팀내 Git Commit 컨벤션 정립 - 유다시티 스타일 참조
                    </li>
                  </ul>
                </ul>
                <div className="flex space-x-2 justify-center sm:justify-start">
                  <Link href="https://www.hecaton.co.kr/hflow">
                    <button className="text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded sm:text-lg text-sm">
                      Web Demo Link
                    </button>
                  </Link>
                  <Link
                    href="https://github.com/orgs/hecaton-ai/repositories"
                    target="_blank"
                  >
                    <button className="text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded sm:text-lg text-sm">
                      Github Link (Private)
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
                className="flex-shrink-0 w-48 h-48 sm:mb-0 mb-4 transform transition duration-500 hover:scale-110"
                href="https://github.com/user-attachments/assets/a854c310-cadb-48a9-ab37-66e3db7a5e12"
                target="_blank"
              >
                <img
                  alt="projects"
                  className="rounded-lg w-full h-full object-cover object-center"
                  src="https://github.com/user-attachments/assets/a854c310-cadb-48a9-ab37-66e3db7a5e12"
                />
              </a>
              <div className="flex-grow sm:pl-8">
                <h3 className="title-font font-medium text-lg text-gray-900">
                  E-Guard : 밀폐공간 근로자보호 Saas 플랫폼
                </h3>
                <h4 className="text-gray-500">2024.10 ~ 2025.01</h4>
                <h4 className="text-gray-500 mb-3">현업 프로젝트</h4>
                <ul className="pl-4 mb-4 leading-relaxed list-disc text-left">
                  <li>
                    React 18 + Vite + Typescript + Tailwind CSS(TailAdmin)
                  </li>
                  <li>E-Verse 2.0과 환경 동일</li>
                  <li>
                    Oracle Cloud Infrastructure (OCI) 인스턴스를 활용한 서비스
                    배포와 관리
                  </li>
                  <li>
                    사용 편의성을 위한 ChipButton식 근로자 할당 UI, Thumbnail
                    List식 구역 설정 UI등의 고안, 개발
                  </li>
                  <li>
                    OCI 인스턴스를 활용한 파일 서버 고안, 구축, Nginx 보안처리
                    (일종의 간이 CDN)
                  </li>
                  <li>
                    ListContentsWrapper 및 Hook Form 에 사용되는 Type Entity
                    개선을 위한 Zod 도입
                  </li>
                  <li>서비스 UI 컴포넌트 공유용 Storybook 개발</li>
                </ul>
                <div className="flex space-x-2 justify-center sm:justify-start">
                  <Link href="http://eguard.ateverse.com/auth/login">
                    <button className="text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded sm:text-lg text-sm">
                      Web Link
                    </button>
                  </Link>
                  <Link href="http://storybook.ateverse.com/?path=/story/e-guard-layout-summary-card--case-good">
                    <button className="text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded sm:text-lg text-sm">
                      Storybook Link
                    </button>
                  </Link>
                  <Link
                    href="https://github.com/atemos01/e-guard-frontend.git"
                    target="_blank"
                  >
                    <button className="text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded sm:text-lg text-sm">
                      Github Link (Private)
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
                className="flex-shrink-0 w-48 h-48 sm:mb-0 mb-4 transform transition duration-500 hover:scale-110"
                href="https://github.com/user-attachments/assets/58533dce-fa95-4263-bdfa-9a0a27306fbe"
                target="_blank"
              >
                <img
                  alt="projects"
                  className="rounded-lg w-full h-full object-cover object-center"
                  src="https://github.com/user-attachments/assets/58533dce-fa95-4263-bdfa-9a0a27306fbe"
                />
              </a>
              <div className="flex-grow sm:pl-8">
                <h3 className="title-font font-medium text-lg text-gray-900">
                  E-Verse 2.0 : 에너지 절감 관리 Saas 플랫폼
                </h3>
                <h4 className="text-gray-500">2024.08 ~ 2024.11</h4>
                <h4 className="text-gray-500 mb-3">현업 프로젝트</h4>
                <ul className="pl-4 mb-4 leading-relaxed list-disc text-left">
                  <li>
                    React 18 + Vite + Typescript + Tailwind CSS(TailAdmin)
                  </li>
                  <li>
                    Tailwind CSS의 Admin Template인 TailAdmin Base로 프론트엔드
                    개발
                  </li>
                  <li>
                    자주 사용하는 UI 공통 컴포넌트화 (Cards, Buttons, Charts,
                    Customs 등) : E-Guard Storybook 참조
                  </li>
                  <li>Tailwind CSS 사용하여 클래스 형태의 CSS 적용</li>
                  <li>
                    I18Next를 활용한 4개국어 다국어 처리, 4개국 각각의
                    timezone적용
                  </li>
                  <li>Card-ContentsWrapper 구조의 UI 설계 고안, 도입</li>
                  <li>
                    Oracle Cloud Infrastructure (OCI) 인스턴스를 활용한 서비스
                    배포와 관리
                  </li>
                  <li>
                    <a
                      href="https://github.com/user-attachments/files/18271431/CSA-23-2024-11.-.pdf"
                      className="text-indigo-500 underline hover:text-indigo-600 hover:font-bold"
                      target="_blank"
                    >
                      클라우드 인증제 (KACI) 획득 (CSA-23-2024-11)
                    </a>
                  </li>
                  <li>
                    개인 기술 블로그 작성글 -
                    <a
                      href="https://hwan2272.notion.site/Card-Children-32c0a5a4cc6a457c8a0f65d83a2f6b31"
                      className="text-indigo-500 underline hover:text-indigo-600 hover:font-bold"
                      target="_blank"
                    >
                      [해결]프론트엔드 Card 컴포넌트 Children 적용 구조 리뉴얼
                    </a>
                  </li>
                  <li>
                    개인 기술 블로그 작성글 -
                    <a
                      href="https://hwan2272.notion.site/JWT-Revoke-Renew-b5272d0aa1c94e689337a09809dc72b9?pvs=74"
                      className="text-indigo-500 underline hover:text-indigo-600 hover:font-bold"
                      target="_blank"
                    >
                      [회고]JWT 갱신 프로세스 : Revoke? Renew?
                    </a>
                  </li>
                  <li>
                    개인 기술 블로그 작성글 -
                    <a
                      href="https://hwan2272.notion.site/OCI-K8S-OKE-111138d113dd80b8b653ef7861aeda77"
                      className="text-indigo-500 underline hover:text-indigo-600 hover:font-bold"
                      target="_blank"
                    >
                      [해결]OCI K8S : OKE 분산 배포 적용기
                    </a>
                  </li>
                </ul>
                <div className="flex space-x-2 justify-center sm:justify-start">
                  <Link href="http://ateverse.com/auth/login">
                    <button className="text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded sm:text-lg text-sm">
                      Web Link
                    </button>
                  </Link>
                  <Link
                    href="https://github.com/atemos01/e-verse-frontend-2.0.git"
                    target="_blank"
                  >
                    <button className="text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded sm:text-lg text-sm">
                      Github Link (Private)
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
                className="flex-shrink-0 w-48 h-48 sm:mb-0 mb-4 transform transition duration-500 hover:scale-110"
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
                  <li>Next.js + Typescript + Tailwind CSS</li>
                  <li>
                    HTML5 시맨틱 태그 (header, nav, section, footer) 사용한 문단
                    구분
                  </li>
                  <li>Next.js 사용하여 SSR 처리</li>
                  <li>Tailwind CSS 사용하여 클래스 형태의 CSS 적용</li>
                  <li>Storybook 적용으로 인한 컴포넌트 문서화</li>
                  <li>Git과 Vercel을 연동하여 배포</li>
                  <li>
                    개인 기술 블로그 작성글 -
                    <a
                      href="https://hwan2272.notion.site/62fffe933b334186bf1c2b6b90c59740"
                      className="text-indigo-500 underline hover:text-indigo-600 hover:font-bold"
                      target="_blank"
                    >
                      [미해결]포트폴리오 사이트 피드백 분석과 리뉴얼 개발과정
                    </a>
                  </li>
                  <li>
                    개인 기술 블로그 작성글 -
                    <a
                      href="https://hwan2272.notion.site/UI-CSS-media-856b2b4fa7314ba2abe25ad25a8fd465"
                      className="text-indigo-500 underline hover:text-indigo-600 hover:font-bold"
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
                className="flex-shrink-0 w-48 h-48 sm:mb-0 mb-4 transform transition duration-500 hover:scale-110"
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
                      className="text-indigo-500 underline hover:text-indigo-600 hover:font-bold"
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
                      className="text-indigo-500 underline hover:text-indigo-600 hover:font-bold"
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
                className="flex-shrink-0 w-48 h-48 sm:mb-0 mb-4 transform transition duration-500 hover:scale-110"
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
                  Hdms Camel : 임상연구사업 관리 Saas 플랫폼 HDMS 서비스
                  Camel버전
                </h3>
                <h4 className="text-gray-500">2023.04 ~ 2024.01</h4>
                <h4 className="text-gray-500 mb-3">현업 프로젝트</h4>
                <ul className="pl-4 mb-4 leading-relaxed list-disc text-left">
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
                className="flex-shrink-0 w-48 h-48 sm:mb-0 mb-4 transform transition duration-500 hover:scale-110"
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
                className="flex-shrink-0 w-48 h-48 sm:mb-0 mb-4 transform transition duration-500 hover:scale-110"
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
                    <a
                      href="https://drive.google.com/file/d/1BYVvk36FxVmqEbxtycwh6hyhtsFsB_T5/view?usp=drive_link"
                      className="text-indigo-500 underline hover:text-indigo-600 hover:font-bold"
                      target="_blank"
                    >
                      WEB 서버 2대, WAS 서버 2대, DB 서버 1대 형상의 L4를 통한
                      Round-robin. WEB-WAS 간 Apache ajp (mod_jk) 설정을 통한
                      서버 간 연동
                    </a>
                  </li>
                  <li>
                    타 직군 (기획, 디자인 UI/UX) 담당자 협업 - 개발 방향 논의
                    결정 및 서비스 내 사용 그래프 rMateChart 라이브러리 선정
                  </li>
                  <li>
                    타 직군 (CS, 보안, 마케팅, QA) 담당자 협업 - CS처리, ISMS
                    관련 요구사항 등
                  </li>
                  <li>타 회사 (부동산 114, 리아모어소프트) 컨택</li>
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
              <img
                alt="projects"
                className="flex-shrink-0 w-48 h-48 rounded-lg object-cover object-center sm:mb-0 mb-4"
                src="https://user-images.githubusercontent.com/65170244/222355228-eaad6405-554f-40ba-a45e-876a0f1f6c5d.png"
              />
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
              <img
                alt="projects"
                className="flex-shrink-0 w-48 h-48 rounded-lg object-cover object-center sm:mb-0 mb-4"
                src="https://user-images.githubusercontent.com/65170244/222340616-fae8665d-f989-46e1-9609-92bcb45394ba.png"
              />
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
