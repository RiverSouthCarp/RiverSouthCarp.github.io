import React from "react";

export const Gallery = ({ data }) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="upcoming-rectangle">
          <h2>Upcoming Events</h2>
        </div>

        <div className="row">
          {data ? (
            data.map((event, i) => (
              <div key={i} className="col-md-6 col-lg-4 mb-4">
                <div className="card h-100 shadow-sm">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="card-img-top event-image"
                  />
                  <div className="card-body">
                    <h5 className="card-title event-title">{event.title}</h5>
                    <p className="card-text event-description">{event.description}</p>
                    <a
                      href={event.signupLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary event-button"
                    >
                      Sign Up
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Loading events...</p>
          )}
        </div>
      </div>
    </div>
  );
};
