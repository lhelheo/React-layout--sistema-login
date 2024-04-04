import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const BackButton = () => {
    const navigate = useNavigate();

    const goBack = () => {
        // Volta para o endereço anterior na história do navegador
        navigate(-1);
    };

    return (
        <div>
            <button onClick={goBack}>
                <ArrowLeft strokeWidth={2.5} />
            </button>
        </div>
    );
}

export default BackButton;
