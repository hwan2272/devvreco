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
          <div className="sm:w-32 sm:h-24 h-20 w-20 sm:mr-10 grid items-center justify-center rounded-full flex-shrink-0">
            <img
              alt="Next.js"
              className="sm:w-28 w-24 sm:h-10 h-8"
              src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js"
            />
            <img
              alt="React.js"
              className="sm:w-28 w-24 sm:h-10 h-8"
              src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"
            />
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h3 className="text-gray-900 text-lg title-font font-medium mb-2">
              React.js
            </h3>
            <ul className="pl-4 leading-relaxed text-base list-disc">
              <li>
                React.js로 환경 설정과 프론트엔드 개발에 필요한 전반적인 활동을
                할 수 있습니다. (실제로 상용 오픈한 서비스도 많이 있습니다.)
              </li>
              <li>
                개발 도중 npm 이나 yarn에서 제공하는 React.js 관련
                라이브러리들을 사용할 수 있습니다. (react-query, react-hookform,
                yup)
              </li>
              <li>상태관리를 위한 Zustand, Redux 등을 사용할 수 있습니다.</li>
              <li>
                Next.js와 Tailwind CSS를 사용하여 현 사이트를 구성하였습니다.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h3 className="text-gray-900 text-lg title-font font-medium mb-2">
              HTML5, CSS3
            </h3>
            <ul className="pl-4 leading-relaxed text-base list-disc">
              <li>HTML과 CSS를 다루어 웹페이지 제작을 할 수 있습니다.</li>
              <li>
                Figma를 사용한 디자인과의 협의는 몇몇 기업의 기술과제를 수행하며
                적응하였습니다.
              </li>
              <li>
                Next.js와 Tailwind CSS를 사용하여 현 사이트를 구성하였습니다.
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
            <ul className="pl-4 leading-relaxed text-base list-disc">
              <li>
                Javascript에 능숙합니다. ES6 문법에 익숙합니다. (spread 연산자
                등)
              </li>
              <li>
                Typescript는 많이 사용하여 보았고, 최근 기술과제도 수행하며
                적응하였습니다.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h3 className="text-gray-900 text-lg title-font font-medium mb-2">
              Java, SpringFramework, SpringBoot, Jquery
            </h3>
            <ul className="pl-4 leading-relaxed text-base list-disc">
              <li>
                Java Spring의 MVC 구조에 능숙합니다. JSP개발 경험이 많아
                Jquery를 잘 다루었습니다.
              </li>
              <li>SpringBoot로 API 서버 정도는 작성할 수 있습니다.</li>
              <li>프론트엔드를 하며 Jquery는 지양하고 있습니다.</li>
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
            <ul className="pl-4 leading-relaxed text-base list-disc">
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
              Linux, Apache Tomcat
            </h3>
            <ul className="pl-4 leading-relaxed text-base list-disc">
              <li>Linux 환경에 익숙하여 Apache세팅 등이 가능합니다.</li>
              <li>
                SpringBoot으로 서버를 빌드하여 Apache tomcat으로 구동할 수
                있습니다.
              </li>
            </ul>
          </div>
          <div className="sm:w-32 sm:order-none order-first sm:h-24 h-20 w-20 sm:ml-10 grid items-center justify-center rounded-full flex-shrink-0">
            <img
              alt="Linux"
              className="sm:w-28 w-24 sm:h-10 h-8"
              src="https://img.shields.io/badge/linux-FCC624?style=for-the-badge&logo=linux&logoColor=black"
            />
            <img
              alt="Apache Tomcat"
              className="sm:w-28 w-24 sm:h-10 h-8"
              src="https://img.shields.io/badge/apache tomcat-F8DC75?style=for-the-badge&logo=apachetomcat&logoColor=white"
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
            <ul className="pl-4 leading-relaxed text-base list-disc">
              <li>Git, Jira를 협업 툴로 많이 사용하였습니다.</li>
              <li>Git로 소스 fetch, pull 및 branch 작업에 익숙합니다.</li>
              <li>
                최근 기술과제들을 수행하며 Pull Request 생태계에 적응하였습니다.
              </li>
              <li>Pull Request시에는 feature branch를 주로 사용합니다.</li>
            </ul>
          </div>
        </div>
        <div className="flex items-center mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h3 className="text-gray-900 text-lg title-font font-medium mb-2">
              Visual Studio Code
            </h3>
            <ul className="pl-4 leading-relaxed text-base list-disc">
              <li>VSCode를 주로 프론트엔드 개발시 사용합니다.</li>
            </ul>
          </div>
          <div className="sm:w-32 sm:order-none order-first sm:h-24 h-20 w-20 sm:ml-10 grid items-center justify-center rounded-full flex-shrink-0">
            <img
              alt="Visual Studio Code"
              className="sm:w-28 w-24 sm:h-10 h-8"
              src="https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white"
            />
          </div>
        </div>
        <div className="flex items-center mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className="sm:w-32 sm:h-24 h-20 w-20 sm:mr-10 grid items-center justify-center rounded-full flex-shrink-0">
            <img
              alt="JWT"
              className="sm:w-28 w-24 sm:h-10 h-8"
              src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white"
            />
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h3 className="text-gray-900 text-lg title-font font-medium mb-2">
              Json Web Token (JWT)
            </h3>
            <ul className="pl-4 leading-relaxed text-base list-disc">
              <li>JWT의 프로세스에 익숙합니다. (AccessToken, RefreshToken)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
