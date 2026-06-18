/* ─────────────────────────────────────────────────────────────────────────────
   Ultron — Agent Mark.
   The Teambridge AI agent's generative identity mark, ported from the "Ultron
   Motion Identity" canvas study. A small <canvas> that draws a 3D sphere of
   cells riding tilted rings (orbit), a connected presence sphere (circle), a
   radial spark (lines), and more. Used for the loaders (orbit) and identity
   slots (circle) in place of the generic AILoader.

   `tone="light"` is the default — it draws dark-slate cells directly (glow off)
   on the transparent canvas (see pal('light')). No render-on-black + luminance-
   key pass: drawCore lays down a soft non-glow aura so the mark still reads crisp
   on any surface (matching the latest "Ultron Motion Identity" light style).
   ───────────────────────────────────────────────────────────────────────────── */

import { useEffect, useRef } from 'react';

export type AgentMarkKind = 'orbit' | 'circle' | 'lines' | 'magnetic' | 'pulse' | 'bands';
export type AgentMarkTone = 'light' | 'dark' | 'onblack' | 'tint';
export type AgentMarkState = 'active' | 'idle' | 'static';

interface AgentMarkProps {
  /** Which mark to draw. `orbit` = processing/live, `circle` = presence/identity. */
  mark?: AgentMarkKind;
  /** Rendered px (square). */
  size?: number;
  /** Palette. `light` (default) = dark cells, no glow — for light surfaces. */
  tone?: AgentMarkTone;
  /** `active` animates, `idle` slows, `static` paints one frozen frame. */
  state?: AgentMarkState;
  /** Animation speed multiplier (0.4–2). */
  motionSpeed?: number;
  /** Accent for glow tones. */
  accent?: string;
  /** Overrides the mark's cell/core fill with any CSS color (hex, rgb(), or a
   *  `var(--token)`). Resolved to RGB for the canvas. Use to tint a mark to a
   *  semantic token — e.g. a settled case in `var(--color-content-disabled)`. */
  color?: string;
  /** Soft halo / drop-shadow behind the core (default true). Set false for dense
   *  nav rows where the glow muddies the mark against the row background. */
  coreHalo?: boolean;
  'aria-label'?: string;
  className?: string;
}

type Pal = { dot: string; core: string; accent: string; glow: boolean };

const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));
const smooth01 = (x: number) => { x = clamp(x, 0, 1); return x * x * (3 - 2 * x); };
// smaller marks need proportionally larger cells to stay legible
const cellK = (sz: number) => (sz >= 48 ? 1 : sz >= 32 ? 1.2 : sz >= 24 ? 1.5 : sz >= 20 ? 1.85 : 2.3);

function hexRGB(hex: string) {
  const h = (hex || '#96B9FF').replace('#', '');
  const n = parseInt(h.length === 3 ? h.split('').map(c => c + c).join('') : h, 16);
  return ((n >> 16) & 255) + ',' + ((n >> 8) & 255) + ',' + (n & 255);
}

// Resolve any CSS color (hex, rgb(), or var(--token)) to an "r,g,b" string for
// the canvas. CSS variables are looked up off the element; the result is then
// normalised through the 2D context's color parser.
function cssToRGB(ctx: CanvasRenderingContext2D, el: HTMLElement, color: string): string {
  let value = color.trim();
  const varMatch = value.match(/var\(\s*(--[^,)]+)/);
  if (varMatch) value = getComputedStyle(el).getPropertyValue(varMatch[1]).trim() || value;
  if (value.startsWith('#')) return hexRGB(value);
  // Let the canvas normalise named/rgb()/hsl() colors, then pull the channels.
  ctx.fillStyle = '#000';
  ctx.fillStyle = value;
  const resolved = ctx.fillStyle as string;
  if (resolved.startsWith('#')) return hexRGB(resolved);
  const nums = resolved.match(/[\d.]+/g);
  return nums && nums.length >= 3 ? `${+nums[0]},${+nums[1]},${+nums[2]}` : '26,30,38';
}

function pal(tone: AgentMarkTone, accent: string): Pal {
  if (tone === 'light') return { dot: '26,30,38', core: '34,40,52', accent: '68,108,255', glow: false };
  if (tone === 'onblack') return { dot: '237,243,252', core: '255,255,255', accent, glow: true };
  if (tone === 'tint') return { dot: '233,240,255', core: '255,255,255', accent: '176,201,255', glow: true };
  return { dot: '228,238,252', core: '248,251,255', accent, glow: true };
}

