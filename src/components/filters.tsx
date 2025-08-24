import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Search, ArrowUpDown } from 'lucide-react'

type FiltersProps = {
  searchTerm: string
  sortOrder: 'asc' | 'desc'
  onSearchChange: (term: string) => void
  onSortChange: (order: 'asc' | 'desc') => void
}

export default function Filters({
  searchTerm,
  sortOrder,
  onSearchChange,
  onSortChange,
}: FiltersProps) {
  return (
    <div className="sticky top-0 z-10 border-b border-gray-800 bg-black/90 px-4 py-8 backdrop-blur-sm">
      <div className="container mx-auto space-y-4 px-4">
        <div className="flex gap-4">
          <div className="relative w-full">
            <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
            <Input
              placeholder="Search characters by name..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="border-gray-700 bg-gray-900 py-6 pl-10 text-white placeholder-gray-400 focus:border-yellow-400"
            />
          </div>

          <div className="flex flex-col gap-2 sm:flex-row">
            <Select
              value={sortOrder}
              onValueChange={(value: 'asc' | 'desc') => onSortChange(value)}
            >
              <SelectTrigger className="border-gray-700 bg-gray-900 py-6 text-white">
                <ArrowUpDown className="mr-2 h-4 w-4" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="asc">Name: A to Z</SelectItem>
                <SelectItem value="desc">Name: Z to A</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  )
}
