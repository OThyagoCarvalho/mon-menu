import Paper from '@mui/material/Paper';

interface GreetingsBlockProps {
    name: string;
}

export default function GreetingsBlock({ name }: GreetingsBlockProps) {
    return (
        <div className="">
            <Paper elevation={6} className="">
                <h1 className="">Olá, {name}</h1>
                <p className="">Bem-vindo ao seu painel de controle</p>
            </Paper>
        </div>
    );
}
