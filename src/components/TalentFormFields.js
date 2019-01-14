const TalentFormFields = (talent) => {
  return {
    name: {
      value: talent.name,
      label: '氏名',
      placeholder: '氏名',
      rurles: 'required|string|between:1,16'
    },
    kana: {
      value: talent.kana,
      label: 'かな',
      placeholder: 'かな',
      rurles: 'required|string|between:1,16'
    },
    department: {
      value: talent.department,
      label: '部署',
      placeholder: '部署',
      rurles: 'string'
    },
    position: {
      value: talent.position,
      label: '役職',
      placeholder: '役職',
      rurles: 'string'
    },
    business: {
      value: talent.business,
      label: '業務内容',
      placeholder: '業務内容',
      rurles: 'string'
    }
  }
}

export default TalentFormFields
