import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import "../styles/globalStyle.css"
const Error = () => {
  return (
    <Container className="not_found">
      <h1>404</h1>
      <p>Page Not Found</p>
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
