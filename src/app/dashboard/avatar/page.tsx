import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

export default function AvatarDemo() {
  return (
    <div className="flex h-[500px] justify-center items-center">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <p className="ml-4">@Shadcn/ui</p>
    </div>

  )
}
