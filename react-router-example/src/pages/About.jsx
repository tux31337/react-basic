import { useSearchParams } from "react-router-dom";

export default function About(props) {
  console.log(props);

  const [searchParams, setSearchParams] = useSearchParams();
  const searchName = searchParams.get("name");
  console.log(searchParams);
  console.log(searchName);
  return (
    <div>
      <h2>About 페이지입니다.</h2>
      {searchName && <p>name은 {searchName}입니다</p>}
    </div>
  );
}
