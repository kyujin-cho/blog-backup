---
layout: post
title: "S10, 그 이상 기기들의 CSC 변경법 (작동 확인)"
date: 2019-09-20 01:00:00 +0900
categories: IT
---

출처: [XDA 어딘가](https://forum.xda-developers.com/galaxy-s10/how-to/change-csc-code-firmware-sim-card-t3907375/post80229026#post80229026), [미니기기 코리아](https://meeco.kr/mini/25537662)

0. 준비물
- 돈(6.6달러 이상)
- 이베이 계정
- USB 케이블
- Windows PC
- SKC/KTC/LUC CSC 기기

1. 먼저 [Ebay](https://www.ebay.com/itm/SAMKEY-CODE-READER-1-CREDITS-INSTANTLY-UNLOCK-SAMSUNG-PHONES-NO-ROOT-NO-FLASH/254275758975) 에서 samKEY 크레딧을 구매해야 한다. SamKEY에서 CSC 변경 작업에 부과하는 크레딧은 2크레딧이지만, 해당 셀러의 Min QTY(최소구매갯수)는 3개 이상이다. 그러모로 기기 한대만 바꿀거면 3대, 2대부터는 기기 댓수 * 2개 만큼 구매. 한번 구입한 ID의 크레딧은 여러 컴퓨터/기기에서 돌려 쓸 수 있으므로 공동구매 하는 것도 좋은 선택.
2. 구매하고 5분 ~ 24시간 사이에 셀러에게서 이베이 메시지를 통해 구입한 samKEY 계정 정보가 전달된다.
![Screenshot 1](/images/ScreenShot2019-09-20at1.06.28AM.png)
3. 이제 윈도우 디펜더의 실시간 스캔 기능을 모조리 꺼버리고, [^1]
![Screenshot 2](/images/Untitled.png)
4. 시스템 로케일을 영어 (미국) 으로 변경한 후에 [^2]
![Screenshot 3](/images/Untitled3.png)
5. [SamKEY 홈페이지](https://www.samkey.org) 로 이동하여 SamKEY와 Samsung USB Driver를 설치한다.
![Screenshot 4](/images/ScreenShot2019-09-20at1.12.55AM.png)
6. CSC를 변경할 휴대폰의 경우, 먼저 화면 잠금 방식을 스와이프로 변경한 후 [^3]
![Screenshot 5](/images/photo_2019-09-20_01-13-35.jpg)
7. 개발자 옵션을 열어 USB 디버깅을 활성화한다.
![Screenshot 6](/images/photo_2019-09-20_01-13-37.jpg)
8. 이제 SamKEY를 실행하고,
![Screenshot 7](/images/Untitled4.png)
9. Read Info ADB를 눌러서 기기 정보가 올바르게 뜨는지 확인. 
![Screenshot 8](/images/Untitled5.png)   
이렇게 Unauthorized가 떴을 경우, 휴대전화 화면을 체크하여 컴퓨터 페어링을 허용해주면
![Screenshot 9](/images/Untitled6.png)
올바르게 정보가 뜬다.
10. 기기 정보가 확인됐으면, 상단의 Username/Password에 지급받은 계정 정보를 넣고 로그인을 누른 다음
![Screenshot 10](/images/Untitled7.png)
11. Change CSC(Buyer) 란에 변경할 세 자리 CSC 코드를 입력 후 Change CSC 클릭. [^4]
![Screenshot 11](/images/Untitled8.png)
12. Yes & Yes    
![Screenshot 12](/images/Untitled9.png)
![Screenshot 13](/images/Untitled10.png)

13. 진행 중... 
![Screenshot 14](/images/Untitled11.png)
14. 끝.
![Screenshot 15](/images/Untitled12.png)
15. 이제 기기가 재부팅 되면서, 통신사 부트애니가 아닌 자급제의 부트애니가 재생된다.
![Screenshot 16](/images/photo_2019-09-20_01-18-27.jpg)
16. KOO 확인 완료.
![Screenshot 17](/images/photo_2019-09-20_01-13-38.jpg)

[^1]: 망할 디펜더가 SamKEY 클라를 바이러스로 인식하고 검역소로 보내버림.
[^2]: 왜인지 모르겠으나, 로케일을 미국으로 두지 않은 채 SamKEY를 켜면 로케일을 변경하라는 메세지가 뜬다.
[^3]: 기기가 재부팅 된 후 작업이 진행되는데, 화면 잠금이 걸려 있으면 재부팅 시 USB를 통한 접근이 불가능
[^4]: 자급제: KOO, SKT: SKC, KT: KTC, LG U+: LUC
