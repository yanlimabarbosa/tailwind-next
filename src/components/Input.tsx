import { ComponentProps } from "react"

type InputPrefixProps = ComponentProps<"div">
type InputControlProps = ComponentProps<"input">
type InputRootProps = ComponentProps<"div">

function InputPrefix(props: InputPrefixProps) {
  return <div {...props} />
}

function InputControl(props: InputControlProps) {
  return (
    <input
      {...props}
      className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600 dark:text-zinc-100 dark:placeholder-zinc-300"
    />
  )
}

function InputRoot(props: InputRootProps) {
  return (
    <div
      {...props}
      className="mx-1 flex w-full items-center gap-3 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm dark:border-zinc-600"
    />
  )
}

export const Input = {
  Prefix: InputPrefix,
  Control: InputControl,
  Root: InputRoot,
}

export default Input
