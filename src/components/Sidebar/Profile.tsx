import { LogOut } from "lucide-react"
import Image from "next/image"

export function Profile() {
  return (
    <div className="flex items-center gap-4">
      <Image
        src="https://github.com/yanlimabarbosa.png"
        alt="profile image"
        height={40}
        width={40}
        className="rounded-full"
      />

      <div className="flex-1 truncate">
        <div className="text-sm/5 font-semibold text-zinc-700 dark:text-zinc-200">
          Yan Lima Barbosa
        </div>
        <div className="truncate text-sm/5 text-zinc-500 dark:text-zinc-400">
          yanbarbosa@untitled.com
        </div>
      </div>

      <div className="ml-auto flex cursor-pointer rounded-md p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800">
        <LogOut className="h-5 w-5 text-zinc-400" />
      </div>
    </div>
  )
}
