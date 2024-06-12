import Header from './component/Header';
import DayList from './component/DayList';
import Day from './component/Day';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import EmptyPage from './component/EmptyPage';

// Switch 내부는 url에 따라 각각 다른 페이지를 보여준다.
// Switch 외부는 공통된 페이지를 보여준다.

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes> {/*Routes(구 Switch) 내부에선 첫 글자와 일치하는 path를 사용하기 때문에, 
        "/"나, "/day"나 같은 "/"로 인식된다.
        이를 방지하기 위해서 exact path를 사용하여야 한다. */}          
          <Route path="/" element={<DayList />} />
          <Route path="/day/:day" element={<Day />} />
          <Route path='*' element={<EmptyPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
