import type { Alpine } from 'alpinejs';
import intersect from '@alpinejs/intersect';

type Lang = 'hr' | 'en';

interface LangStore {
  current: Lang;
  init(): void;
  set(value: Lang): void;
}

export default (Alpine: Alpine) => {
  Alpine.plugin(intersect);

  const langStore: LangStore = {
    current: 'hr',
    init() {
      const saved = typeof localStorage !== 'undefined' ? localStorage.getItem('mizarola-lang') : null;
      if (saved === 'hr' || saved === 'en') this.current = saved;
    },
    set(value: Lang) {
      this.current = value;
      if (typeof localStorage !== 'undefined') localStorage.setItem('mizarola-lang', value);
    },
  };

  Alpine.store('lang', langStore);
};
