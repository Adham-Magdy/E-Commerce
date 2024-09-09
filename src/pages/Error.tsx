import { Container } from "react-bootstrap"
import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom"
import "../styles/globalStyle.css"
const Error = () => { 
    const error = useRouteError(); // hold status code , status error text
    let errorStatus: number;
    let errorStatusText: string;

    /**
     * check if error is react router error by using isRouteErrorResponse
     */
    if(isRouteErrorResponse(error)){
        errorStatus = error.status;
        errorStatusText = error.statusText;
    }else{
        errorStatus=404;
        errorStatusText = "Page Not Found";
    }


  return (
    <Container className="not_found">
      <h1>{errorStatus}</h1>
      <p>{errorStatusText}</p>
      {/* Using replace method in link react dom to replace 
      current page with previous page
      */}
      <Link to={'/'} replace={true}>
      {" "}
      Looks Like you have reached to non-existent page. <br/>
      How about going back to safety?
      </Link>
    </Container>
  )
}

export default Error
