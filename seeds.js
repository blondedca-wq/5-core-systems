/* seeds.js — the record of roadmap boxes PROVEN on production, applied once per device into localStorage
   lab.roadmap.done.v1 (the same key the Roadmap page and the planner's Work tab both read). Loaded by BOTH
   index.html and roadmap.html since Day 22 (Wed Sep 23 2026, 19:10): before that the seeds lived only in
   roadmap.html, so a phone that opened the Work tab and never the Roadmap page showed proven boxes unticked
   (B Day 4 box 4 and B Day 5 box 4 tonight). Order matters — the Day 19 correction relies on it. Append only. */
/* Days 6-7 (Voice Receptionist I + II) shipped and live-verified Aug 23 2026.
   Seed their 8 roadmap items as done, once per device, before first render. */
(function(){try{
  var K='lab.roadmap.done.v1', S='lab.roadmap.seed.day67';
  if(localStorage.getItem(S)) return;
  var o=JSON.parse(localStorage.getItem(K)||'{}');
  ['bA-22','bA-23','bA-24','bA-25','bA-26','bA-27','bA-28','bA-29']
    .forEach(function(k){o[k]=1;});
  localStorage.setItem(K,JSON.stringify(o));
  localStorage.setItem(S,'1');
}catch(e){}})();
/* Day 17 (Sep 14 2026): the four Day 17 boxes and Category B Day 1 boxes 2-4 shipped and were
   verified against the live database. Seeded once per device; box 1 (the solicitor) stays open. */
(function(){try{
  var K='lab.roadmap.done.v1', S='lab.roadmap.seed.day17';
  if(localStorage.getItem(S)) return;
  var o=JSON.parse(localStorage.getItem(K)||'{}');
  ['bA-66','bA-67','bA-68','bA-69','bB-1','bB-2','bB-3']
    .forEach(function(k){o[k]=1;});
  localStorage.setItem(K,JSON.stringify(o));
  localStorage.setItem(S,'1');
}catch(e){}})();
/* Day 19 (Sep 18-19 2026): Category B Day 2 boxes 2-3 and Day 3 boxes 1, 3 and 4 landed and were re-read from
   the live database. Seeded once per device. Left open on purpose: Day 2 box 1 (no photo has ever been uploaded -
   storage holds 0 objects), Day 2 box 4 (ten real photo sets through the deployed vision call) and Day 3 box 2
   (the droplet install). */
(function(){try{
  var K='lab.roadmap.done.v1', S='lab.roadmap.seed.day19';
  if(localStorage.getItem(S)) return;
  var o=JSON.parse(localStorage.getItem(K)||'{}');
  ['bB-5','bB-6','bB-8','bB-10','bB-11']
    .forEach(function(k){o[k]=1;});
  localStorage.setItem(K,JSON.stringify(o));
  localStorage.setItem(S,'1');
}catch(e){}})();
/* Correction, same day: the first version of the Day 19 seed also ticked Day 2 box 1 (bB-4), minutes before the
   live database showed storage holds 0 objects. Un-tick it once per device - "built" is not "done". */
(function(){try{
  var K='lab.roadmap.done.v1', S='lab.roadmap.seed.day19b';
  if(localStorage.getItem(S)) return;
  var o=JSON.parse(localStorage.getItem(K)||'{}');
  delete o['bB-4'];
  localStorage.setItem(K,JSON.stringify(o));
  localStorage.setItem(S,'1');
}catch(e){}})();
/* Later the same day: Ahmed pasted the droplet install (162/162 then CONFORMANT 290/290 over the API path,
   both timers running), so Day 3 box 2 (bB-9) lands. Category B Day 3 is now 4/4. */
(function(){try{
  var K='lab.roadmap.done.v1', S='lab.roadmap.seed.day19c';
  if(localStorage.getItem(S)) return;
  var o=JSON.parse(localStorage.getItem(K)||'{}');
  o['bB-9']=1;
  localStorage.setItem(K,JSON.stringify(o));
  localStorage.setItem(S,'1');
}catch(e){}})();
/* Day 21 (Sun Sep 20 2026): Category B Day 2 box 1 lands — photo intake has now been exercised end to end: three
   photos in storage, registered through sr_photo_intake, and READ by the deployed vision workflow. Nothing on Day 4 or
   Day 5 is ticked yet: all of it is proven on the mirror and live in n8n, and none of it has run on production,
   because b5-day21.sql has not been pasted. "Built" is not "done". */
(function(){try{
  var K='lab.roadmap.done.v1', S='lab.roadmap.seed.day21';
  if(localStorage.getItem(S)) return;
  var o=JSON.parse(localStorage.getItem(K)||'{}');
  o['bB-4']=1;
  localStorage.setItem(K,JSON.stringify(o));
  localStorage.setItem(S,'1');
}catch(e){}})();
/* Day 21, second pass (Sun Sep 20 2026, 11:20): two Day 4 boxes really landed on production — the quote document was
   rendered, stored and put on record (bB-12), and the quote was texted through the gate with a working accept link
   (bB-13). Accept has not been pressed and the live-fire photo has not been taken, so bB-14 / bB-15 stay open.
   Nothing on Day 5 is ticked: the database side is on production, no plan has been read there yet, and the console
   build has compiled but has not been walked. */
