'use client'
import { v4 as uuidv4 } from "uuid";


export default function CodeNameBtn({handleSearchCodeName}) {
  const codenameKey = [
    "전체",
    "교육",
    "연극",
    "클래식",
    "뮤지컬/오페라",
    "콘서트",
    "축제",
    "전시/미술",
  ];

  return (
    <div>
      {codenameKey.map((c) => {
        const uniqueId = uuidv4();
        return (
          <button key={uniqueId} onClick={() => handleSearchCodeName(c)}>
            {c}
          </button>
        );
      })}
    </div>
  );
}
