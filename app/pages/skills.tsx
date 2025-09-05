import Image from "next/image";

export default function Skills() {
  return (
    // <section id="skills" className="h-screen">
    //   <h2>Skills</h2>
    //   <div></div>
    // </section>

    <section id="skills" className="text-gray-600 body-font">
      <div className="container lg:w-4/5 px-5 py-6 mx-auto">
        <div className="text-center w-full mb-8">
          <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">
            Skills
          </h2>
        </div>
        <div className="flex items-center mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h3 className="text-gray-900 text-lg title-font font-medium mb-2">
              Python, FastAPI, Uvicorn
            </h3>
            <ul className="pl-4 leading-relaxed text-base list-disc text-left">
              <li>연구소에서 AI 개발 언어 통일성의 일환으로 Python FastAPI으로 API 모듈을 개발, Uvicorn으로 서빙했습니다.</li>
              <li>
                Pure한 VM에서 시작하여 API-RAG-vLLM 파이프라인 체계를 갖추기까지 솔루션 제품의 틀을 구축했습니다.
              </li>
            </ul>
          </div>
          <div className="sm:w-32 sm:order-none order-first sm:h-24 h-20 w-20 sm:ml-10 grid items-center justify-center rounded-full flex-shrink-0">
            <img
              alt="Python"
              className="sm:w-28 w-24 sm:h-10 h-8"
              src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54"
            />
            <img
              alt="FastApi"
              className="sm:w-28 w-24 sm:h-10 h-8"
              src="https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi"
            />
          </div>
        </div>
        <div className="flex items-center mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className="sm:w-32 sm:h-24 h-20 w-20 sm:mr-10 grid items-center justify-center rounded-full flex-shrink-0">
            <img
              alt="React.js"
              className="sm:w-28 w-24 sm:h-10 h-8"
              src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"
            />
            <img
              alt="Storybook"
              className="sm:w-28 w-24 sm:h-10 h-8"
              src="https://img.shields.io/badge/storybook-ff4785?style=for-the-badge&logo=storybook&logoColor=white"
            />
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h3 className="text-gray-900 text-lg title-font font-medium mb-2">
              React.js, Storybook
            </h3>
            <ul className="pl-4 leading-relaxed text-base list-disc text-left">
              <li>React.js로 프론트엔드 개발을 할 수 있습니다.</li>
              <li>
                개발 도중 npm 이나 yarn에서 제공하는 React.js 관련
                라이브러리들을 사용할 수 있습니다. (React-Query, Recoil,
                React-hookform, Zod)
              </li>
              <li>상태관리를 위한 Recoil 등을 사용할 수 있습니다.</li>
              <li>
                Storybook을 사용하여 컴포넌트에 대한 공유나 문서화를 할 수
                있습니다.
              </li>
              <li>
                <a
                  href="http://storybook.ateverse.com/?path=/story/e-guard-layout-summary-card--case-good"
                  className="text-indigo-500 underline hover:text-indigo-600 hover:font-bold"
                  target="_blank"
                >
                  밀폐공간 근로자 보호 Saas 플랫폼 E-Guard Storybook
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h3 className="text-gray-900 text-lg title-font font-medium mb-2">
              HTML5, CSS3, Tailwind CSS
            </h3>
            <ul className="pl-4 leading-relaxed text-base list-disc text-left">
              <li>HTML과 CSS를 이해하고 Tailwind CSS를 사용합니다.</li>
              <li>
                현 사이트는 Next.js와 Tailwind CSS를 사용하여 구성하였습니다.
              </li>
              <li>
                Tailwind CSS의 Admin Template인 TailAdmin을 Custom하여 E-Verse
                2.0과 같은 서비스들을 개발,오픈했습니다.
              </li>
              <li>
                <a
                  href="http://ateverse.com/auth/login"
                  className="text-indigo-500 underline hover:text-indigo-600 hover:font-bold"
                  target="_blank"
                >
                  에너지 절감 관리 Saas 플랫폼 E-Verse 2.0
                </a>
              </li>
            </ul>
          </div>
          <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 grid items-center justify-center rounded-full flex-shrink-0">
            <img
              alt="HTML5"
              className="sm:w-28 w-24 sm:h-8 h-6"
              src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
            />
            <img
              alt="CSS3"
              className="sm:w-28 w-24 sm:h-8 h-6"
              src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
            />
            <img
              alt="Tailwind CSS"
              className="sm:w-28 w-24 sm:h-8 h-6"
              src="https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white"
            />
          </div>
        </div>
        <div className="flex items-center mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className="sm:w-32 sm:h-24 h-20 w-20 sm:mr-10 grid items-center justify-center rounded-full flex-shrink-0">
            <img
              alt="JavaScript"
              className="sm:w-28 w-24 sm:h-10 h-8"
              src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"
            />
            <img
              alt="TypeScript"
              className="sm:w-28 w-24 sm:h-10 h-8"
              src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"
            />
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h3 className="text-gray-900 text-lg title-font font-medium mb-2">
              JavaScript, TypeScript
            </h3>
            <ul className="pl-4 leading-relaxed text-base list-disc text-left">
              <li>
                Javascript를 사용하며 ES6~ 문법에 익숙합니다. (spread 연산자,
                Object.entries 등)
              </li>
              <li>
                Typescript로 객체의 Entity를 정의하고 Response나 Payload를
                구성합니다.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h3 className="text-gray-900 text-lg title-font font-medium mb-2">
              Java, SpringFramework, SpringBoot, Jquery
            </h3>
            <ul className="pl-4 leading-relaxed text-base list-disc text-left">
              <li>
                Java Spring의 MVC 구조에 능숙합니다. JSP개발 경험이 많아
                Jquery를 잘 다루었습니다.
              </li>
              <li>SpringBoot로 API 서버 개발을 했습니다.</li>
              <li>프론트엔드를 하며 Jquery는 지양하고 있습니다.</li>
              <li>
                DB 설계 개선과 서비스 웹 보안 적용(CORS 처리, XSS 방지 처리,
                개인정보 마스킹 등 보안 정책 고안과 백엔드 협업)을 주도했습니다.
              </li>
            </ul>
          </div>
          <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 grid items-center justify-center rounded-full flex-shrink-0">
            <img
              alt="Java Spring"
              className="sm:w-28 w-24 sm:h-8 h-6"
              src="https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=Spring&logoColor=white"
            />
            <img
              alt="Spring Boot"
              className="sm:w-28 w-24 sm:h-8 h-6"
              src="https://img.shields.io/badge/Spring_Boot-F2F4F9?style=for-the-badge&logo=spring-boot"
            />
            <img
              alt="Jquery"
              className="sm:w-28 w-24 sm:h-8 h-6"
              src="https://img.shields.io/badge/jquery-0769AD?style=for-the-badge&logo=jquery&logoColor=white"
            />
          </div>
        </div>
        <div className="flex items-center mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 grid items-center justify-center rounded-full flex-shrink-0">
            <img
              alt="Mysql"
              className="sm:w-28 w-24 sm:h-8 h-6"
              src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white"
            />
            <img
              alt="MariaDB"
              className="sm:w-28 w-24 sm:h-8 h-6"
              src="https://img.shields.io/badge/mariaDB-003545?style=for-the-badge&logo=mariaDB&logoColor=white"
            />
            <img
              alt="Oracle"
              className="sm:w-28 w-24 sm:h-8 h-6"
              src="https://img.shields.io/badge/oracle-F80000?style=for-the-badge&logo=oracle&logoColor=white"
            />
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h3 className="text-gray-900 text-lg title-font font-medium mb-2">
              Mysql, MariaDB, Oracle
            </h3>
            <ul className="pl-4 leading-relaxed text-base list-disc text-left">
              <li>MySql, MariaDB, Oracle 모두 다룰 수 있습니다.</li>
              <li>
                SpringBoot로 간단한 서버를 만들시, MariaDB를 주로 사용합니다.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h3 className="text-gray-900 text-lg title-font font-medium mb-2">
              Linux, Apache Tomcat, Nginx
            </h3>
            <ul className="pl-4 leading-relaxed text-base list-disc text-left">
              <li>Linux 환경에 익숙하여 Apache세팅 등이 가능합니다.</li>
              <li>
                SpringBoot으로 서버를 빌드하여 Apache Tomcat으로 구동할 수
                있습니다.
              </li>
              <li>최근에는 Linux 환경의 배포를 위해 Nginx를 사용하였습니다.</li>
            </ul>
          </div>
          <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 grid items-center justify-center rounded-full flex-shrink-0">
            <img
              alt="Linux"
              className="sm:w-28 w-24 sm:h-8 h-6"
              src="https://img.shields.io/badge/linux-FCC624?style=for-the-badge&logo=linux&logoColor=black"
            />
            <img
              alt="Apache Tomcat"
              className="sm:w-28 w-24 sm:h-8 h-6"
              src="https://img.shields.io/badge/apache tomcat-F8DC75?style=for-the-badge&logo=apachetomcat&logoColor=white"
            />
            <img
              alt="Nginx"
              className="sm:w-28 w-24 sm:h-8 h-6"
              src="https://img.shields.io/badge/Nginx-009639?logo=nginx&logoColor=white&style=for-the-badge"
            />
          </div>
        </div>
        <div className="flex items-center mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className="sm:w-32 sm:h-24 h-20 w-20 sm:mr-10 grid items-center justify-center rounded-full flex-shrink-0">
            <img
              alt="Git"
              className="sm:w-28 w-24 sm:h-10 h-8"
              src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white"
            />
            <img
              alt="Jira"
              className="sm:w-28 w-24 sm:h-10 h-8"
              src="https://img.shields.io/badge/Jira-0052CC?style=for-the-badge&logo=Jira&logoColor=white"
            />
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h3 className="text-gray-900 text-lg title-font font-medium mb-2">
              Git, Jira
            </h3>
            <ul className="pl-4 leading-relaxed text-base list-disc text-left">
              <li>Git, Jira를 협업 툴로 많이 사용하였습니다.</li>
              <li>Git로 소스 fetch, pull 및 branch 작업에 익숙합니다.</li>
              <li>
                feature branch를 분기하여 개인 branch 작업을 하고, merge하는
                방식을 주로 사용합니다.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
