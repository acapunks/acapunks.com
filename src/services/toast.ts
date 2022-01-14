import { createToaster } from '@meforma/vue-toaster'

const toast = createToaster({ position: 'bottom-right', dismissible: false, duration: 4000 })

export function toastInfo(msg: string) {
  toast.success(msg)
}

export function toastError(msg: string) {
  toast.error(msg)
}
