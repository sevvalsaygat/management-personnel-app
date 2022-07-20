import React, { useState } from 'react'

function Form({managementPersonnels, setManagementPersonnels}) {

  const[managementPersonnelForm, setManagementPersonnelForm] = useState({fullname: "", department: "", salary: ""});

  const onChangeInput = (e) => {
    setManagementPersonnelForm({...managementPersonnelForm, [e.target.name]: e.target.value});
  };

  return (
    <div>
      Full Name <br/>
      <input name='fullname' placeholder='ad soyad giriniz' value={managementPersonnelForm.fullname} onChange={onChangeInput} />
      <br/>
      <br/>
      Department <br/>
      <input name='department' placeholder='departmanınızı giriniz' value={managementPersonnelForm.department} onChange={onChangeInput} />
      <br/>
      <br/>
      Aylık Maaş <br/>
      <input name='salary' placeholder='aylık maaş giriniz' value={managementPersonnelForm.salary} onChange={onChangeInput} />
      <br />
      <br/>
      <button onClick={
        () => {
          setManagementPersonnels([...managementPersonnels, managementPersonnelForm])
          setManagementPersonnelForm({fullname: "", department: "", salary: ""})
       }
      }>EKLE</button>
      
    </div>
  )
}

export default Form