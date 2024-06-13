import dummy from "../db/data.json";
import {useParams, ustParams} from "react-router-dom";

export default function Day(){
    //dummy.words

    const a = useParams();
    console.log(a);
    const day = a.day;
    // Number(day)를 이용해 문자열을 숫자로 Parsing
    const wordList = dummy.words.filter(word => word.day === Number(day));
    console.log(wordList);

    return(
        <>
        <h2>Day{day}</h2>
        <table>
            <tbody>
                {wordList.map(word=>(
                    <tr key={word.id}>
                        <td>
                            {word.eng}
                        </td>
                        <td>
                            {word.kor}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    )
}