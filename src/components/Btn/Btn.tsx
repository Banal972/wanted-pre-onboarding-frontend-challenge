import { ReactNode } from "react"

type Props = {
    children : ReactNode
    onClick? : React.MouseEventHandler<HTMLButtonElement>
    className? : string
}
function Btn({children,onClick,className} : Props) {
  return (
    <button 
        className={`border-2 py-2 pl-4 pr-12 rounded-lg text-left ${className}`}
        onClick={onClick}
    >{children}</button>
  )
}

export default Btn