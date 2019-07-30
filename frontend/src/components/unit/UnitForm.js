import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { addUnit } from "../../actions/unit";

import { connect } from "react-redux";

class UnitForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      name: "",
      no_of_bed: "",
      no_of_bathroom: "",
      status: "false",
      property: ""
    };

    this.toggle = this.toggle.bind(this);
  }
  componentDidMount() {
    this.setState({ property: this.props.propId });
  }
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  _onStatusChange = e => this.setState({ status: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const { name, no_of_bed, no_of_bathroom, status, property } = this.state;
    const formData = new FormData();

    formData.append("name", name);
    formData.append("no_of_bed", no_of_bed);
    formData.append("no_of_bathroom", no_of_bathroom);
    formData.append("status", status);
    formData.append("property", property);
    this.props.addUnit(formData);

    this.setState({
      name: "",
      no_of_bed: "",
      no_of_bathroom: "",
      status: "false",
      property: ""
    });
  };

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    const { name, no_of_bed, no_of_bathroom, status } = this.state;
    return (
      <div className="mt-3">
        <Button
          color="primary"
          style={{ marginRight: "150px" }}
          className=" text-center float-right"
          onClick={this.toggle}
        >
          Add Unit
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Add Unit</ModalHeader>
          <ModalBody>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>Unit Name</label>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  onChange={this.onChange}
                  value={name}
                />
              </div>
              <div className="form-group">
                <label>Number of Beds</label>
                <input
                  className="form-control"
                  type="number"
                  name="no_of_bed"
                  onChange={this.onChange}
                  value={no_of_bed}
                />
              </div>
              <div className="form-group">
                <label>Number of Bathrooms</label>
                <input
                  className="form-control"
                  type="number"
                  name="no_of_bathroom"
                  onChange={this.onChange}
                  value={no_of_bathroom}
                />
              </div>
              <div className="form-group">
                <label>
                  Occupation Status:
                  <select
                    style={{ marginLeft: "5px" }}
                    className="btn btn-primary dropdown-toggle"
                    value={status}
                    onChange={this._onStatusChange}
                  >
                    <option className="dropdown-item" value="true">
                      Occupied
                    </option>
                    <option className="dropdown-item" value="false">
                      Vacant
                    </option>
                  </select>
                </label>
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
  { addUnit }
)(UnitForm);
