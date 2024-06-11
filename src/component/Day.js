import dummy from "../db/data.json";

export default function Day(){
    //dummy.words
    const day = 1; // day가 1인것만 출력하기 위해
    const wordList = dummy.words.filter(word => word.day === day);
    console.log(wordList);

    return(
        <>
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