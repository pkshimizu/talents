import React from 'react'
import TalentList from "./components/TalentList";
import TalentEdit from "./components/TalentEdit";

const talents = [
  {
    "id": 1,
    "name": "山田 太郎",
    "kana": "やまだ たろう",
    "position": "エンジニア",
    "department": "開発部",
    "business": "もげもげシステムの開発",
  },
  {
    "id": 2,
    "name": "佐藤 次郎",
    "kana": "さとう じろう",
    "position": "",
    "department": "営業部",
    "business": "営業",
  },
  {
    "id": 3,
    "name": "鈴木 三郎",
    "kana": "すずき さぶろう",
    "position": "CTO",
    "department": "開発部",
    "business": "",
  },
];
const App = () => (
  <div>
    <TalentList talents={talents}/>
    <TalentEdit talent={talents[0]}/>
  </div>
)

export default App
