import {Link} from "react-router-dom";
import dummy from "../db/data.json";

export default function DayList(){
    console.log(dummy);

    // map은 배열을 순회하며 작성된 함수를 수행하고, 그 결과로 만들어진 배열을 반환하는 함수이다.
    // 반복되는 값에는 key가 필요하다. 따라서 리스트의 항목에 day.id로 키를 주었다.
    return (
        <ul className="list_day">
            {dummy.days.map(day => ( // day라는 매개변수로 dummy.days 각각의 데이터를 참조하여 접근한다.
                <li key={day.id}>     
                <Link to={`/day/${day.day}`}>
                    Day {day.day}
                </Link>
                </li>
            ))} 
        </ul>
    )
}