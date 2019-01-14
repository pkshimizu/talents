import React from 'react'
import { DialogContent, TextField, DialogActions, Button } from '@material-ui/core'

const TalentForm = ({ talent, onClose }) => (
  <form>
    <DialogContent>
      <TextField
        autoFocus
        margin="dense"
        fullWidth
        label="氏名"
        type="text"
        value={talent.name}
      />
      <TextField
        margin="dense"
        fullWidth
        label="かな"
        type="text"
        value={talent.kana}
      />
      <TextField
        margin="dense"
        fullWidth
        label="部署"
        type="text"
        value={talent.department}
      />
      <TextField
        margin="dense"
        fullWidth
        label="役職"
        type="text"
        value={talent.position}
      />
      <TextField
        margin="dense"
        fullWidth
        label="業務内容"
        type="text"
        value={talent.business}
      />
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose} color="primary">
        キャンセル
      </Button>
      <Button color="primary">
        リセット
      </Button>
      <Button color="primary">
        更新
      </Button>
    </DialogActions>
  </form>

)

export default TalentForm
