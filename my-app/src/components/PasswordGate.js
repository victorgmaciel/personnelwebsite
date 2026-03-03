import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./passwordGate.css";

export default function PasswordGate({ children }) {
  const navigate = useNavigate();

  const [input, setInput] = useState("");
  const [authorized, setAuthorized] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");
  const [attempts, setAttempts] = useState(0);

  const [shake, setShake] = useState(false);
  const [flash, setFlash] = useState(false);

  const [eruption, setEruption] = useState(false);
  const [lockout, setLockout] = useState(false);

  const ERUPT_AT = 5; // change if you want
  const MAX_LEVEL = 5;

  const funnyMessages = useMemo(
    () => [
      "Nice try.",
      "Yeah… you wish.",
      "That ain’t it chief.",
      "Incorrect. But I respect the confidence.",
      "Password not found in this timeline.",
      "Close. Not really.",
      "Access denied. Fluff Bros is watching.",
      "Nope. Try again, legend.",
    ],
    []
  );

  const level = Math.min(attempts, MAX_LEVEL);

  const triggerFlash = () => {
    setFlash(true);
    setTimeout(() => setFlash(false), 260);
  };

  const triggerShake = () => {
    setShake(true);
    setTimeout(() => setShake(false), 420);
  };

  const randomFunny = () =>
    funnyMessages[Math.floor(Math.random() * funnyMessages.length)];

  const doEruptionSequence = () => {
    setEruption(true);
    setLockout(true);
    setErrorMessage("💥 The volcano has erupted. Redirecting you…");

    setTimeout(() => navigate("/"), 2200);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (lockout) return;

    const correct = input === "fluffbros18";

    if (correct) {
      setAuthorized(true);
      return;
    }

    const nextAttempts = attempts + 1;
    setAttempts(nextAttempts);
    setErrorMessage(randomFunny());
    setInput("");

    triggerFlash();
    triggerShake();

    if (nextAttempts >= ERUPT_AT) {
      setTimeout(() => doEruptionSequence(), 550);
    }
  };

  if (authorized) return children;

  return (
    <div className={`gate-container ${flash ? "bg-flash" : ""} ${eruption ? "eruption" : ""}`}>
      {/* Lava overlay */}
      {attempts >= 2 && (
        <div className={`lava-overlay lava-level-${level}`} aria-hidden="true">
          <span className="drip d1" />
          <span className="drip d2" />
          <span className="drip d3" />
          <span className="drip d4" />
          <span className="drip d5" />
        </div>
      )}

      {/* Smoke particles */}
      {attempts >= 1 && (
        <div className={`smoke smoke-level-${level}`} aria-hidden="true">
          <span className="puff p1" />
          <span className="puff p2" />
          <span className="puff p3" />
          <span className="puff p4" />
          <span className="puff p5" />
          <span className="puff p6" />
          <span className="puff p7" />
          <span className="puff p8" />
        </div>
      )}

      <div className={`gate-card ${shake ? "shake" : ""} ${eruption ? "card-eruption" : ""}`}>
        <div className={`volcano volcano-level-${level}`} aria-hidden="true">
          🌋
        </div>

        <h2>Restricted Access</h2>
        <p className="subtext">18+ Content</p>

        <form onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder={lockout ? "Too late…" : "Enter password"}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={lockout}
          />
          <button type="submit" disabled={lockout || input.length === 0}>
            {lockout ? "Locked" : "Enter"}
          </button>
        </form>

        {!!errorMessage && <p className="error-text">{errorMessage}</p>}

        {attempts > 0 && !lockout && (
          <p className="attempts">{attempts} attempt{attempts === 1 ? "" : "s"}</p>
        )}
      </div>
    </div>
  );
}