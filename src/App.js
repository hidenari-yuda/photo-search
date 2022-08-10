import { useRef, useState } from 'react';
import './App.css';
import ImageGallary from './components/ImageGallary';

function App() {
  const [fetchData, setFetchData] = useState([]);
  const ref = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(ref.current.value);

    //APIURL
    const endPointURL = `https://pixabay.com/api/?key=29175010-31f447a3e8c00db35930fee05&q=${ref.current.value}&image_type=photo&pretty=true`

    //APIを叩く
    fetch(endPointURL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setFetchData(data.hits)});
}

  return (
    <div className="container">
      <h2>画像検索アプリ</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="検索ワードを入力" ref={ref} />
      </form>
      <ImageGallary fetchData={fetchData}/>
    </div>
  );
}

export default App;
