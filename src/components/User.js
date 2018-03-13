import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Grid, Row, Col, Image} from 'react-bootstrap';


const User = ({ user }) => {
  const { login, avatarUrl, name } = user

  return (
    <Grid>
      <Row className="User">
        <Col md={6}>
          <Image src={avatarUrl} alt={login} circle width="180" />
            <Link to={`/${login}`}>
            <h3>
              {login} {name && <span>({name})</span>}
            </h3>
            </Link>
        </Col>
      </Row>
    </Grid>
  )
}

User.propTypes = {
  user: PropTypes.shape({
    login: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
    name: PropTypes.string
  }).isRequired
}

export default User
