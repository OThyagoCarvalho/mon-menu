import { MouseEventHandler } from 'react';
import styles from './SidebarLinkButton.module.scss';

interface SidebarLinkButtonProps {
    label?: string;
    icon: React.ReactNode;
    children?: React.ReactNode;
    onClick?: MouseEventHandler;
}

export default function SidebarLinkButton({
    label,
    icon,
    children,
    onClick
}: SidebarLinkButtonProps) {
    return (
        <button className={styles.button} onClick={onClick} type="button">
            {icon}
            <span>{label}</span>
            {children}
        </button>
    );
}
