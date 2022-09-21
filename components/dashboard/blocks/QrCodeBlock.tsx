import QRCode from 'react-qr-code';
import Paper from '@mui/material/Paper';
import styles from './QrCodeBlock.module.scss';
import React, { useRef } from 'react';
import html2canvas from 'html2canvas';

interface QrCodeBlockPorps {
    menuName: string;
}

export default function QrCodeBlock({ menuName }: QrCodeBlockPorps) {
    const printableQrCodeBlock = useRef(null);

    const handleDownloadImage = async () => {
        const element =
            printableQrCodeBlock.current as unknown as HTMLDivElement;
        const canvas = await html2canvas(element);

        const data = canvas.toDataURL('image/png');
        const link = document.createElement('a');

        if (typeof link.download === 'string') {
            link.href = data;
            link.download = `qrCode-${menuName}.png`;

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            window.open(data);
        }
    };

    return (
        <Paper elevation={3} className={styles.mainContentContainer}>
            <div>
                <p> Este é o Endereço QrCode do seu Menu.</p>
                <p> Escaneie ou use o atalho no menu para pré-visualizar.</p>
            </div>
            <div>
                <div style={{ padding: '1rem' }} ref={printableQrCodeBlock}>
                    <QRCode value={menuName} />
                </div>
                <button type="button" onClick={handleDownloadImage}>
                    Download PNG
                </button>
            </div>
        </Paper>
    );
}
