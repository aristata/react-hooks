import useTitle from "./UseTitle"

const UseTitleSample = () => {
    const titleUpdater = useTitle("initialTitle")
    setTimeout(() => titleUpdater("changedTitle"), 5 * 1000)
    
    return (
        <div>
            <div>Hi</div>
        </div>
    )
}

export default UseTitleSample
