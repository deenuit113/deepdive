import React from 'react'

const ErrorBanner = ({ message }) => {

    const errorMessage = message || "에러입니다.";
    return (
        <div style={{
            backgroundColor: "red",
            color: "white",
            padding: "10px",
            borderRadius: "5px",
            marginBottom: "10px"
        }}>
            {errorMessage}
        </div>
    )
}

export default ErrorBanner