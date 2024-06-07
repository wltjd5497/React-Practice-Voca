import dummy from "../db/data.json";

export default function DayList(){
    console.log(dummy);

    // 만약 Day{day}로 쓰면 숫자에 접근하여 문자열로 파싱하여 사용하게 된다.
    // Day {day.day}를 사용하여 day 객체 그 자체에 접근할 수 있게 된다.
    // map은 배열을 순회하며 작성된 함수를 수행하고, 그 결과로 만들어진 배열을 반환하는 함수이다.
    return (
        <ul className="list_day">
            {dummy.days.map(day => (
                <li>
                    Day {day.day} 
                </li>
            ))} 
        </ul>
    )
}