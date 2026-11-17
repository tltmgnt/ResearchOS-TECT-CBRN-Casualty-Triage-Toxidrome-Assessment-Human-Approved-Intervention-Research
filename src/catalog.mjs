export const CATEGORIES=['cholinergic','blood-agent','pulmonary','vesicant','opioid','unknown'];
export const CATALOG=[
 {id:'cholinergic',name:'Cholinergic syndrome',agents:'Sarin, VX, Novichok, organophosphates',signs:'Secretions and sweating, miosis, gastrointestinal signs, weakness, bronchospasm/bronchorrhea, bradycardia.',cues:'Wet clothing/ground; miosis; cough; simulated respiratory rate >30; simulated pulse <40; emesis; damp skin.',task:'Simulated intramuscular antidote payload',scope:'Atropine/pralidoxime simulation and required airway demonstration on manikins.'},
 {id:'blood-agent',name:'Blood-agent syndrome',agents:'Hydrogen cyanide, cyanogen chloride',signs:'Rapid collapse, breathing changes, altered mental state, seizures, cardiovascular instability, flushing/cyanosis, dilated pupils.',cues:'Cough; simulated respiratory rate >30; confusion; flushed skin; mydriasis.',task:'Simulated IV/IO payload',scope:'Vascular access and airway demonstration are distinct physical requirements; not implemented.'},
 {id:'pulmonary',name:'Pulmonary / choking syndrome',agents:'Chlorine, phosgene',signs:'Cough, dyspnea, wheezing/stridor, eye and airway irritation, distress, possible delayed pulmonary edema.',cues:'Cough; simulated respiratory rate >30; irritated eyes; lung-sound wheeze; cyanosis around lips.',task:'Simulated bronchodilator payload',scope:'Manikin delivery and required airway demonstration; not a clinical protocol.'},
 {id:'vesicant',name:'Vesicant / blister syndrome',agents:'Sulfur mustard',signs:'Blistering/burns, airway irritation and pain.',cues:'Gelatin on simulated skin; blisters/burns; cough; simulated respiratory rate >20.',task:'Simulated skin decontamination',scope:'Manikin decontamination and airway demonstration; no actual decontamination controls.'},
 {id:'opioid',name:'Opioid / respiratory-depressant syndrome',agents:'Fentanyl-type incapacitants',signs:'Miosis, depressed breathing/apnea and reduced consciousness.',cues:'Miosis; simulated respiratory rate <10; unresponsive manikin.',task:'Simulated intranasal or intramuscular payload',scope:'Naloxone simulation and required airway demonstration on manikins.'}
];
export const REQUIREMENTS=[
 ['Casualty localization','Within 2 m','Independent surveyed positions and measured error'],
 ['Trauma triage','Trauma patterns and category','Qualified clinical labels and validation'],
 ['Standoff vital signs','Heart and respiratory rates','Reference instruments and accuracy evidence'],
 ['Scale and speed','20 casualties; <90 seconds each','Continuous multi-casualty hardware run'],
 ['Survey endurance','30,000 sq ft without battery change','Measured area, battery log and video'],
 ['Environment and portability','Indoor/outdoor; day/night; transportable','Same-platform demonstrations and transport evidence'],
 ['Toxidrome scope','At least two categories','Locked evaluation plus physical manikin work'],
 ['Intervention and airway','Appropriate manikin delivery with human approval','Physical payload, airway and contact-safety evidence'],
 ['Final sequence','At least five casualties without battery/resupply','Continuous physical demonstration over terrain'],
 ['Safe interaction and mobility','One robust platform; real terrain transitions','Instrumented manikins, hazard tests and field video']
];
