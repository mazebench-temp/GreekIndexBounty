import { el, esc, icon } from '../lib/dom.js';
import * as store from '../lib/store.js';
export const BOOK_LETTERS = 'ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ';

export async function render() {
  const cat = await store.catalog();
  const last = store.prefs.lastRead;
  const lastWork = last && cat.by.works.get(last.work);
  const canResume = lastWork?.available.includes(last.book);
  const view = el(`<div class="view library-view">
    <header class="page-head"><h1 class="large-title" data-title-anchor>Library</h1></header>
    ${canResume ? `<a class="continue" href="#/read/${esc(last.work)}/${last.book}?l=${last.n}">${icon('book')}<span class="row-main"><span class="eyebrow">Continue reading</span>${esc(lastWork.title)} ${last.book}.${last.n}</span>${icon('chevron')}</a>` : ''}
    ${cat.authors.filter(a => a.works.some(id => cat.by.works.get(id)?.available.length)).map(a => `<section class="section">
      <div class="section-head"><h2 class="section-title">${esc(a.name)} <span class="work-greek" lang="grc">${esc(a.greek)}</span></h2></div>
      ${a.works.filter(id => cat.by.works.get(id)?.available.length).map(id => {
        const w = cat.by.works.get(id);
        return `<article class="work-card collection-card">
          <div class="work-head"><div class="row-main"><h3 class="work-title"><a href="#/work/${esc(w.id)}">${esc(w.title)}</a> <span lang="grc">${esc(w.greek)}</span></h3><p class="muted">${esc(w.genre)} · ${esc(w.meter)}</p></div></div>
          <div class="book-grid" aria-label="Books of the ${esc(w.title)}">${Array.from({ length: w.bookCount }, (_, i) => {
            const b = i + 1, ready = w.available.includes(b);
            const label = `${esc(w.title)} Book ${b}${w.books[b]?.title ? `: ${esc(w.books[b].title)}` : ''}`;
            const tile = `<span lang="grc">${BOOK_LETTERS[i] ?? b}</span><span class="bn">${b}</span>`;
            return ready
              ? `<a class="book-tile available" href="#/read/${esc(w.id)}/${b}" aria-label="${label}">${tile}</a>`
              : `<span class="book-tile planned" aria-disabled="true" aria-label="${label}: not yet available">${tile}</span>`;
          }).join('')}</div>
          <div class="collection-foot"><span>${w.available.length} / ${w.bookCount} books available</span><a href="#/work/${esc(w.id)}">About the ${esc(w.title)} ${icon('chevron')}</a></div>
        </article>`;
      }).join('')}
    </section>`).join('')}
    <footer class="library-footer"><a href="#/quotes">Quotes</a><a href="#/about">About</a><a href="${esc(cat.site.repository)}">GitHub</a></footer>
  </div>`);
  return { title: 'Library', el: view };
}
