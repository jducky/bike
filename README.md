# 🚴‍♂️ Bike Riding App

[![React Native](https://img.shields.io/badge/React%20Native-0.79.5-blue.svg)](https://reactnative.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6.3-blue.svg)](https://www.typescriptlang.org/)
[![Expo](https://img.shields.io/badge/Expo-53.0.0-black.svg)](https://expo.dev/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![GitHub](https://img.shields.io/badge/GitHub-jducky%2Fbike-green.svg)](https://github.com/jducky/bike)

자전거 라이딩을 추적하고 관리할 수 있는 크로스 플랫폼 모바일 애플리케이션입니다.

## ✨ 주요 기능

### 현재 구현된 기능
- 🏠 **홈 대시보드**: 주간 라이딩 통계 및 빠른 액션
- 🚴 **라이딩 추적**: GPS 기반 실시간 위치 추적 및 지도 표시
- 📊 **기록 관리**: 라이딩 기록 조회 및 월간 통계
- 👤 **프로필**: 사용자 정보 및 앱 설정

### 계획된 기능
- 🗺️ **경로 계획**: 목적지 설정 및 최적 경로 안내
- 📈 **상세 분석**: 성능 분석 및 향상 추이
- 🏆 **목표 설정**: 개인 라이딩 목표 설정 및 달성률 추적
- 👥 **소셜 기능**: 친구 추가 및 라이딩 기록 공유

## 🛠️ 기술 스택

### Frontend
- **React Native** 0.79.5 - 크로스 플랫폼 모바일 앱 개발
- **TypeScript** 5.6.3 - 타입 안전성
- **Expo** 53.0.0 - 개발 및 빌드 플랫폼

### 주요 라이브러리
- **React Navigation** 6.x - 앱 내 네비게이션
- **React Native Maps** 1.20.1 - 지도 및 위치 서비스
- **Expo Location** 18.1.6 - GPS 위치 추적
- **Zustand** 4.4.0 - 상태 관리
- **React Query** 4.40.1 - 데이터 캐싱 및 동기화
- **React Native Vector Icons** 10.0.0 - 아이콘
- **AsyncStorage** 2.1.2 - 로컬 데이터 저장
- **React Native Web** 0.20.0 - 웹 플랫폼 지원

### 개발 도구
- **ESLint** + **Prettier** - 코드 품질 관리
- **Jest** - 테스팅 프레임워크
- **TypeScript ESLint** - TypeScript 린팅

## 📁 프로젝트 구조

```
bike-app/
├── src/
│   ├── components/          # 재사용 가능한 UI 컴포넌트
│   ├── screens/            # 화면 컴포넌트
│   │   ├── HomeScreen.tsx      # 홈 대시보드
│   │   ├── RideScreen.tsx      # 라이딩 추적
│   │   ├── HistoryScreen.tsx   # 기록 조회
│   │   └── ProfileScreen.tsx   # 프로필
│   ├── navigation/         # 네비게이션 설정
│   │   └── MainNavigator.tsx
│   ├── services/          # API 및 외부 서비스
│   ├── utils/             # 유틸리티 함수
│   ├── hooks/             # 커스텀 훅
│   ├── types/             # TypeScript 타입 정의
│   └── constants/         # 상수값들
├── assets/                # 이미지, 폰트 등
├── __tests__/            # 테스트 파일
├── app.json              # Expo 설정
├── package.json          # 의존성 관리
└── tsconfig.json         # TypeScript 설정
```

## 🚀 시작하기

### 필수 요구사항
- Node.js (v16 이상)
- npm 또는 yarn
- Expo CLI
- iOS Simulator (iOS 개발) 또는 Android Studio (Android 개발)

### 설치 및 실행

1. **저장소 클론**
   ```bash
   git clone https://github.com/jducky/bike.git
   cd bike/bike-app
   ```

2. **의존성 설치**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **앱 실행**
   ```bash
   # Expo 개발 서버 시작 (추천)
   npx expo start

   # 또는 React Native Metro 직접 실행
   npx react-native start

   # iOS에서 실행
   npm run ios

   # Android에서 실행
   npm run android

   # 웹에서 실행 (실험적)
   npm run web
   ```

### 개발 명령어

```bash
# 린팅 실행
npm run lint

# 타입 체크
npm run type-check

# 테스트 실행
npm test
```

## 📱 화면 구성

### 1. 홈 화면
- 이번 주 라이딩 통계 (거리, 시간)
- 라이딩 시작 버튼
- 빠른 액션 메뉴 (경로 계획, 통계 보기)

### 2. 라이딩 화면
- 실시간 지도 표시
- GPS 위치 추적
- 라이딩 통계 (거리, 시간, 속도)
- 시작/정지 컨트롤
- 경로 기록 및 표시

### 3. 기록 화면
- 라이딩 기록 목록
- 월간 요약 통계
- 개별 기록 상세 정보
- 필터 및 정렬 기능

### 4. 프로필 화면
- 사용자 정보
- 총 라이딩 통계
- 설정 메뉴
- 앱 관련 기능들

## 🔧 설정

### 위치 권한
앱은 라이딩 추적을 위해 위치 권한이 필요합니다:
- **iOS**: `NSLocationWhenInUseUsageDescription` 설정됨
- **Android**: `ACCESS_FINE_LOCATION`, `ACCESS_COARSE_LOCATION` 권한 필요

### 환경 설정
```json
// app.json에서 설정 가능한 주요 옵션들
{
  "expo": {
    "name": "Bike Riding App",
    "orientation": "portrait",
    "userInterfaceStyle": "light",
    "plugins": [
      ["expo-location", {
        "locationAlwaysAndWhenInUsePermission": "This app uses location to track your bike rides."
      }]
    ]
  }
}
```

## 🧪 테스팅

```bash
# 전체 테스트 실행
npm test

# 테스트 커버리지 확인
npm test -- --coverage

# 특정 테스트 파일 실행
npm test HomeScreen.test.tsx
```

## 📈 개발 로드맵

### Phase 1 - 핵심 기능 완성 (진행 중)
- [x] 기본 UI 구조 및 네비게이션
- [x] 지도 표시 및 위치 권한
- [x] Expo SDK 53 업그레이드 완료
- [x] Metro 번들러 설정 및 실행
- [x] GitHub 저장소 설정
- [ ] 실시간 GPS 추적 로직
- [ ] 라이딩 데이터 저장/조회
- [ ] 실시간 통계 계산

### Phase 2 - 고급 기능 추가
- [ ] 사용자 인증 시스템
- [ ] 경로 계획 및 안내
- [ ] 상세 통계 및 분석
- [ ] 목표 설정 및 달성률 추적

### Phase 3 - 소셜 및 확장 기능
- [ ] 소셜 기능 (친구, 그룹)
- [ ] 챌린지 및 리더보드
- [ ] 외부 앱 연동
- [ ] 고급 안전 기능

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### 코딩 스타일
- TypeScript 사용 필수
- ESLint 규칙 준수
- Prettier로 코드 포맷팅
- 컴포넌트는 함수형으로 작성
- 의미 있는 커밋 메시지 작성

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

## 🚀 최근 업데이트

### v1.0.0 (2025-07-13)
- ✅ Expo SDK 53으로 업그레이드 완료
- ✅ React Native 0.79.5 적용
- ✅ Metro 번들러 호환성 문제 해결
- ✅ GitHub 저장소 설정 및 초기 커밋
- ✅ 상세한 프로젝트 문서화
- ✅ 웹 플랫폼 지원 추가 (실험적)

## 🛠️ 문제 해결

### 자주 발생하는 문제들

**Metro 번들러 시작 실패**
```bash
# 캐시 삭제 후 재시작
rm -rf .expo node_modules/.cache
npm install --legacy-peer-deps
npx expo start --clear
```

**의존성 충돌 오류**
```bash
# legacy peer deps로 설치
npm install --legacy-peer-deps
```

**Expo Go 버전 호환성**
- Expo Go SDK 53 버전 사용 필수
- 이전 버전은 호환되지 않음

## 📞 문의

- **GitHub Issues**: [이슈 리포트](https://github.com/jducky/bike/issues)
- **Repository**: https://github.com/jducky/bike
- 프로젝트에 대한 문의사항이나 버그 리포트는 이슈를 통해 남겨주세요.

---

**즐거운 라이딩 되세요! 🚴‍♂️🚴‍♀️**