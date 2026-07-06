window.CyberPathComponent = (DCLogic) => class CyberPathApp extends DCLogic {
  state = { bootStage: 0, view: 'boot', sheetId: null, stubId: null, ctaHover: false, fieldEnter: false, theme: 'light', legendOpen: false,
    bitsText: '', bitsIndex: 0, bitsNote: '',
    bitsRound:0, bitsValue:0, bitsFlips:0, bitsCalibrationFlips:0, bitsLocks:0, bitsLocked:false, bitsLost:false, bitsTimer:0, bitsElapsed:0,
    bitsTimedIndex:0, bitsLastFlip:'AWAITING FIRST FLIP', bitsMessageReceived:'PAY BOB $900', bitsCorruptIndex:-1,
    bitsCorruptionLevel:0, bitsEnd:false, bitsHint:false, bitsRoundElapsed:0,
    iwMsg: 'hi bob, meet at 8?', iwBeat: 0, iwStarted: false, iwMoving: false, iwDone: false,
    symMessage:'', symKey:'', symSealed:false, symSealedMessage:'', symSealedKey:'', symSealProgress:0,
    symResult:'', symFailure:false, symIntercepted:false, symMutation:1, symFriendHasKey:true,
    haText:'PAY BOB $100', haChapter:0, haGround:false, haNudged:false, haReversed:false, haBusy:false,
    rsaChapter:0, rsaShut:false, rsaReject:false, rsaSealed:false, rsaOpenState:null, rsaPublished:false, rsaEaves:0,
    sgMessage:'ALICE: SEND $500 TO BOB', sgSigned:false, sgSignedHash:'', sgSignedMessage:'', sgVerifier:'alice', sgVerifyResult:null, sgForgeTried:false,
    tlSequence:[], tlFailed:null, tlSecure:false, tlAttacker:false, tlMitm:false,
    qbBit:0, qbAngle:90, qbZeros:0, qbOnes:0, qbTrapSprung:false, qbPhase:180, qbClassicalTries:0, qbClassicalResult:'—', qbQuantumSolved:false,
    qrRevealed:false, qrTries:0, qrBruteActive:false, qrQuantumRun:false, qrCascade:false,
    pqBasis:'bad', pqGuessWrong:false, pqQuantumFizzled:false, pqDecoded:false,
    pqChapter:0, pqSkew:3, pqGoodBasis:[[1.6,0.2],[0.2,1.6]], pqTarget:[2.3,1.4], pqShowTruth:false, pqLanded:null, pqNearest:null,
    pqIntroSeen:false, pqCh0Done:false, pqTriedGood:false, pqTriedBad:false };

  // ---------- graph ----------
  buildGraph() {
    const W = { root:[186,50], head:[192,36], node:[128,54], live:[176,66], synth:[176,58] };
    // rows sit on a 100px pitch (auto-fit can grow a box to ~68px, leaving 30px+
    // clear); section heads get 110px of approach so the arcs read as convergence
    const raw = [
      // PHASE 0 — FOUNDATIONS
      ['bits','node',64,80,'BITS & BYTES','binary / data fundamentals','live',100,'FOUNDATIONS'],
      ['internet','node',296,80,'HOW THE INTERNET WORKS','protocols / routing / trust','live',100,'FOUNDATIONS'],

      // PHASE 1 — BUILD THE SYSTEM
      ['crypto','head',180,375,'CRYPTOGRAPHY','the math of secrecy & trust','detected',54,'CRYPTO'],
      ['symmetric','node',64,470,'SYMMETRIC ENCRYPTION','AES playground','live',100,'CRYPTO'],
      ['hashing','node',296,470,'HASHING','collision / change demo','live',100,'CRYPTO'],
      ['rsa','node',64,570,'PUBLIC-KEY CRYPTOGRAPHY','RSA / key exchange','live',100,'CRYPTO'],
      ['sig','node',296,570,'DIGITAL SIGNATURES','sign & verify demo','live',100,'CRYPTO'],
      ['tls','synth',180,670,'TLS / HTTPS','handshake simulator','live',100,'CRYPTO'],

      ['frontier','head',180,780,'FRONTIER','quantum-era cryptography','detected',40,'FRONTIER'],
      ['quantum','node',64,875,'WHAT IS QUANTUM COMPUTING?','quantum concepts visualizer','live',100,'FRONTIER'],
      ['quantum-rsa','node',296,875,'QUANTUM VS RSA','cryptographic impact model','live',100,'FRONTIER'],
      ['pqc','synth',180,975,'POST-QUANTUM CRYPTOGRAPHY','quantum-safe algorithms','live',100,'FRONTIER'],

      ['networks','head',180,1090,'NETWORKS','how data travels','signal',22,'NETWORKS'],
      ['packets','node',64,1185,'PACKETS / TCP-IP','packet journey simulator','signal',11,'NETWORKS'],
      ['dns','node',296,1185,'DNS','DNS lookup visualizer','signal',8,'NETWORKS'],
      ['vpn','node',64,1285,'VPNS','tunnel routing visualizer','signal',10,'NETWORKS'],
      ['mitm','node',296,1285,'MITM','interception demo','signal',15,'NETWORKS'],

      ['idam','head',180,1400,'IDENTITY & ACCESS','who you are & what you can do','signal',13,'IDENTITY'],
      ['pw','node',64,1495,'PASSWORDS & HASHING','credential storage / cracking','signal',13,'IDENTITY'],
      ['mfa','node',296,1495,'MFA','login attack comparison','signal',9,'IDENTITY'],
      ['oauth','node',64,1595,'OAUTH','flow visualizer','signal',7,'IDENTITY'],
      ['ztrust','node',296,1595,'ZERO TRUST','access decision simulator','signal',11,'IDENTITY'],

      // PHASE 2 — BREAK THE SYSTEM
      ['attacks','head',180,1775,'ATTACKS & DEFENSE','traditional threats','signal',16,'ATTACKS'],
      ['malware','node',64,1870,'MALWARE','behavior visualizer','signal',16,'ATTACKS'],
      ['phish','node',296,1870,'PHISHING','detection game','signal',12,'ATTACKS'],
      ['webvuln','node',64,1970,'WEB VULNERABILITIES','XSS / SQLi playground','signal',10,'ATTACKS'],
      ['pentest','node',296,1970,'PENTESTING','attack path lab','signal',8,'ATTACKS'],

      ['ai','head',180,2085,'AI SECURITY','hacking the algorithm','dim',5,'AI'],
      ['pinj','node',64,2180,'PROMPT INJECTION','prompt attack playground','dim',4,'AI'],
      ['advml','node',296,2180,'ADVERSARIAL ML','classifier attack demo','dim',5,'AI'],
      ['poison','node',64,2280,'DATA POISONING','dataset poisoning simulator','dim',4,'AI'],
      ['leakage','node',296,2280,'MODEL LEAKAGE / PRIVACY','privacy leakage explainer','dim',4,'AI'],

      // PHASE 3 — GOVERN THE SYSTEM
      ['fin','head',180,2460,'FINANCE & GRC','security in the real world','dim',5,'FINANCE'],
      ['fraud','node',64,2555,'FRAUD & AML','suspicious transaction simulator','dim',5,'FINANCE'],
      ['risk','node',296,2555,'CYBER RISK','risk scoring demo','dim',4,'FINANCE'],
      ['grc','node',64,2655,'GOVERNANCE','control mapping visualizer','dim',4,'FINANCE'],
      ['compliance','node',296,2655,'COMPLIANCE','audit evidence tracker','dim',4,'FINANCE'],
    ];
    // status ladder maps to build status, not signal loss:
    // LOCKED (live) → DETECTED (in build) → TRACKING (planned) → UNRESOLVED (distant)
    const pal = {
      live:    { m:'var(--accent)',      n:'var(--ink)',           border:'1px solid var(--accent)',       op:1,   badge:'LOCKED',     badgeC:'var(--accent)' },
      detected:{ m:'var(--accent)',      n:'var(--node-detected)', border:'1px dashed var(--accent)',      op:.92, badge:'DETECTED',   badgeC:'var(--accent)' },
      signal:  { m:'var(--accent-dim)',  n:'var(--node-signal)',   border:'1px dashed var(--accent-dim)',  op:.85, badge:'TRACKING',   badgeC:'var(--accent-dim)' },
      dim:     { m:'var(--accent-faint)',n:'var(--node-dim)',      border:'1px dashed var(--accent-faint)',op:.7,  badge:'UNRESOLVED', badgeC:'var(--accent-faint)' },
    };
    const LP = { FOUNDATIONS:'FD', CRYPTO:'CR', FRONTIER:'QF', NETWORKS:'NW', IDENTITY:'ID', ATTACKS:'AT', AI:'AI', FINANCE:'FI' };
    // lane-coded designations + per-lane module counts for the head readouts
    const laneCount = {}, laneModules = {};
    raw.forEach(r => { if (r[1] !== 'head') laneModules[r[8]] = (laneModules[r[8]] || 0) + 1; });

    const nodes = raw.map((r, i) => {
      const [id, type, cx, y, name, sub, state, conf, lane] = r;
      let [w, h] = W[type];
      const x = Math.round(cx - w/2);
      const p = pal[state];
      const isHead = type === 'head';
      const isLive = state === 'live';
      const searching = !isHead && (state === 'signal' || state === 'dim');
      let fs = type === 'node' ? 12.5 : (type === 'live' ? 15 : (type === 'root' ? 16 : 14));
      if (type === 'node' || type === 'synth') {
        // auto-fit: long names drop one type size, then the box grows to hold the
        // content — overflowing text was painting over the dashed outline
        const inner = w - 18;
        const lines = (size, txt, cw) => {
          let n = 1, len = 0;
          for (const wd of txt.split(' ')) {
            const wl = wd.length * size * cw;
            if (len && len + size*.35 + wl > inner) { n++; len = wl; } else len += (len ? size*.35 : 0) + wl;
          }
          return n;
        };
        if (lines(fs, name, .66) > 2) fs -= 1.5;
        const need = Math.ceil(14 + lines(fs, name, .66)*fs + (sub ? 3 + lines(8.5, sub, .64)*10 : 0));
        if (need > h) h = need;
      }
      const prefix = LP[lane] || 'XX';
      const idTag = isHead ? prefix : prefix + '-' + String((laneCount[lane] = (laneCount[lane]||0) + 1)).padStart(2,'0');
      const badge = isHead ? (laneModules[lane] + ' TARGETS') : p.badge;
      const border = isHead ? '1px solid var(--accent)' : p.border;
      const nameColor = isHead ? 'var(--ink)' : p.n;
      return {
        id, type, x, y, w, h, cx, cy: y + h/2, lane, name, sub, state, conf, isHead,
        idTag, confText: isHead ? 'SECTOR' : ((conf<100?('0'+conf).slice(-2):'100') + '%'),
        badge, isLive, notLive: !isLive, searching,
        coord: 'x' + cx + ' y' + y,
        stateLine: isLive ? 'LOCK READY' : (state==='detected' ? 'BUILDABLE NEXT' : 'AWAITING SIGNAL'),
        style: {
          position:'absolute', left:x+'px', top:y+'px', width:w+'px', height:h+'px',
          color:p.m, border, opacity: isHead ? 1 : p.op, background:'var(--bg)',
          padding:'6px 9px', display:'flex', flexDirection:'column', justifyContent:'center',
          cursor:'pointer', zIndex:3, animation:'mv-boxin .45s steps(5) both',
          animationDelay:(0.25 + i*0.028).toFixed(2)+'s',
          boxShadow: isLive ? '0 0 0 3px var(--glow)' : 'none',
        },
        nameStyle: {
          fontFamily:"'Archivo',sans-serif", fontWeight:800, textTransform:'uppercase',
          fontSize:fs+'px', lineHeight:.95, letterSpacing:'-.3px', color:nameColor,
        },
        tagStyle: isHead ? {
          position:'absolute', left:'-1px', top:'-15px', fontSize:'8px', lineHeight:1,
          color:'var(--bg)', background:'var(--accent)', padding:'0 4px', whiteSpace:'nowrap',
          letterSpacing:'.4px', fontWeight:700,
        } : {
          position:'absolute', left:'-1px', top:'-14px', fontSize:'8px', lineHeight:1,
          color:'currentColor', background:'var(--bg)', padding:'0 3px', whiteSpace:'nowrap', letterSpacing:'.3px',
        },
        badgeStyle: {
          position:'absolute', right:'8px', bottom:'-14px', fontSize:'7.5px', lineHeight:1,
          letterSpacing:'.5px', color: isHead ? 'var(--accent)' : p.badgeC, background:'var(--bg)', padding:'0 4px',
          opacity: searching ? .9 : 1,
          animation: searching ? 'mv-flick 2.4s steps(4) infinite' : 'none',
        },
      };
    });
    const byId = {}; nodes.forEach(n => byId[n.id] = n);
    const edgeDefs = [
      // foundations now resolve directly into their phase-1 sectors
      ['bits','crypto',2,'left'],['internet','networks',2,'right'],
      ['crypto','symmetric',1],['crypto','hashing',1],['crypto','rsa',1],['crypto','sig',1],['crypto','tls',1],
      ['crypto','frontier',1,'right'],
      ['frontier','quantum',1],['frontier','quantum-rsa',1],['frontier','pqc',1],
      ['networks','packets',1],['networks','dns',1],['networks','vpn',1],['networks','mitm',1],
      ['idam','pw',1],['idam','mfa',1],['idam','oauth',1],['idam','ztrust',1],
      ['attacks','malware',1],['attacks','phish',1],['attacks','webvuln',1],['attacks','pentest',1],
      ['ai','pinj',1],['ai','advml',1],['ai','poison',1],['ai','leakage',1],
      ['fin','fraud',1],['fin','risk',1],['fin','grc',1],['fin','compliance',1],
    ];
    // upstream / downstream so the sheet can list the learning order
    edgeDefs.forEach(([a, b]) => {
      const A = byId[a], B = byId[b];
      if (!A || !B) return;
      (B._req || (B._req = [])).push(A.name);
      (A._unlock || (A._unlock = [])).push(B.name);
    });
    nodes.forEach(n => {
      const req = n._req || [], un = n._unlock || [];
      n.hasReq = req.length > 0; n.reqText = req.join(' · ');
      n.hasUnlock = un.length > 0; n.unlockText = un.join(' · ');
    });
    const arcs = edgeDefs.map(([a, b, kind, route]) => {
      const A = byId[a], B = byId[b];
      const x1 = A.cx, y1 = A.y + A.h, x2 = B.cx, y2 = B.y;
      const dy = Math.max(24, (y2 - y1) * 0.5);
      // gutter routes: right column spans x232-360 and left column x0-128, so the
      // bypass rails sit at 366 / -6, just outside the node columns
      const d = route === 'right'
        ? `M ${x1} ${y1} C 366 ${y1+30} 366 ${y2-30} ${x2} ${y2}`
        : route === 'left'
        ? `M ${x1} ${y1} C -6 ${y1+30} -6 ${y2-30} ${x2} ${y2}`
        : `M ${x1} ${y1} C ${x1} ${y1+dy} ${x2} ${y2-dy} ${x2} ${y2}`;
      const dim = A.state === 'dim' || B.state === 'dim' || A.state === 'signal' && B.state === 'signal';
      const bright = kind === 2; // synthesis convergence
      const stroke = bright ? 'var(--accent)' : (dim ? 'var(--arc-dim)' : 'var(--arc)');
      return {
        d, marker: dim ? 'url(#mv-arwd)' : 'url(#mv-arw)',
        style: { stroke, animation: `mv-dash ${bright?1.1:2.2}s linear infinite`, opacity: dim?.5:(bright?1:.8) },
      };
    });

    // ---- phases: y-band membership drives progress + the manifest ----
    const phaseMeta = [
      { idx:0, top:12,   maxY:310,  label:'PHASE 0 // FOUNDATIONS',       manLabel:'PHASE 0 // FOUNDATIONS',
        description:'The digital primitives and pathways everything else depends on.' },
      { idx:1, top:310,  maxY:1710, label:'PHASE 1 // BUILD THE SYSTEM',  manLabel:'PHASE 1 // BUILD',
        description:'How the digital world is constructed, connected, and secured.' },
      { idx:2, top:1710, maxY:2395, label:'PHASE 2 // BREAK THE SYSTEM',  manLabel:'PHASE 2 // BREAK',
        description:'How systems fail, get exploited, or are manipulated.' },
      { idx:3, top:2395, maxY:9999, label:'PHASE 3 // GOVERN THE SYSTEM', manLabel:'PHASE 3 // GOVERN',
        description:'How cybersecurity becomes risk, money, policy, and business impact.' },
    ];
    const phaseOf = (y) => y < 310 ? 0 : (y < 1710 ? 1 : (y < 2395 ? 2 : 3));
    const resolved = [0,0,0,0], total = [0,0,0,0];
    nodes.forEach(n => { if (!n.isHead) { const pi = phaseOf(n.y); total[pi]++; if (n.state === 'live') resolved[pi]++; } });
    const markOf = { live:'L', detected:'D', signal:'T', dim:'U' };

    const phaseBands = phaseMeta.map(pm => ({
      label: pm.label,
      description: pm.description,
      progress: resolved[pm.idx] + '/' + total[pm.idx] + ' RESOLVED',
      style:{ position:'absolute', left:'0', top:pm.top+'px', width:'360px',
        borderTop:'1px solid var(--band-line)', paddingTop:'10px', zIndex:1, pointerEvents:'none' },
    }));

    const manifest = phaseMeta.map(pm => ({
      idx: pm.idx,
      label: pm.manLabel,
      progress: resolved[pm.idx] + '/' + total[pm.idx],
      items: nodes.filter(n => phaseOf(n.y) === pm.idx).map(n => ({
        id: n.id, idTag: n.idTag, name: n.name, mark: markOf[n.state] || '·', dot: pal[n.state].m,
        style: { padding:'1px 3px 1px 4px', cursor:'pointer', overflow:'hidden', whiteSpace:'nowrap',
          color: n.isHead ? 'var(--accent)' : 'var(--accent-dim)', fontWeight: n.isHead ? 700 : 400 },
      })),
    }));

    // void feature points across the tall field
    const fieldPoints = [];
    for (let i=0;i<22;i++){
      const fx = 8 + (i*97)%344, fy = 90 + (i*233)%2680;
      fieldPoints.push({ style:{ position:'absolute', left:fx+'px', top:fy+'px', width:'3px', height:'3px',
        border:'1px solid var(--accent-dim)', opacity:.4, animation:`mv-flick ${2+i%3}s steps(4) infinite`, animationDelay:(i*0.13)+'s', zIndex:0 } });
    }
    const H = 2790;
    return { nodes, byId, arcs, phaseBands, manifest, fieldPoints, H };
  }

  // the arc layer as a React element — raw <svg> markup in the template would make
  // the browser log attribute-validation errors for the uncompiled {{ }} holes
  buildArcsSvg() {
    const gr = this.g(), h = React.createElement;
    const mk = (id, color) => h('marker',
      { id, key:id, markerWidth:7, markerHeight:7, refX:5, refY:3, orient:'auto' },
      h('path', { d:'M0 0 L6 3 L0 6 Z', style:{ fill:color } }));
    return h('svg', {
      width:360, height:gr.H, viewBox:`0 0 360 ${gr.H}`,
      style:{ position:'absolute', left:0, top:0, overflow:'visible', pointerEvents:'none' },
    },
      h('defs', { key:'defs' }, mk('mv-arw','var(--arc)'), mk('mv-arwd','var(--arc-dim)')),
      gr.arcs.map((a, i) => h('path', {
        key:i, d:a.d, fill:'none', strokeWidth:1, strokeDasharray:'4 4',
        markerEnd:a.marker, style:a.style,
      }))
    );
  }

  // ---------- lifecycle ----------
  componentDidMount() {
    this.mounted = true;
    document.documentElement.dataset.theme = 'light';
    this.mi = Math.max(0, Math.min(100, this.props.motionIntensity ?? 45));
    this._reduceMotion = this.mi === 0;
    document.documentElement.dataset.motion = this._reduceMotion ? 'reduced' : 'full';
    this.pointer = { x: innerWidth/2, y: innerHeight/2 };
    this.ret = { x: innerWidth/2, y: innerHeight/2, w: 30, h: 30 };
    this.frame = 4820;
    this.nearEl = null;
    this.jitter = this._reduceMotion ? 0 : (0.6 + this.mi/45);
    const R = (a,b) => a + Math.random()*(b-a);
    this.scanners = Array.from({length:6}, () => ({
      cx:R(.14,.86), cy:R(.16,.84),
      ax:R(.05,.16), ay:R(.05,.14), ax2:R(.02,.07), ay2:R(.02,.06),
      fx:R(.22,.62), fy:R(.22,.62), fx2:R(.65,1.2), fy2:R(.65,1.2),
      px:R(0,6.28), py:R(0,6.28), px2:R(0,6.28), py2:R(0,6.28),
      w:R(32,60), h:R(28,48), aw:R(8,22), ah:R(6,18),
      fw:R(.25,.7), fh:R(.25,.7), pw:R(0,6.28), ph:R(0,6.28),
      sx:null, sy:null, sampleAt:0, glitchAt:R(.25,1.1), kickX:0, kickY:0,
      lockUntil:0, lockTarget:null,
    }));

    this._pm = (e) => {
      const t = e.touches ? e.touches[0] : e;
      if (t) { this.pointer.x = t.clientX; this.pointer.y = t.clientY; this._wantNear = true; }
    };
    addEventListener('pointermove', this._pm, { passive: true });
    addEventListener('touchmove', this._pm, { passive: true });

    // Escape closes the top-most overlay; a fresh listener each mount
    this._onKey = (e) => {
      if (e.key !== 'Escape') return;
      if (this.state.stubId) this.closeStub();
      else if (this.state.sheetId) this.closeSheet();
      else if (this.state.legendOpen) this.setState({ legendOpen: false });
    };
    addEventListener('keydown', this._onKey);

    // deep links — #hashing jumps straight to a module
    this._onHash = () => {
      const id = location.hash.slice(1);
      if (!id || !this.g().byId[id]) return;
      if (this.state.view !== 'field') { this.setState({ view: 'field' }); this.setView('VECTOR // CYBERSECURITY ATLAS',''); }
      setTimeout(() => this.openNode(id, true), 60);
    };
    addEventListener('hashchange', this._onHash);

    // scroll-synced sector readout + manifest highlight
    this._onScroll = () => {
      if (this._sr) return; this._sr = true;
      requestAnimationFrame(() => { this._sr = false; this.syncSector(); });
    };
    addEventListener('scroll', this._onScroll, { passive: true });

    let f = 0;
    this._loop = () => {
      if (!this.mounted) return;
      f++;
      const p = this.pointer, r = this.ret;
      const locked = !!this.state.stubId;
      const jt = locked ? 0 : this.jitter;
      const jx = (Math.random()-.5)*jt, jy = (Math.random()-.5)*jt;
      const ease = locked ? 0.45 : 0.34;
      // near a node the reticle leaves the pointer and wraps the target's box
      let tx = p.x, ty = p.y, tw = 30, th = 30;
      const near = this.nearEl;
      if (near) {
        const b = near.getBoundingClientRect();
        if (b.width) { tx = b.left + b.width/2; ty = b.top + b.height/2; tw = b.width + 14; th = b.height + 14; }
      }
      r.x += (tx - r.x) * ease; r.y += (ty - r.y) * ease;
      r.w += (tw - r.w) * ease; r.h += (th - r.h) * ease;
      const el = document.getElementById('mv-reticle');
      if (el) {
        el.style.width = r.w.toFixed(1) + 'px'; el.style.height = r.h.toFixed(1) + 'px';
        el.style.transform = `translate(${(r.x+jx-r.w/2).toFixed(1)}px,${(r.y+jy-r.h/2).toFixed(1)}px)`;
      }
      const c = document.getElementById('mv-coords');
      if (c) c.textContent = 'x' + String(Math.round(r.x)).padStart(3,'0') + ' y' + String(Math.round(r.y)).padStart(3,'0');
      const liveModuleActive = this.isLiveModule(this.state.stubId);
      if ((this._wantNear || liveModuleActive) && f % 3 === 0 && (!this.state.stubId || liveModuleActive)) { this._wantNear = false; this.updateNear(); }
      this.updateScanners();
      if (this.state.stubId === 'pqc') this.drawPqCanvas();
      if (this.state.stubId === 'internet') this.drawIwCanvas();
      if (this.state.stubId === 'hashing') this.drawHaCanvas();
      if (this.state.stubId === 'rsa') this.drawPkCanvas();
      requestAnimationFrame(this._loop);
    };
    requestAnimationFrame(this._loop);

    // telemetry tick
    this._iv = setInterval(() => {
      if (!this.mounted) return;
      this.frame = (this.frame + 1) % 100000;
      const fe = document.getElementById('mv-frame');
      if (fe) fe.textContent = String(this.frame).padStart(5,'0');
      const d = new Date();
      const ce = document.getElementById('mv-clock');
      if (ce) ce.textContent = [d.getHours(),d.getMinutes(),d.getSeconds()].map(n=>String(n).padStart(2,'0')).join(':') + ':' + String(Math.floor(d.getMilliseconds()/40)).padStart(2,'0');
    }, 90);

    // boot choreography — skipped on deep-link or repeat visits
    this._t = [];
    const hashId = location.hash.slice(1);
    if (hashId && this.g().byId[hashId]) {
      this.setState({ bootStage: 3, view: 'field' });
      this.setView('VECTOR // CYBERSECURITY ATLAS',''); this.setConf(100); this.setStatus('TRACKING');
      this._t.push(setTimeout(() => this.openNode(hashId, true), 400));
      try { sessionStorage.setItem('vector-booted','1'); } catch {}
    } else if (this._sessionBooted()) {
      this.setState({ bootStage: 3, view: 'home' });
      this.setView('VECTOR // ONLINE','—'); this.setConf(100);
    } else {
      this._t.push(setTimeout(() => this.setState({ bootStage: 1 }), 650));
      this._t.push(setTimeout(() => this.climbConf('mv-title-conf', 900), 700));
      this._t.push(setTimeout(() => this.setState({ bootStage: 2 }), 1750));
      this._t.push(setTimeout(() => {
        this.setState({ bootStage: 3, view: 'home' }); this.setView('VECTOR // ONLINE','—'); this.setConf(100);
        try { sessionStorage.setItem('vector-booted','1'); } catch {}
      }, 2150));
    }
  }
  componentWillUnmount() {
    this.mounted = false;
    removeEventListener('pointermove', this._pm);
    removeEventListener('touchmove', this._pm);
    removeEventListener('keydown', this._onKey);
    removeEventListener('hashchange', this._onHash);
    removeEventListener('scroll', this._onScroll);
    clearInterval(this._iv);
    clearInterval(this._bitsClock);
    clearInterval(this._symSealIv);
    clearInterval(this._qrIv);
    (this._t||[]).forEach(clearTimeout);
    document.body.style.overflow = '';
  }
  componentDidUpdate(pp) {
    // the dc-runtime invokes componentDidUpdate(prevProps) only — no prevState
    // argument — so we snapshot it ourselves
    const ps = this._prevState || {};
    this._prevState = { ...this.state };
    if (this.state.stubId && !this.isLiveModule(this.state.stubId) && this.state.stubId !== ps.stubId) {
      const n = this.g().byId[this.state.stubId];
      this.typeInto('mv-stub-name', n ? n.name : '', 45);
    }
    if (this.state.stubId === 'bits' && ps.stubId !== 'bits') {
      this.startBitsClock();
    }
    if (ps.stubId === 'bits' && this.state.stubId !== 'bits') clearInterval(this._bitsClock);
    if (this.state.stubId === 'internet' && ps.stubId !== 'internet') {
      setTimeout(() => { const e = document.getElementById('iw-url'); if (e) e.focus(); }, 80);
    }
    if (this.state.stubId === 'symmetric' && ps.stubId !== 'symmetric') {
      setTimeout(() => { const e = document.getElementById('sy-message'); if (e) e.focus(); }, 80);
    }
    if (this.state.stubId === 'pqc') {
      if (ps.stubId !== 'pqc') setTimeout(() => this.drawPqCanvas(), 80);
      requestAnimationFrame(() => this.drawPqCanvas());
    }
    if (ps.stubId === 'pqc' && this.state.stubId !== 'pqc') this._pqDrag = null;
    // lock body scroll while the full-screen stub is open
    if (this.state.stubId && !ps.stubId) document.body.style.overflow = 'hidden';
    if (!this.state.stubId && ps.stubId) document.body.style.overflow = '';
    if (this.state.view === 'field' && ps.view !== 'field') setTimeout(() => this.syncSector(), 30);
    if (this.state.sheetId !== ps.sheetId || this.state.view !== ps.view || this.state.stubId !== ps.stubId) this._wantNear = true;
  }

  // ---------- helpers ----------
  g() { if (!this._g) this._g = this.buildGraph(); return this._g; }
  // the seven modules that render their own full-screen interactive UI (vs. the
  // generic "pending analysis" stub) — kept in one place so the loop, reticle,
  // and stub gate all agree
  isLiveModule(id) { return id === 'bits' || id === 'internet' || id === 'symmetric' || id === 'hashing' || id === 'rsa' || id === 'sig' || id === 'tls' || id === 'quantum' || id === 'quantum-rsa' || id === 'pqc'; }
  // illustrative 32-hex-char digest with strong avalanche — every output byte
  // depends on the whole input, so a one-character change scrambles ~half of it
  learningDigest(text) {
    let h = this.hashLearningText('sha:' + (text || ''));
    const out = [];
    for (let i = 0; i < 16; i++) { h = this.hashLearningText(String(h) + ':' + i + ':' + (text || '')); out.push((h & 0xff).toString(16).padStart(2,'0').toUpperCase()); }
    return out.join('');
  }
  tlNoise(tag) {
    let h = this.hashLearningText('noise:' + tag), s = '', hex = '0123456789ABCDEF';
    for (let i = 0; i < 40; i++) { h = this.hashLearningText(tag + i + ':' + h); s += hex[h % 16]; if (i % 2) s += ' '; }
    return s.trim();
  }
  _sessionBooted() { try { return !!sessionStorage.getItem('vector-booted'); } catch { return false; } }
  setText(id, t) { const e = document.getElementById(id); if (e) e.textContent = t; }
  setView(name, coord) {
    this.setText('mv-view', name);
    const c = document.getElementById('mv-view-coord');
    if (c) c.textContent = coord && coord !== '—' ? ' · ' + coord : '';
  }
  setConf(v) { this.setText('mv-conf', String(v).padStart(3,'0')); }
  setStatus(s) { this.setText('mv-status', s); }
  byteGlyph(code) {
    if (code === 32) return 'SPACE';
    if (code < 32) return String.fromCharCode(0x2400 + code);
    if (code === 127) return '␡';
    if (code === 160) return 'NBSP';
    return String.fromCharCode(code);
  }
  parseInternetUrl(raw) {
    const entered = (raw || '').trim().replace(/\s+/g, '');
    const withDefault = entered || 'shop.site/home';
    const match = withDefault.match(/^(https?):\/\/(.*)$/i);
    const protocol = match ? match[1].toLowerCase() + '://' : 'https://';
    const rest = match ? match[2] : withDefault;
    const slash = rest.indexOf('/');
    const domain = (slash >= 0 ? rest.slice(0, slash) : rest).toLowerCase() || 'shop.site';
    const path = slash >= 0 ? ('/' + rest.slice(slash + 1)) : '/home';
    return { protocol, domain, path:path === '/' ? '/home' : path, full:protocol + domain + (path === '/' ? '/home' : path) };
  }
  internetIpFor(domain) {
    const known = { 'shop.site':'203.0.113.18', 'news.site':'198.51.100.24', 'uni.edu':'192.0.2.44' };
    if (known[domain]) return known[domain];
    let hash = 0; for (const ch of domain) hash = (hash * 31 + ch.charCodeAt(0)) >>> 0;
    return '192.0.2.' + (1 + hash % 254);
  }
  hashLearningText(text) {
    let h = 2166136261;
    for (let i=0;i<text.length;i++) { h ^= text.charCodeAt(i); h = Math.imul(h, 16777619); }
    h ^= h >>> 16; h = Math.imul(h, 0x7feb352d); h ^= h >>> 15;
    return h >>> 0;
  }
  learningCipher(message, key) {
    let x = this.hashLearningText('key:' + key) || 0x9e3779b9;
    const out = [];
    for (let i=0;i<message.length;i++) {
      x ^= x << 13; x ^= x >>> 17; x ^= x << 5; x >>>= 0;
      const byte = (message.charCodeAt(i) & 255) ^ (x & 255);
      out.push(byte.toString(16).toUpperCase().padStart(2,'0'));
    }
    return out.join(' ');
  }
  mutateLearningKey(key, amount) {
    if (!key || !amount) return key;
    const i = key.length - 1, code = key.charCodeAt(i);
    const next = code >= 48 && code <= 57 ? 48 + ((code - 48 + amount) % 10) : 33 + ((code - 33 + amount) % 94);
    return key.slice(0, i) + String.fromCharCode(next);
  }
  learningGarbage(cipher, key) {
    const chars = '!@#$%&?QxZk/7bR+~';
    let seed = this.hashLearningText(cipher + '|' + key), out = '';
    for (let i=0;i<Math.min(18, Math.max(8, cipher.split(' ').length));i++) { seed = Math.imul(seed ^ (seed >>> 13), 1597334677) >>> 0; out += chars[seed % chars.length]; }
    return out;
  }
  climbConf(id, dur) {
    const e = document.getElementById(id); const start = performance.now();
    const step = (now) => {
      if (!this.mounted) return;
      const k = Math.min(1, (now-start)/dur); const v = Math.round(k*100);
      if (e) e.textContent = String(v).padStart(3,'0'); this.setConf(v);
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }
  typeInto(id, text, speed) {
    const e = document.getElementById(id); if (!e) return; e.textContent = '';
    let i = 0; const tick = () => {
      if (!this.mounted || !document.getElementById(id)) return;
      e.textContent = text.slice(0, i); i++;
      if (i <= text.length) setTimeout(tick, speed);
    }; tick();
  }
  syncSector() {
    if (this.state.view !== 'field') return;
    const ids = ['bits','crypto','attacks','fin'];
    const labels = ['SECTOR 0 // FOUNDATIONS','SECTOR 1 // BUILD','SECTOR 2 // BREAK','SECTOR 3 // GOVERN'];
    let active = 0;
    ids.forEach((id, i) => {
      const e = document.querySelector(`#mv-field [data-node="${id}"]`);
      if (e && e.getBoundingClientRect().top < innerHeight*0.4) active = i;
    });
    this.setText('mv-sector', labels[active]);
    document.querySelectorAll('.mv-mani-phase').forEach(el => el.classList.toggle('on', +el.dataset.phase === active));
  }
  updateNear() {
    const selector = this.isLiveModule(this.state.stubId)
      ? '.bb-module [data-reticle-target]'
      : (this.state.sheetId
        ? '[data-reticle-target="lock"]'
        : (this.state.view === 'field'
          ? '#mv-field [data-node], #mv-foreground [data-reticle-target]'
          : '[data-reticle-target="scan"], #mv-foreground [data-reticle-target]'));
    const nodes = document.querySelectorAll(selector);
    let best = null;
    nodes.forEach(el => {
      const r = el.getBoundingClientRect();
      const inside = this.pointer.x >= r.left && this.pointer.x <= r.right
        && this.pointer.y >= r.top && this.pointer.y <= r.bottom;
      if (inside) best = el;
    });
    if (best !== this.nearEl) {
      if (this.nearEl && this.nearEl.dataset.node) { this.nearEl.style.filter = ''; this.nearEl.style.transform = ''; }
      if (best && best.dataset.node) { best.style.filter = 'drop-shadow(0 0 5px rgba(var(--accent-rgb),.32))'; best.style.transform = 'scale(1.04)'; best.style.transition = 'transform .12s steps(2), filter .12s steps(2)'; }
      this.nearEl = best;
      const ret = document.getElementById('mv-reticle');
      if (ret) ret.dataset.near = best ? '1' : '';
      const label = document.querySelector('#mv-reticle .mv-ret-label');
      const labels = { scan:'INITIATE', lock:'LOCK ON', key:'KEY', theme:'MODE', exit:'EXIT', input:'TYPE', clear:'CLEAR', char:'SELECT', bit:'FLIP', load:'LOAD', preset:'PRESET', scrub:'SCRUB', chunk:'INSPECT', request:'FLIP', resource:'TRACE', page:'TRACE', failure:'SIMULATE', next:'OPEN', seal:'HOLD', intercept:'SCAN', decrypt:'APPLY', keycard:'TRY KEY', handoff:'TOGGLE', reacquire:'RETRY', 'next-round':'CONTINUE', restart:'REPLAY', collide:'GENERATE', recover:'CHECK', padlock:'CLICK', usekey:'KEY', lockmsg:'LOCK', openpub:'OPEN', openpriv:'OPEN', publish:'PUBLISH', eaves:'ATTACK', sign:'SIGN', verify:'VERIFY', forge:'FORGE', step:'SELECT', attacker:'FLIP', mitm:'ATTACK', flipbit:'FLIP', angle:'AIM', measure:'MEASURE', resethist:'CLEAR', trap:'READ', phase:'AIM', ctry:'PROBE', qrun:'RUN', inspect:'INSPECT', brute:'BRUTE', qfactor:'RUN', cascade:'TRACE', basis:'TOGGLE', snap:'SNAP', qfizzle:'RUN', decode:'DECODE' };
      if (label) label.textContent = best ? (labels[best.dataset.reticleTarget] || 'SELECT') : 'SELECT';
      this.setStatus(best ? (best.dataset.reticleTarget ? 'TARGET READY' : 'TRACKING') : 'SCANNING');
    }
  }
  updateScanners() {
    if (!this.scanners || this._reduceMotion) return;
    const t = performance.now() / 1000, W = innerWidth, H = innerHeight;
    const R = (a,b) => a + Math.random()*(b-a);
    const energy = .65 + this.mi/70;
    const fieldOn = this.state.view === 'field';
    for (let i = 0; i < this.scanners.length; i++) {
      const s = this.scanners[i];
      const el = document.getElementById('mv-sc' + i);
      if (!el) continue;

      // ---- occasional genuine lock onto a real page element ----
      if (s.lockUntil && t < s.lockUntil) {
        let rect = null;
        if (s.lockTarget === 'cursor') rect = { left:this.pointer.x-26, top:this.pointer.y-20, width:52, height:40 };
        else if (s.lockTarget === 'title') { const te = document.querySelector('[data-screen-label] h1'); rect = te ? te.getBoundingClientRect() : null; }
        else { const te = document.querySelector(`#mv-field [data-node="${s.lockTarget}"]`); rect = te ? te.getBoundingClientRect() : null; }
        if (rect && rect.width) {
          const tx = (rect.left+rect.width/2)/W, ty = (rect.top+rect.height/2)/H;
          if (s.sx === null) { s.sx = tx; s.sy = ty; }
          s.sx += (tx - s.sx) * 0.16; s.sy += (ty - s.sy) * 0.16;
          el.style.transform = `translate(${(s.sx*W).toFixed(1)}px,${(s.sy*H).toFixed(1)}px)`;
          const bx = document.getElementById('mv-sb' + i);
          if (bx) {
            const tw = rect.width+12, th = rect.height+12;
            const cw = parseFloat(bx.style.width)||s.w, ch = parseFloat(bx.style.height)||s.h;
            bx.style.width = (cw+(tw-cw)*0.18).toFixed(1)+'px'; bx.style.height = (ch+(th-ch)*0.18).toFixed(1)+'px';
          }
          const stEl = document.getElementById('mv-st' + i);
          if (stEl) stEl.textContent = s.lockTarget === 'cursor' ? 'lock' : 'trk•';
          s.cx = s.sx; s.cy = s.sy; s.sampleAt = t;
          continue;
        }
        s.lockUntil = 0;
      } else if (s.lockUntil) {
        s.lockUntil = 0;
        const stEl = document.getElementById('mv-st' + i); if (stEl) stEl.textContent = 'trk';
      }

      // ---- ambient wandering ----
      let fx = s.cx + s.ax*Math.sin(t*s.fx + s.px) + s.ax2*Math.sin(t*s.fx2 + s.px2);
      let fy = s.cy + s.ay*Math.sin(t*s.fy + s.py) + s.ay2*Math.sin(t*s.fy2 + s.py2);
      const glitch = t >= s.glitchAt;
      if (glitch) {
        s.kickX = R(-.025,.025) * energy;
        s.kickY = R(-.020,.020) * energy;
        s.glitchAt = t + R(.3,1.25);
      }
      if (s.sx === null || t >= s.sampleAt) {
        const noise = .0012 + this.mi*.000035;
        if (!glitch) { s.kickX *= R(.45,.72); s.kickY *= R(.45,.72); }
        s.sx = Math.max(.05, Math.min(.95, fx + s.kickX + R(-noise,noise)));
        s.sy = Math.max(.06, Math.min(.94, fy + s.kickY + R(-noise,noise)));
        const bursting = glitch || Math.abs(s.kickX)+Math.abs(s.kickY) > .008;
        s.sampleAt = t + R(bursting?.028:.06, bursting?.075:.19);
        el.style.transform = `translate(${(s.sx*W).toFixed(1)}px,${(s.sy*H).toFixed(1)}px)`;
        const bx = document.getElementById('mv-sb' + i);
        if (bx) {
          const w = s.w + s.aw*Math.sin(t*s.fw + s.pw) + R(-2.5,2.5)*energy;
          const h = s.h + s.ah*Math.sin(t*s.fh + s.ph) + R(-2,2)*energy;
          bx.style.width = w.toFixed(1) + 'px'; bx.style.height = h.toFixed(1) + 'px';
        }
        // acquire a real target now and then — the fiction only holds if they track things that exist
        if (!s.lockUntil && Math.random() < 0.012) {
          if (fieldOn && Math.random() < 0.7) {
            const cands = document.querySelectorAll('#mv-field [data-node]');
            s.lockTarget = cands.length ? cands[(Math.random()*cands.length)|0].dataset.node : 'cursor';
          } else {
            s.lockTarget = Math.random() < 0.5 ? 'cursor' : 'title';
          }
          s.lockUntil = t + R(1.1, 2.4);
        }
      }
    }
  }

  // ---------- render ----------
  renderVals() {
    const st = this.state, gr = this.g();
    const stage = st.bootStage;
    const showHome = st.view !== 'field';
    const sel = st.sheetId ? gr.byId[st.sheetId] : null;
    const bitsCode = Math.max(0, Math.min(255, Number(st.bitsValue) || 0));
    const bitsBinary = bitsCode.toString(2).padStart(8,'0');
    const bitsGlyph = this.byteGlyph(bitsCode);
    const bitsSwitches = bitsBinary.split('').map((value, idx) => ({
      idx, value, weight:1 << (7-idx), state:value === '1' ? 'ON' : 'OFF',
      aria:'Bit ' + (7-idx) + ', ' + (value === '1' ? 'on' : 'off') + ', value ' + (1 << (7-idx)),
      style:{ background:value === '1' ? 'var(--bb-ink)' : 'var(--bb-bg)', color:value === '1' ? 'var(--bb-bg)' : 'var(--bb-ink)' },
    }));
    const bitsRound = Number(st.bitsRound) || 0;
    const roundTargets = [null,65,66,97,null,null];
    const timedWord = 'HI!';
    const originalIntegrityMessage = 'PAY BOB $100';
    const bitsTarget = bitsRound === 4 ? timedWord.charCodeAt(st.bitsTimedIndex || 0) : (bitsRound === 5 ? (st.bitsCorruptIndex >= 0 ? originalIntegrityMessage.charCodeAt(st.bitsCorruptIndex) : 49) : roundTargets[bitsRound]);
    const bitsHasTarget = bitsRound > 0 && bitsRound < 5 || (bitsRound === 5 && st.bitsCorruptIndex >= 0);
    const bitsTargetBinary = (bitsTarget ?? 0).toString(2).padStart(8,'0');
    const bitsCurrentDiff = bitsBinary.split('').map((value, i) => ({ value, className:'bbc-diff-bit' + (value !== bitsTargetBinary[i] ? ' bad' : '') }));
    const bitsTargetDiff = bitsTargetBinary.split('').map((value, i) => ({ value, className:'bbc-diff-bit' + (value !== bitsBinary[i] ? ' bad' : '') }));
    const roundNames = ['CALIBRATION','FIRST LOCK','BINARY CARRY','CASE BIT','TIMED ACQUISITION','CORRUPTION'];
    const captions = [
      'Eight switches. One signal. Find out what they do.',
      'The machine wants an A. Get it there.',
      'Now B. Watch what counting does at the edge of a bit.',
      'Same letter. Small this time.',
      'Three signals. The machine is impatient.',
      st.bitsCorruptIndex < 0 ? 'Somewhere in transit, one switch flipped. Nobody noticed. Find the changed character.' : 'Now fix that byte. One switch changed the amount.',
    ];
    const debriefTitles = ['', 'EIGHT SWITCHES REACH 256 VALUES.', 'BINARY COUNTING CARRIES.', 'UPPERCASE TO LOWERCASE: ONE BIT.', 'YOU HAND-ENCODED THREE CHARACTERS.', 'INTEGRITY RESTORED.'];
    const debriefs = ['',
      'You felt the weights: each switch is worth double the one to its right. 1, 2, 4, 8…128. Together they reach 0 through 255.',
      'A is 65 and B is 66. That +1 carries: the 1-switch turns off while the 2-switch turns on. Binary counts just like decimal, with different columns.',
      'A is 65. a is 97. The entire difference is the 32-switch—one bit separating uppercase and lowercase.',
      'You just hand-encoded HI! the way keyboards do automatically—only considerably slower.',
      'One bit changed $100 into $900 and nothing announced the change. This is why systems need a way to detect tampering.',
    ];
    const received = st.bitsMessageReceived || 'PAY BOB $900';
    const bitsMessageChars = Array.from(received).map((ch, idx) => ({ idx, glyph:ch === ' ' ? '·' : ch, className:'bbc-char' + (idx === st.bitsCorruptIndex ? ' selected' : '') }));
    const bitsWord = Array.from(timedWord).map((ch, idx) => ({ glyph:ch, className:idx < st.bitsTimedIndex ? 'done' : (idx === st.bitsTimedIndex ? 'on' : '') }));
    const activeFlips = Math.max(1, (st.bitsFlips || 0) - (st.bitsCalibrationFlips || 0));
    const bitsEfficiency = Math.min(100, Math.round(13 / activeFlips * 100));
    // ---- HOW THE INTERNET WORKS (FD-02) — the message's slow-mo journey ----
    const iwBeatDefs = [
      ['LEAVING // YOUR DEVICE', 'YOU HIT SEND.', 'Your sentence is chopped into tiny numbered packets, each one stamped with where it’s headed. Nothing has moved yet — this is the packet, sitting on your machine, about to be handed off.'],
      ['HOP 01 // HOME ROUTER', 'THE FIRST GATEKEEPER.', 'Your router has no clue who “bob” is, and it doesn’t need to. Its whole job is to know one good next step toward him and shove the packet that way.'],
      ['DETOUR // DNS LOOKUP', 'WAIT — WHERE IS BOB?', '“bob.host” is a name for humans; machines need a number. The packet detours to DNS, the internet’s phone-book, which answers instantly: bob.host = 203.0.113.18. Watch the name-tag flip to a number.'],
      ['HOP 02 // YOUR ISP', 'ONTO THE BIG ROADS.', 'Your internet provider lifts the packet off your street and merges it onto the backbone — the motorways of the internet, carrying millions of other packets at once.'],
      ['HOP 03 // THE BACKBONE', 'ACROSS THE WORLD, HOP BY HOP.', 'Undersea cables and city-sized routers pass the packet hand to hand. It never teleports — every leg is one machine handing it to the next, thousands of times a second.'],
      ['ARRIVAL // BOB’S SERVER', 'BOB’S MACHINE CATCHES IT.', 'The destination reassembles your sentence from its packets, reads it, and writes a reply — ready to send the whole trip back in reverse.'],
      ['RETURN // THE ROUND TRIP', 'AND THE ANSWER COMES HOME.', 'The reply retraces the route back to you and your device rebuilds it. That entire round-the-world round trip took a few hundred milliseconds. That’s the internet: a conversation, relayed by strangers.'],
    ];
    const iwBeat = Math.max(0, Math.min(6, Number(st.iwBeat) || 0));
    const iwStarted = !!st.iwStarted, iwDone = !!st.iwDone, iwMoving = !!st.iwMoving;
    const iwCur = iwBeatDefs[iwBeat];
    const iwDots = iwBeatDefs.map((_, i) => ({ className:'iw-dot' + (i <= iwBeat ? ' on' : '') + (i === iwBeat && !iwMoving ? ' cur' : '') }));
    const symMessage = st.symMessage || '', symKey = st.symKey || '';
    const symReady = !!symMessage && !!symKey;
    const symKeyHash = this.hashLearningText(symKey || 'empty');
    const symKeyId = 'K-' + (symKeyHash & 0xffff).toString(16).toUpperCase().padStart(4,'0');
    let fpSeed = symKeyHash || 1;
    const symFingerprint = Array.from({length:16}, (_, idx) => {
      fpSeed ^= fpSeed << 13; fpSeed ^= fpSeed >>> 17; fpSeed ^= fpSeed << 5; fpSeed >>>= 0;
      return { style:{ height:(18 + fpSeed % 62)+'px', transform:'rotate(' + ((fpSeed >>> 8)%19-9) + 'deg)', opacity:.55 + (idx%4)*.12 } };
    });
    const symSealedMessage = st.symSealedMessage || '', symSealedKey = st.symSealedKey || '';
    const symCiphertext = st.symSealed ? this.learningCipher(symSealedMessage, symSealedKey) : '';
    const symMutation = Number(st.symMutation) || 0;
    const symMutatedKey = this.mutateLearningKey(symSealedKey, symMutation);
    const symMutatedCipher = st.symSealed ? this.learningCipher(symSealedMessage, symMutatedKey) : '';
    const baseBlocks = symCiphertext ? symCiphertext.split(' ') : [], changedBlocks = symMutatedCipher ? symMutatedCipher.split(' ') : [];
    const changed = baseBlocks.reduce((n, block, i) => n + (block !== changedBlocks[i] ? 1 : 0), 0);
    const symCipherDelta = baseBlocks.length ? (changed/baseBlocks.length*100).toFixed(1) : '0.0';
    const wrongKey = this.mutateLearningKey(symSealedKey, 1);
    const blueKey = 'blue-' + (symSealedKey.match(/\d+$/)?.[0] || '742');
    const symKeyCards = [symSealedKey, wrongKey, blueKey].map((key, i) => ({ key, label:i===0 ? key : key })).filter(c => c.key);

    // ---- HASHING (CR-02) — the grinder ----
    const haText = st.haText || '';
    const haDA = this.learningDigest(haText), haDN = this.learningDigest(this.haBumpLast(haText));
    const haAvChanged = haText ? haDA.split('').reduce((n, ch, i) => n + (ch !== haDN[i] ? 1 : 0), 0) : 0;
    const haAvalanche = ((haAvChanged / 32) * 100).toFixed(0);
    const haChapter = Math.max(0, Math.min(2, Number(st.haChapter) || 0));
    const haBeatDefs = [
      ['01','GRIND','CHEW IT UP.','Whatever you type falls through the rollers and comes out the bottom as a 32-cell fingerprint. Feed it a word or a whole paragraph — the fingerprint is always the same size.','Type a message above and press GRIND. Watch your text drop through the rollers and the fingerprint crystallise cell by cell.'],
      ['02','AVALANCHE','ONE LETTER. TOTAL DETONATION.','Move a single character and grind again. Nearly half the fingerprint cells flip. A tiny change to the input scrambles the whole output — no way to nudge the print a little.','Press NUDGE ONE LETTER & RE-GRIND and watch the changed cells flash red across the tray.'],
      ['03','ONE-WAY','NO REVERSE GEAR.','Try to feed a fingerprint back in and get the message out. The grinder jams — it only runs forward. That is exactly why passwords are stored as fingerprints.','Press RUN IT BACKWARDS and watch the rollers seize up.'],
    ];
    const haCur = haBeatDefs[haChapter];
    const haTabs = haBeatDefs.map((c, i) => ({ id:i, label:c[0], short:c[1], className:'ha-tab' + (i === haChapter ? ' on' : '') }));

    // ---- PUBLIC-KEY / RSA (CR-03) ----
    const rsaOpened = st.rsaOpenState === 'ok', rsaOpenFail = !!st.rsaSealed && st.rsaOpenState === 'fail';
    const rsaChapter = Math.max(0, Math.min(2, Number(st.rsaChapter) || 0));
    const rsaBeatDefs = [
      ['00','TWO POWERS','LOCKING ISN’T UNLOCKING.','Anyone can snap this padlock shut with the PUBLIC key. But that same key can’t open it again — only the PRIVATE key can. Two different keys, two different powers.','Press USE PUBLIC KEY to snap it shut, then press it again — it refuses to open. Then press USE PRIVATE KEY.'],
      ['01','SEAL FOR A STRANGER','A SECRET FOR SOMEONE YOU’VE NEVER MET.','Seal your message with the server’s PUBLIC key, which they handed out freely. Only their PRIVATE key, which never left their hands, can open it — so you need no shared secret.','Press SEAL, then try OPEN WITH PUBLIC (it fails), then OPEN WITH PRIVATE.'],
      ['02','PUBLISH THE LOCK','HAND THE LOCK TO EVERYONE.','Throw the public key onto the open wire — even to the eavesdropper. Because it only closes locks, it’s useless to them. That is the whole trick of public-key crypto.','Press PUBLISH, then let the EAVESDROPPER try an intercepted box.'],
    ];
    const rsaCur = rsaBeatDefs[rsaChapter];
    const rsaTabs = rsaBeatDefs.map((c, i) => ({ id:i, label:c[0], short:c[1], className:'ha-tab' + (i === rsaChapter ? ' on' : '') }));

    // ---- SIGNATURES (CR-04) ----
    const sgMessage = st.sgMessage || '';
    const sgVerifier = st.sgVerifier || 'alice';
    const sgSigNibbles = st.sgSigned ? this.learningDigest(st.sgSignedMessage || '').split('').map(ch => ({ ch })) : [];

    // ---- TLS (CR-05) ----
    const tlDefs = { verify:['VERIFY IDENTITY','check the server certificate'], key:['AGREE ON A KEY','asymmetric key exchange over the open wire'], cipher:['SWITCH TO FAST CIPHER','hand off to symmetric encryption'], data:['EXCHANGE DATA','send the real request, now scrambled'] };
    const tlDisplay = ['cipher','verify','data','key'];
    const tlSeq = st.tlSequence || [];
    const tlSteps = tlDisplay.map(id => { const pos = tlSeq.indexOf(id); return { id, title:tlDefs[id][0], sub:tlDefs[id][1], ord:pos >= 0 ? String(pos + 1) : '', className:'tl-step' + (pos >= 0 ? ' done' : '') }; });

    // ---- QUBIT (FR-01) ----
    const qbAngle = Math.max(0, Math.min(180, Number(st.qbAngle) || 0));
    const qbRad = qbAngle * Math.PI / 180;
    const qbP1v = Math.sin(qbRad / 2) ** 2;                 // amplitude², not "tries everything"
    const qbP1 = (qbP1v * 100).toFixed(0);
    const qbTotal = (st.qbZeros || 0) + (st.qbOnes || 0);
    const qbPhase = Math.max(0, Math.min(360, Number(st.qbPhase) || 0));
    const qbP0v = Math.cos(qbPhase * Math.PI / 360) ** 2;   // cos²(φ/2): arrows reinforce at 0°, cancel at 180°
    const qbP0 = (qbP0v * 100).toFixed(0);

    // ---- QUANTUM vs RSA (FR-02) ----
    const qrN = 3233, qrP = 61, qrQ = 53;                   // toy RSA modulus 61×53
    const qrBloom = Array.from({ length: 24 }, (_, i) => {
      const peak = st.qrQuantumRun && (i === 8 || i === 16); // the found period rings out at two positions
      const h = st.qrQuantumRun ? (peak ? 100 : 6) : (30 + (this.hashLearningText('bloom' + i) % 34));
      return { className: peak ? 'peak' : '', style: { height: h + '%' } };
    });
    const qrLaneLocks = [
      { name:'RSA KEY EXCHANGE', note:'PRIVATE KEY RECOVERED' },
      { name:'TLS HANDSHAKE', note:'SESSION KEY NOW READABLE' },
      { name:'SERVER CERTIFICATE', note:'SIGNATURE FORGEABLE' },
      { name:'THE SECURE CHANNEL', note:'PLAINTEXT EXPOSED' },
    ];
    const qrCascadeRows = qrLaneLocks.map(l => ({ name:l.name, note:l.note, className:'qr-lock-row' + (st.qrCascade ? ' popped' : '') }));

    // ---- POST-QUANTUM / LATTICE (FR-03) ----
    const pqBad = st.pqBasis !== 'good';
    const pqChapter = Math.max(0, Math.min(2, Number(st.pqChapter) || 0));
    // chapter 00 // WHY A NEW LOCK: a no-interaction anchor shown before the lattice,
    // so the learner knows why they're staring at a grid before they touch it
    const pqIntroOpen = !st.pqIntroSeen;
    // auto-advance: when a chapter's DO THIS is done, pulse the tab that comes next
    const pqCh0Done = !!st.pqCh0Done;                              // dragged an arrow
    const pqCh1Done = !!st.pqTriedGood && !!st.pqTriedBad;         // tried both keys
    const pqPulse = pqChapter === 0 ? (pqCh0Done ? 1 : -1)
                  : pqChapter === 1 ? (pqCh1Done ? 2 : -1) : -1;
    const pqChapterDefs = [
      ['01','THE GRID','Two arrows build an endless grid of dots. Drag an arrow tip — the whole grid follows. The arrows ARE the description of the grid.'],
      ['02','TWO KEYS','The same dots can be described two ways. The private key uses short, tidy arrows. The public key uses long, skewed ones — same grid, far harder to read.'],
      ['03','THE ATTACK','A message is a point knocked off the grid by noise — the ◆. To read it you find the nearest dot. The private key snaps to it; the public key lands on the wrong one. A quantum computer cannot shortcut this.'],
    ];
    const pqChapters = pqChapterDefs.map((c, i) => ({ id:i, label:c[0], short:c[1], className:'pq-tab' + (i === pqChapter ? ' on' : '') + (i === pqPulse ? ' pulse' : '') }));
    const pqChapterTitle = pqChapterDefs[pqChapter][1] + ' // ' + pqChapterDefs[pqChapter][0];
    const pqChapterCopy = pqChapterDefs[pqChapter][2];
    const pqTodo = [
      'Drag the tip of an arrow in the diagram. Every dot shifts as the description changes — the arrows generate the grid.',
      'Tap PRIVATE, then PUBLIC. Same dots either way — but the public key’s arrows go long and skewed.',
      'Drag the ◆ message anywhere, then press FIND NEAREST DOT with each key. Private snaps to the right dot; public lands on a near-miss.',
    ][pqChapter];
    const pqShowKeys = pqChapter >= 1;
    const pqShowSkew = pqChapter === 1;
    const pqShowAttack = pqChapter === 2;
    const pqCvpLabel = st.pqDecoded ? 'SOLVED' : (st.pqGuessWrong ? 'WRONG' : (st.pqLanded ? 'LANDED' : 'READY'));
    const pqSolveButtonLabel = pqBad ? 'using public key' : 'using private key';
    const pqTruthLabel = st.pqShowTruth ? 'shown' : 'hidden';
    const pqStageTag = pqBad ? 'PUBLIC KEY — WHAT ATTACKERS SEE' : 'PRIVATE KEY — WHAT YOU HOLD';
    const pqDragHint = this._pqDrag ? ('DRAGGING ' + this._pqDrag.kind.toUpperCase()) : 'DRAG HANDLES // ORBIT EMPTY SPACE';
    const pqView = this._pqView || { yaw:-0.68, pitch:0.86, zoom:1 };
    const pqCameraReadout = 'YAW ' + Math.round(pqView.yaw * 57.2958) + ' // PITCH ' + Math.round(pqView.pitch * 57.2958);

    const hidden = (extra) => ({ opacity:0, transform:'translateY(8px)', transition:'opacity .5s steps(4), transform .5s steps(4)', ...extra });
    const shown  = (extra) => ({ opacity:1, transform:'translateY(0)', transition:'opacity .5s steps(4), transform .5s steps(4)', ...extra });

    return {
      showHome,
      showField: st.view === 'field',
      points: this._pts || (this._pts = this.buildPoints()),
      phaseBands: gr.phaseBands,
      fieldPoints: gr.fieldPoints,
      manifest: gr.manifest,
      nodes: gr.nodes,
      arcsSvg: this._arcsSvg || (this._arcsSvg = this.buildArcsSvg()),

      themeLabel: st.theme === 'dark' ? '[ DAY OPS ]' : '[ NIGHT OPS ]',
      legendOpen: st.legendOpen,
      legend: [
        { k:'LOCKED',     d:'live · playable module',   c:'var(--accent)' },
        { k:'DETECTED',   d:'in active build',          c:'var(--accent)' },
        { k:'TRACKING',   d:'planned · signal faint',   c:'var(--accent-dim)' },
        { k:'UNRESOLVED', d:'distant · pending',        c:'var(--accent-faint)' },
        { k:'◉ PING',     d:'live entry point',         c:'var(--accent)' },
      ],

      titleStyle: {
        fontFamily:"'Archivo',sans-serif", fontWeight:900, textTransform:'uppercase',
        fontSize:'clamp(64px,20vw,132px)', lineHeight:.86, letterSpacing:'-2px', margin:0,
        color:'var(--ink)',
        opacity: stage>=1 ? 1 : 0,
        filter: stage>=2 ? 'none' : 'blur(6px)',
        transform: stage>=2 ? 'none' : 'scale(1.02)',
        transition:'opacity .3s steps(3), filter .4s steps(4), transform .4s steps(4)',
      },
      acqStyle: {
        position:'absolute', inset:0, pointerEvents:'none',
        opacity: stage===1 ? 1 : 0, transition:'opacity .3s steps(2)',
      },
      taglineStyle: (stage>=3 ? shown : hidden)({ fontSize:'11px', color:'var(--muted)', letterSpacing:'.5px', marginTop:'26px' }),
      ctaStyle: {
        position:'relative', fontFamily:"'IBM Plex Mono',monospace", fontSize:'12px', letterSpacing:'3px',
        color:'var(--accent)', background: st.ctaHover ? 'var(--glow)' : 'transparent',
        border:'1px solid var(--accent)', padding:'15px 28px', marginTop:'32px', cursor:'pointer',
        opacity: stage>=3 ? 1 : 0, transform: stage>=3 ? 'translateY(0)' : 'translateY(8px)',
        transition:'opacity .5s steps(4) .1s, transform .5s steps(4) .1s, background .15s steps(2)',
      },
      calStyle: { fontSize:'10px', color:'var(--accent)', letterSpacing:'1px', marginTop:'18px', minHeight:'14px' },
      footerStyle: (stage>=3 ? shown : hidden)({ position:'absolute', bottom:'54px', fontSize:'9px', color:'var(--muted2)', letterSpacing:'1px' }),
      fieldWrapStyle: {
        animation: st.view==='field' ? 'mv-boxin .6s steps(6) both' : 'none',
        transformOrigin:'top center',
      },

      sheetOpen: !!sel, sel: sel || {},
      bitsOpen: st.stubId === 'bits',
      bitsLegacyOpen:false,
      stubOpen: !!st.stubId && !this.isLiveModule(st.stubId),
      bitsModuleClass:'bb-module bbc-module' + (st.bitsLost || (bitsRound === 5 && st.bitsCorruptionLevel > 0 && !st.bitsEnd) ? ' alarm' : ''),
      bitsRoundLabel:String(bitsRound).padStart(2,'0'), bitsRoundName:roundNames[bitsRound], bitsCaption:captions[bitsRound],
      bitsCode, bitsCodeText:String(bitsCode).padStart(3,'0'), bitsBinary, bitsGlyph, bitsSwitches,
      bitsFlips:st.bitsFlips || 0, bitsLocks:st.bitsLocks || 0,
      bitsObjective:bitsRound === 0 ? 'DISCOVER THE SWITCH BANK' : (bitsRound === 5 ? (st.bitsCorruptIndex < 0 ? 'FIND THE CORRUPTED CHARACTER' : 'RESTORE $100') : ('ACQUIRE ' + (bitsTarget !== null ? "'" + this.byteGlyph(bitsTarget) + "'" : 'SIGNAL'))),
      bitsState:st.bitsEnd ? 'COMPLETE' : (st.bitsLost ? 'SIGNAL LOST' : (st.bitsLocked ? 'LOCKED' : 'SCANNING')),
      bitsElapsedText:this.formatBitsTime(st.bitsElapsed || 0), bitsTimerText:(bitsRound >= 4 && !st.bitsEnd) ? ('T-' + String(st.bitsTimer).padStart(2,'0')) : 'NO LIMIT',
      bitsStatus:st.bitsLost ? 'SIGNAL LOST' : (st.bitsLocked ? 'SIGNAL ACQUIRED' : (bitsRound === 5 ? 'INTEGRITY SCAN' : 'SCANNING')),
      bitsHasTarget, bitsTargetGlyph:bitsHasTarget ? this.byteGlyph(bitsTarget) : '—', bitsTargetCode:bitsTarget === null || (bitsRound === 5 && st.bitsCorruptIndex < 0) ? '---' : String(bitsTarget).padStart(3,'0'), bitsTargetState:st.bitsLocked ? 'SIGNAL ACQUIRED' : 'SIGNAL UNRESOLVED',
      bitsShowBank:!st.bitsEnd && !(bitsRound === 5 && st.bitsCorruptIndex < 0), bitsRound4:bitsRound === 4, bitsRound5:bitsRound === 5,
      bitsWord, bitsOriginalMessage:'PAY BOB $100', bitsMessageChars,
      bitsTelemetry:(st.bitsLastFlip || 'AWAITING FIRST FLIP') + (bitsRound === 1 && st.bitsHint ? ' // TARGET DEC: 065' : ''),
      bitsLost:!!st.bitsLost, bitsCurrentDiff, bitsTargetDiff,
      bitsLocked:!!st.bitsLocked && !st.bitsEnd, bitsDebriefTitle:debriefTitles[bitsRound], bitsDebrief:debriefs[bitsRound],
      bitsShowMeter:bitsRound === 1, bitsCaseLock:bitsRound === 3, bitsNextLabel:bitsRound === 4 ? '> ENTER CORRUPTION TEST' : '> ACQUIRE NEXT SIGNAL',
      bitsEnd:!!st.bitsEnd, bitsEfficiency,
      bitsMeterStyle:{ position:'absolute', left:0, top:0, bottom:0, width:(bitsCode/255*100).toFixed(1)+'%', background:'var(--bb-hud)' },

      internetOpen: st.stubId === 'internet',
      iwMsg: st.iwMsg != null ? st.iwMsg : '',
      iwStarted, iwDone, iwMoving,
      iwSendLabel: iwStarted ? 'RESEND' : 'SEND ▶',
      iwBeatTag: iwCur[0], iwBeatTitle: iwCur[1], iwBeatBody: iwCur[2],
      iwDots,
      iwShowActions: iwStarted && !iwDone,
      iwContinueLabel: iwMoving ? 'IN FLIGHT…' : (iwBeat >= 6 ? 'ARRIVED' : 'CONTINUE ▶'),
      iwBeatCount: String(iwBeat).padStart(2,'0'),
      iwStatus: !iwStarted ? 'AWAITING MESSAGE' : (iwMoving ? 'PACKET IN FLIGHT' : (iwDone ? 'ROUND TRIP COMPLETE' : 'HELD // ' + iwCur[0])),
      iwHud: iwStarted ? ('BEAT ' + iwBeat + '/6 · bob.host') : 'NO PACKET SENT',

      symmetricOpen:st.stubId === 'symmetric', symMessage, symKey, symReady,
      symHasMessage:!!symMessage, symByteCount:symMessage.length,
      symTiles:Array.from(symMessage).slice(0,16).map(ch => ({ glyph:ch === ' ' ? '·' : ch })),
      symKeyId, symFingerprint, symSealed:!!st.symSealed, symSealedKey,
      symCiphertext, symCipherPreview:symCiphertext.split(' ').slice(0,5).join(' '), symCipherClass:'sy-cipher',
      symSealStyle:{ width:Math.max(0, Math.min(100, st.symSealProgress || 0))+'%' },
      symSealLabel:st.symSealed ? 'MESSAGE SEALED // HOLD TO RE-SEAL' : ((st.symSealProgress || 0) > 0 ? ('SEALING ' + String(st.symSealProgress).padStart(3,'0') + '%') : (symReady ? 'PRESS AND HOLD // SEAL MESSAGE' : 'MESSAGE + KEY REQUIRED')),
      symIntercepted:!!st.symIntercepted,
      symHasResult:!!st.symResult, symResult:st.symResult,
      symResultClass:'sy-result' + (st.symFailure ? ' fail' : ''),
      symResultTelemetry:st.symFailure ? 'KEY_MATCH: FALSE // OUTPUT_CLASS: GARBAGE // FAILURE_REASON: WRONG_KEY' : 'KEY_MATCH: TRUE // PLAINTEXT_RECOVERED // INTEGRITY: PASS',
      symMutation, symMutationLabel:symMutation ? '1 CHAR' : 'NONE', symMutatedKey, symMutatedCipher, symCipherDelta,
      symKeyCards,
      symFriendClass:'sy-toggle' + (st.symFriendHasKey ? ' on' : ''), symFriendLabel:st.symFriendHasKey ? 'YES' : 'NO',
      symFriendTelemetry:st.symFriendHasKey ? 'SENDER_KEY: PRESENT // RECEIVER_KEY: PRESENT // SYMMETRIC_STATE: VALID' : 'SENDER_KEY: PRESENT // RECEIVER_KEY: MISSING // SYMMETRIC_STATE: BROKEN',
      symStatus:st.symFailure ? 'WRONG KEY' : (st.symSealed ? 'CIPHERTEXT LOCKED' : (symReady ? 'LOCK STATE READY' : 'PLAINTEXT EXPOSED')),
      symHud:symReady ? ('PLAINTEXT ' + symMessage.length + 'B · ' + (st.symSealed ? 'READABLE FALSE' : 'READABLE TRUE')) : 'KEY SLOT EMPTY',

      // ---- HASHING ----
      hashingOpen:st.stubId === 'hashing', haText,
      haTabs, haAvalanche,
      haGrindLabel: st.haGround ? 'RE-GRIND' : 'GRIND ▶',
      haBeatTag: haCur[0] + ' // ' + haCur[1], haBeatTitle: haCur[2], haBeatBody: haCur[3], haTodo: haCur[4],
      haChapterGrind: haChapter === 0, haChapterAval: haChapter === 1, haChapterOneWay: haChapter === 2,
      haNudged: !!st.haNudged, haReversed: !!st.haReversed,
      haStatus: st.haBusy ? 'GRINDING' : (st.haReversed ? 'JAMMED // NO INVERSE' : (st.haGround ? 'FINGERPRINT SET' : 'HOPPER LOADED')),
      haHud: st.haGround ? ('AVALANCHE ' + haAvalanche + '%') : 'NOT YET GROUND',
      haHud2: 'CH ' + (haChapter + 1) + '/3',

      // ---- PUBLIC-KEY / RSA ----
      rsaOpen:st.stubId === 'rsa',
      rsaTabs, rsaBeatTag:rsaCur[0] + ' // ' + rsaCur[1], rsaBeatTitle:rsaCur[2], rsaBeatBody:rsaCur[3], rsaTodo:rsaCur[4],
      rsaChapterKeys:rsaChapter === 0, rsaChapterSeal:rsaChapter === 1, rsaChapterPublish:rsaChapter === 2,
      rsaRejectShown:!!st.rsaReject,
      rsaBoxContent:'MEET AT PIER 9 // 8PM',
      rsaSealed:!!st.rsaSealed, rsaOpenFail, rsaOpened,
      rsaPublished:!!st.rsaPublished, rsaEaves:st.rsaEaves || 0,
      rsaStatus:st.rsaSealed ? (rsaOpened ? 'BOX OPENED' : (rsaOpenFail ? 'SEALED — WRONG KEY' : 'BOX SEALED')) : (st.rsaShut ? 'PADLOCK SHUT' : 'PADLOCK OPEN'),
      rsaHud:st.rsaPublished ? ('KEY PUBLISHED · ' + (st.rsaEaves || 0) + ' SEALED') : 'TWO KEYS // ONE LOCK',

      // ---- SIGNATURES ----
      sigOpen:st.stubId === 'sig', sgMessage,
      sgSigned:!!st.sgSigned, sgSigNibbles,
      sgAliceKeyClass:'pk-key' + (sgVerifier === 'alice' ? ' pub' : ''),
      sgMalloryKeyClass:'pk-key' + (sgVerifier === 'mallory' ? ' pub' : ''),
      sgVerified:st.sgVerifyResult === 'ok', sgContentBad:st.sgVerifyResult === 'content', sgIdentityBad:st.sgVerifyResult === 'identity',
      sgForgeTried:!!st.sgForgeTried,
      sgStatus:st.sgVerifyResult === 'ok' ? 'VERIFIED' : (st.sgVerifyResult ? 'REJECTED' : (st.sgSigned ? 'SIGNED' : 'UNSIGNED')),
      sgHud:st.sgSigned ? 'SIGNED BY ALICE · VERIFY READY' : 'AWAITING SIGNATURE',

      // ---- TLS ----
      tlsOpen:st.stubId === 'tls', tlSteps,
      tlFailed:!!st.tlFailed, tlFailMsg:st.tlFailed || '', tlSecure:!!st.tlSecure,
      tlAttacker:!!st.tlAttacker, tlAttackerLabel:st.tlAttacker ? 'ON' : 'OFF', tlMitm:!!st.tlMitm,
      tlNoise1:this.tlNoise('ka'), tlNoise2:this.tlNoise('data'),
      tlStatus:st.tlSecure ? (st.tlAttacker ? 'ATTACKER — LOCKED OUT' : 'SECURE') : (st.tlFailed ? 'HANDSHAKE FAILED' : 'ORDERING'),
      tlHud:st.tlSecure ? 'CHANNEL SECURE · ATTACKER LOCKED OUT' : ('STEPS ' + tlSeq.length + '/4'),

      haInput:(e) => this.haInput(e),
      haGrind:() => this.haGrind(),
      haPickChapter:(e) => this.setState({ haChapter:Math.max(0, Math.min(2, Number(e.currentTarget.dataset.chapter) || 0)) }),
      haNudge:() => this.haNudge(),
      haReverse:() => this.haReverse(),
      rsaPickChapter:(e) => this.setState({ rsaChapter:Math.max(0, Math.min(2, Number(e.currentTarget.dataset.chapter) || 0)) }),
      rsaUsePublic:() => this.rsaUsePublic(),
      rsaUsePrivate:() => this.rsaUsePrivate(),
      rsaSeal:() => { this.pkAnim('lock'); this.setState({ rsaSealed:true, rsaOpenState:null, rsaShut:true }); },
      rsaOpenPub:() => { this.pkAnim('reject'); this.setState({ rsaOpenState:'fail' }); },
      rsaOpenPriv:() => { this.pkAnim('unlock'); this.setState({ rsaOpenState:'ok', rsaShut:false }); },
      rsaPublish:() => { this.pkAnim('publish'); this.setState({ rsaPublished:true }); },
      rsaEavesTry:() => { this.pkAnim('eaves'); this.setState({ rsaEaves:(this.state.rsaEaves || 0) + 1 }); },
      sgInput:(e) => this.setState({ sgMessage:e.currentTarget.value || '', sgVerifyResult:null }),
      sgSign:() => { const m = this.state.sgMessage || ''; this.setState({ sgSigned:true, sgSignedMessage:m, sgSignedHash:this.learningDigest(m), sgVerifyResult:null, sgForgeTried:false }); },
      sgPickAlice:() => this.setState({ sgVerifier:'alice', sgVerifyResult:null }),
      sgPickMallory:() => this.setState({ sgVerifier:'mallory', sgVerifyResult:null }),
      sgVerify:() => this.verifySignature(),
      sgForge:() => this.setState({ sgForgeTried:true }),
      tlPick:(e) => this.tlPick(e),
      tlReset:() => this.setState({ tlSequence:[], tlFailed:null, tlSecure:false, tlAttacker:false, tlMitm:false }),
      tlToggleAttacker:() => this.setState({ tlAttacker:!this.state.tlAttacker }),
      tlMitmTry:() => this.setState({ tlMitm:true }),

      // ---- QUBIT ----
      quantumOpen:st.stubId === 'quantum', qbBit:st.qbBit || 0,
      qbAngle, qbAngleText:qbAngle === 0 ? 'PURE 0' : (qbAngle === 180 ? 'PURE 1' : (qbAngle === 90 ? '45° — DEAD BETWEEN' : qbAngle + '° FROM 0')),
      qbP1, qbP0, qbPhase,
      qbArrowStyle:{ transform:'rotate(' + (180 - qbAngle) + 'deg)' },
      qbArrow2Style:{ transform:'rotate(' + qbPhase + 'deg)' },
      qbAmpStyle:{ width:qbP0 + '%' },
      qbZeros:st.qbZeros || 0, qbOnes:st.qbOnes || 0,
      qbBar0Style:{ height:(qbTotal ? (st.qbZeros / qbTotal * 100) : 0).toFixed(0) + '%' },
      qbBar1Style:{ height:(qbTotal ? (st.qbOnes / qbTotal * 100) : 0).toFixed(0) + '%' },
      qbMeasurements:qbTotal,
      qbTrapSprung:!!st.qbTrapSprung,
      qbInterfLabel:qbPhase >= 150 && qbPhase <= 210 ? 'ARROWS CANCEL // 0 IMPOSSIBLE' : (qbPhase <= 30 || qbPhase >= 330 ? 'ARROWS REINFORCE // 0 CERTAIN' : 'PARTIAL'),
      qbHasClassical:(st.qbClassicalTries || 0) > 0, qbClassicalTries:st.qbClassicalTries || 0, qbClassicalResult:st.qbClassicalResult || '—',
      qbQuantumSolved:!!st.qbQuantumSolved,
      qbStatus:st.qbTrapSprung ? 'SUPERPOSITION COLLAPSED' : (qbTotal ? 'MEASURING' : 'AIMING'),
      qbHud:'AIM ' + qbAngle + '° · P(1) ' + qbP1 + '%',

      // ---- QUANTUM vs RSA ----
      quantumRsaOpen:st.stubId === 'quantum-rsa',
      qrModuleClass:'bb-module qr-module' + (st.qrQuantumRun ? ' bbc-module alarm' : ''),
      qrRevealed:!!st.qrRevealed, qrN:qrN.toLocaleString(), qrP, qrQ,
      qrLockClass:'pk-lock' + (st.qrQuantumRun ? ' open' : ''),
      qrLockGlyph:st.qrQuantumRun ? '○' : '●',
      qrTries:(st.qrTries || 0).toLocaleString(),
      qrClassicalEst:'~4.0 MILLION YEARS',
      qrBloom, qrQuantumRun:!!st.qrQuantumRun,
      qrCascadeRows,
      qrStatus:st.qrQuantumRun ? 'RSA BROKEN' : (st.qrBruteActive ? 'BRUTE-FORCING' : (st.qrRevealed ? 'LOCK INSPECTED' : 'LOCK SEALED')),
      qrTimerText:st.qrQuantumRun ? 'QUANTUM 0.3s' : (st.qrBruteActive ? 'CLASSICAL: 4.0M YR' : 'IDLE'),
      qrHud:st.qrQuantumRun ? 'N FACTORED · ' + qrP + '×' + qrQ : (st.qrRevealed ? 'N = ' + qrN : 'RSA LOCK'),

      // ---- POST-QUANTUM ----
      pqcOpen:st.stubId === 'pqc',
      pqIntroOpen,
      pqChapters, pqChapterTitle, pqChapterCopy, pqStageTag, pqDragHint, pqCameraReadout,
      pqTodo, pqShowKeys, pqShowSkew, pqShowAttack,
      pqSkew:String(Math.max(0, Math.min(6, Number(st.pqSkew) || 0))),
      pqBasisLabel:pqBad ? 'PUBLIC' : 'PRIVATE',
      pqGoodClass:'pq-pill' + (!pqBad ? ' on' : ''), pqBadClass:'pq-pill' + (pqBad ? ' on' : ''),
      pqCvpLabel, pqSolveButtonLabel, pqTruthLabel,
      pqGuessWrong:!!st.pqGuessWrong, pqDecoded:!!st.pqDecoded, pqQuantumFizzled:!!st.pqQuantumFizzled,
      pqStatus:st.pqDecoded ? 'DECODED' : (st.pqQuantumFizzled ? 'QUANTUM FIZZLED' : (st.pqGuessWrong ? 'WRONG POINT' : 'LATTICE LOADED')),
      pqHud:st.pqQuantumFizzled ? 'QUANTUM: NO ADVANTAGE' : (pqBad ? 'PUBLIC BASIS · HARD' : 'PRIVATE BASIS · EASY'),

      qbFlipBit:() => this.setState({ qbBit:this.state.qbBit ? 0 : 1 }),
      qbSetAngle:(e) => this.setState({ qbAngle:Number(e.currentTarget.value) || 0 }),
      qbMeasure:() => this.qbMeasure(),
      qbResetHist:() => this.setState({ qbZeros:0, qbOnes:0 }),
      qbSpringTrap:() => this.setState({ qbTrapSprung:true, qbZeros:0, qbOnes:0 }),
      qbSetPhase:(e) => this.setState({ qbPhase:Number(e.currentTarget.value) || 0 }),
      qbClassicalTry:() => this.setState({ qbClassicalTries:(this.state.qbClassicalTries || 0) + 1, qbClassicalResult:Math.random() < 0.5 ? '0' : '1' }),
      qbQuantumRun:() => this.setState({ qbQuantumSolved:true }),
      qrInspect:() => this.setState({ qrRevealed:true }),
      qrBruteStart:() => this.startQrBrute(),
      qrQuantum:() => { clearInterval(this._qrIv); this.setState({ qrQuantumRun:true, qrBruteActive:false }); },
      qrCascadeRun:() => this.setState({ qrCascade:true }),
      pqCanvasDown:(e) => this.pqCanvasDown(e),
      pqCanvasMove:(e) => this.pqCanvasMove(e),
      pqCanvasUp:(e) => this.pqCanvasUp(e),
      pqPickChapter:(e) => this.pqPickChapter(e),
      pqBeginTour:() => this.setState({ pqIntroSeen:true }),
      pqUseGood:() => this.pqUseGood(),
      pqUseBad:() => this.pqUseBad(),
      pqSetSkew:(e) => this.pqSetSkew(e),
      pqSnap:() => this.pqSnap(),
      pqToggleTruth:() => this.pqToggleTruth(),
      pqResetLab:() => this.pqResetLab(),
      pqQuantumTry:() => this.pqQuantumTry(),

      initiateScan: () => this.initiateScan(),
      selectNode: (e) => this.selectNode(e),
      selectFromManifest: (e) => this.openNode(e.currentTarget.dataset.node, true),
      closeSheet: () => this.closeSheet(),
      lockOn: () => { const id = this.state.sheetId; this.setStatus('LOCKED'); const fr = document.getElementById('mv-select'); if (fr) fr.style.opacity = '0'; this.setState({ stubId: id, sheetId: null }); },
      closeStub: () => this.closeStub(),
      flipBit: (e) => this.flipBit(e),
      nextBitsRound: () => this.nextBitsRound(), reacquireBits: () => this.reacquireBits(),
      selectCorruptChar: (e) => this.selectCorruptChar(e),
      restartBits: () => this.restartBits(), openBitsBridge: (e) => this.openInternetBridge(e),
      iwMsgInput: (e) => this.iwMsgInput(e),
      iwSend: () => this.iwSend(),
      iwContinue: () => this.iwContinue(),
      iwReplay: () => this.iwReplay(),
      openInternetBridge: (e) => this.openInternetBridge(e),
      symMessageInput: (e) => this.updateSymMessage(e),
      symKeyInput: (e) => this.updateSymKey(e),
      startSymSeal: () => this.startSymSeal(), cancelSymSeal: () => this.cancelSymSeal(),
      interceptSymCipher: () => this.setState({ symIntercepted:true }),
      decryptSym: () => this.decryptSym(),
      mutateSymKey: (e) => this.setState({ symMutation:Number(e.currentTarget.value) || 0 }),
      trySymKey: (e) => this.trySymKey(e),
      toggleSymFriend: () => this.setState({ symFriendHasKey:!this.state.symFriendHasKey }),
      ctaEnter: () => this.setState({ ctaHover: true }),
      ctaLeave: () => this.setState({ ctaHover: false }),
      toggleLegend: () => this.setState({ legendOpen: !this.state.legendOpen }),
      toggleTheme: () => this.toggleTheme(),
    };
  }

  buildPoints() {
    const arr = [];
    const pos = [[14,22],[80,14],[88,70],[22,78],[50,10],[68,86],[8,50],[92,40],[38,88],[60,64]];
    pos.forEach((p,i) => arr.push({ style:{ position:'absolute', left:p[0]+'%', top:p[1]+'%', width:'3px', height:'3px',
      border:'1px solid var(--accent-dim)', opacity:.5, animation:`mv-flick ${2.4+i%3}s steps(4) infinite`, animationDelay:(i*0.2)+'s' } }));
    return arr;
  }

  initiateScan() {
    if (this._scanning) return; this._scanning = true;
    this.setView('VECTOR // CALIBRATING','');
    this.typeInto('mv-cal', '> CALIBRATION COMPLETE // MAPPING FIELD', 28);
    this.setStatus('SCANNING');
    setTimeout(() => {
      this.setView('VECTOR // CYBERSECURITY ATLAS','');
      this.setState({ view: 'field' });
      this.setConf(0); this.climbConf('mv-conf', 700);
      setTimeout(() => { this.setStatus('TRACKING'); this._scanning = false; }, 900);
    }, 850);
  }
  selectNode(e) { this.openNode(e.currentTarget.dataset.node, false); }
  openNode(id, scroll) {
    const n = this.g().byId[id]; if (!n) return;
    const fr = document.getElementById('mv-select');
    if (fr) { fr.style.left = n.x+'px'; fr.style.top = n.y+'px'; fr.style.width = n.w+'px'; fr.style.height = n.h+'px'; fr.style.opacity = '1'; }
    if (scroll) { const te = document.querySelector(`#mv-field [data-node="${id}"]`); if (te) te.scrollIntoView({ block:'center', behavior:'smooth' }); }
    this.setStatus(n.isLive ? 'LOCK-ON' : 'UNRESOLVED');
    if (location.hash.slice(1) !== id) { try { history.replaceState(null, '', '#' + id); } catch {} }
    this.setState({ sheetId: id });
  }
  closeSheet() {
    const fr = document.getElementById('mv-select');
    if (fr) fr.style.opacity = '0'; // clear the last-target frame on close
    if (location.hash) { try { history.replaceState(null, '', location.pathname + location.search); } catch {} }
    this.setStatus(this.state.view === 'field' ? 'TRACKING' : 'SCANNING');
    this.setState({ sheetId: null });
  }
  formatBitsTime(seconds) {
    const s = Math.max(0, Number(seconds) || 0);
    return String(Math.floor(s/60)).padStart(1,'0') + ':' + String(s%60).padStart(2,'0');
  }
  startBitsClock() {
    clearInterval(this._bitsClock);
    this._bitsClock = setInterval(() => {
      if (this.state.stubId !== 'bits' || this.state.bitsEnd) return;
      const patch = { bitsElapsed:(this.state.bitsElapsed || 0)+1, bitsRoundElapsed:(this.state.bitsRoundElapsed || 0)+1 };
      if (this.state.bitsRound === 1 && patch.bitsRoundElapsed >= 20) patch.bitsHint = true;
      if (this.state.bitsRound >= 4 && !this.state.bitsLocked && !this.state.bitsLost) {
        patch.bitsTimer = Math.max(0, (this.state.bitsTimer || 0)-1);
        if (patch.bitsTimer === 0) { this.setState(patch); this.loseBitsSignal(); return; }
      }
      this.setState(patch);
    }, 1000);
  }
  loseBitsSignal() {
    const patch = { bitsLost:true };
    if (this.state.bitsRound === 5 && this.state.bitsCorruptIndex < 0) {
      patch.bitsCorruptIndex = 9; patch.bitsValue = (this.state.bitsMessageReceived || 'PAY BOB $900').charCodeAt(9);
    }
    this.setState(patch);
  }
  flipBit(e) {
    const bit = Number(e.currentTarget.dataset.bit);
    if (bit < 0 || bit > 7 || this.state.bitsLocked || this.state.bitsLost || this.state.bitsEnd) return;
    if (this.state.bitsRound === 5 && this.state.bitsCorruptIndex < 0) return;
    const value = (this.state.bitsValue || 0) ^ (1 << (7-bit));
    const flips = (this.state.bitsFlips || 0) + 1;
    const patch = { bitsValue:value, bitsFlips:flips, bitsLastFlip:'FLIP b' + (7-bit) + ' → DEC ' + String(value).padStart(3,'0') + " → '" + this.byteGlyph(value) + "'" };
    if (this.state.bitsRound === 0) {
      if (flips >= 4) Object.assign(patch, { bitsRound:1, bitsValue:0, bitsCalibrationFlips:flips, bitsRoundElapsed:0, bitsHint:false, bitsLastFlip:'PATTERN UNDERSTOOD // INITIATING ACQUISITION' });
      this.setState(patch); return;
    }
    if (this.state.bitsRound >= 1 && this.state.bitsRound <= 3) {
      this.setState(patch); if (value === [0,65,66,97][this.state.bitsRound]) setTimeout(() => this.lockBitsRound(), 0); return;
    }
    if (this.state.bitsRound === 4) {
      const word = 'HI!', idx = this.state.bitsTimedIndex || 0;
      if (value === word.charCodeAt(idx)) {
        if (idx < word.length-1) Object.assign(patch, { bitsTimedIndex:idx+1, bitsValue:0, bitsTimer:idx===0?16:13, bitsLastFlip:'SIGNAL ' + word[idx] + ' LOCKED // NEXT BYTE' });
        else Object.assign(patch, { bitsLocked:true, bitsLocks:4, bitsTimer:0, bitsLastFlip:'WORD LOCKED // HI!' });
      }
      this.setState(patch); return;
    }
    if (this.state.bitsRound === 5) {
      const idx = this.state.bitsCorruptIndex, original = 'PAY BOB $100';
      let received = this.state.bitsMessageReceived || 'PAY BOB $900';
      received = received.slice(0,idx) + String.fromCharCode(value) + received.slice(idx+1);
      patch.bitsMessageReceived = received;
      if (received === original) Object.assign(patch, { bitsEnd:true, bitsLocks:5, bitsTimer:0, bitsCorruptionLevel:0, bitsLastFlip:'INTEGRITY RESTORED // SIGNAL ACQUIRED' });
      else patch.bitsCorruptionLevel = (this.state.bitsCorruptionLevel || 0) + 1;
      this.setState(patch);
    }
  }
  lockBitsRound() {
    if (this.state.bitsLocked) return;
    this.setState({ bitsLocked:true, bitsLocks:this.state.bitsRound, bitsLastFlip:'SIGNAL ACQUIRED // CONF 100%' });
  }
  nextBitsRound() {
    const next = Math.min(5, (this.state.bitsRound || 0)+1);
    const starts = { 2:65, 3:65, 4:0, 5:0 };
    this.setState({ bitsRound:next, bitsValue:starts[next] ?? 0, bitsLocked:false, bitsLost:false, bitsRoundElapsed:0, bitsHint:false,
      bitsTimedIndex:0, bitsTimer:next===4?20:(next===5?30:0), bitsLastFlip:'SCANNING // AWAITING FLIP', bitsCorruptIndex:next===5?-1:this.state.bitsCorruptIndex });
  }
  selectCorruptChar(e) {
    if (this.state.bitsLost || this.state.bitsEnd) return;
    const idx = Number(e.currentTarget.dataset.index), received = this.state.bitsMessageReceived || 'PAY BOB $900';
    if (!Number.isFinite(idx) || idx < 0 || idx >= received.length) return;
    this.setState({ bitsCorruptIndex:idx, bitsValue:received.charCodeAt(idx), bitsLastFlip:'BYTE SELECTED // INDEX ' + String(idx).padStart(2,'0') });
  }
  reacquireBits() {
    this.setState({ bitsLost:false, bitsTimer:this.state.bitsRound===4?15:25, bitsRoundElapsed:0, bitsLastFlip:'SIGNAL REACQUIRED // TRY AGAIN' });
  }
  restartBits() {
    this.setState({ bitsRound:0, bitsValue:0, bitsFlips:0, bitsCalibrationFlips:0, bitsLocks:0, bitsLocked:false, bitsLost:false,
      bitsTimer:0, bitsElapsed:0, bitsTimedIndex:0, bitsLastFlip:'AWAITING FIRST FLIP', bitsMessageReceived:'PAY BOB $900',
      bitsCorruptIndex:-1, bitsCorruptionLevel:0, bitsEnd:false, bitsHint:false, bitsRoundElapsed:0 });
  }
  // ---------- FD-02 // the message's slow-mo journey across the internet ----------
  iwMsgInput(e) {
    clearTimeout(this._iwTimer); this._iwSeg = null;
    this.setState({ iwMsg:e.currentTarget.value || '', iwStarted:false, iwDone:false, iwMoving:false, iwBeat:0 });
  }
  iwSend() {
    clearTimeout(this._iwTimer); this._iwSeg = null;
    this.setState({ iwStarted:true, iwDone:false, iwMoving:false, iwBeat:0 });
  }
  iwContinue() {
    if (this.state.iwMoving) return;
    const next = Math.min(6, (Number(this.state.iwBeat) || 0) + 1);
    if (next === this.state.iwBeat) return;
    const dur = next === 6 ? 2400 : (next === 4 ? 1900 : 1500); // the backbone & return legs run longer
    this._iwSeg = { toBeat:next, t0:(typeof performance !== 'undefined' ? performance.now() : Date.now()), dur };
    this.setState({ iwMoving:true });
    clearTimeout(this._iwTimer);
    this._iwTimer = setTimeout(() => {
      this._iwSeg = null;
      this.setState({ iwBeat:next, iwMoving:false, iwDone:next >= 6 });
    }, dur + 40);
  }
  iwReplay() {
    clearTimeout(this._iwTimer); this._iwSeg = null;
    this.setState({ iwStarted:true, iwDone:false, iwMoving:false, iwBeat:0 });
  }
  // fixed machine layout in normalised 0..1 stage space
  iwNodes() { return { you:[0.09,0.72], router:[0.28,0.72], dns:[0.28,0.17], isp:[0.50,0.72], bb:[0.71,0.50], server:[0.91,0.72] }; }
  iwNodeForBeat(b) { return ['you','router','dns','isp','bb','server','you'][Math.max(0,Math.min(6,b))]; }
  // waypoints the packet travels through to REACH a given beat
  iwWaypoints(toBeat) {
    const map = {
      1:['you','router'], 2:['router','dns'], 3:['dns','router','isp'],
      4:['isp','bb'], 5:['bb','server'], 6:['server','bb','isp','router','you'],
    };
    return (map[toBeat] || ['you','you']);
  }
  iwPointAlong(nodes, N, keys, W, H, t) {
    const pts = keys.map(k => [N[k][0]*W, N[k][1]*H]);
    let total = 0; const segs = [];
    for (let i = 1; i < pts.length; i++) { const d = Math.hypot(pts[i][0]-pts[i-1][0], pts[i][1]-pts[i-1][1]); segs.push(d); total += d; }
    let want = t * total;
    for (let i = 0; i < segs.length; i++) {
      if (want <= segs[i] || i === segs.length-1) {
        const f = segs[i] ? Math.max(0,Math.min(1, want/segs[i])) : 1;
        return [pts[i][0] + (pts[i+1][0]-pts[i][0])*f, pts[i][1] + (pts[i+1][1]-pts[i][1])*f];
      }
      want -= segs[i];
    }
    return pts[pts.length-1];
  }
  iwColor(canvas, name, fallback) { const v = getComputedStyle(canvas).getPropertyValue(name).trim(); return v || fallback; }
  drawIwCanvas() {
    const canvas = document.getElementById('iw-canvas');
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const W = Math.max(320, rect.width || 1000), H = Math.max(240, rect.height || W*0.62);
    const dpr = Math.min(2, devicePixelRatio || 1);
    const wantW = Math.round(W*dpr), wantH = Math.round(H*dpr);
    if (canvas.width !== wantW || canvas.height !== wantH) { canvas.width = wantW; canvas.height = wantH; }
    const ctx = canvas.getContext('2d'); if (!ctx) return;
    ctx.setTransform(dpr,0,0,dpr,0,0); ctx.clearRect(0,0,W,H);
    const hud = this.iwColor(canvas,'--bb-hud','#F5150E');
    const ink = this.iwColor(canvas,'--bb-ink','#171717');
    const bg = this.iwColor(canvas,'--bb-bg','#F7F7F4');
    const muted = this.iwColor(canvas,'--bb-muted','#555');
    const N = this.iwNodes();
    const P = (k) => [N[k][0]*W, N[k][1]*H];
    const st = this.state;
    const started = !!st.iwStarted;
    const seg = this._iwSeg;
    const now = (typeof performance !== 'undefined' ? performance.now() : Date.now());

    // --- roads between machines ---
    const road = (a, b, dashed) => {
      const A = P(a), B = P(b);
      ctx.save(); ctx.strokeStyle = hud; ctx.globalAlpha = .3; ctx.lineWidth = 1.5; if (dashed) ctx.setLineDash([5,5]);
      ctx.beginPath(); ctx.moveTo(A[0],A[1]); ctx.lineTo(B[0],B[1]); ctx.stroke(); ctx.restore();
    };
    road('you','router'); road('router','isp'); road('isp','bb'); road('bb','server'); road('router','dns', true);

    // --- backbone flavour: a little bundle of cables behind the bb node ---
    { const B = P('bb'); ctx.save(); ctx.strokeStyle = hud; ctx.globalAlpha = .22; ctx.lineWidth = 1;
      for (let i = -2; i <= 2; i++) { ctx.beginPath(); ctx.moveTo(B[0]-46, B[1]+i*4); ctx.bezierCurveTo(B[0]-14,B[1]+i*10, B[0]+14,B[1]-i*10, B[0]+46,B[1]+i*4); ctx.stroke(); } ctx.restore(); }

    // active node = where the packet is holding (or heading, faintly, while moving)
    const activeKey = seg ? this.iwNodeForBeat(seg.toBeat) : (started ? this.iwNodeForBeat(Number(st.iwBeat)||0) : 'you');

    // --- machines ---
    const machine = (key, label, sub, glyph) => {
      const [x,y] = P(key); const active = key === activeKey;
      const rw = Math.max(30, W*0.052), rh = Math.max(24, W*0.04);
      ctx.save();
      if (active && !seg) { // pulsing lock ring on the machine we've stopped at
        const pulse = 0.5 + 0.5*Math.sin(now/220);
        ctx.strokeStyle = hud; ctx.globalAlpha = .35 + .3*pulse; ctx.lineWidth = 2;
        ctx.strokeRect(x-rw/2-7-pulse*4, y-rh/2-7-pulse*4, rw+14+pulse*8, rh+14+pulse*8);
      }
      ctx.globalAlpha = 1; ctx.fillStyle = active ? hud : bg; ctx.strokeStyle = hud; ctx.lineWidth = 1.5;
      ctx.fillRect(x-rw/2, y-rh/2, rw, rh); ctx.strokeRect(x-rw/2, y-rh/2, rw, rh);
      // little screen
      ctx.fillStyle = active ? bg : hud; ctx.globalAlpha = active ? .9 : .25;
      ctx.fillRect(x-rw/2+4, y-rh/2+4, rw-8, rh-11);
      ctx.globalAlpha = 1; ctx.fillStyle = active ? bg : ink;
      ctx.font = "900 12px 'Archivo', sans-serif"; ctx.textAlign = 'center';
      ctx.fillText(glyph, x, y+rh/2-3);
      ctx.fillStyle = ink; ctx.font = "800 10px 'Archivo', sans-serif";
      ctx.fillText(label, x, y+rh/2+15);
      ctx.fillStyle = hud; ctx.font = "6px 'IBM Plex Mono', monospace";
      ctx.fillText(sub, x, y+rh/2+25);
      ctx.restore();
    };
    machine('you','YOU','your device','◻');
    machine('router','ROUTER','LOCAL','⌂');
    machine('dns','DNS','PHONE-BOOK','☎');
    machine('isp','ISP','PROVIDER','▤');
    machine('bb','BACKBONE','GLOBAL','∞');
    machine('server','BOB','203.0.113.18','▣');

    // --- the packet ---
    let speedTxt = 'ARRIVED';
    if (started) {
      let pos, resolved, isReturn, speedFrac = 0;
      if (seg) {
        const k = Math.max(0, Math.min(1, (now - seg.t0)/seg.dur));
        const e = 1 - Math.pow(1 - k, 4); // easeOutQuart — coasts to a slow-mo stop
        pos = this.iwPointAlong(N, N, this.iwWaypoints(seg.toBeat), W, H, e);
        speedFrac = Math.pow(1 - k, 3);
        resolved = seg.toBeat >= 3; isReturn = seg.toBeat === 6;
        speedTxt = 'SPEED ' + (speedFrac*2.4).toFixed(2) + 'c';
      } else {
        pos = P(this.iwNodeForBeat(Number(st.iwBeat)||0));
        resolved = (Number(st.iwBeat)||0) >= 3; isReturn = (Number(st.iwBeat)||0) === 6;
        speedTxt = 'HELD // 0.00c';
      }
      // motion trail
      if (speedFrac > 0.02) {
        ctx.save(); ctx.strokeStyle = isReturn ? ink : hud; ctx.lineWidth = 2; ctx.globalAlpha = .25;
        ctx.beginPath(); ctx.moveTo(pos[0]-speedFrac*40, pos[1]); ctx.lineTo(pos[0], pos[1]); ctx.stroke(); ctx.restore();
      }
      // envelope
      const pw = 40, ph = 26;
      ctx.save(); ctx.translate(pos[0], pos[1]);
      ctx.fillStyle = bg; ctx.strokeStyle = isReturn ? ink : hud; ctx.lineWidth = 2;
      ctx.fillRect(-pw/2,-ph/2,pw,ph); ctx.strokeRect(-pw/2,-ph/2,pw,ph);
      ctx.beginPath(); ctx.moveTo(-pw/2,-ph/2); ctx.lineTo(0,2); ctx.lineTo(pw/2,-ph/2); ctx.stroke();
      ctx.fillStyle = isReturn ? ink : hud; ctx.font = "900 7px 'IBM Plex Mono', monospace"; ctx.textAlign = 'center';
      const tag = isReturn ? 'REPLY' : (resolved ? '203.0.113.18' : 'bob.host');
      ctx.fillText(tag, 0, ph/2-4);
      ctx.restore();
      // the human message riding above the envelope, before it resolves to a number
      if (!isReturn) {
        const msg = (st.iwMsg || '').slice(0, 22);
        if (msg) { ctx.save(); ctx.fillStyle = muted; ctx.font = "10px 'Archivo', sans-serif"; ctx.textAlign = 'center';
          ctx.fillText('“' + msg + '”', pos[0], pos[1]-ph/2-8); ctx.restore(); }
      }
    }
    const sp = document.getElementById('iw-speed'); if (sp) sp.textContent = started ? speedTxt : 'READY // PRESS SEND';
  }
  // ---------- CR-02 // the grinder ----------
  haBumpLast(text) {
    const t = (text || '').replace(/\s+$/,'') || 'x';
    const last = t.charCodeAt(t.length - 1);
    return t.slice(0, -1) + String.fromCharCode(last === 122 ? 97 : last + 1);
  }
  haInput(e) {
    clearTimeout(this._haTimer); this._ha = null;
    this.setState({ haText:e.currentTarget.value || '', haGround:false, haNudged:false, haReversed:false, haBusy:false });
  }
  haStartAnim(mode, dur, after) {
    this._ha = { mode, t0:(typeof performance !== 'undefined' ? performance.now() : Date.now()), dur };
    clearTimeout(this._haTimer);
    this._haTimer = setTimeout(() => { this._ha = null; if (after) after(); }, dur + 40);
  }
  haGrind() {
    this.setState({ haChapter:0, haGround:false, haNudged:false, haReversed:false, haBusy:true });
    this.haStartAnim('grind', 1700, () => this.setState({ haGround:true, haBusy:false }));
  }
  haNudge() {
    const done = () => this.setState({ haBusy:false });
    this.setState({ haChapter:1, haGround:true, haNudged:true, haReversed:false, haBusy:true });
    this.haStartAnim('avalanche', 1500, done);
  }
  haReverse() {
    this.setState({ haChapter:2, haReversed:true, haBusy:true });
    this.haStartAnim('reverse', 1500, () => this.setState({ haBusy:false }));
  }
  haColor(canvas, name, fallback) { const v = getComputedStyle(canvas).getPropertyValue(name).trim(); return v || fallback; }
  drawHaCanvas() {
    const canvas = document.getElementById('ha-canvas');
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const W = Math.max(300, rect.width || 820), H = Math.max(360, rect.height || W*920/820);
    const dpr = Math.min(2, devicePixelRatio || 1);
    const wantW = Math.round(W*dpr), wantH = Math.round(H*dpr);
    if (canvas.width !== wantW || canvas.height !== wantH) { canvas.width = wantW; canvas.height = wantH; }
    const ctx = canvas.getContext('2d'); if (!ctx) return;
    ctx.setTransform(dpr,0,0,dpr,0,0); ctx.clearRect(0,0,W,H);
    const hud = this.haColor(canvas,'--bb-hud','#F5150E');
    const ink = this.haColor(canvas,'--bb-ink','#171717');
    const bg = this.haColor(canvas,'--bb-bg','#F7F7F4');
    const muted = this.haColor(canvas,'--bb-muted','#555');
    const alarm = '#ff2a22';
    const st = this.state;
    const now = (typeof performance !== 'undefined' ? performance.now() : Date.now());
    const anim = this._ha;
    const digest = this.learningDigest(st.haText || '');
    const nudged = this.learningDigest(this.haBumpLast(st.haText || ''));

    // animation progress + state
    let grindP = st.haGround ? 1 : 0;   // how full the fingerprint tray is
    let spin = now / 900;               // roller rotation
    let spinDir = 1, jam = 0, avalancheP = -1, reverseShake = 0;
    if (anim) {
      const k = Math.max(0, Math.min(1, (now - anim.t0)/anim.dur));
      if (anim.mode === 'grind') { grindP = 1 - Math.pow(1 - k, 3); spin = now/120; }
      else if (anim.mode === 'avalanche') { grindP = 1; spin = now/200; avalancheP = k; }
      else if (anim.mode === 'reverse') { grindP = 1; spinDir = -1; spin = -now/160; reverseShake = Math.sin(now/40)*3*(1-k); jam = k > 0.35 ? 1 : 0; }
    }

    const cx = W/2;
    // --- hopper (message tiles) ---
    const hopY = H*0.10, hopH = H*0.11;
    ctx.save(); ctx.strokeStyle = hud; ctx.lineWidth = 1.5; ctx.strokeRect(W*0.10, hopY, W*0.80, hopH); ctx.restore();
    const msg = (st.haText || '').slice(0, 20) || '—';
    ctx.save(); ctx.fillStyle = ink; ctx.font = "800 " + Math.round(W*0.045) + "px 'Archivo', sans-serif"; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(msg, cx, hopY + hopH/2); ctx.restore();
    ctx.save(); ctx.fillStyle = hud; ctx.font = "7px 'IBM Plex Mono', monospace"; ctx.textAlign = 'left';
    ctx.fillText('HOPPER // ANY LENGTH IN', W*0.10, hopY - 6); ctx.restore();

    // --- funnel + one-way valve ---
    const funTop = hopY + hopH, funBot = funTop + H*0.06, valveY = funBot + 6;
    ctx.save(); ctx.strokeStyle = hud; ctx.globalAlpha = .5; ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.moveTo(W*0.10, funTop); ctx.lineTo(cx - W*0.09, funBot); ctx.moveTo(W*0.90, funTop); ctx.lineTo(cx + W*0.09, funBot); ctx.stroke();
    // valve chevron (down = allowed). jams red on reverse.
    ctx.globalAlpha = 1; ctx.strokeStyle = jam ? alarm : hud; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(cx - 12, valveY); ctx.lineTo(cx, valveY + 9); ctx.lineTo(cx + 12, valveY); ctx.stroke();
    ctx.restore();

    // --- three roller rows (meshing gears) ---
    const gear = (gx, gy, r, phase) => {
      ctx.save(); ctx.translate(gx, gy); ctx.rotate(spin*phase);
      ctx.strokeStyle = jam ? alarm : hud; ctx.fillStyle = bg; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.arc(0,0,r,0,Math.PI*2); ctx.fill(); ctx.stroke();
      for (let i = 0; i < 8; i++) { ctx.save(); ctx.rotate(i/8*Math.PI*2); ctx.fillStyle = jam ? alarm : hud; ctx.fillRect(-2, -r-4, 4, 6); ctx.restore(); }
      ctx.beginPath(); ctx.arc(0,0,r*0.28,0,Math.PI*2); ctx.strokeStyle = jam ? alarm : hud; ctx.stroke();
      ctx.restore();
    };
    const rowYs = [valveY + H*0.09, valveY + H*0.19, valveY + H*0.29];
    const gr = W*0.075;
    rowYs.forEach((gy, ri) => {
      const sh = ri === 1 ? reverseShake : -reverseShake;
      gear(cx - gr - 4 + sh, gy, gr, spinDir * (ri%2? 1 : -1));
      gear(cx + gr + 4 + sh, gy, gr, spinDir * (ri%2? -1 : 1));
    });

    // --- falling pulp stream during grind ---
    if (anim && anim.mode === 'grind') {
      const k = Math.max(0, Math.min(1, (now - anim.t0)/anim.dur));
      ctx.save(); ctx.fillStyle = hud;
      for (let i = 0; i < 14; i++) {
        const ph = (k*2.4 + i*0.17) % 1;
        const y = funTop + ph*(rowYs[2]+H*0.06 - funTop);
        ctx.globalAlpha = .6*(1-ph);
        ctx.fillRect(cx - 6 + Math.sin(i*3+ph*10)*W*0.06, y, 4, 4);
      }
      ctx.restore();
    }
    // reverse sparks near valve
    if (anim && anim.mode === 'reverse' && jam) {
      ctx.save(); ctx.strokeStyle = alarm; ctx.lineWidth = 1.5;
      for (let i = 0; i < 6; i++) { const a = Math.random()*Math.PI*2, len = 6 + Math.random()*12; ctx.globalAlpha = Math.random(); ctx.beginPath(); ctx.moveTo(cx, valveY+9); ctx.lineTo(cx + Math.cos(a)*len, valveY+9 + Math.sin(a)*len); ctx.stroke(); }
      ctx.restore();
    }

    // --- fingerprint tray (32 cells, 16x2) ---
    const trayY = rowYs[2] + H*0.075, cols = 16, rows = 2;
    const pad = W*0.06, cw = (W - pad*2)/cols, ch = cw*1.15, gap = 2;
    ctx.save(); ctx.fillStyle = hud; ctx.font = "7px 'IBM Plex Mono', monospace"; ctx.textAlign = 'left';
    ctx.fillText('FINGERPRINT // ALWAYS 32 CELLS OUT', pad, trayY - 6); ctx.restore();
    for (let i = 0; i < 32; i++) {
      const c = i % cols, r = Math.floor(i / cols);
      const x = pad + c*cw, y = trayY + r*ch;
      const filled = (i / 32) <= grindP;
      let diff = false;
      if (avalancheP >= 0) { // avalanche cascade: differing cells flash in, left-to-right
        const isDiff = digest[i] !== nudged[i];
        diff = isDiff && avalancheP > (i / 40);
      }
      ctx.save();
      ctx.strokeStyle = hud; ctx.globalAlpha = filled ? 1 : .25; ctx.lineWidth = 1;
      ctx.strokeRect(x+gap/2, y+gap/2, cw-gap, ch-gap);
      if (filled) {
        ctx.fillStyle = diff ? alarm : ink; ctx.globalAlpha = diff ? .9 : .14;
        ctx.fillRect(x+gap/2, y+gap/2, cw-gap, ch-gap);
        ctx.globalAlpha = 1; ctx.fillStyle = diff ? bg : ink;
        ctx.font = "700 " + Math.round(cw*0.5) + "px 'IBM Plex Mono', monospace"; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        ctx.fillText((diff ? nudged[i] : digest[i]) || '', x + cw/2, y + ch/2);
      }
      ctx.restore();
    }

    const tag = document.getElementById('ha-tag');
    if (tag) tag.textContent = st.haBusy ? (anim ? anim.mode.toUpperCase() + '…' : 'WORKING…') : (jam ? 'JAMMED' : (st.haGround ? 'FORWARD OK' : 'READY'));
  }
  // ---------- CR-03 // the public-key bench ----------
  pkAnim(mode) { this._pk = { mode, t0:(typeof performance !== 'undefined' ? performance.now() : Date.now()), dur:mode === 'publish' ? 1100 : 900 }; }
  rsaUsePublic() {
    if (this.state.rsaShut) { this.pkAnim('reject'); this.setState({ rsaReject:true }); }   // public key can't open
    else { this.pkAnim('lock'); this.setState({ rsaShut:true, rsaReject:false }); }
  }
  rsaUsePrivate() {
    if (this.state.rsaShut) { this.pkAnim('unlock'); this.setState({ rsaShut:false, rsaReject:false }); }
    else this.setState({ rsaReject:false });
  }
  pkColor(canvas, name, fallback) { const v = getComputedStyle(canvas).getPropertyValue(name).trim(); return v || fallback; }
  drawPkCanvas() {
    const canvas = document.getElementById('pk-canvas');
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const W = Math.max(300, rect.width || 820), H = Math.max(280, rect.height || W*720/820);
    const dpr = Math.min(2, devicePixelRatio || 1);
    const wantW = Math.round(W*dpr), wantH = Math.round(H*dpr);
    if (canvas.width !== wantW || canvas.height !== wantH) { canvas.width = wantW; canvas.height = wantH; }
    const ctx = canvas.getContext('2d'); if (!ctx) return;
    ctx.setTransform(dpr,0,0,dpr,0,0); ctx.clearRect(0,0,W,H);
    const hud = this.pkColor(canvas,'--bb-hud','#F5150E');
    const ink = this.pkColor(canvas,'--bb-ink','#171717');
    const bg = this.pkColor(canvas,'--bb-bg','#F7F7F4');
    const muted = this.pkColor(canvas,'--bb-muted','#555');
    const st = this.state;
    const now = (typeof performance !== 'undefined' ? performance.now() : Date.now());
    const anim = this._pk;
    let k = 1; if (anim) { k = Math.max(0, Math.min(1, (now - anim.t0)/anim.dur)); if (k >= 1) this._pk = null; }
    const mode = anim ? anim.mode : null;

    // shackle openness 0=closed .. 1=open ; key turn angle ; shudder shake
    let shackle = st.rsaShut ? 0 : 1;
    let keyTurn = 0, shake = 0, whichKey = null;
    if (mode === 'lock') { shackle = 1 - this.easeOut(k); keyTurn = k*Math.PI/2; whichKey = 'pub'; }
    else if (mode === 'unlock') { shackle = this.easeOut(k); keyTurn = k*Math.PI/2; whichKey = 'priv'; }
    else if (mode === 'reject') { shackle = 0; keyTurn = Math.sin(k*Math.PI)*0.5; shake = Math.sin(now/28)*4*(1-k); whichKey = 'pub'; }

    const cx = W*0.5, bodyW = W*0.34, bodyH = H*0.30, bodyY = H*0.44;
    // shackle (U bar) — lifts up + pivots as it opens
    const sx = cx, sTop = bodyY - bodyH*0.05;
    const lift = shackle * bodyH*0.34;
    ctx.save(); ctx.translate(shake, 0);
    ctx.strokeStyle = hud; ctx.lineWidth = Math.max(10, W*0.022); ctx.lineCap = 'round';
    const r = bodyW*0.32;
    ctx.beginPath();
    ctx.moveTo(cx - r, bodyY + bodyH*0.15);
    ctx.lineTo(cx - r, sTop - lift);
    ctx.arc(cx, sTop - lift, r, Math.PI, 0);
    ctx.lineTo(cx + r, bodyY + bodyH*0.15 - shackle*2);
    ctx.stroke();
    ctx.restore();

    // lock body
    ctx.save(); ctx.translate(shake, 0);
    ctx.fillStyle = bg; ctx.strokeStyle = hud; ctx.lineWidth = 2;
    this.roundRect(ctx, cx - bodyW/2, bodyY, bodyW, bodyH, 10); ctx.fill(); ctx.stroke();
    // keyhole
    const khY = bodyY + bodyH*0.44;
    ctx.fillStyle = st.rsaShut ? hud : muted;
    ctx.beginPath(); ctx.arc(cx, khY, bodyW*0.09, 0, Math.PI*2); ctx.fill();
    ctx.fillRect(cx - bodyW*0.03, khY, bodyW*0.06, bodyH*0.22);
    // status glyph
    ctx.fillStyle = ink; ctx.font = "900 " + Math.round(bodyW*0.16) + "px 'Archivo', sans-serif"; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(st.rsaShut ? 'SHUT' : 'OPEN', cx, bodyY + bodyH*0.80);
    ctx.restore();

    // the two keys on a ring at the bottom, one glows when in use
    const drawKey = (kx, ky, label, col, active) => {
      ctx.save(); ctx.translate(kx, ky);
      if (active && whichKey) ctx.rotate(keyTurn*0.3);
      ctx.strokeStyle = col; ctx.fillStyle = active ? col : bg; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.arc(0, 0, 12, 0, Math.PI*2); ctx.stroke();   // bow
      ctx.fillRect(-2, 10, 4, 34);                                      // shaft
      ctx.fillRect(-2, 34, 10, 4); ctx.fillRect(-2, 40, 7, 4);         // teeth
      ctx.fillStyle = col; ctx.font = "800 9px 'IBM Plex Mono', monospace"; ctx.textAlign = 'center';
      ctx.fillText(label, 0, -18); ctx.restore();
    };
    const kY = H*0.90;
    drawKey(cx - bodyW*0.5, kY, 'PUBLIC', hud, whichKey === 'pub');
    drawKey(cx + bodyW*0.5, kY, 'PRIVATE', ink, whichKey === 'priv');

    // chapter 1: the sealed message box sits in front of the lock
    if (st.rsaChapter === 1) {
      const boxW = bodyW*0.7, boxX = cx - boxW/2, boxY = bodyY + bodyH*1.15, boxH = H*0.10;
      ctx.save(); ctx.strokeStyle = hud; ctx.lineWidth = 2; ctx.fillStyle = bg;
      ctx.strokeRect(boxX, boxY, boxW, boxH);
      ctx.fillStyle = st.rsaOpenState === 'ok' ? ink : muted;
      ctx.font = "800 " + Math.round(boxW*0.07) + "px 'Archivo', sans-serif"; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(st.rsaOpenState === 'ok' ? 'MEET AT PIER 9 · 8PM' : (st.rsaSealed ? '████ ███ ████' : 'MEET AT PIER 9 · 8PM'), cx, boxY + boxH/2);
      ctx.restore();
    }

    // chapter 2: publish — public key copies fly out along a wire to an eavesdropper
    if (st.rsaChapter === 2) {
      const wireY = H*0.90;
      ctx.save(); ctx.strokeStyle = hud; ctx.globalAlpha = .4; ctx.setLineDash([5,5]); ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.moveTo(W*0.14, wireY); ctx.lineTo(W*0.86, wireY); ctx.stroke(); ctx.restore();
      if (st.rsaPublished) {
        const t = mode === 'publish' ? this.easeOut(k) : 1;
        for (let i = 0; i < 3; i++) { const px = W*0.24 + (W*0.5)*((t + i*0.2)%1); ctx.save(); ctx.fillStyle = hud; ctx.fillRect(px-3, wireY-3, 6, 6); ctx.restore(); }
        // eavesdropper figure at the end
        ctx.save(); ctx.strokeStyle = mode === 'eaves' ? '#ff2a22' : hud; ctx.lineWidth = 2;
        ctx.strokeRect(W*0.80, wireY-14, 22, 22);
        ctx.fillStyle = mode === 'eaves' ? '#ff2a22' : hud; ctx.font = "7px 'IBM Plex Mono', monospace"; ctx.textAlign = 'center';
        ctx.fillText('EVE', W*0.80+11, wireY+20); ctx.restore();
      }
    }

    const tag = document.getElementById('pk-tag');
    if (tag) tag.textContent = mode ? mode.toUpperCase() + '…' : (st.rsaShut ? 'LOCKED' : 'OPEN');
  }
  easeOut(k) { return 1 - Math.pow(1 - k, 3); }
  roundRect(ctx, x, y, w, h, r) { ctx.beginPath(); ctx.moveTo(x+r,y); ctx.arcTo(x+w,y,x+w,y+h,r); ctx.arcTo(x+w,y+h,x,y+h,r); ctx.arcTo(x,y+h,x,y,r); ctx.arcTo(x,y,x+w,y,r); ctx.closePath(); }
  openInternetBridge(e) {
    const id = e.currentTarget.dataset.node;
    if (!id || !this.g().byId[id]) return;
    this.setState({ stubId:null });
    setTimeout(() => this.openNode(id, true), 60);
  }
  updateSymMessage(e) {
    this.setState({ symMessage:e.currentTarget.value || '', symSealed:false, symSealedMessage:'', symSealedKey:'', symSealProgress:0, symResult:'', symFailure:false, symIntercepted:false });
  }
  updateSymKey(e) {
    this.setState({ symKey:e.currentTarget.value || '', symResult:'', symFailure:false });
  }
  startSymSeal() {
    if (!this.state.symMessage || !this.state.symKey) return;
    clearInterval(this._symSealIv);
    this._symSealComplete = false;
    let progress = 0;
    this.setState({ symSealProgress:0, symResult:'', symFailure:false, symIntercepted:false });
    this._symSealIv = setInterval(() => {
      progress = Math.min(100, progress + 5);
      if (progress >= 100) {
        clearInterval(this._symSealIv); this._symSealComplete = true;
        this.setState({ symSealProgress:100, symSealed:true, symSealedMessage:this.state.symMessage, symSealedKey:this.state.symKey, symResult:'', symFailure:false, symIntercepted:false, symMutation:1 });
      } else this.setState({ symSealProgress:progress });
    }, 35);
  }
  cancelSymSeal() {
    clearInterval(this._symSealIv);
    if (!this._symSealComplete) this.setState({ symSealProgress:0 });
  }
  decryptSymWithKey(key) {
    if (!this.state.symSealed) return;
    const correct = key === this.state.symSealedKey;
    const cipher = this.learningCipher(this.state.symSealedMessage, this.state.symSealedKey);
    this.setState({ symKey:key, symResult:correct ? this.state.symSealedMessage : this.learningGarbage(cipher, key), symFailure:!correct });
  }
  decryptSym() { this.decryptSymWithKey(this.state.symKey || ''); }
  trySymKey(e) { this.decryptSymWithKey(e.currentTarget.dataset.key || ''); }
  closeStub() {
    clearInterval(this._symSealIv); this._symSealComplete = false;
    clearInterval(this._qrIv);
    this._pqDrag = null;
    this.setStatus('TRACKING'); this.setState({ stubId: null, symSealProgress:this.state.symSealed ? 100 : 0, qrBruteActive:false });
  }
  verifySignature() {
    if (!this.state.sgSigned) { this.setState({ sgVerifyResult:null }); return; }
    const cur = this.learningDigest(this.state.sgMessage || '');
    let r;
    if (cur !== this.state.sgSignedHash) r = 'content';        // message altered after signing → fingerprint mismatch
    else if (this.state.sgVerifier !== 'alice') r = 'identity'; // wrong public key → identity fails
    else r = 'ok';
    this.setState({ sgVerifyResult:r });
  }
  tlPick(e) {
    const id = e.currentTarget.dataset.step;
    if (this.state.tlSecure) return;
    const order = ['verify','key','cipher','data'];
    const seq = (this.state.tlSequence || []).slice();
    if (seq.includes(id)) return;
    const expected = order[seq.length];
    if (id === expected) {
      seq.push(id);
      this.setState({ tlSequence:seq, tlFailed:null, tlSecure:seq.length === 4 });
      return;
    }
    // wrong next step — report the tool that blocks it, then reset the sequence
    let msg;
    if ((id === 'cipher' || id === 'data') && !seq.includes('key')) msg = 'CANNOT ENCRYPT: NO SHARED KEY YET';
    else if (id !== 'verify' && !seq.includes('verify')) msg = 'CANNOT TRUST KEY: IDENTITY UNVERIFIED';
    else msg = 'OUT OF ORDER // THAT STEP CAN\'T RUN YET';
    this.setState({ tlSequence:[], tlFailed:msg });
  }
  qbMeasure() {
    const angle = Math.max(0, Math.min(180, Number(this.state.qbAngle) || 0));
    const p1 = Math.sin(angle * Math.PI / 360) ** 2;   // sin²(θ/2) — the aim sets the odds, not the answer
    const one = Math.random() < p1;
    this.setState({ qbOnes:(this.state.qbOnes || 0) + (one ? 1 : 0), qbZeros:(this.state.qbZeros || 0) + (one ? 0 : 1) });
  }
  startQrBrute() {
    clearInterval(this._qrIv);
    this.setState({ qrBruteActive:true });
    this._qrIv = setInterval(() => {
      if (this.state.stubId !== 'quantum-rsa' || this.state.qrQuantumRun) { clearInterval(this._qrIv); return; }
      const next = (this.state.qrTries || 0) + 7919 + (Math.floor(Math.random() * 5000));
      if (next >= 300000) { clearInterval(this._qrIv); this.setState({ qrTries:300000 }); return; }
      this.setState({ qrTries:next });
    }, 60);
  }

  // ---------- post-quantum lattice lab (ported from Quantum Lattice, restyled native) ----------
  pqDefaultGood() { return [[1.6, 0.2], [0.2, 1.6]]; }
  pqCloneBasis(b) { return [[b[0][0], b[0][1]], [b[1][0], b[1][1]]]; }
  pqMatVec(basis, x) { return [basis[0][0] * x[0] + basis[1][0] * x[1], basis[0][1] * x[0] + basis[1][1] * x[1]]; }
  pqBasisMul(a, b) { return [this.pqMatVec(a, b[0]), this.pqMatVec(a, b[1])]; }
  pqMakeBadBasis(good, strength) {
    const shearRight = [[1, 0], [1, 1]];
    const shearLeft = [[1, 1], [0, 1]];
    let U = [[1, 0], [0, 1]];
    for (let i = 0; i < strength; i++) U = this.pqBasisMul(U, i % 2 === 0 ? shearRight : shearLeft);
    return this.pqBasisMul(good, U);
  }
  pqDet(basis) { return basis[0][0] * basis[1][1] - basis[1][0] * basis[0][1]; }
  pqInvBasis(basis) {
    const d = this.pqDet(basis) || 1e-6;
    return [[basis[1][1] / d, -basis[0][1] / d], [-basis[1][0] / d, basis[0][0] / d]];
  }
  pqToCoeffs(basis, target) { return this.pqMatVec(this.pqInvBasis(basis), target); }
  pqDist(a, b) { return Math.hypot(a[0] - b[0], a[1] - b[1]); }
  pqGenerateLattice(basis, range) {
    const pts = [];
    for (let a = -range; a <= range; a++) for (let b = -range; b <= range; b++) pts.push({ coeff:[a, b], p:this.pqMatVec(basis, [a, b]) });
    return pts;
  }
  pqNearest(target, pts) {
    let best = pts[0], bestD = Infinity;
    for (const it of pts) {
      const p = it.p || it, d = this.pqDist(target, p);
      if (d < bestD) { bestD = d; best = p; }
    }
    return best;
  }
  pqBabai(target, basis) {
    const coeffs = this.pqToCoeffs(basis, target);
    const snapped = [Math.round(coeffs[0]), Math.round(coeffs[1])];
    const landed = this.pqMatVec(basis, snapped);
    const mid = this.pqMatVec(basis, [snapped[0], coeffs[1]]);
    return { coeffs, snapped, landed, path:[target, mid, landed] };
  }
  pqGoodBasis() { return this.state.pqGoodBasis || this.pqDefaultGood(); }
  pqBadBasis() { return this.pqMakeBadBasis(this.pqGoodBasis(), Math.max(0, Math.min(6, Number(this.state.pqSkew) || 0))); }
  pqActiveBasis() { return this.state.pqBasis === 'good' ? this.pqGoodBasis() : this.pqBadBasis(); }
  pqView() {
    if (!this._pqView) this._pqView = { yaw:-0.68, pitch:0.86, zoom:1 };
    return this._pqView;
  }
  pqProject(v, W, H) {
    const view = this.pqView();
    const yaw = view.yaw, pitch = view.pitch;
    const x = v[0], z = v[1], y = v.length > 2 ? v[2] : 0;
    const cy = H * 0.56, cx = W * 0.5;
    const co = Math.cos(yaw), si = Math.sin(yaw);
    const cp = Math.cos(pitch), sp = Math.sin(pitch);
    const x1 = x * co - z * si;
    const z1 = x * si + z * co;
    const y1 = y * cp - z1 * sp;
    const z2 = y * sp + z1 * cp;
    const base = Math.min(W, H) / 14 * view.zoom;
    const depth = Math.max(0.72, Math.min(1.28, 1 + z2 * 0.025));
    return { x:cx + x1 * base * depth, y:cy - y1 * base * depth, d:z2, s:depth, base };
  }
  pqScreenToWorld(e, canvas) {
    const r = canvas.getBoundingClientRect();
    const W = r.width || 1, H = r.height || 1, view = this.pqView();
    const cx = W * 0.5, cy = H * 0.56, base = Math.min(W, H) / 14 * view.zoom;
    const x1 = (e.clientX - r.left - cx) / base;
    const sp = Math.max(0.25, Math.sin(view.pitch));
    const z1 = (e.clientY - r.top - cy) / (sp * base);
    const co = Math.cos(view.yaw), si = Math.sin(view.yaw);
    const x = x1 * co + z1 * si;
    const z = -x1 * si + z1 * co;
    const clamp = 5.8;
    return [Math.max(-clamp, Math.min(clamp, x)), Math.max(-clamp, Math.min(clamp, z))];
  }
  pqColor(canvas, name, fallback) {
    const v = getComputedStyle(canvas).getPropertyValue(name).trim();
    return v || fallback;
  }
  drawPqCanvas() {
    const canvas = document.getElementById('pq-canvas');
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const W = Math.max(320, rect.width || 1000), H = Math.max(320, rect.height || 660);
    const dpr = Math.min(2, devicePixelRatio || 1);
    const wantW = Math.round(W * dpr), wantH = Math.round(H * dpr);
    if (canvas.width !== wantW || canvas.height !== wantH) { canvas.width = wantW; canvas.height = wantH; }
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, W, H);

    const hud = this.pqColor(canvas, '--bb-hud', '#F5150E');
    const ink = this.pqColor(canvas, '--bb-ink', '#171717');
    const bg = this.pqColor(canvas, '--bb-bg', '#F7F7F4');
    const muted = this.pqColor(canvas, '--bb-muted', '#555');
    const good = this.pqGoodBasis(), bad = this.pqBadBasis();
    const active = this.state.pqBasis === 'good' ? good : bad;
    const target = this.state.pqTarget || [2.3, 1.4];
    const chapter = Number(this.state.pqChapter) || 0;
    const range = 5;
    const view = this.pqView();
    if (!this._pqDrag && !this._reduceMotion) view.yaw += 0.00075 * Math.max(0.25, (this.mi || 45) / 45);

    ctx.fillStyle = bg;
    ctx.globalAlpha = 0.34;
    ctx.fillRect(0, 0, W, H);
    ctx.globalAlpha = 1;

    const pts = this.pqGenerateLattice(good, range).map(it => ({ ...it, q:this.pqProject([it.p[0], it.p[1], 0], W, H) })).sort((a, b) => a.q.d - b.q.d);
    const drawLine = (a, b, color, alpha, width, dash) => {
      const A = this.pqProject([a[0], a[1], a[2] || 0], W, H), B = this.pqProject([b[0], b[1], b[2] || 0], W, H);
      ctx.save(); ctx.globalAlpha = alpha; ctx.strokeStyle = color; ctx.lineWidth = width; if (dash) ctx.setLineDash(dash);
      ctx.beginPath(); ctx.moveTo(A.x, A.y); ctx.lineTo(B.x, B.y); ctx.stroke(); ctx.restore();
    };
    if (chapter >= 1 || this.state.pqShowTruth) {
      ctx.save(); ctx.strokeStyle = hud; ctx.globalAlpha = .13; ctx.lineWidth = 1;
      for (let a = -range; a <= range; a++) {
        let last = null;
        for (let b = -range; b <= range; b++) { const p = this.pqMatVec(good, [a, b]); const q = this.pqProject([p[0], p[1], 0], W, H); if (last) { ctx.beginPath(); ctx.moveTo(last.x, last.y); ctx.lineTo(q.x, q.y); ctx.stroke(); } last = q; }
      }
      for (let b = -range; b <= range; b++) {
        let last = null;
        for (let a = -range; a <= range; a++) { const p = this.pqMatVec(good, [a, b]); const q = this.pqProject([p[0], p[1], 0], W, H); if (last) { ctx.beginPath(); ctx.moveTo(last.x, last.y); ctx.lineTo(q.x, q.y); ctx.stroke(); } last = q; }
      }
      ctx.restore();
    }

    const o = [0, 0], c1 = active[0], c2 = active[1], c3 = [c1[0] + c2[0], c1[1] + c2[1]];
    if (chapter >= 1) {
      const poly = [o, c1, c3, c2].map(p => this.pqProject([p[0], p[1], .02], W, H));
      ctx.save(); ctx.fillStyle = hud; ctx.globalAlpha = .08; ctx.beginPath(); ctx.moveTo(poly[0].x, poly[0].y); for (let i = 1; i < poly.length; i++) ctx.lineTo(poly[i].x, poly[i].y); ctx.closePath(); ctx.fill();
      ctx.globalAlpha = .42; ctx.strokeStyle = hud; ctx.setLineDash([6, 5]); ctx.stroke(); ctx.restore();
    }

    for (const it of pts) {
      const q = it.q, nearOrigin = it.coeff[0] === 0 && it.coeff[1] === 0;
      const r = (nearOrigin ? 5 : 3.2) * q.s;
      // solid filled dots: origin in accent (red/white), the rest ink, each with a
      // thin bg ring so overlapping dots stay legible in the depth-sorted field
      ctx.save(); ctx.globalAlpha = .58 + Math.max(-.2, Math.min(.24, q.d * .025)); ctx.fillStyle = nearOrigin ? hud : ink; ctx.strokeStyle = bg; ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.arc(q.x, q.y, r, 0, Math.PI * 2); ctx.fill(); ctx.stroke(); ctx.restore();
    }

    const drawArrow = (vec, color, label, dash) => {
      const A = this.pqProject([0, 0, .08], W, H), B = this.pqProject([vec[0], vec[1], .08], W, H);
      const ang = Math.atan2(B.y - A.y, B.x - A.x);
      ctx.save(); ctx.strokeStyle = color; ctx.fillStyle = color; ctx.lineWidth = 2; if (dash) ctx.setLineDash([7, 5]);
      ctx.beginPath(); ctx.moveTo(A.x, A.y); ctx.lineTo(B.x, B.y); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(B.x, B.y); ctx.lineTo(B.x - Math.cos(ang - .45) * 10, B.y - Math.sin(ang - .45) * 10); ctx.lineTo(B.x - Math.cos(ang + .45) * 10, B.y - Math.sin(ang + .45) * 10); ctx.closePath(); ctx.fill();
      ctx.font = "700 10px 'IBM Plex Mono', monospace"; ctx.fillText(label, B.x + 8, B.y - 8); ctx.restore();
      return B;
    };
    if (chapter === 1) {
      drawArrow(this.state.pqBasis === 'good' ? bad[0] : good[0], muted, 'alt b1', true);
      drawArrow(this.state.pqBasis === 'good' ? bad[1] : good[1], muted, 'alt b2', true);
    }
    const b1 = drawArrow(active[0], hud, 'b1', false);
    const b2 = drawArrow(active[1], ink, 'b2', false);

    const landed = this.state.pqLanded;
    const nearest = this.state.pqNearest;
    if (landed) {
      // the landing marker travels from the ◆ to its rounded dot over ~200ms
      const now = (typeof performance !== 'undefined' ? performance.now() : Date.now());
      const an = this._pqSnapAnim;
      let lx = landed[0], ly = landed[1];
      if (an && an.to && an.to[0] === landed[0] && an.to[1] === landed[1]) {
        const k = Math.min(1, (now - an.t0) / 200), e2 = 1 - Math.pow(1 - k, 3); // easeOutCubic
        lx = an.from[0] + (an.to[0] - an.from[0]) * e2;
        ly = an.from[1] + (an.to[1] - an.from[1]) * e2;
        if (k >= 1) this._pqSnapAnim = null;
      }
      drawLine([target[0], target[1], .25], [lx, ly, .25], this.state.pqGuessWrong ? '#ff2a22' : hud, .8, 2, [4, 4]);
      const L = this.pqProject([lx, ly, .32], W, H);
      ctx.save(); ctx.strokeStyle = this.state.pqGuessWrong ? '#ff2a22' : hud; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(L.x, L.y, 12, 0, Math.PI * 2); ctx.stroke(); ctx.restore();
    }
    if ((this.state.pqShowTruth || chapter >= 2) && nearest) {
      const N = this.pqProject([nearest[0], nearest[1], .42], W, H);
      ctx.save(); ctx.strokeStyle = ink; ctx.fillStyle = bg; ctx.lineWidth = 2; ctx.setLineDash([2, 3]); ctx.beginPath(); ctx.rect(N.x - 9, N.y - 9, 18, 18); ctx.stroke(); ctx.fillText('TRUE', N.x + 12, N.y + 3); ctx.restore();
    }

    // quantum fizzle: rings pulse out from the message and find nothing to lock onto
    if (this.state.pqQuantumFizzled) {
      const now = (typeof performance !== 'undefined' ? performance.now() : Date.now());
      const tq = this.pqProject([target[0], target[1], .22], W, H);
      const phase = ((now - (this._pqFizzleAt || 0)) / 1400) % 1;
      ctx.save(); ctx.strokeStyle = hud; ctx.lineWidth = 1.4;
      for (let i = 0; i < 3; i++) {
        const p = (phase + i / 3) % 1;
        ctx.globalAlpha = 0.5 * (1 - p);
        ctx.beginPath(); ctx.arc(tq.x, tq.y, 6 + p * 120, 0, Math.PI * 2); ctx.stroke();
      }
      ctx.restore();
    }

    // the ◆ message only exists in THE ATTACK — a floating diamond in the earlier
    // chapters just reads as noise, so hide it (and its drag handle) until chapter 2
    this._pqHandles = { b1:{ x:b1.x, y:b1.y, kind:'b1' }, b2:{ x:b2.x, y:b2.y, kind:'b2' } };
    if (chapter >= 2) {
      const tq = this.pqProject([target[0], target[1], .55], W, H);
      ctx.save(); ctx.translate(tq.x, tq.y); ctx.rotate(Math.PI / 4); ctx.fillStyle = hud; ctx.strokeStyle = bg; ctx.lineWidth = 2; ctx.fillRect(-7, -7, 14, 14); ctx.strokeRect(-7, -7, 14, 14); ctx.restore();
      ctx.save(); ctx.fillStyle = hud; ctx.font = "700 10px 'IBM Plex Mono', monospace"; ctx.fillText('message', tq.x + 12, tq.y - 10); ctx.restore();
      this._pqHandles.target = { x:tq.x, y:tq.y, kind:'target' };
    }
  }
  pqCanvasDown(e) {
    const canvas = e.currentTarget, r = canvas.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top;
    let best = null, bestD = 999;
    const handles = this._pqHandles || {};
    Object.keys(handles).forEach(k => { const h = handles[k], d = Math.hypot(x - h.x, y - h.y); if (d < bestD) { bestD = d; best = h; } });
    const view = this.pqView();
    this._pqDrag = best && bestD < 26 ? { kind:best.kind } : { kind:'orbit', x:e.clientX, y:e.clientY, yaw:view.yaw, pitch:view.pitch };
    if (canvas.setPointerCapture) try { canvas.setPointerCapture(e.pointerId); } catch {}
    e.preventDefault();
  }
  pqCanvasMove(e) {
    const d = this._pqDrag;
    if (!d) return;
    const canvas = e.currentTarget;
    if (d.kind === 'orbit') {
      const view = this.pqView();
      view.yaw = d.yaw + (e.clientX - d.x) * 0.006;
      view.pitch = Math.max(0.42, Math.min(1.22, d.pitch + (e.clientY - d.y) * 0.004));
      this.drawPqCanvas();
      return;
    }
    const p = this.pqScreenToWorld(e, canvas);
    if (d.kind === 'target') { this.setState({ pqTarget:p, pqLanded:null, pqNearest:null, pqGuessWrong:false, pqDecoded:false }); return; }
    const good = this.pqCloneBasis(this.pqGoodBasis());
    const len = Math.hypot(p[0], p[1]);
    if (len < .45) return;
    const s = len > 4.2 ? 4.2 / len : 1;
    good[d.kind === 'b1' ? 0 : 1] = [p[0] * s, p[1] * s];
    if (Math.abs(this.pqDet(good)) < .15) return;
    this.setState({ pqGoodBasis:good, pqLanded:null, pqNearest:null, pqGuessWrong:false, pqDecoded:false, pqCh0Done:true });
  }
  pqCanvasUp() { this._pqDrag = null; }
  pqPickChapter(e) {
    const n = Math.max(0, Math.min(2, Number(e.currentTarget.dataset.chapter) || 0));
    const patch = { pqChapter:n };
    // THE GRID starts clean; THE ATTACK opens on the public key so the near-miss is the first thing you see
    if (n === 0) patch.pqBasis = 'good';
    if (n === 2) patch.pqBasis = this.state.pqBasis || 'bad';
    this.setState(patch);
  }
  pqUseGood() { this.setState({ pqBasis:'good', pqGuessWrong:false, pqTriedGood:true }); }
  pqUseBad() { this.setState({ pqBasis:'bad', pqDecoded:false, pqTriedBad:true }); }
  pqSetSkew(e) { this.setState({ pqSkew:Number(e.currentTarget.value) || 0, pqLanded:null, pqNearest:null, pqGuessWrong:false, pqDecoded:false }); }
  pqToggleTruth() {
    const target = this.state.pqTarget || [2.3, 1.4];
    const nearest = this.pqNearest(target, this.pqGenerateLattice(this.pqGoodBasis(), 7));
    this.setState({ pqShowTruth:!this.state.pqShowTruth, pqNearest:nearest });
  }
  pqResetLab() {
    this._pqView = { yaw:-0.68, pitch:0.86, zoom:1 };
    this._pqDrag = null; this._pqSnapAnim = null; this._pqFizzleAt = 0;
    this.setState({ pqBasis:'good', pqChapter:0, pqSkew:3, pqGoodBasis:this.pqDefaultGood(), pqTarget:[2.3,1.4], pqShowTruth:false, pqLanded:null, pqNearest:null, pqGuessWrong:false, pqDecoded:false, pqQuantumFizzled:false, pqCh0Done:false, pqTriedGood:false, pqTriedBad:false });
  }
  pqSnap() {
    const target = this.state.pqTarget || [2.3, 1.4];
    const landed = this.pqBabai(target, this.pqActiveBasis()).landed;
    const nearest = this.pqNearest(target, this.pqGenerateLattice(this.pqGoodBasis(), 7));
    const correct = this.pqDist(landed, nearest) < 1e-6;
    // animate the marker travelling from the ◆ message to the dot it rounds to,
    // so private-snaps-right vs public-lands-near is watchable, not a teleport
    this._pqSnapAnim = { from:target.slice(), to:landed, t0:(typeof performance !== 'undefined' ? performance.now() : Date.now()) };
    this.setState({ pqChapter:2, pqLanded:landed, pqNearest:nearest, pqDecoded:correct, pqGuessWrong:!correct, pqShowTruth:true });
  }
  // the quantum attack finds nothing to lock onto — stay on THE ATTACK and fire a
  // scan-ring pulse from the message that dissipates without resolving to a dot
  pqQuantumTry() { this._pqFizzleAt = (typeof performance !== 'undefined' ? performance.now() : Date.now()); this.setState({ pqQuantumFizzled:true }); }

  // ---------- day / night sensor mode (corner-to-corner square-flip wipe) ----------
  toggleTheme() {
    if (this._wiping) return;
    const cur = document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
    const next = cur === 'dark' ? 'light' : 'dark';
    const oldBg = cur === 'dark' ? '#0b0b0c' : '#F7F7F4';
    const restore = () => this.setStatus(this.state.view === 'field' ? 'TRACKING' : 'SCANNING');

    if (this._reduceMotion) {
      document.documentElement.dataset.theme = next;
      this.setState({ theme: next });
      return;
    }

    this._wiping = true;
    this.setStatus('RECALIBRATING OPTICS');

    // single-element diagonal slab sweep: an oversized rotated panel in the OLD
    // theme's background slides corner to corner in one continuous transform.
    // Its leading edge covers the old view progressively, the theme flips at the
    // moment of full cover (mid-sweep), and its trailing edge uncovers the
    // already-rendered new theme progressively. One element — nothing to seam.
    const oldAcc = cur === 'dark' ? '#ffffff' : '#F5150E';
    const newAcc = next === 'dark' ? '#ffffff' : '#F5150E';
    const W = innerWidth, H = innerHeight, D = Math.hypot(W, H);
    const L = 1.35 * D, B = 2 * D;                       // slab length ≥ diagonal ⇒ a full-cover window mid-sweep
    const th = Math.atan2(H, W), ux = Math.cos(th), uy = Math.sin(th);
    const deg = th * 180 / Math.PI;
    const fromTL = next === 'dark';

    const ov = document.createElement('div');
    ov.style.cssText = 'position:fixed;inset:0;z-index:200;pointer-events:none;overflow:hidden;';
    const slab = document.createElement('div');
    const lead = fromTL ? 'Right' : 'Left', trail = fromTL ? 'Left' : 'Right';
    slab.style.cssText = `position:absolute;left:${(-L/2).toFixed(1)}px;top:${(-B/2).toFixed(1)}px;`
      + `width:${L.toFixed(1)}px;height:${B.toFixed(1)}px;background:${oldBg};will-change:transform;`
      + `background-image:repeating-linear-gradient(90deg,transparent 0 12px,rgba(${cur==='dark'?'255,255,255':'245,21,14'},.045) 12px 13px);`;
    slab.style['border' + lead] = '2px solid ' + oldAcc;   // front edge sweeps over the old view
    slab.style['border' + trail] = '2px solid ' + newAcc;  // back edge hands over to the new one
    ov.appendChild(slab);
    document.body.appendChild(ov);

    // slab centre runs from m0 (leading edge at the origin corner) to m1
    // (trailing edge past the far corner) along the viewport diagonal
    const m0 = -L/2, m1 = D + L/2;
    const [mA, mB] = fromTL ? [m0, m1] : [m1, m0];
    const T = (m) => `translate(${(ux*m).toFixed(1)}px,${(uy*m).toFixed(1)}px) rotate(${deg.toFixed(3)}deg)`;
    const dur = 1900;
    let anim = null;
    if (typeof slab.animate === 'function') {
      anim = slab.animate([{ transform: T(mA) }, { transform: T(mB) }],
        { duration: dur, easing: 'cubic-bezier(.3,0,.7,1)', fill: 'both' });
    } else {
      // Older embedded previews may not expose the Web Animations API.
      // A forced initial frame keeps the diagonal wipe animated there too.
      slab.style.transform = T(mA);
      requestAnimationFrame(() => {
        slab.style.transition = `transform ${dur}ms cubic-bezier(.3,0,.7,1)`;
        slab.style.transform = T(mB);
      });
    }

    // symmetric easing ⇒ the slab is dead-centre (full cover) at t = dur/2
    setTimeout(() => {
      document.documentElement.dataset.theme = next;
      this.setState({ theme: next });
    }, dur/2);

    const done = () => {
      if (!this._wiping) return;
      ov.remove();
      this._wiping = false;
      restore();
    };
    if (anim) anim.onfinish = done;
    else slab.addEventListener('transitionend', done, { once:true });
    setTimeout(done, dur + 250);
  }
}