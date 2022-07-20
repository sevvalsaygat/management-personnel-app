import React from 'react'

function List({ managementPersonnels }) {
  return (
    <div>
      {
        managementPersonnels.map((managementPersonnel, index) => {
          return (
            <div key={index}>
               {index+1}-) {managementPersonnel.fullname} {managementPersonnel.department} {managementPersonnel.salary}
            </div>
          )
        })
      }
    </div>
  )
}

export default List