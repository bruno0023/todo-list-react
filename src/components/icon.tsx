import {cx} from "class-variance-authority";

interface IconProps extends React.ComponentProps<'svg'> {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export default function Icon({
  icon: IconComponent,
  className,
  ...props
}: IconProps) {
  return (
    <IconComponent
    className={cx("w-6 h-6", className)}
      {...props}
    />
  );
}