interface Ctx { ctx: CanvasRenderingContext2D; w: number; h: number; dpr: number; size: number; state: AgentMarkState; coreHalo: boolean; }

function drawCore(e: Ctx, T: number, P: Pal) {
  const { ctx, w, h } = e, cx = w / 2, cy = h / 2, R = Math.min(w, h) * 0.39;
  const coreR = R * 0.2 * (0.9 + 0.14 * Math.sin(T * 1.5));
  const small = e.size < 24;
  // glow / drop-shadow halo — removed at icon sizes under 24px, or when the
  // caller opts out (coreHalo=false) for dense surfaces like nav rows.
  if (!small && e.coreHalo) {
    if (P.glow) {
      const cg = ctx.createRadialGradient(cx, cy, 0, cx, cy, coreR * 3);
      cg.addColorStop(0, 'rgba(' + P.core + ',0.55)');
      cg.addColorStop(1, 'rgba(' + P.accent + ',0)');
      ctx.fillStyle = cg; ctx.beginPath(); ctx.arc(cx, cy, coreR * 3, 0, 6.2832); ctx.fill();
    } else {
      const cg = ctx.createRadialGradient(cx, cy, 0, cx, cy, coreR * 3.2);
      cg.addColorStop(0, 'rgba(' + P.core + ',0.34)');
      cg.addColorStop(0.5, 'rgba(' + P.core + ',0.13)');
      cg.addColorStop(1, 'rgba(' + P.core + ',0)');
      ctx.fillStyle = cg; ctx.beginPath(); ctx.arc(cx, cy, coreR * 3.2, 0, 6.2832); ctx.fill();
    }
  }
  // solid core rendered with a soft layer blur
  ctx.save();
  ctx.filter = 'blur(' + Math.max(0.4, coreR * 0.22).toFixed(2) + 'px)';
  ctx.fillStyle = 'rgba(' + P.core + ',' + (P.glow ? 1 : 0.95) + ')';
  ctx.beginPath(); ctx.arc(cx, cy, Math.max(0.8, coreR), 0, 6.2832); ctx.fill();
  ctx.restore();
}