(function(){try{
  var K='lab.roadmap.done.v1', S='lab.roadmap.seed.day21b';
  if(localStorage.getItem(S)) return;
  var o=JSON.parse(localStorage.getItem(K)||'{}');
  o['bB-12']=1; o['bB-13']=1;
  localStorage.setItem(K,JSON.stringify(o));
  localStorage.setItem(S,'1');
}catch(e){}})();
/* Day 21, third pass (Sun Sep 20 2026, 19:05): four more boxes landed ON PRODUCTION tonight, each read back from the
   database — bB-14 (Accept → job booked, ladder stopped, 18:22) · bB-16 (the first plan read, 18:39) · bB-17 (the
   takeoff, quantities per item per room) · bB-18 (the untouched runner priced it into ONE quote, 19:00:03).
   NOT ticked: bB-15 (the live-fire needs a REAL photo from my phone) and bB-19 (no card has been answered FROM the
   console yet). "Built" is not "done" — and "done once with a stand-in" is not "done" either. */
(function(){try{
  var K='lab.roadmap.done.v1', S='lab.roadmap.seed.day21c';
  if(localStorage.getItem(S)) return;
  var o=JSON.parse(localStorage.getItem(K)||'{}');
  o['bB-14']=1; o['bB-16']=1; o['bB-17']=1; o['bB-18']=1;
  localStorage.setItem(K,JSON.stringify(o));
  localStorage.setItem(S,'1');
}catch(e){}})();
/* Day 21, fourth pass (Sun Sep 20 2026, 19:11 — seeded Wed Sep 23, Day 22, because the Sep 20 close-out said this seed
   had shipped and the live page proved it had not): bB-19 landed — all five Grand River cards were answered FROM THE
   CONSOLE in four seconds (each quote flipped to approved the same second), and three Fennwick reactivation cards at
   19:17, one turned down with a typed reason. Category B Day 5 is 4/4. Still never tapped from the console: Send, a
   notch, the master switch. Day 22 (Wed Sep 23) ticks NOTHING: Blueprint AI II is built and rehearsed on the mirror
   (73 checks) and measured on the live API (100 of 101 symbols), but not one piece of it is on production yet. */
(function(){try{
  var K='lab.roadmap.done.v1', S='lab.roadmap.seed.day21d';
  if(localStorage.getItem(S)) return;
  var o=JSON.parse(localStorage.getItem(K)||'{}');
  o['bB-19']=1;
  localStorage.setItem(K,JSON.stringify(o));
  localStorage.setItem(S,'1');
}catch(e){}})();
/* Day 22, second pass (Wed Sep 23 2026, 17:40): bB-15 landed ON PRODUCTION — nine real job photos through the
   console on Grand River (7 usable, 2 sent back), all 7 priced by the runner at 17:30, one approved AND SENT from the
   console at 17:33 (the first Send ever pressed there: gate, text, document, ladder row). Category B Day 4 is 4/4.
   Day 6 still ticks nothing: it is built and rehearsed, not on production. */
(function(){try{
  var K='lab.roadmap.done.v1', S='lab.roadmap.seed.day22';
  if(localStorage.getItem(S)) return;
  var o=JSON.parse(localStorage.getItem(K)||'{}');
  o['bB-15']=1;
  localStorage.setItem(K,JSON.stringify(o));
  localStorage.setItem(S,'1');
}catch(e){}})();
/* Day 22, fourth pass (Wed Sep 23 2026, 19:25): bB-7 landed — Category B Day 2 box 4, "10 real photo sets through the
   deployed read → the real usable rate": nine photos at 17:22–17:33 plus a tenth at 19:09 (a food-waste disposer,
   usable 78 %, priced by the runner at 19:15 as Garbage disposal install, $525.45). 8 of 10 usable, both refusals
   right. Category B Day 2 is 4/4. Day 6 still ticks nothing (the n8n publishes are parked). */
(function(){try{
  var K='lab.roadmap.done.v1', S='lab.roadmap.seed.day22b';
  if(localStorage.getItem(S)) return;
  var o=JSON.parse(localStorage.getItem(K)||'{}');
  o['bB-7']=1;
  localStorage.setItem(K,JSON.stringify(o));
  localStorage.setItem(S,'1');
}catch(e){}})();
/* Day 22, third pass (Wed Sep 23 2026, 18:55): two of the three Day 6 landings are in — b6-day22.sql on production
   (schema 13, his paste ~18:00) and sr-plans installed and healthy on the droplet (18:47, through the DO web console).
   The n8n publishes are parked at his call, so nothing reaches the magnifier yet: Day 6 stays 0/4 on purpose. No seed. */
