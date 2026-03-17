"use client";

import { useEffect, useRef } from "react";

const BH = 38;

const INTACT: [number, number, number, number][] = [
  [ 20, 120, 100, BH], [120, 120,  80, BH], 
  [-26, 158,  88, BH], [ 62, 158, 100, BH], [162, 158, 100, BH], [262, 158,  60, BH],
  [ 20, 196, 100, BH], [120, 196, 100, BH], [220, 196, 100, BH], [320, 196,  74, BH],
  [-26, 234,  88, BH], [ 62, 234, 100, BH], [162, 234, 100, BH], [262, 234, 100, BH], [362, 234, 100, BH],
  [ 20, 272, 100, BH], [120, 272, 100, BH], [220, 272, 100, BH], [320, 272, 100, BH], [420, 272,  85, BH],
];

function rectPath(x: number, y: number, w: number, h: number) {
  return `M ${x},${y} L ${x+w},${y} L ${x+w},${y+h} L ${x},${y+h} Z`;
}

const NODES = [
  {x: 62,  y:158}, {x:120, y:158}, {x:162, y:158}, {x:262, y:158}, 
  {x: 62,  y:196}, {x:120, y:196}, {x:162, y:196}, {x:220, y:196}, {x:262, y:196}, {x:320, y:196},
  {x: 62,  y:234}, {x:120, y:234}, {x:162, y:234}, {x:220, y:234}, {x:262, y:234}, {x:320, y:234}, {x:362, y:234},
  {x: 62,  y:272}, {x:120, y:272}, {x:162, y:272}, {x:220, y:272}, {x:262, y:272}, {x:320, y:272}, {x:362, y:272}, {x:420, y:272},
];

const EDGES: [number,number][] = [
  [0,1],[1,2],[2,3],
  [4,5],[5,6],[6,7],[7,8],[8,9],
  [10,11],[11,12],[12,13],[13,14],[14,15],[15,16],
  [17,18],[18,19],[19,20],[20,21],[21,22],[22,23],[23,24],
  [0,4],[2,6],[3,8],
  [5,11],[7,13],[9,15],
  [10,17],[12,19],[14,21],[16,23],
];

// Pre-compute edge lengths for constant velocity
const EDGE_LENS = EDGES.map(([a,b]) => {
  const dx = NODES[b].x - NODES[a].x;
  const dy = NODES[b].y - NODES[a].y;
  return Math.sqrt(dx*dx + dy*dy);
});

const ADJ: {nb:number;ei:number}[][] = NODES.map(() => []);
EDGES.forEach(([a,b], ei) => {
  ADJ[a].push({nb:b,ei});
  ADJ[b].push({nb:a,ei});
});

// Constant speed in px/ms — same velocity regardless of edge length
const SPEED_PX_MS = 0.18; // px per ms — gentle pace
const TRAIL_PTS   = 30;  // how many history points to keep for the tail

