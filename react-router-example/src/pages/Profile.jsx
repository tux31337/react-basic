import { useParams, useSearchParams } from "react-router-dom";

export default function Profile() {
  const params = useParams();
  console.log(params);
  return <div>Profile 페이지입니다.</div>;
}
