import NextLink from 'next/link';
import { ComponentProps } from 'react';

type LinkProps = ComponentProps<typeof NextLink>;

export default function Link({ href, ...props }: LinkProps) {
  const isInternalLink = href && href.toString().startsWith('/');
  const isAnchorLink = href && href.toString().startsWith('#');

  if (isInternalLink) {
    return <NextLink href={href} {...props} />;
  }

  if (isAnchorLink) {
    return <a href={href.toString()} {...props} />;
  }

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href?.toString()}
      {...props}
    />
  );
}