export default function BrickWall() {
  const dimRefs  = useRef<(SVGPathElement | null)[]>([]);
  const trailRef = useRef<SVGPolylineElement | null>(null);
  const glowRef  = useRef<SVGPolylineElement | null>(null);

  useEffect(() => {
    // Draw-in brick outlines staggered
    dimRefs.current.forEach((el, i) => {
      if (!el) return;
      const len = el.getTotalLength();
      el.style.strokeDasharray  = `${len}`;
      el.style.strokeDashoffset = `${len}`;
      setTimeout(() => {
        el.style.transition = `stroke-dashoffset 0.5s cubic-bezier(0.16,1,0.3,1)`;
        el.style.strokeDashoffset = "0";
      }, 60 + i * 38);
    });

    const trail = trailRef.current;
    const glow  = glowRef.current;
    if (!trail || !glow) return;

    const visitCount: number[] = new Array(EDGES.length).fill(0);
    const history: {x:number;y:number}[] = [];

    let curNode  = 1;
    let prevNode = -1;
    let nextNode: number;
    let curEdge:  number;
    // distTravelled: px along current edge (0 → EDGE_LENS[curEdge])
    let distTravelled = 0;
    let lastTs        = 0;
    let raf:          number;

    function pickNext(from: number, avoid: number) {
      const opts = ADJ[from].filter(c => ADJ[from].length === 1 || c.nb !== avoid);
      const unvisited = opts.filter(c => visitCount[c.ei] === 0);
      const pool = unvisited.length > 0 ? unvisited : opts;
      return pool[Math.floor(Math.random() * pool.length)];
    }

    // Init first edge
    const first = pickNext(curNode, prevNode);
    nextNode = first.nb;
    curEdge  = first.ei;

    function frame(ts: number) {
      if (!lastTs) lastTs = ts;
      const dt = Math.min(ts - lastTs, 50); // cap at 50ms to avoid jumps on tab switch
      lastTs   = ts;

      // Advance by constant speed — no easing at all
      distTravelled += SPEED_PX_MS * dt;

      // Consume as many edges as needed in one frame (handles fast movement)
      while (distTravelled >= EDGE_LENS[curEdge]) {
        distTravelled -= EDGE_LENS[curEdge];
        visitCount[curEdge]++;
        prevNode = curNode;
        curNode  = nextNode;
        if (visitCount.every(v => v > 0)) visitCount.fill(0);
        const nxt = pickNext(curNode, prevNode);
        nextNode = nxt.nb;
        curEdge  = nxt.ei;
      }

      // Linear interpolation — no easing
      const t  = EDGE_LENS[curEdge] > 0 ? distTravelled / EDGE_LENS[curEdge] : 0;
      const hx = NODES[curNode].x + (NODES[nextNode].x - NODES[curNode].x) * t;
      const hy = NODES[curNode].y + (NODES[nextNode].y - NODES[curNode].y) * t;

      // Push head into history
      history.push({ x: hx, y: hy });
      if (history.length > TRAIL_PTS) history.shift();

      const pts = history.map(p => `${p.x},${p.y}`).join(" ");
      if (trail && glow) {
        trail.setAttribute("points", pts);
        glow.setAttribute("points",  pts);
      }

      raf = requestAnimationFrame(frame);
    }

    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0 flex items-center justify-end overflow-hidden bg-black">
      <svg
        viewBox="-36 108 560 214"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[60%] lg:w-[45%] h-auto mr-4"
        style={{ transform: "scaleX(-1)" }}
      >
        <defs>
          <filter id="sg" x="-300%" y="-300%" width="700%" height="700%">
            <feGaussianBlur stdDeviation="3" result="blur"/>
            <feMerge>
              <feMergeNode in="blur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* ── Inner border (thin line inset) ── */}
        {INTACT.map(([x,y,w,h], i) => (
          <rect
            key={`inner-${i}`}
            x={x + 3}
            y={y + 3}
            width={w - 6}
            height={h - 6}
            fill="none"
            stroke="#7c7d7e"
            strokeWidth="0.5"
            opacity="0.25"
          />
        ))}

        {/* ── Static dim brick outlines ── */}
        {INTACT.map(([x,y,w,h], i) => (
          <path
            key={`d-${i}`}
            ref={el => { dimRefs.current[i] = el; }}
            d={rectPath(x,y,w,h)}
            stroke="#7c7d7e"
            strokeWidth="0.8"
            fill="none"
            strokeLinecap="square"
            strokeLinejoin="miter"
            opacity="0.35"
          />
        ))}

        {/* ── Trail glow bloom ── */}
        <polyline
          ref={glowRef}
          points=""
          stroke="#69AE44"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.18"
          filter="url(#sg)"
        />

        {/* ── Trail sharp core ── */}
        <polyline
          ref={trailRef}
          points=""
          stroke="#69AE44"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="1"
        />
      </svg>
    </div>
  );
}