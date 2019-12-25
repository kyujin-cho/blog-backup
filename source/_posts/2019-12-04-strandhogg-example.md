---
layout: post
title: "Android Strandhogg 취약점 구동 예시"
date: 2019-12-04 01:00:00 +0900
categories: IT
---

1. [StrandHogg](https://promon.co/security-news/strandhogg/)란?   
- 안드로이드 멀티태스킹의 취약점을 이용해서, 특정 `Intent Flag`를 가지고 실행된 액티비티가 공격하려는 앱의 액티비티 위에 그려질 수 있는 취약점
2. 그래서, 어떻게 만드는데?
- 아무 액티비티나 하나 생성
- Manifest에 `android:allowTaskReparenting="true"` 와 `android:taskAffinity="##공격하려는 앱의 패키지명##"` 추가 
- 해당 액티비티를 `FLAG_ACTIVITY_NEW_TASK` 플래그를 붙여 연 후 태스크에 올려놓은 채 홈으로 나옴(백버튼으로 종료하면 안됨)
- 런쳐에서 공격하려는 앱 실행
- 끝.
3. 작동 예시   
{% video 480 640 %}https://s3.bluehouse.dev/public-bucket/Screen_Recording_20191204-005147.mp4{% endvideo %}
- 취약점 액티비티가 태스크에 없을때의 경우. 아이콘 클릭 시 정상적인 작동(원래 앱으로 이동)을 한다.    
{% video 480 640 %}https://s3.bluehouse.dev/public-bucket/Screen_Recording_20191204-005251.mp4{% endvideo %}
- 취약점 액티비티를 띄운 후에 공격하려는 앱을 누르는 경우. 원래 액티비티가 아닌 엉뚱한 액티비티가 보여진다.
