// input태그
// 제어 컴포넌트의 방식의 장점
// 실시간 데이터 반영
 // 입력된 데이터를 실시간으로 관리하여
 // UI에 반영할 수 있음
// 쉽게 유효성 검사를 적용할 수 있다.
// 데이터 일관성 유지
 // 컴포넌트의 상태와 입력 필드의 값이 항상 동기화되어 있어
 // 데이터를 보다 일관되게 관리할 수 있음
 
// 제어 컴포넌트 방식의 단점
// 코드 길이가 늘어난다.
 // value와 onChange등의 속성을 작성해야 해서 번거롭다.

// 제어 컴포넌트를 구현하기 위해서는 
// useState 훅을 사용해 입력값을 상태로 관리하고
// 이벤트 핸들러를 사용해 입력값이 변경될 때마다
// 상태를 업데이트 해야한다.