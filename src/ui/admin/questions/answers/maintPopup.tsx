'use client'
import Popup from '@/src/ui/utils/popup'
import Form from '@/src/ui/admin/questions/answers/maint'
import { table_Questions } from '@/src/lib/tables/definitions'

interface Props {
  record: table_Questions | null
  isOpen: boolean
  onClose: () => void
}

export default function MaintPopup({ record, isOpen, onClose }: Props) {
  //
  // Close the popup on success
  //
  const handleSuccess = () => {
    onClose()
  }
  return (
    <Popup isOpen={isOpen} onClose={onClose} maxWidth='max-w-2xl'>
      <Form record={record} onSuccess={handleSuccess} shouldCloseOnUpdate={true} />
    </Popup>
  )
}
