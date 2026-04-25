import { cx } from 'class-variance-authority';
import React from 'react';


interface MainContentProps extends React.ComponentProps<'main'> { }

export default function MainContent({
    className,
    children,
    ...props
}: MainContentProps) {
    return <>
        <main className={cx("mt-2 md:mt-8 flex flex-col gap-5", className)} {...props}>
            {children}
        </main>
    </>
}