import React, { useState } from 'react';
import { Button } from '@alifd/next';
import Dialog from '../../components/Dialog';

const DialogPage = () => {
  const [visible, setVisible] = useState(false);

  const onOpen = () => {
    setVisible(true);
  }

  const onClose = () => {
    setVisible(false);
  }

  return (
    <>
      <Button type="primary" onClick={onOpen}>open</Button>
      <Dialog
        visible={visible}
        onClose={onClose}
        // mask
      >
        111
      </Dialog>
    </>
  )
}

export default DialogPage;