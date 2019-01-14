import { types } from 'mobx-state-tree'

const Talent = types
  .model({
    id: types.identifierNumber,
    name: types.string,
    kana: types.string,
    position: types.maybeNull(types.string),
    department: types.string,
    business: types.maybeNull(types.string)
  })
  .views(self => ({
  }))
  .actions(self => ({
    update ({ name, kana, position, department, business }) {
      self.name = name
      self.kana = kana
      self.position = position
      self.department = department
      self.business = business
    }
  }))

export default Talent
