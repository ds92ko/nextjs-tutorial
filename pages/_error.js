import { Icon } from "semantic-ui-react";

function Error({ statusCode }) {
    return (
        <div style={{ padding: '200px 0', textAlign: 'center', fontSize: 30 }}>
            <Icon name="warning circle" color="red" />
            {statusCode
            ? `${statusCode} : 서버에서 에러가 발생했습니다.`
            : '클라이언트에서 에러가 발생했습니다.'}
        </div>
    )
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode }
}

export default Error;