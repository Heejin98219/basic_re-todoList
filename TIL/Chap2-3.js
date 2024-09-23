// Form 태그
// HTML에서는 사용자 입력을 수집 및 제출하는 역할을 함
// 리액트에서도 사용자 입력을 처리할 수 있다.
// 일반적으로 사용자 입력을 묶어서 한 번에 처리하거나
// 서버로 데이터를 전송할 때 사용된다.

// 사용 이유
// 구조화된 데이터 수집
// 여러개의 입력 필드와 버튼을 그룹화하여
// 데이터 수집을 간편하게 함
// 엔터키로 제출 가능
// UX를 개선하는 데 도움이 됨

// 주의점
// e.preventDefault()로 제출의 기본 이벤트를 막아줘야 함
 // 오래된 html태그라 
 // (옛날에는) 폼을 제출할 때 새로고침 동작이 필요했다.
 // 하지만 지금은 웹 기술이 발달해서 새로고침이 필요가 없다.
 // 그래서 폼의 기본 이벤트인 새로고침을 막아줘야 한다.