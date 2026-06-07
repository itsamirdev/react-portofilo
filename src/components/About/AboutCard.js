import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Amirhossein Gholami </span>
            <br />
            I learn by building, and I build things that last.
            <br />
             With a background in backend development and DevOps, I work primarily with Python (Django, FastAPI), Go, and a DevOps stack centered around Docker, Gitlab CI/CD, and Linux.
             <br />
             <br />
              I've spent the past few years on real production systems reducing query times, wiring up async pipelines, and owning deployments end to end.
              <br />
               Lately I've been exploring where backend infrastructure meets modern web tech.
               <br />
                Outside of work, I write articles about Python, design patterns, and Linux because the best way to solidify what you know is to explain it clearly.
          </p>
         
          <p style={{ color: "rgb(155 126 172)" }}>
            "Talk is cheap. Show me the code."{" "}
          </p>
          <footer className="blockquote-footer">Linus Torvalds</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
