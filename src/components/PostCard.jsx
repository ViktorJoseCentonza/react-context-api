export default function PostCard(props) {
    return (
        <>
            <div className="card">
                <h1 >{props.properties.title}</h1>
                <span>{props.properties.content}</span>
            </div>

        </>
    )
}