function drawOrbit(e: Ctx, T: number, P: Pal) {
  const { ctx, w, h } = e, cx = w / 2, cy = h / 2, R = Math.min(w, h) * 0.39;
  const active = e.state !== 'idle';
  const ringDefs = [[1.35, 0.3], [1.05, 2.4]];
  const yaw = T * (active ? 0.5 : 0.16);
  const tilt = 0.42, ct = Math.cos(tilt), st = Math.sin(tilt);
  const cy0 = Math.cos(yaw), sy0 = Math.sin(yaw);
  const RR = R * 0.96;
  const proj = (x: number, y: number, z: number) => {
    const X = x * cy0 + z * sy0, Z = -x * sy0 + z * cy0, Y = y;
    const Y2 = Y * ct - Z * st, Z2 = Y * st + Z * ct;
    const d = (Z2 + 1) / 2, persp = 0.82 + 0.18 * d;
    return { x: cx + X * RR * persp, y: cy + Y2 * RR * persp, d };
  };
  const ringPt = (theta: number, inc: number, az: number) => {
    const x = Math.cos(theta), y = Math.sin(theta) * Math.cos(inc), z = Math.sin(theta) * Math.sin(inc);
    return [x * Math.cos(az) + z * Math.sin(az), y, -x * Math.sin(az) + z * Math.cos(az)];
  };
  ctx.save();
  ctx.globalCompositeOperation = P.glow ? 'lighter' : 'source-over';
  ctx.lineCap = 'round'; ctx.lineJoin = 'round';
  const SEG = e.size >= 24 ? 64 : 40;
  const cspd = active ? 0.9 : 0.3;
  const NT = SEG, span = 6.2832;
  const heads: { ptOf: (a: number) => { x: number; y: number; d: number }; head: number; dir: number; hp: { x: number; y: number; d: number } }[] = [];
  for (let i = 0; i < ringDefs.length; i++) {
    const inc = ringDefs[i][0], az = ringDefs[i][1];
    const ptOf = (ang: number) => { const p3 = ringPt(ang, inc, az); return proj(p3[0], p3[1], p3[2]); };
    const dir = i % 2 ? 1 : -1;
    const head = i * 2.0 + dir * T * cspd;
    heads.push({ ptOf, head, dir, hp: ptOf(head) });
  }
  heads.sort((a, b) => a.hp.d - b.hp.d);
  for (const hd of heads) {
    const lw = Math.max(1.2, R * 0.05) * (0.75 + 0.35 * hd.hp.d);
    const B = 9, sub = Math.ceil(NT / B);
    ctx.lineCap = 'butt';
    for (let b = 0; b < B; b++) {
      const f0 = b / B, f1 = (b + 1) / B, fade = 1 - (f0 + f1) / 2;
      const la = (0.66 * fade * fade) * (0.45 + 0.55 * hd.hp.d);
      ctx.strokeStyle = 'rgba(' + P.dot + ',' + la + ')';
      ctx.lineWidth = lw;
      ctx.beginPath();
      for (let s = 0; s <= sub; s++) {
        const f = f0 + (f1 - f0) * (s / sub);
        const p = hd.ptOf(hd.head - hd.dir * f * span);
        if (s === 0) ctx.moveTo(p.x, p.y); else ctx.lineTo(p.x, p.y);
      }
      ctx.stroke();
    }
    ctx.lineCap = 'round';
    const r = Math.max(0.9, R * 0.062 * cellK(e.size) * (0.65 + 0.5 * hd.hp.d));
    const al = 0.45 + 0.55 * hd.hp.d;
    if (P.glow) {
      const bg = ctx.createRadialGradient(hd.hp.x, hd.hp.y, 0, hd.hp.x, hd.hp.y, r * 4.5);
      bg.addColorStop(0, 'rgba(' + P.accent + ',' + (0.3 * al) + ')');
      bg.addColorStop(1, 'rgba(' + P.accent + ',0)');
      ctx.fillStyle = bg; ctx.beginPath(); ctx.arc(hd.hp.x, hd.hp.y, r * 4.5, 0, 6.2832); ctx.fill();
    }
    ctx.fillStyle = 'rgba(' + P.dot + ',' + Math.min(1, al + 0.1) + ')';
    ctx.beginPath(); ctx.arc(hd.hp.x, hd.hp.y, r, 0, 6.2832); ctx.fill();
  }
  drawCore(e, T, P);
  ctx.restore();
}

