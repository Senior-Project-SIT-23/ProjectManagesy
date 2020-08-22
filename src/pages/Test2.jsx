import React, { useContext, useEffect, useCallback, useState } from 'react'
import CommonCard from '../components/Common/Card'
import TableActivity from '../components/TrackingStudents/TableActivity'

export default function Test(props) {
  return (
    <div className="flex flex-col flex-1 mx-auto max-w-screen-lg h-screen">
      <TableActivity/>
    </div>
    
  )
}
