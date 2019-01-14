import React from 'react'
import { Dialog, DialogTitle } from '@material-ui/core'
import TalentForm from './TalentForm'
import { inject, observer } from 'mobx-react'

const TalentEdit = ({ talent, dialogStore }) => (
  <Dialog open={dialogStore.isOpenTalentEdit}
    onClose={() => dialogStore.openTalentEdit(false)}
    aria-labelledby="talent-edit-dialog-title">
    <DialogTitle id="talent-edit-dialog-title">タレント情報の編集</DialogTitle>
    <TalentForm talent={talent} onClose={() => dialogStore.openTalentEdit(false)}/>
  </Dialog>
)

export default inject('dialogStore')(observer(TalentEdit))
