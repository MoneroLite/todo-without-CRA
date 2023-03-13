import React from 'react'
import Checkbox from 'shared/ui/Checkbox'
import { ToggleTaskProps } from '../index'

export const ToggleTask = ({ taskId, withStatus = true }: ToggleTaskProps) => {
  return (
    <div>
      <Checkbox />
    </div>
  )
}
