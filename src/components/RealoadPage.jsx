import { useNavigate } from 'react-router-dom'
import { RefreshCw } from 'lucide-react';

const RealoadPage = () => {
    const navigate = useNavigate();

    const reload = () => {
        // Volta para o endereço anterior na história do navegador
        navigate(0);
    };

    return (
        <div>
            <button onClick={reload}>
                <RefreshCw strokeWidth={2.5} />
            </button>
        </div>
    );
}

export default RealoadPage;