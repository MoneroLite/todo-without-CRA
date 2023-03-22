import React from 'react'
import { Card } from 'shared/ui/Card'
import { ToggleTask } from 'features'

export const TaskCard = () => {
  return (
    <div>
      <Card>
        <p>текст</p>
        <ToggleTask />
      </Card>
    </div>
  )
}
