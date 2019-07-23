import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <header>
        <div className="overlay" />
        <video
          playsInline="playsinline"
          autoPlay="autoplay"
          muted="muted"
          loop="loop"
        >
          <source
            src="https://storage.googledwapis.com/coverr-main/mp4/Mt_Baker.mp4"
            type="video/mp4"
          />
        </video>
        <div className="container h-100">
          <div className="d-flex h-100 text-center align-items-center">
            <div className="w-100 text-white">
              <h1 className="display-3">Welcome to Huduma Management App</h1>
              <div className="container row" style={{ paddingTop: "20px" }}>
                <div className="container col">
                  <div className="form-group">
                    <Link to="/login" className="btn btn btn-block btn-primary">
                      Login
                    </Link>
                  </div>
                </div>
                <div className="container col">
                  <div className="form-group">
                    <Link
                      to="/register"
                      className="btn btn btn-block btn-primary"
                    >
                      Register
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
