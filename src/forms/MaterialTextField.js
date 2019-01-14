import React from 'react'
import { TextField } from '@material-ui/core'
import { observer } from 'mobx-react'

const MaterialTextField = ({
  field,
  type = 'text',
  placeholder = null,
  validatingText = 'validating...'
}) => (
  <div>
    <TextField
      {...field.bind({ type, placeholder, validatingText })}
    />
  </div>
)

export default observer(MaterialTextField)
