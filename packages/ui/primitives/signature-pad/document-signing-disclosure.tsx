import type { HTMLAttributes } from 'react';

import { Trans } from '@lingui/react/macro';

import { cn } from '@documenso/ui/lib/utils';

export type DocumentSigningDisclosureProps = HTMLAttributes<HTMLParagraphElement>;

export const DocumentSigningDisclosure = ({
  className,
  ...props
}: DocumentSigningDisclosureProps) => {
  return (
    <p className={cn('text-muted-foreground text-xs', className)} {...props}>
      <Trans>
        The parties agree that this Agreement may be executed and delivered by electronic signatures
        and that the signatures appearing on this Agreement are the same as handwritten signatures
        for the purposes of validity, enforceability, and admissibility.
      </Trans>
    </p>
  );
};
