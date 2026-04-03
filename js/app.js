/* =============================================================
   APP.JS — Shared behaviour for every page
   Currently handles: create-menu dropdown toggle
============================================================= */

(function () {
  'use strict';

  // ── Create menu ────────────────────────────────────────────
  // Wires up the + button dropdown on any page that includes
  // the .app-nav__create-wrap / .create-menu markup.

  function initCreateMenu() {
    const btn  = document.querySelector('.app-nav__create');
    const menu = document.querySelector('.create-menu');
    if (!btn || !menu) return;

    function open() {
      menu.classList.add('create-menu--open');
      btn.setAttribute('aria-expanded', 'true');
    }

    function close() {
      menu.classList.remove('create-menu--open');
      btn.setAttribute('aria-expanded', 'false');
    }

    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      menu.classList.contains('create-menu--open') ? close() : open();
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (!menu.contains(e.target)) close();
    });

    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') close();
    });
  }

  document.addEventListener('DOMContentLoaded', initCreateMenu);
})();
