# Todo App with vanilla TypeScript

멋쟁이사자처럼 명지대(자연) 11기 운영진 스터디 1주차 과제입니다.
타입스크립트와 webpack만을 이용하여 만든 Todo App입니다.

## 실행 방법

```shell
pnpm install
pnpm serve
```

## 중요 포인트

- TypeScript로 진행한 TodoList입니다.
- Webpack을 적용했습니다.
- Todo 데이터는 Store에서만 접근하도록 제한했습니다.
- React 와 비슷한 로직으로 렌더링하려고 노력했습니다.
- store는 class로 구현했습니다.

## 고민 포인트

- 자식에서 handler 함수가 호출될 때 부모 컴퍼넌트가 re-rendering 되어야 하는 경우가 있었는데, 이 로직을 더 이쁘게 작성할 방법이 있을 것 같기도 합니다.
- TypeScript 에서 class 문법을 사용할 때 조금 더 객체지향 적 관점에서 고려할 수 있는 부분이 있을 것 같은데, 객체지향을 잘 몰라서 놓친 부분이 있는 것 같습니다.
- 혹시 더 나은 코드가 생각나는 분은 Issue 를 남겨주시거나 슬랙에 의견 주시면 감사하겠습니다.

## 새로 알게 된 것

- webpack init 명령어를 쓰면 초기 세팅을 엄청 빨리 할 수 있네요. 폴더도 뚝딱 만들어주고요.

## 해보면 좋을 것 같았으나 3시간에 쫓겨 못해본 것

- [swc-loader](https://swc.rs/docs/usage/swc-loader) 를 사용했으면 더 빠른 build 속도를 가져갔을 텐데 초기 설정에 많은 시간을 투자하지 못해서 설정하지 못했습니다.
- eslint나 prettier 설정을 하지 못해 기본 설정 그대로 사용했습니다.

## 폴더 구조

```
├── 📂 src
│   ├── 📂 components
│   ├── 📂 store
│   ├── 📂 types
│   └── 📝 index.ts
└── 🛠 webpack.config, tsconfig, ...
```
