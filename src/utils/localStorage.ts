// 로컬 스토리지 저장
export const USER_ID = "userId";
export const ACCESS_TOEKN = "AccessToken";

export const setDataToLocal = (key: string, value: string) => {
  const stringified = JSON.stringify(value);
  window.localStorage.setItem(key, stringified);
};
// 로컬 스토리지 가져오기
export const getDataToLocal = (key: string) => {
  const data: string | null = window.localStorage.getItem(key);
  if (data) {
    return JSON.parse(data);
  }
  return null;
};
