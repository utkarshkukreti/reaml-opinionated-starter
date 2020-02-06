import * as Preact from 'preact';

export const Hello = ({ name }: { name: string }) => (
  <div class="text-white mb-8 transition duration-300 transform hover:skew-x-6 hover:scale-110 cursor-pointer">
    <div class="text-4xl">Hello, {name}!</div>
    <div class="text-lg">- From TypeScript</div>
  </div>
);
