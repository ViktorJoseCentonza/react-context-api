export default function PostCard(props) {
    return (
        <>
            <div key={`post-${props.properties.id}`} className="card">
                <h1 >{props.properties.title}</h1>
                <span>{props.properties.content}</span>
            </div>

        </>
    )
}