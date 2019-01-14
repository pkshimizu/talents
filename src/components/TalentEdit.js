import React from 'react'
import { Dialog, DialogTitle } from '@material-ui/core'
import TalentForm from './TalentForm'
import { inject, observer } from 'mobx-react'

const TalentEdit = ({ talentStore, dialogStore }) => (
  <Dialog open={dialogStore.isOpenTalentEdit}
    onClose={() => dialogStore.openTalentEdit(false)}
    aria-labelledby="talent-edit-dialog-title">
    <DialogTitle id="talent-edit-dialog-title">タレント情報の編集</DialogTitle>
    <TalentForm talent={talentStore.talentWhileEditing} onClose={() => dialogStore.openTalentEdit(false)}/>
  </Dialog>
)

export default inject('talentStore', 'dialogStore')(observer(TalentEdit))
