import app from './app';

const port = process.env.PORT || 3000;

try {
    app.listen(port, () => console.info(`Rodando na porta ${port}`));
} catch (error) {
    console.error(error);
    process.exit(1);
}