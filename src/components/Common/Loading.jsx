import React from 'react'
import { CircularProgress } from '@material-ui/core'

export default function Loading() {
  return (
    <div className="py-32 text-center">
      <CircularProgress />
    </div>
  )
}
