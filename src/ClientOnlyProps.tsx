import {ReactElement, useEffect, useState} from "react";

interface ClientOnlyProps {
    children: ReactElement
}

const ClientOnly = ({children}: ClientOnlyProps): ReactElement | null => {
    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return mounted ? children : null;
};

export default ClientOnly;