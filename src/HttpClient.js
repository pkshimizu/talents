import axios from 'axios';

const HttpClient = axios.create({
  baseURL: 'http://members.compass-edu.meguro',
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  },
  responseType: 'json'
});

// エラー処理をするなら、axiosのinterceptorでエラー処理をする
// その時、エラーダイアログなどを出したければ、DialogStoreを受け取る必要がある

export default HttpClient;