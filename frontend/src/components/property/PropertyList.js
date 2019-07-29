import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { getProperty, deleteProperty } from "../../actions/property";

export class PropertyList extends Component {
  static propTypes = {
    property: PropTypes.array.isRequired,
    getProperty: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getProperty();
  }

  render() {
    return (
      <Fragment>
        <div className="container">
          <h1 className=" text-primary text-center visible-xs-block, hidden-xs hidden-sm-down ">
            Huduma Property List{" "}
          </h1>

          <hr className="bg-primary" style={{ borderColor: "50px solid" }} />
          <div className="row" style={{ marginTop: "50px" }}>
            {this.props.property.map(property => (
              <div className="col-lg-4 col-sm-6 mb-4" key={property.id}>
                <div className="card h-100">
                  <Link to={`/property/${property.id}/`}>
                    <img
                      style={{ height: "200px" }}
                      className="card-img-top"
                      src="http://placehold.it/700x400"
                      alt="http://placehold.it/700x400"
                    />
                  </Link>
                  <div className="card-body">
                    <h4 className="card-title">
                      <Link to={`/property/${property.id}/`}>
                        {property.name}
                      </Link>
                    </h4>
                    <p className="card-text">{property.location}</p>
                  </div>
                  <div className="card-footer text-center">
                    <Link
                      to={`/property/${property.id}/`}
                      className="btn btn-primary mr-4"
                    >
                      View More
                    </Link>
                    <button
                      style={{ alignSelf: "center" }}
                      onClick={this.props.deleteProperty.bind(
                        this,
                        property.id
                      )}
                      className="btn text-center mr-3 btn-danger "
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  property: state.property.property
});

export default connect(
  mapStateToProps,
  { getProperty, deleteProperty }
)(PropertyList);
