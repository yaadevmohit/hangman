const HEAD = (<div
    style={{
        width: "50px",
        height: "50px",
        border: "10px solid brown",
        position: "absolute",
        top: "50px",
        right: "-40px",
        borderRadius: "100%"
        }}
/>) 

const NECK = (<div
    style={{
        width: "20px",
        height: "25px",
        background: "brown",
        position: "absolute",
        top: "110px",
        right: "-17px",
        }}
/>)

const BODY = (<div
    style={{
        width: "60px",
        height: "100px",
        border: "10px solid orange",
        position: "absolute",
        top: "135px",
        right: "-46px",
        borderRadius: "15%",
        background: "orange"
        }}
/>)

const RIGHT_ARM = (<div
    style={{
        width: "15px",
        height: "90px",
        background: "orange",
        position: "absolute",
        top: "15px",
        right: "-138px",
        rotate: "-120deg",
        transformOrigin: "left bottom"
        }}
/>)

const LEFT_ARM = (<div
    style={{
        width: "15px",
        height: "90px",
        background: "orange",
        position: "absolute",
        top: "14px",
        right: "111px",
        rotate: "120deg",
        transformOrigin: "right bottom"
        }}
/>)

const LEFT_LEG = (<div
    style={{
        width: "15px",
        height: "120px",
        position: "absolute",
        top: "253px",
        right: "16px",
        transformOrigin: "left bottom",
        borderRadius: "30%",
        background: "darkBlue"
        }}
/>)

const RIGHT_LEG = (<div
    style={{
        width: "15px",
        height: "120px",
        position: "absolute",
        top: "253px",
        right: "-45px",
        transformOrigin: "left bottom",
        borderRadius: "30%",
        background: "darkBlue"
        }}
/>)

const BODY_PARTS = [[HEAD, NECK,], BODY, [RIGHT_ARM, LEFT_ARM], [LEFT_LEG, RIGHT_LEG] ]

type HangmanDrawingProps = {
    numberOfGuesses: number
}

export default function HangmanDrawing({numberOfGuesses}: HangmanDrawingProps): JSX.Element {
    return (
        <>
        <div style={{position: "relative"}}>
        {BODY_PARTS.slice(0, numberOfGuesses)}
        <div 
            style={
                    {position: "absolute",
                     width: "10px",
                     height: "50px",
                     background: "black",
                     marginLeft: "320px",
                     }
                    }
        />
        <div style={{
            height: "10px",
            width: "200px",
            marginLeft: "120px",
            background: "black"
        }}/>
        <div style={{
            height: "400px",
            width: "10px",
            background: "black",
            marginLeft: "120px"
        }}/>
        <div style={{
            width: "250px",
            height: "10px",
            background: "black"
        }}></div>
    </div>
    </>)
}