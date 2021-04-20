import * as React from "react"

export type ContainerProps = {
    left?: React.ReactNode
    right?: React.ReactNode
    center?: React.ReactNode
}

export const Container = (props: ContainerProps) => {

    return (
        <div className="container mx-auto absolute inset-x-0 bottom-0 w-max flex flex-col justify-center">
            <div className="h-3" style={{
                backgroundColor: "#1139ff"
            }}>
                
            </div>
            <div
                className="flex flex-row"
            >
                <div className="flex flex-row justify-evenly">
                    {props.left}
                </div>
                <div>
                    {props.center}
                </div>
                <div className="flex flex-row justify-evenly">
                    {props.right}
                </div>
            </div>
        </div>
    )
}