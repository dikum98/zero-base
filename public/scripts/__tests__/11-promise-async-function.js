/* eslint-disable no-undef */
/* eslint-disable jest/no-conditional-expect */
/* eslint-disable jest/expect-expect */

// -----------------------------------------------------------------------------
// TEST
// -----------------------------------------------------------------------------
// - [ ] utils 모듈에서 fetchBooks를 추출해 비동기 처리 코드를 작성하세요.
// - [ ] Jest 테스트 러너를 구동한 후, 테스트가 성공하도록 함수 로직을 구성합니다.
// -----------------------------------------------------------------------------

import { fetchBooks } from '../../utils/index.js';

// 데이터 패치 성공 시뮬레이션 코드 예시
test('fetchBooks Promise 테스트', () => {
  // Promise를 사용해 fetchBooks()로 부터 가져온 데이터를 테스트 합니다.
  return fetchBooks()
    .then((data) => {
      expect(data).toHaveLength(7);
    })
    .catch((error) => {
      expect(error.message).toMatch(/unknown/i);
    });
});

// 데이터 패치 실패 시뮬레이션 코드 예시
test('fetchBooks Async 함수 테스트', async () => {
  // Async 함수를 사용해 fetchBooks()로 부터 가져온 데이터를 테스트 합니다.
  try {
    const books = await fetchBooks();
    expect(books).toHaveLength(7);
  } catch (error) {
    // 통신에 실패한 경우, 오류 메시지를 테스트 합니다.
    expect(error.message).toMatch(/unknown/i);
  }
});
