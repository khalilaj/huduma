import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { addProperty } from "../../actions/property";

import { connect } from "react-redux";

class PropertyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      name: "",
      location: "",
      completion_year: "",
      property_photo: null
    };

    this.toggle = this.toggle.bind(this);
  }
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  handleImageChange = e => {
    this.setState({
      property_photo: e.target.files[0]
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const { name, location, completion_year, property_photo } = this.state;
    const formData = new FormData();

    formData.append("name", name);
    formData.append("location", location);
    formData.append("property_photo", property_photo);
    formData.append("completion_year", completion_year);
    this.props.addProperty(formData);

    this.setState({
      name: "",
      location: "",
      completion_year: "",
      property_photo: null
    });
  };

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    const { name, location, completion_year } = this.state;

    return (
      <div className="mt-3">
        <Button
          color="primary"
          style={{ marginRight: "150px" }}
          className=" text-center float-right"
          onClick={this.toggle}
        >
          Add Property
        </Button>
        <Modal
          style={{ marginTop: "50px" }}
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Add Property</ModalHeader>
          <ModalBody>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>Property Name</label>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  onChange={this.onChange}
                  value={name}
                  required
                />
              </div>
              <div className="form-group">
                <label>Property Location</label>
                <input
                  className="form-control"
                  type="text"
                  name="location"
                  onChange={this.onChange}
                  value={location}
                  required
                />
              </div>
              <div className="form-group">
                <label>Property Photo</label>
                <input
                  type="file"
                  id="system_photo"
                  accept="image/png, image/jpeg"
                  onChange={this.handleImageChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Completion Year</label>
                <input
                  className="form-control"
                  type="date"
                  name="completion_year"
                  onChange={this.onChange}
                  value={completion_year}
                  required
                />
              </div>
              <div className="form-group text-center">
                <button type="submit" className="btn btn-block btn-success">
                  Submit
                </button>
              </div>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
export default connect(
  null,
  { addProperty }
)(PropertyForm);
