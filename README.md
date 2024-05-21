# Devvreco - 포트폴리오 사이트 (v.2)

## 개요

- 나만의 포트폴리오 사이트 (v.2)
- Next.js + TypeScript + Tailwind CSS로 구성
- TailBlocks의 block별 UI 참조
- Storybook 적용으로 인한 컴포넌트 문서화
- Git Feature Branch Push후 Main Branch의 Github Merge를 통한 Vercel 자동 CI/CD
- https://hwan2272-devvreco.vercel.app

## 사용한 라이브러리

```
next
react
tailwindcss
react-lottie-player
storybook
```

## 라이브러리 설치

```
npm install
```

## 동작 스크립트 (npm install 후 실행)

```
npm run dev
npm run storybook (storybook 시작)
```

## 주요 폴더 및 리소스 구조 설명

```
 app
  ├──api - 외부 연동 api를 위한 세팅과 펑션 정의 (미 사용)
  │
  ├──components - 서비스 내에서 쓰이는 공통 컴포넌트
  │   └──lottieAnimatePane.tsx - 로티 애니메이션 플레이어 적용을 위한 공통 컴포넌트
  │
  ├──layout - 기본적인 레이아웃 (header, content, footer)
  │   ├──contents.tsx - 메인 컨텐츠
  │   ├──footer.tsx - 사이트 푸터 정의
  │   └──header.tsx - 사이트 헤더 정의 (탑메뉴)
  │
  └──pages - 메인 컨텐츠 내 각 섹션
      ├──abountme.tsx - 간단 자기소개 섹션
      ├──contacts.tsx - 연락처 정보 섹션 (github, gmail, naver)
      ├──projects.tsx - 수행한 프로젝트들의 정보 섹션
      └──skills.tsx - 사용하는 기술 스택 소개 섹션

 stories
  ├──backup - storybook 설치시 기본 세팅되는 button, header, page 백업
  │    └──(내용 생략)
  │
  ├──Abountme.stories.ts - 간단 자기소개 섹션 stories 문서화
  ├──Contacts.stories.ts - 연락처 정보 섹션 (github, gmail, naver) stories 문서화
  ├──Projects.stories.ts - 수행한 프로젝트들의 정보 섹션 stories 문서화
  ├──Skills.stories.ts - 사용하는 기술 스택 소개 섹션 stories 문서화
  ├──Header.stories.ts - 사이트 헤더 정의 (탑메뉴) stories 문서화
  └──Footer.stories.ts - 사이트 푸터 정의 stories 문서화

```
