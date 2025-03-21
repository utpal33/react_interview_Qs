import React from 'react'
import { Badge, Button, Stack } from 'react-bootstrap'

const BadgeComponent = () => {
  return (
    <div>
        {/* <Button variant='primary'>
            click me<Badge bg='danger' pill>456</Badge>
        </Button> */}
        <Stack direction='horizontal'>
            <Badge bg='danger' pill>456</Badge>
            <Badge bg='danger' pill>456</Badge>
            <Badge bg='danger' pill>456</Badge>
            <Badge bg='danger' pill>456</Badge>
            <Badge bg='danger' pill>456</Badge>
            <Badge bg='danger' pill>456</Badge>
            <Badge bg='danger' pill>456</Badge>
            <Badge bg='danger' pill>456</Badge>

        </Stack>
    </div>
  )
}

export default BadgeComponent