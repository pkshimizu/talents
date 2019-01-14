import { types } from 'mobx-state-tree'

const DialogStore = types
  .model({
    talentEditOpen: types.boolean
  })
  .views(self => ({
    get isOpenTalentEdit () {
      return self.talentEditOpen
    }
  }))
  .actions(self => ({
    openTalentEdit (open) {
      self.talentEditOpen = open
    }
  }))

export default DialogStore
