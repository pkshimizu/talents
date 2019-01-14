import React from 'react'
import { Paper, Table, TableRow, TableHead, TableCell, TableBody, Button } from '@material-ui/core'
import { inject } from 'mobx-react'

const TalentList = ({ talents, dialogStore }) => (
  <Paper>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>氏名</TableCell>
          <TableCell>部署</TableCell>
          <TableCell>役職</TableCell>
          <TableCell>業務内容</TableCell>
          <TableCell/>
        </TableRow>
      </TableHead>
      <TableBody>
        {talents.map((talent, index) => (
          <TableRow key={`talent_list_row_${index}`}>
            <TableCell>{talent.name}（{talent.kana}）</TableCell>
            <TableCell>{talent.department}</TableCell>
            <TableCell>{talent.position}</TableCell>
            <TableCell>{talent.business}</TableCell>
            <TableCell><Button onClick={() => dialogStore.openTalentEdit(true)}>編集</Button></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
)

export default inject('dialogStore')(TalentList)
