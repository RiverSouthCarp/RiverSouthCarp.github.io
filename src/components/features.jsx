import React from "react";

export const Features = (props) => {
  return (
    <div id="aboutus" className="text-center">
      <div className="about-rectangle">
        <h2>About us</h2>
      </div>

      <div className="aboutus-text">
        <p>{props.data ? props.data.paragraph : "Loading"}</p>
      </div>

      <div className="container">
        <div
          className="features-row"
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          {props.data && props.data.items
            ? props.data.items.map((d, i) => (
                <div
                  key={`${d.title}-${i}`}
                  style={{
                    flex: "1 1 calc(25% - 20px)",
                    boxSizing: "border-box",
                    textAlign: "center",
                    minWidth: "220px",
                  }}
                >
                  {d.smallimage ? (
                    <img
                      src={d.smallimage}
                      alt={d.title}
                      style={{ width: "90px", height: "90px", marginBottom: "10px" }}
                    />
                  ) : (
                    <i
                      className={d.icon}
                      style={{ fontSize: "2em", marginBottom: "10px" }}
                    ></i>
                  )}
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
