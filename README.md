###### Connect To Front-end

# Icon, UploadButton Component

## Button Component

버튼 컴포넌트는 props로 disabled, children을 받고, 버튼 UI를 렌더한다.

- disabled: 버튼 활성화 유무 (boolean)
- children: 버튼 텍스트 값 (string)
  -- children은 <span>의 text content로 넣는다.

## Icon Component

Icon 컴포넌트는 props로 disabled, path를 받고, 아이콘(<img>) UI를 렌더한다.

- disabled: disabled 값의 유무에 따라 렌더하는 아이콘이 달라짐 (boolean)
- path: 이미지 객체에서 이미지 경로를 값으로 매핑하는 키값 (string)
