---
layout: post
title: "개인 서버에 가동하는 블로그의 Github Pages 이중화 (프로젝트: 꼬와서GH-Pages에Jekyll안쓴다)"
date: 2019-07-05 17:30:00 +0900
categories: IT
---

## 계기
- 1년만에 Pages에 올린 글(정확히는 Repo에 push한 Markdown 문서)이 아무리 시간이 지나도 웹 페이지에 뜨지 않아서 탈출을 결심
  - 그냥 Branch를 잘못 설정해서 발생하는 문제였음
  - 사실 이거랑 관계없이 언젠가 블로그를 내 서버로 이전하려는 생각은 있었음

## 목표 
- Github Pages를 탈출하여 자작 서버에 블로그 열기

## 원리
- 지금까지 글을 작성해 왔던 블로그 플랫폼은 Jekyll이라는 RoR 기반의 Static 블로그 제공 소프트웨어
- Markdown으로 글을 작성 후 빌드를 돌리면, 지정한 테마에 맞춰서 Production Ready의 웹 사이트를 제공해 준다
- Github Pages는 Jekyll을 권장하므로 여지껏 Jekyll만 써 왔음
- 이를 그대로 클론해서 내 서버에 얹어 놓고, 글을 작성할 때 마다 수동으로 빌드하면 같은 결과를 보여줄 수 있을 것

## 한계
- 자작 서버는 항상 켜져있지 않다!
- 눈치채지 못한 사이 서버가 Down될 수 있음

## 해결법
- 서버의 이중화
  - 글을 작성/수정할 때마다 Github Pages에 빌드된 블로그를 업로드
  - 자작 서버가 켜져있는 동안에는 자작 서버를 활용하기
  - 자작 서버가 꺼지면 Domain Record를 GH Pages로 변경하여 끊김없이 Serving

## 필요한 것
- 자작 서버의 Health Check를 담당할 작은 서버
- Heroku Free Dyno정도면 적당할 듯

## 구성
- [Python CLI & Health Check Daemon](https://github.com/kyujin-cho/AutomatedJekyllDeploy)
  - CLI (build.py)
    - 유저가 글을 작성/수정 후에 실행해서 자동으로 빌드된 페이지를 Github에 push
    - 빌드된 페이지는 Nginx로 serve
    - `python build.py build "<Commit Message>"` 로 실행
    - Github Pages 용으로 지정된 branch가 `gh-pages` 가 아닐 경우, `-b <branch>` 옵션으로 변경 가능
    - 블로그 소스 (Jekyll로 컴파일 되기 전의 MD 파일 등...) 이 저장될 Repo의 Branch 또한 `--backup-branch <branch>` 으로 변경 가능
  - Health Checker
    - Heroku에 올라가서, 10분에 한 번씩 지정한(HEALTHCHECK_URL)에 접속이 가능한 지 확인
    - 접속이 불가능하면 블로그 접속 URL(BLOG_DOMAIN)의 CNAME Record를 fallback URL(BLOG_FALLBACK_ADDR)로 변경
    - 접속이 가능해질 시 CNAME Record를 기본 URL(BLOG_SERVER_ADDR)로 변경 
    - TG_API_KEY와 TG_USERID EnvVar가 있을 시, 서버 상태가 변경될 때 마다 TG_USERID에 알림
    - CNAME Record를 변경하는 API는 DNS Provider 별로 다르므로, 사용하는 사람에 따라 구현 방법이 달라야 함
    - 해당 Health Checker는 Cloudflare 기준으로 작성

## 앞으로 할 것? 
- 서버가 생겼으니, 댓글 모듈도 붙일 수 있다
  - 근데 부 서버로 fallback 되면 댓글을 사용할 수 없으므로...
  - 댓글 서버에 연결 가능할 때에만 댓글 창이 표시되도록 해야 할 듯.
