import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';

export default function SideNav() {
  return (
    <div>
      <Link href="/" />
      <NavLinks />
    </div>
  );
}
