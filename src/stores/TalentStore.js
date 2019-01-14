import { types } from 'mobx-state-tree'
import Talent from '../models/Talent'

const TalentStore = types
  .model({
    talents: types.array(Talent),
    editTalent: types.maybeNull(types.reference(Talent))
  })
  .views(self => ({
    get list () {
      return self.talents
    },
    get talentWhileEditing () {
      return self.editTalent ? self.editTalent : {}
    }
  }))
  .actions(self => ({
    setEditTalent (talent) {
      self.editTalent = talent
    }
  }))

export default TalentStore
