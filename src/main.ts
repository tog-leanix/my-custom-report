import '@leanix/reporting';
import './app.scss';
import App from './App.svelte';

lx.init().then((_setup) => {
  const app = new App({
    target: document.getElementById('app')
  });
  lx.ready({});
});
