'use client';

import { usePathname } from 'next/navigation';

export default function Pathname() {
  const pathname = usePathname();
  return <div>{pathname}</div>;
}