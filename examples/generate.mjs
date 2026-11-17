import {writeFile} from 'node:fs/promises';
import {CATALOG} from '../src/catalog.mjs';
const cases=Array.from({length:20},(_,i)=>{const c=CATALOG[i%5];return {id:'SIM-'+String(i+1).padStart(2,'0'),kind:'synthetic-manikin',x:(i%5)*6,y:Math.floor(i/5)*8,truthCategory:i===19?'unknown':c.id,truthTriage:i%3===0?'non-urgent':'urgent',observations:i===19?'Conflicting simulated cues; category intentionally unknown.':c.cues};});
await writeFile(new URL('./study.json',import.meta.url),JSON.stringify({version:1,mode:'simulation',name:'Synthetic 20-manikin tabletop',source:'User-supplied TRIAGE-X Tables 1–3; fictional authored scenarios, not clinical measurements.',payloadUnits:5,cases},null,2));
