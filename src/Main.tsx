import * as Preact from 'preact';

export const Hello = ({ name }: { name: string }) => (
  <div class="text-white mb-6">
    <div class="text-4xl">Hello, {name}!</div>
    <div class="text-lg">- From TypeScript</div>
  </div>
);
