"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./page.module.css";

const MIN_ZOOM = 0.5;
const MAX_ZOOM = 3;
const ZOOM_STEP = 0.1;

export default function MapPage() {
  const [zoom, setZoom] = useState(1.2);

  const clampZoom = (value: number) => Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, value));
  const zoomIn = () => setZoom((value) => clampZoom(Number((value + 0.2).toFixed(2))));
  const zoomOut = () => setZoom((value) => clampZoom(Number((value - 0.2).toFixed(2))));
  const resetZoom = () => setZoom(1.0);

  return (
    <div className={styles.page}>
      <header className="subpageTopRow">
        <div className="subpageHeaderMain">
          <p className={styles.eyebrow}>Frontier Atlas</p>
          <h2 className="subpageHeaderTitle">Brimstone area map</h2>
        </div>
        <Link className="subpageBackLink" href="/" aria-label="Back to Camp" title="Back to Camp" />
      </header>

      <section className={styles.controls} aria-label="Map controls">
        <div className={styles.zoomButtons}>
          <button type="button" className={styles.controlButton} onClick={zoomOut}>
            Zoom out
          </button>
          <button type="button" className={styles.controlButton} onClick={zoomIn}>
            Zoom in
          </button>
          <button type="button" className={styles.controlGhost} onClick={resetZoom}>
            Reset
          </button>
        </div>
        <label className={styles.zoomSliderLabel}>
          <span>Zoom</span>
          <input
            className={styles.zoomSlider}
            type="range"
            min={MIN_ZOOM}
            max={MAX_ZOOM}
            step={ZOOM_STEP}
            value={zoom}
            onChange={(event) => setZoom(clampZoom(Number(event.target.value)))}
            aria-label="Zoom level"
          />
          <strong>{Math.round(zoom * 100)}%</strong>
        </label>
      </section>

      <section className={styles.mapShell}>
        <div className={styles.mapScroller}>
          <div className={styles.mapSizer} style={{ width: `${zoom * 100}%` }}>
            <img
              className={styles.mapImage}
              src="/maps/hex-map.webp"
              alt="Hex crawl map of the Sunset Over Badlands frontier"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
