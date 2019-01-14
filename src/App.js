import React from 'react'
import TalentList from "./components/TalentList";
import TalentEdit from "./components/TalentEdit";
import {Provider} from "mobx-react";
import DialogStore from "./stores/DialogStore";
import TalentStore from "./stores/TalentStore";

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

const store = {
  dialogStore: DialogStore.create({
    talentEditOpen: false
  }),
  talentStore: TalentStore.create({
    talents: talents,
    editTalent: null
  })
};

const App = () => (
  <Provider {...store}>
    <div>
      <TalentList/>
      <TalentEdit/>
    </div>
  </Provider>
);

export default App