function drawCircle(e: Ctx, T: number, P: Pal) {
  const { ctx, w, h } = e, cx = w / 2, cy = h / 2, R = Math.min(w, h) * 0.39;
  const active = e.state !== 'idle';
  const N = e.size >= 32 ? 10 : (e.size >= 20 ? 7 : 5);
  const rr = R * 0.82;
  const yaw = active ? T * 0.55 : T * 0.22, cyaw = Math.cos(yaw), syaw = Math.sin(yaw);
  const tilt = 0.42, ct = Math.cos(tilt), stt = Math.sin(tilt);
  ctx.save();
  ctx.globalCompositeOperation = P.glow ? 'lighter' : 'source-over';
  const cells: { x: number; y: number; d: number; k: number; vec: number[] }[] = [];
  for (let k = 0; k < N; k++) {
    const yy = 1 - (k + 0.5) / N * 2, ringr = Math.sqrt(Math.max(0, 1 - yy * yy)), phi = k * 2.39996;
    const px = Math.cos(phi) * ringr, py = yy, pz = Math.sin(phi) * ringr;
    const X = px * cyaw + pz * syaw, Zr = -px * syaw + pz * cyaw;
    const Y2 = py * ct - Zr * stt, Z2 = py * stt + Zr * ct;
    const d = (Z2 + 1) / 2, persp = 0.82 + 0.18 * d;
    cells.push({ x: cx + X * rr * persp, y: cy + Y2 * rr * persp, d, k, vec: [X, Y2, Z2] });
  }
  cells.sort((p, q) => p.d - q.d);
  const projV = (v: number[]) => { const dd = (v[2] + 1) / 2, ps = 0.82 + 0.18 * dd; return { x: cx + v[0] * rr * ps, y: cy + v[1] * rr * ps, d: dd }; };
  const slerp = (a: number[], b: number[], tt: number) => {
    let dot = a[0] * b[0] + a[1] * b[1] + a[2] * b[2]; dot = clamp(dot, -1, 1);
    const om = Math.acos(dot);
    if (om < 1e-3) return [a[0], a[1], a[2]];
    const s = Math.sin(om), w0 = Math.sin((1 - tt) * om) / s, w1 = Math.sin(tt * om) / s;
    return [a[0] * w0 + b[0] * w1, a[1] * w0 + b[1] * w1, a[2] * w0 + b[2] * w1];
  };
  const byK: Record<number, { x: number; y: number; d: number; k: number; vec: number[] }> = {};
  for (const c of cells) byK[c.k] = c;
  const hopRate = active ? 1.4 : 0.5;
  const phase = T * hopRate, hopN = Math.floor(phase), frac = phase - hopN;
  const VIS = 5, ARC = 12;
  ctx.lineCap = 'round'; ctx.lineJoin = 'round';
  const streams = [{ seed: 1.7 }, { seed: 9.3 }, { seed: 21.5 }, { seed: 34.8 }];
  for (const stream of streams) {
    const ix = (i: number) => { const x = Math.sin(i * 12.9898 + stream.seed) * 43758.5453; return Math.floor((x - Math.floor(x)) * N); };
    const nodeAt = (i: number) => { let a = ix(i); if (a === ix(i - 1)) a = (a + 1) % N; return byK[a]; };
    for (let a = VIS - 1; a >= 0; a--) {
      const i = hopN - a; if (i < 0) continue;
      const A = nodeAt(i), Bn = nodeAt(i + 1); if (!A || !Bn || A === Bn) continue;
      const p = (a === 0) ? frac : 1;
      const tip = projV(slerp(A.vec, Bn.vec, p));
      const dmid = (A.d + tip.d) / 2;
      const ageFade = (a === 0) ? 1 : clamp(1 - (a - 1 + frac) / (VIS - 1), 0, 1);
      const la = (P.glow ? 0.6 : 0.72) * ageFade * (0.4 + 0.6 * dmid);
      if (la < 0.02) continue;
      const lg = ctx.createLinearGradient(A.x, A.y, tip.x, tip.y);
      lg.addColorStop(0, 'rgba(' + P.dot + ',0)');
      lg.addColorStop(1, 'rgba(' + P.dot + ',' + la + ')');
      ctx.strokeStyle = lg;
      ctx.lineWidth = Math.max(1.2, R * 0.045) * (0.7 + 0.4 * dmid);
      ctx.beginPath();
      for (let s = 0; s <= ARC; s++) {
        const v = projV(slerp(A.vec, Bn.vec, p * (s / ARC)));
        if (s === 0) ctx.moveTo(v.x, v.y); else ctx.lineTo(v.x, v.y);
      }
      ctx.stroke();
    }
  }
  for (const c of cells) {
    const tw = 0.5 + 0.5 * Math.sin(T * 2.0 - c.k * 0.9);
    const b = (0.18 + 0.82 * c.d) * (0.62 + 0.38 * tw);
    const r = R * 0.058 * cellK(e.size) * (0.6 + 0.5 * c.d);
    if (P.glow) {
      const bloomR = r * 4;
      const g = ctx.createRadialGradient(c.x, c.y, 0, c.x, c.y, bloomR);
      g.addColorStop(0, 'rgba(' + P.accent + ',' + (0.24 * b) + ')');
      g.addColorStop(1, 'rgba(' + P.accent + ',0)');
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(c.x, c.y, bloomR, 0, 6.2832); ctx.fill();
    }
    ctx.fillStyle = 'rgba(' + P.dot + ',' + (0.32 + 0.68 * b) + ')';
    ctx.beginPath(); ctx.arc(c.x, c.y, Math.max(0.9, r), 0, 6.2832); ctx.fill();
  }
  drawCore(e, T, P);
  ctx.restore();
}

