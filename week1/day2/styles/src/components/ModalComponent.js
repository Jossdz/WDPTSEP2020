import { Modal, Button } from "antd"

import { useState } from "react"

const ModalComponent = () => {
  const [showModal, setShowModal] = useState(false)

  function closeModal() {
    setShowModal(false)
  }
  // function openModal() {
  //   setShowModal(true)
  // }

  return (
    <div>
      <Button onClick={() => setShowModal(!showModal)}>Create something</Button>
      <Modal
        title='Modal'
        visible={showModal}
        onCancel={closeModal}
        onOk={closeModal}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
        itaque odit rem asperiores fuga est sapiente, dolor impedit, maiores
        eaque quam possimus assumenda. Ex est ad quos rerum autem culpa?
      </Modal>
    </div>
  )
}

export default ModalComponent
