import React from 'react'
import { Button, Modal } from 'semantic-ui-react'

const InfoModal = () => (
  <Modal trigger={<Button basic color='black'>Click to learn more</Button>} basic size='small'>
    <Modal.Header>About Commit-m</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <p>Commit-m encourages commit message creativity, allows users to view what others are committing about, and "like" messages they enjoy.  Once logged in you can see what other Commit-m users are committing about! All users can view and like all other Commit-m user's messages.</p>
          <p>Due to changes in technologies and their permissions (and no longer being regularly maintained) Commit-m is no longer functional.  Please visit our <a  rel="noopener noreferrer" target='_blank' href='https://github.com/just-hey/Commit-mENT-frontend-'>repo</a> on GitHub to learn more about Commit-m.</p>        
        </Modal.Description>
      </Modal.Content>
  </Modal>
)

export default InfoModal