function drawLines(e: Ctx, T: number, P: Pal) {
  const { ctx, w, h, dpr } = e, cx = w / 2, cy = h / 2, R = Math.min(w, h) * 0.39;
  const active = e.state !== 'idle';
  const N = e.size >= 32 ? 11 : 7;
  const inner = R * 0.12, gap = R * 0.12;
  const breath = smooth01(0.5 + 0.5 * Math.sin(T * (active ? 1.0 : 0.55)));
  const ev = active ? (0.34 + 0.66 * breath) : (0.5 + 0.12 * breath);
  const lw = Math.max(1 * dpr, R * 0.052);
  const yaw = -T * (active ? 0.5 : 0.16), cyaw = Math.cos(yaw), syaw = Math.sin(yaw);
  const tilt = 0.42, ct = Math.cos(tilt), stt = Math.sin(tilt);
  ctx.save();
  ctx.globalCompositeOperation = P.glow ? 'lighter' : 'source-over';
  ctx.lineCap = 'round';
  const L = R * (0.52 + 0.44 * ev), Ls = Math.max(inner + lw, L - gap);
  const spokes: { x0: number; y0: number; x1: number; y1: number; cx2: number; cy2: number; d: number; shim: number }[] = [];
  for (let k = 0; k < N; k++) {
    const yy = 1 - (k + 0.5) / N * 2, rr = Math.sqrt(Math.max(0, 1 - yy * yy)), phi = k * 2.39996;
    const dx = Math.cos(phi) * rr, dy = yy, dz = Math.sin(phi) * rr;
    const X = dx * cyaw + dz * syaw, Zr = -dx * syaw + dz * cyaw;
    const Y2 = dy * ct - Zr * stt, Z2 = dy * stt + Zr * ct;
    const d = (Z2 + 1) / 2, persp = 0.82 + 0.18 * d;
    const shim = 0.5 + 0.5 * Math.sin(T * 1.6 + k * 1.3);
    spokes.push({ x0: cx + X * inner * persp, y0: cy + Y2 * inner * persp, x1: cx + X * Ls * persp, y1: cy + Y2 * Ls * persp, cx2: cx + X * L * persp, cy2: cy + Y2 * L * persp, d, shim });
  }
  spokes.sort((a, b) => a.d - b.d);
  for (const s of spokes) {
    const la = (active ? (0.4 + 0.45 * ev) : 0.6) * (0.4 + 0.6 * s.d) * (0.78 + 0.22 * s.shim);
    const lg = ctx.createLinearGradient(s.x0, s.y0, s.x1, s.y1);
    lg.addColorStop(0, 'rgba(' + P.dot + ',' + la + ')');
    lg.addColorStop(1, 'rgba(' + P.accent + ',0)');
    ctx.strokeStyle = lg; ctx.lineWidth = lw * (0.7 + 0.5 * s.d);
    ctx.beginPath(); ctx.moveTo(s.x0, s.y0); ctx.lineTo(s.x1, s.y1); ctx.stroke();
    const tipR = Math.max(0.9, R * 0.058 * cellK(e.size) * (0.85 + 0.3 * ev) * (0.6 + 0.5 * s.d));
    if (P.glow) {
      const bg = ctx.createRadialGradient(s.cx2, s.cy2, 0, s.cx2, s.cy2, tipR * 5);
      bg.addColorStop(0, 'rgba(' + P.accent + ',' + (0.26 * la) + ')');
      bg.addColorStop(1, 'rgba(' + P.accent + ',0)');
      ctx.fillStyle = bg; ctx.beginPath(); ctx.arc(s.cx2, s.cy2, tipR * 5, 0, 6.2832); ctx.fill();
    }
    ctx.fillStyle = 'rgba(' + P.dot + ',' + Math.min(1, la + 0.1) + ')';
    ctx.beginPath(); ctx.arc(s.cx2, s.cy2, tipR, 0, 6.2832); ctx.fill();
  }
  drawCore(e, T, P);
  ctx.restore();
}

