import Link from 'next/link';

export function ScrollUpArrow() {
  return (
    <Link
      href='#'
      className='text-6xl fixed bottom-0 right-0 mr-2 mb-2 opacity-50'>
      <i className='ri-arrow-up-circle-fill ri-xs'></i>
    </Link>
  );
}
