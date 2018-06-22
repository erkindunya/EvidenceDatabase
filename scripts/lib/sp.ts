import { sp, setup, Web,Util, Site, Item } from 'sp-pnp-js';

setup({
  sp: {
    headers: {
      Accept: 'application/json;odata=verbose',
    },
  },
});

export { Web, sp, Util, Site, Item };
