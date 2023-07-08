"use client";

export default function CultureList() {
  const serviceKey = "6e4957636974686432346a6c614d7a";
  const url = `http://openapi.seoul.go.kr:8088/${serviceKey}/json/culturalEventInfo/1/10`;

  const onClick = () => {
    fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => {
        const lists = result.culturalEventInfo.row;
        console.log(lists);
        const list = lists.filter((li, idx) => {
          li.GUNAME === "서초구";
        });
        console.log(list);
      });
  };
  return (
    <>
      <div>CultureList</div>
      <button onClick={onClick}>리스트</button>
    </>
  );
}
