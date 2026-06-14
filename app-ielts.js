/* ============================================================
   app-ielts.js - Advanced IELTS Engine (With Dual Answering Modes)
   ============================================================ */
'use strict';

window.appIeltsLoaded = true;
window.IELTS_LOADED = true;

function getCustomListening() { if (!STATE.customListening) STATE.customListening = []; return STATE.customListening; }
function getCustomReading() { if (!STATE.customReading) STATE.customReading = []; return STATE.customReading; }
function getCustomSpeaking() { if (!STATE.customSpeaking) STATE.customSpeaking = []; return STATE.customSpeaking; }
function getCustomWriting() { if (!STATE.customWriting) STATE.customWriting = []; return STATE.customWriting; }

function initCompletedIelts() {
  try {
    if (typeof STATE !== 'undefined' && !STATE.completedIelts) {
      STATE.completedIelts = { listening: [], reading: [], writing: [], speaking: [] };
      save();
    }
  } catch (e) {
    console.warn("IELTS State initialization postponed.");
  }
}

// (Qolgan kod...)