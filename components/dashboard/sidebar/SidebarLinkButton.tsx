import styles from './SidebarLinkButton.module.scss';

interface SidebarLinkButtonProps {
    label?: string;
    icon: React.ReactNode;    
    children?: React.ReactNode;
}

export default function SidebarLinkButton({
    label,
    icon, children,
}: SidebarLinkButtonProps) {
    return (
        <button className={styles.button} type="button">
            {icon}
            <span>{label}</span>
            {children}
        </button>
    );
}
