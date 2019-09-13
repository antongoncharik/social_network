import React, {Suspense} from 'react';

export const withSuspense = (Component) => {
    return (props) => {
        return <Suspense fallback={
            <div>
                <div>Loading...</div>
                <div>Please wait</div>
            </div>}>
            <Component {...props}/>
        </Suspense>
    }
}



