


const CustomButton = ({children, handler, bg}) => {
  const style = bg === 'green' ? 'bg-green-500' : 'bg-red-500'

  return (
    <div>
      <button onClick={handler} className={`m-2 ${style}`}>{children}</button>
    </div>
  )
}

export default CustomButton