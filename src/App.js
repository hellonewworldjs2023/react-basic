import { useEffect, useState } from "react";
import Article from "./components/Article";



function App() {
  const [name,setName] =useState(""); 
  const [id,setId] = useState("deatiger");
  const ids = ["deatiger",'gaearon', "aws","google","facebook"]
  const getRandomId = () => {
    const _id = ids[Math.floor(Math.random() * ids.length)]
    setId(_id)
  }

  useEffect(() => {
    fetch(`https://api.github.com/users/${id}`)
    .then(res =>res.json())
    .then(data => {
      console.log(data)
      setName(data.name)
    })
    .catch(error =>{
      console.error(error)
    })
}, [id]) 
  return (
    <div>
      <Article
        title={"新・日本一わかりやすいReact入門4"}
        content={"今日のトピックはpropsについて。"}
      />
      <Article
        title={"新・日本一わかりやすいReact入門5"}
        content={"今日のトピックはuseStateについて。"}
      />
      <p>{id}の、GitHub状の名前は{name}です。</p>
      <button onClick={getRandomId}>IDを変更</button>
    </div>
  );
}

export default App;
