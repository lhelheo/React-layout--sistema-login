import {useNavigate} from 'react-router-dom'
import { ArrowRight } from 'lucide-react';

const FowardButton = () => {
    const navigate = useNavigate();

    const goFoward = () => {
        // Volta para o endereço anterior na história do navegador
        navigate(1);
    };

    return (
        <div>
            <button onClick={goFoward}>
                <ArrowRight strokeWidth={2.5} />
            </button>
        </div>
    );
}

export default FowardButton;