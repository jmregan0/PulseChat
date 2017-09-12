import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
const TwoLevelPieChart = require('./chart');

/**
 * COMPONENT
 */
export const UserHome = (props) => {
  const { email } = props


  return (
    <div>
    <div className="charts">
      <TwoLevelPieChart />
      <TwoLevelPieChart />
    </div>

    <div className="row text-center topics">

        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Card title</h4>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
            </div>
            <div className="card-footer">
              <a href="#" className="btn btn-primary">Find Out More!</a>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card">

            <div className="card-body">
              <h4 className="card-title">Card title</h4>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto.</p>
            </div>
            <div className="card-footer">
              <a href="#" className="btn btn-primary">Find Out More!</a>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card">

            <div className="card-body">
              <h4 className="card-title">Card title</h4>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
            </div>
            <div className="card-footer">
              <a href="#" className="btn btn-primary">Find Out More!</a>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Card title</h4>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto.</p>
            </div>
            <div className="card-footer">
              <a href="#" className="btn btn-primary">Find Out More!</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
