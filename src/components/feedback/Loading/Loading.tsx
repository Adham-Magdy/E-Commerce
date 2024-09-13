import { TLoading } from "../../../types/shared"

// Component Props
type TLoadingProps={
    status:TLoading;
    error:string|null;
    children:React.ReactNode;
}
const Loading = ({status,error,children}:TLoadingProps) => {
    // check loading status
    if(status==="pending"){
        return <p>loading please wait</p>
    }
    if(status==="failed"){
        return <p>{error}</p>

    }
  return (
    <>
      {children}
    </>
  )
}

export default Loading
