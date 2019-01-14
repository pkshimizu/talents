import React from 'react'
import { Dialog, DialogTitle } from '@material-ui/core'
import TalentForm from './TalentForm'
import { inject, observer } from 'mobx-react'
import MobxReactForm from 'mobx-react-form'
import TalentFormFields from './TalentFormFields'

const TalentEdit = ({ talentStore, dialogStore }) => {
  const hooks = {
    onSuccess (form) {
      dialogStore.openTalentEdit(false)
      talentStore.talentWhileEditing.update(form.values())
    },
    onError (form) {
      form.invalidate('This is a generic error message!')
    }
  }
  const fields = TalentFormFields(talentStore.talentWhileEditing)
  const form = new MobxReactForm({ fields }, { hooks })
  return (
    <Dialog open={dialogStore.isOpenTalentEdit}
      onClose={() => dialogStore.openTalentEdit(false)}
      aria-labelledby="talent-edit-dialog-title">
      <DialogTitle id="talent-edit-dialog-title">タレント情報の編集</DialogTitle>
      <TalentForm form={form} onClose={() => dialogStore.openTalentEdit(false)}/>
    </Dialog>
  )
}

export default inject('talentStore', 'dialogStore')(observer(TalentEdit))
