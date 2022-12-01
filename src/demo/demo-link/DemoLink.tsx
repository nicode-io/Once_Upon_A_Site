import * as React from 'react';

interface iDemoLinkProps {
  color?: string;
  onClick: () => void;
  size?: 'small' | 'medium' | 'large';
  underline?: boolean;
}

export const DemoLink: React.FC<iDemoLinkProps> = ({
  color,
  onClick,
  size,
  underline,
}): React.ReactElement => {
  return (
    <div>
      <a
        href="src/demo/demo-link/DemoLink#"
        onClick={onClick}
        style={{
          color: color ? color : 'blue',
          fontSize: size === 'small' ? 10 : size === 'large' ? 25 : 15,
          textDecoration: underline ? 'underline' : 'none',
        }}
      >
        DemoLink
      </a>
    </div>
  );
};
