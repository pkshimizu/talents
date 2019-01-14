import React from 'react'
import { DialogContent, DialogActions, Button } from '@material-ui/core'
import MaterialTextField from '../forms/MaterialTextField'

const TalentForm = ({ form, onClose }) => (
  <form>
    <DialogContent>
      <MaterialTextField
        autoFocus
        margin="dense"
        fullWidth
        field={form.$('name')}
      />
      <MaterialTextField
        margin="dense"
        fullWidth
        field={form.$('kana')}
      />
      <MaterialTextField
        margin="dense"
        fullWidth
        field={form.$('department')}
      />
      <MaterialTextField
        margin="dense"
        fullWidth
        field={form.$('position')}
      />
      <MaterialTextField
        margin="dense"
        fullWidth
        field={form.$('business')}
      />
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose} color="primary">
        キャンセル
      </Button>
      <Button onClick={form.onReset} color="primary">
        リセット
      </Button>
      <Button onClick={form.onSubmit} color="primary">
        更新
      </Button>
    </DialogActions>
  </form>

)

export default TalentForm
