import { useEffect } from "react"

import useMessageActions from "../../../hooks/useMessageActions";

import Loader   from "../../ui/loader/Loader";
import Messages from "../messages/Messages"


const LoaderAndMessages = ({ message, isLoader }) => {
    const messageAction = useMessageActions();

    useEffect(() => {
        if (message) {
            messageAction(message)
        }
    }, [message]);

    return (
        <>
            {isLoader === 'loading' && <Loader />}
            <Messages />
        </>
    )
}

export default LoaderAndMessages