import { Loader2 } from 'lucide-react'

export default function LoadingSpinner() {
  return (
    <div
      data-testid="loading-spinner"
      className="w-sceen flex h-screen items-center justify-center"
    >
      <Loader2 className="h-10 w-10 animate-spin" />
    </div>
  )
}
