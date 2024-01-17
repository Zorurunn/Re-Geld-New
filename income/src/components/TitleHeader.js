export const TitleHeader = ({title, addition})=>{
    return(
        <div >
        <div className="w-full p-[20px] flex justify-between" >
          <div>{title}</div>
          <div>{addition}</div>
        </div>
        <hr className="w-full" />

      </div>
    )
}