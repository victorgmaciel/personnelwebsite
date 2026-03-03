import React, { useMemo, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import leiPdf from "../comics/lei.pdf";
import JetPdf from "../comics/Jet.pdf";
import BodPdf from "../comics/Bod.pdf";
import fluffbros from "../imgs/fluffbros.png";
import "../card.css";   
import "../button.css";
import "../comics.css"; 

export default function Comics() {
  const navigate = useNavigate();

  const comics = useMemo(
    () => [
      { id: "lei", title: "Lei", src: leiPdf },
      { id: "bod", title: "Bod", src: BodPdf },
      { id: "jet", title: "Jet", src: JetPdf }
    ]
  );

  const [activeIndex, setActiveIndex] = useState(null);
  const active = activeIndex === null ? null : comics[activeIndex];

  const close = () => setActiveIndex(null);

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") close();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeIndex]);

  return (
    <div className="comics-page">
      <div className="comics-header">
        <img src={fluffbros} alt="Fluff Bros" className="logo" />
        <h1 className="header">Comics</h1>

        <Button
          className="btn-primary-spacing"
          variant="outline-dark"
          onClick={() => navigate("/")}
        >
          Home
        </Button>
      </div>

      <div className="comics-list">
        {comics.map((c, idx) => (
          <div key={c.id} className="card comics-card">
            <Button
              className="btn-primary-spacing comics-title-btn"
              variant="outline-dark"
              onClick={() => setActiveIndex(idx)}
            >
              {c.title}
            </Button>
          </div>
        ))}
      </div>

      {/* Center modal */}
      {active && (
        <div className="comic-modal" role="dialog" aria-modal="true">
          <button className="comic-backdrop" onClick={close} aria-label="Close" />

          <div className="comic-modal-content">
            <div className="comic-modal-top">
              <div className="comic-modal-title">{active.title}</div>
              <Button variant="outline-light" onClick={close}>
                ✕
              </Button>
            </div>

            <iframe
              title={active.title}
              className="comic-pdf"
              src={`${active.src}#view=FitH&toolbar=1&navpanes=0`}
            />
          </div>
        </div>
      )}
    </div>
  );
}