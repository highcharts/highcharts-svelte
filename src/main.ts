import Demo from './site/Demo.svelte';

const app = new Demo({
    target: document.getElementById('app') as HTMLElement
});

export default app;
