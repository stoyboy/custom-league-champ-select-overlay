import * as React from "react"

export type ItemProps = {
    children?: React.ReactNode
    hidden?: boolean
    image?: string
}

export const Item = (props: ItemProps) => {
    return (
        <div 
            className="w-max bg-black text-white flex flex-col pr-1 pl-1 text-center"
            style={{
                display: props.hidden ? "none" : undefined
            }}
        >

            <img
                className="max-h-60" 
                src={props.image} 
            />
            {props.children}
        </div>
    )
}