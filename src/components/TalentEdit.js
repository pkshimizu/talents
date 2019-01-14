import React from 'react'
import { Dialog, DialogTitle } from '@material-ui/core'
import TalentForm from './TalentForm'

const TalentEdit = ({ talent }) => (
  <Dialog open={true} aria-labelledby="talent-edit-dialog-title">
    <DialogTitle id="talent-edit-dialog-title">タレント情報の編集</DialogTitle>
    <TalentForm talent={talent}/>
  </Dialog>
)

export default TalentEdit
