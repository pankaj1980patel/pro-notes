import { Pencil } from 'lucide-react';
import React from 'react';

function Header() {
  return (
    <section>
      <HeaderItem />
    </section>
  );
}

export default Header;

function HeaderItem() {
  return (
    <div>
      <Pencil />
    </div>
  );
}
