import React from 'react'
import TalentList from "./components/TalentList";
import TalentEdit from "./components/TalentEdit";
import {Provider} from "mobx-react";
import DialogStore from "./stores/DialogStore";
import TalentStore from "./stores/TalentStore";

const store = {
  dialogStore: DialogStore.create({
    talentEditOpen: false
  }),
  talentStore: TalentStore.create({
    talents: [],
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
