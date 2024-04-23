// NOTE: 서버에서 리다이렉트 시키는 방식
// import {redirect} from "next/navigation";
//
// export default function Login() {
//   redirect('/i/flow/login')
// }

// NOTE: 클라이언트에서 리다이렉트 시키는 방식
"use client"

import {useRouter} from "next/navigation";
import Main from "@/app/(beforeLogin)/_component/Main";

export default function Login () {
  const router = useRouter();

  router.replace('/i/flow/login')

  return (
    <Main />
  );
}

// CASE: router.replace -> 뒤로가기시 바로 전 페이지로 이동
// *localhost:3000/login -> localhost:3000/i/flow/login

// CASE: router.push -> 뒤로가기시 이동하기 전 히스토리를 없애고 그 전 페이지로 이동한다.
// * localhost:3000 -> (localhost:3000/login) -> localhost:3000/i/flow/login
