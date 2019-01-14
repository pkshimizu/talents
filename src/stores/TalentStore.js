import { types } from 'mobx-state-tree'
import Talent from '../models/Talent'
import HttpClient from '../HttpClient'

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
    afterCreate () {
      self.load()
    },
    load () {
      HttpClient.get('/api/talents/')
        .then((response) => {
          response.data.forEach((talent) => {
            self.addTalent(talent)
          })
        })
    },
    addTalent (talent) {
      self.talents.push(talent)
    },
    setEditTalent (talent) {
      self.editTalent = talent
    }
  }))

export default TalentStore
