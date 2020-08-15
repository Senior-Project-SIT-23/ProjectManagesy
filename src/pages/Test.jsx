import React, { useContext, useEffect, useCallback, useState } from 'react'
import CommonCard from '../components/Common/Card'

export default function Test(props) {
  return (
    <div className="flex flex-col flex-1 mx-auto max-w-screen-lg h-screen">
      <h1>This is first prototpye</h1>
      <div>
        <CommonCard>
          <h1>Hello World</h1>
        </CommonCard>
      </div>
    </div>
  )
}
