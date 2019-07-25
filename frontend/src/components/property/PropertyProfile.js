import React, { Fragment } from "react";

export default function PropertyProfile() {
  return (
    <div>
      <hr className="bg-primary" />
      <div className="container bootstrap snippet">
        <div className="row">
          <div className="col-sm-10">
            <h1>Siwaka</h1>
          </div>
          <div className="col-sm-2">
            <a href="/users" className="pull-right">
              <img
                title="profile image"
                src="https://www.realtyplus.co.ke/wp-content/uploads/2019/07/1-18-600x300.png"
              />
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3">
            {/*left col*/}
            <ul className="list-group">
              <li className="list-group-item text-muted">Profile</li>
              <li className="list-group-item text-right">
                <span className="pull-left">
                  <strong>Completion Year</strong>
                </span>{" "}
                2.13.2014
              </li>
              <li className="list-group-item text-right">
                <span className="pull-left">
                  <strong>Location</strong>
                </span>{" "}
                Siwaka
              </li>
            </ul>

            <ul className="list-group">
              <li className="list-group-item text-muted">
                Activity <i className="fa fa-dashboard fa-1x" />
              </li>
              <li className="list-group-item text-right">
                <span className="pull-left">
                  <strong>Units</strong>
                </span>{" "}
                125
              </li>
              <li className="list-group-item text-right">
                <span className="pull-left">
                  <strong>Tenants</strong>
                </span>{" "}
                13
              </li>
              <li className="list-group-item text-right">
                <span className="pull-left">
                  <strong>Likes</strong>
                </span>{" "}
                37
              </li>
            </ul>
          </div>
          {/*/col-3*/}
          <div className="col-sm-9">
            <ul className="nav nav-tabs  nav-pills mb-3" id="myTab">
              <li className=" nav-link ">
                <a href="#home" data-toggle="tab">
                  Home
                </a>
              </li>
              <li className=" nav-link ">
                <a href="#messages" data-toggle="tab">
                  Messages
                </a>
              </li>
              <li className=" nav-link ">
                <a href="#settings" data-toggle="tab">
                  Settings
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div className="tab-pane active" id="home">
                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Label 1</th>
                        <th>Label 2</th>
                        <th>Label 3</th>
                        <th>Label </th>
                        <th>Label </th>
                        <th>Label </th>
                      </tr>
                    </thead>
                    <tbody id="items">
                      <tr>
                        <td>1</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                      </tr>
                      <tr>
                        <td>7</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                      </tr>
                      <tr>
                        <td>8</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                      </tr>
                      <tr>
                        <td>9</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                      </tr>
                      <tr>
                        <td>10</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                      </tr>
                    </tbody>
                  </table>
                  <hr />
                  <div className="row">
                    <div className="col-md-4 col-md-offset-4 text-center">
                      <ul className="pagination" id="myPager" />
                    </div>
                  </div>
                </div>
                {/*/table-resp*/}
                <hr />
              </div>
              {/*/tab-pane*/}
              <div className="tab-pane" id="messages">
                <h2 />
                <ul className="list-group">
                  <li className="list-group-item text-muted">Inbox</li>
                  <li className="list-group-item text-right">
                    <a href="#" className="pull-left">
                      Here is your a link to the latest summary report from
                      the..
                    </a>{" "}
                    2.13.2014
                  </li>
                  <li className="list-group-item text-right">
                    <a href="#" className="pull-left">
                      Hi Joe, There has been a request on your account since
                      that was..
                    </a>{" "}
                    2.11.2014
                  </li>
                  <li className="list-group-item text-right">
                    <a href="#" className="pull-left">
                      Nullam sapien massaortor. A lobortis vitae, condimentum
                      justo...
                    </a>{" "}
                    2.11.2014
                  </li>
                  <li className="list-group-item text-right">
                    <a href="#" className="pull-left">
                      Thllam sapien massaortor. A lobortis vitae, condimentum
                      justo...
                    </a>{" "}
                    2.11.2014
                  </li>
                  <li className="list-group-item text-right">
                    <a href="#" className="pull-left">
                      Wesm sapien massaortor. A lobortis vitae, condimentum
                      justo...
                    </a>{" "}
                    2.11.2014
                  </li>
                  <li className="list-group-item text-right">
                    <a href="#" className="pull-left">
                      For therepien massaortor. A lobortis vitae, condimentum
                      justo...
                    </a>{" "}
                    2.11.2014
                  </li>
                  <li className="list-group-item text-right">
                    <a href="#" className="pull-left">
                      Also we, havesapien massaortor. A lobortis vitae,
                      condimentum justo...
                    </a>{" "}
                    2.11.2014
                  </li>
                  <li className="list-group-item text-right">
                    <a href="#" className="pull-left">
                      Swedish chef is assaortor. A lobortis vitae, condimentum
                      justo...
                    </a>{" "}
                    2.11.2014
                  </li>
                </ul>
              </div>
              {/*/tab-pane*/}
              <div className="tab-pane" id="settings">
                <hr />
                <form
                  className="form"
                  action="##"
                  method="post"
                  id="registrationForm"
                >
                  <div className="form-group">
                    <div className="col-xs-6">
                      <label htmlFor="first_name">
                        <h4>Property name</h4>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="first_name"
                        id="first_name"
                        placeholder="property name"
                        title="enter your first name if any."
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-xs-6">
                      <label htmlFor="last_name">
                        <h4>Property Location</h4>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="last_name"
                        id="last_name"
                        placeholder="property location"
                        title="enter your last name if any."
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="col-xs-6">
                      <label htmlFor="email">
                        <h4>Location</h4>
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="location"
                        placeholder="location"
                        title="enter a location"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="col-xs-12">
                      <br />
                      <button className="btn btn-lg btn-success" type="submit">
                        <i className="glyphicon glyphicon-ok-sign" /> Save
                      </button>
                      <button className="btn btn-lg" type="reset">
                        <i className="glyphicon glyphicon-repeat" /> Reset
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/*/tab-pane*/}
          </div>
          {/*/tab-content*/}
        </div>
        {/*/col-9*/}
      </div>
      {/*/row*/}
    </div>
  );
}
