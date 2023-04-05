import Estilos from '../styles/Style.module.scss'
import LoginForm from '../../components/LoginForm';

const LoginPage = () => {
    return (
        <section className={Estilos['section-admin']}>
            <div className={Estilos['title-admin']}>
                <h1>Administrador <span>Gym</span></h1>
                <h2>Iniciar sesión</h2>
                <LoginForm />
            </div>
        </section>
    );
};

export default LoginPage;