function drawMagnetic(e: Ctx, T: number, P: Pal) {
  const { ctx, w, h } = e, cx = w / 2, cy = h / 2, R = Math.min(w, h) * 0.39;
  const active = e.state !== 'idle';
  const N = e.size >= 32 ? 58 : (e.size >= 20 ? 32 : 18);
  const rr = R * 0.78;
  const yaw = active ? T * 0.5 : T * 0.2, cyaw = Math.cos(yaw), syaw = Math.sin(yaw);
  const tilt = 0.42, ct = Math.cos(tilt), stt = Math.sin(tilt);
  const sp = active ? 1 : 0.4;
  const mk = (th: number, ph: number) => [Math.sin(th) * Math.cos(ph), Math.cos(th), Math.sin(th) * Math.sin(ph)];
  const A = [mk(1.4 + 0.5 * Math.sin(T * 0.5 * sp), T * 0.6 * sp), mk(1.9 + 0.4 * Math.cos(T * 0.4 * sp), -T * 0.5 * sp + 2.0)];
  const sig = 0.36;
  ctx.save();
  ctx.globalCompositeOperation = P.glow ? 'lighter' : 'source-over';
  const dots: { x: number; y: number; d: number; inf: number }[] = [];
  for (let k = 0; k < N; k++) {
    const yy = 1 - (k + 0.5) / N * 2, ringr = Math.sqrt(Math.max(0, 1 - yy * yy)), phi = k * 2.39996;
    const px = Math.cos(phi) * ringr, py = yy, pz = Math.sin(phi) * ringr;
    let inf = 0;
    for (const at of A) { const dx = px - at[0], dy = py - at[1], dz = pz - at[2]; inf += Math.exp(-(dx * dx + dy * dy + dz * dz) / (2 * sig * sig)); }
    inf = clamp(inf, 0, 1);
    const X = px * cyaw + pz * syaw, Zr = -px * syaw + pz * cyaw;
    const Y2 = py * ct - Zr * stt, Z2 = py * stt + Zr * ct;
    const d = (Z2 + 1) / 2, persp = 0.82 + 0.18 * d;
    dots.push({ x: cx + X * rr * persp, y: cy + Y2 * rr * persp, d, inf });
  }
  dots.sort((p, q) => p.d - q.d);
  for (const dt of dots) {
    const ex = smooth01(dt.inf);
    const r = Math.max(0.6, R * (0.05 + 0.06 * ex) * cellK(e.size) * (0.55 + 0.5 * dt.d));
    const al = (0.16 + 0.84 * dt.d) * (0.45 + 0.55 * ex);
    const f = Math.abs(2 * dt.d - 1);
    const ang = Math.atan2(dt.y - cy, dt.x - cx);
    ctx.fillStyle = 'rgba(' + P.dot + ',' + al + ')';
    ctx.beginPath();
    ctx.ellipse(dt.x, dt.y, Math.max(0.35, r * f), r, ang, 0, 6.2832);
    ctx.fill();
  }
  drawCore(e, T, P);
  ctx.restore();
}

// Pulse — waiting / ready: only the breathing core, no cells or trails.
function drawPulse(e: Ctx, T: number, P: Pal) {
  drawCore(e, T, P);
}

const DRAW: Record<AgentMarkKind, (e: Ctx, T: number, P: Pal) => void> = {
  orbit: drawOrbit, circle: drawCircle, lines: drawLines, magnetic: drawMagnetic, pulse: drawPulse, bands: drawCircle,
};

export function AgentMark({
  mark = 'orbit', size = 16, tone = 'light', state = 'active',
  motionSpeed = 1, accent = '#96B9FF', color, coreHalo = true, className, 'aria-label': ariaLabel,
}: AgentMarkProps) {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = el.getContext('2d');
    if (!ctx) return;

    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const W = Math.max(2, Math.round(size * dpr)), H = W;
    el.width = W; el.height = H;
    const e: Ctx = { ctx, w: W, h: H, dpr, size, state, coreHalo };
    // Each tone paints directly with its palette. `light` resolves to dark-slate
    // cells with glow off (see pal()), so the mark draws crisp on the transparent
    // canvas — no render-on-black + luminance-key pass.
    const P = pal(tone, hexRGB(accent));
    // Optional explicit tint — recolors the cells/core (e.g. a settled case in
    // content-disabled) while keeping the tone's glow behaviour.
    if (color) { const rgb = cssToRGB(ctx, el, color); P.dot = rgb; P.core = rgb; }
    const draw = DRAW[mark] ?? drawOrbit;

    const paint = (T: number) => {
      ctx.clearRect(0, 0, W, H);
      const tt = state === 'static' ? 0.62 : T;
      draw(e, tt, P);
    };

    const reduced = (() => { try { return window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch { return false; } })();
    const sp = clamp(motionSpeed, 0.4, 2);

    // first frame immediately (rAF can be throttled before on-screen)
    paint(1.15);
    if (reduced || state === 'static') return;

    let raf = 0;
    const loop = (now: number) => { paint((now / 1000) * sp); raf = requestAnimationFrame(loop); };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [mark, size, tone, state, motionSpeed, accent, color, coreHalo]);

  return (
    <canvas
      ref={ref}
      width={size}
      height={size}
      style={{ width: size, height: size, display: 'block', flexShrink: 0 }}
      className={className}
      role="img"
      aria-label={ariaLabel}
    />
  );
}
