import { FacebookProvider, CustomChat } from 'react-facebook';

const FacebookMsg = () => {
    return (
        <FacebookProvider appId="443227938031981" chatSupport>
            <CustomChat pageId="422764387584745" minimized={true} />
        </FacebookProvider>
    );
};

export default FacebookMsg;