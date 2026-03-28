import React, { useMemo, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import leiPdf from "../comics/lei.pdf";
import JetPdf from "../comics/Jet.pdf";
import BodPdf from "../comics/Bod.pdf";
import fluffbros from "../imgs/fluffbros.png";
import PasswordGate from "../components/PasswordGate";
import "../comics.css";

export default function Comics() {
  const comics = useMemo(
    () => [
      { id: "lei", title: "Lei", src: leiPdf },
      { id: "bod", title: "Bod", src: BodPdf },
      { id: "jet", title: "Jet", src: JetPdf },
    ],
    []
  );

  const [activeIndex, setActiveIndex] = useState(null);
  const active = activeIndex === null ? null : comics[activeIndex];
  const close = () => setActiveIndex(null);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKeyDown = (e) => { if (e.key === "Escape") close(); };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeIndex]);

  return (
    <PasswordGate>
      <div className="comics-page">
        <div className="comics-header">
          <img src={fluffbros} alt="Fluff Bros" className="logo" />
          <h1 className="comics-title">Fluff Bros Comics</h1>
          <p className="comics-subtitle">Select a comic to read</p>
        </div>

        <div className="comics-grid">
          {comics.map((c, idx) => (
            <button
              key={c.id}
              className={`comics-cover comics-cover--${c.id}`}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Read ${c.title}`}
            >
              <span className="comics-cover-title">{c.title}</span>
              <span className="comics-cover-cta">Read →</span>
            </button>
          ))}
        </div>

        {active && (
          <div className="comic-modal" role="dialog" aria-modal="true">
            <button className="comic-backdrop" onClick={close} aria-label="Close" />
            <div className="comic-modal-content">
              <div className="comic-modal-top">
                <div className="comic-modal-title">{active.title}</div>
                <Button variant="outline-light" onClick={close}>✕</Button>
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
    </PasswordGate>
  );
}
